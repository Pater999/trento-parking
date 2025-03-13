import { beforeEach, describe, expect, it, vi } from "vitest";

import { parkingData } from "../__mocks__/parking-data";
import ParkingDataCollection from "./../../services/parking-service";

vi.mock("axios", async () => {
	return {
		default: {
			create: vi.fn(() => ({
				get: vi.fn().mockResolvedValue({ data: parkingData }),
			})),
		},
	};
});

describe("ParkingDataCollection", () => {
	let parkingCollection: ParkingDataCollection;

	beforeEach(() => {
		parkingCollection = new ParkingDataCollection();
	});

	it("should refresh and populate parking data", async () => {
		await parkingCollection.refresh();
		expect(parkingCollection.all().length).toBe(parkingData.length);
		expect(parkingCollection.getLastRefresh()).toBeGreaterThan(0);
	});

	it("should return all parking data", async () => {
		await parkingCollection.refresh();
		const allParkings = parkingCollection.all();
		expect(allParkings).toBeDefined();
		expect(allParkings.length).toBe(parkingData.length);
	});

	it("should return parking data by ID", async () => {
		await parkingCollection.refresh();
		const parkingById = parkingCollection.byId(211);
		expect(parkingById).toBeDefined();
		expect(parkingById?.id).toBe(211);
	});

	it("should return null for an invalid ID", async () => {
		await parkingCollection.refresh();
		const parkingById = parkingCollection.byId(9999);
		expect(parkingById).toBeNull();
	});

	it("should return parking data by type", async () => {
		await parkingCollection.refresh();
		const parkingsByType = parkingCollection.byType("park");
		expect(parkingsByType).toBeDefined();
		expect(parkingsByType.length).toBe(
			parkingData.filter((p) => p.type === "park").length,
		);
	});

	it("should return available parking data", async () => {
		await parkingCollection.refresh();
		const availableParkings = parkingCollection.getAvailable();
		expect(availableParkings).toBeDefined();
		expect(availableParkings.length).toBe(
			parkingData.filter((p) => p.freeslots > 0).length,
		);
	});

	it("should return full parking data", async () => {
		await parkingCollection.refresh();
		const fullParkings = parkingCollection.getFull();
		expect(fullParkings).toBeDefined();
		expect(fullParkings.length).toBe(
			parkingData.filter((p) => p.freeslots === 0 && p.capacity > 0).length,
		);
	});

	it("should parse distances correctly", async () => {
		await parkingCollection.refresh();
		const parkingById = parkingCollection.byId(211);
		expect(parkingById).toBeDefined();
		const distances = parkingById?.getDistances();
		expect(distances).toBeDefined();
		expect(distances?.length).toBeGreaterThan(0);
	});

	it("should return the last refresh timestamp", async () => {
		await parkingCollection.refresh();
		const lastRefresh = parkingCollection.getLastRefresh();
		expect(lastRefresh).toBeGreaterThan(0);
	});

	it("should return completed distances with parking data", async () => {
		await parkingCollection.refresh();
		const parkingWithDistances = parkingCollection.byId(211);
		expect(parkingWithDistances).toBeDefined();

		const completedDistances = parkingWithDistances?.getDistancesCompleted(
			parkingCollection.all(),
		);
		expect(completedDistances).toBeDefined();
		expect(completedDistances?.length).toBeGreaterThan(0);

		const firstDistance = completedDistances?.[0];
		expect(firstDistance).toHaveProperty("meters"); // from Distance
		expect(firstDistance).toHaveProperty("name"); // from ParkingData
		expect(firstDistance).toHaveProperty("capacity"); // from ParkingData
	});
});
