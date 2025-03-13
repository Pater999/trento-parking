import { beforeEach, describe, expect, it } from "vitest";

import ParkingDataCollection from "../../services/parking-service";

describe("ParkingDataCollection Integration Tests", () => {
	let parkingCollection: ParkingDataCollection;

	beforeEach(() => {
		parkingCollection = new ParkingDataCollection();
	});

	it("should fetch and populate real parking data", async () => {
		await parkingCollection.refresh();
		const allParkings = parkingCollection.all();

		expect(allParkings).toBeDefined();
		expect(allParkings.length).toBeGreaterThan(0);
		expect(parkingCollection.getLastRefresh()).toBeGreaterThan(0);
	});

	it("should fetch parking data with valid structure", async () => {
		await parkingCollection.refresh();
		const firstParking = parkingCollection.all()[0];

		// Verify the structure of parking data
		expect(firstParking).toHaveProperty("id");
		expect(firstParking).toHaveProperty("name");
		expect(firstParking).toHaveProperty("type");
		expect(firstParking).toHaveProperty("capacity");
		expect(firstParking).toHaveProperty("freeslots");
	});

	it("should correctly filter available parkings", async () => {
		await parkingCollection.refresh();
		const availableParkings = parkingCollection.getAvailable();

		expect(availableParkings).toBeDefined();
		// biome-ignore lint/complexity/noForEach: <explanation>
		availableParkings.forEach((parking) => {
			expect(parking.freeslots).toBeGreaterThan(0);
		});
	});

	it("should correctly filter full parkings", async () => {
		await parkingCollection.refresh();
		const fullParkings = parkingCollection.getFull();

		expect(fullParkings).toBeDefined();
		// biome-ignore lint/complexity/noForEach: <explanation>
		fullParkings.forEach((parking) => {
			expect(parking.freeslots).toBe(0);
			expect(parking.capacity).toBeGreaterThan(0);
		});
	});

	it("should calculate distances between parkings", async () => {
		await parkingCollection.refresh();
		const allParkings = parkingCollection.all();
		const firstParking = allParkings[0];

		const distances = firstParking.getDistances();
		expect(distances).toBeDefined();
		expect(distances.length).toBeGreaterThan(0);

		const completedDistances = firstParking.getDistancesCompleted(allParkings);
		expect(completedDistances).toBeDefined();
		expect(completedDistances.length).toBeGreaterThan(0);

		// Verify distance object structure
		const firstDistance = completedDistances[0];
		expect(firstDistance).toHaveProperty("meters");
		expect(firstDistance).toHaveProperty("name");
		expect(firstDistance).toHaveProperty("capacity");
	});
});
