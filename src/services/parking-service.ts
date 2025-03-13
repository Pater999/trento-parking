import axios, { type AxiosInstance, type AxiosResponse } from "axios";

import { ParkingData } from "../models";

class ParkingDataCollection {
	private axiosInstance: AxiosInstance;
	private baseUrl: string;
	private parkingData: ParkingData[] = [];
	private lastRefresh: number | null = null;

	constructor(baseUrl = "https://parcheggi.comune.trento.it/static/services") {
		this.baseUrl = baseUrl;
		this.axiosInstance = axios.create({
			baseURL: this.baseUrl,
		});
	}

	async refresh(): Promise<void> {
		try {
			const response: AxiosResponse<ParkingData[]> =
				await this.axiosInstance.get("/registry_parks.json");
			this.parkingData = response.data.map((data) => new ParkingData(data));
			this.lastRefresh = Date.now();
		} catch (error) {
			console.error("Error refreshing parking data:", error);
			throw error;
		}
	}

	all(): ParkingData[] {
		return this.parkingData;
	}

	byId(id: number): ParkingData | null {
		return this.parkingData.find((parking) => parking.id === id) ?? null;
	}

	byType(type: string): ParkingData[] {
		return this.parkingData.filter((parking) => parking.type === type);
	}

	getAvailable(): ParkingData[] {
		return this.parkingData.filter((parking) => parking.isAvailable());
	}

	getFull(): ParkingData[] {
		return this.parkingData.filter((parking) => parking.isFull());
	}

	getLastRefresh(): number | null {
		return this.lastRefresh;
	}
}

export default ParkingDataCollection;
