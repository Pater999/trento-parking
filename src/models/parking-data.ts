import type { Distance } from "./distance";
import type { OpeningHours } from "./opening-hours";
import type { ParkingType } from "./parking-types";

export class ParkingData {
	id!: number;
	driver!: string;
	geom!: string;
	name!: string;
	type!: ParkingType;
	city!: string;
	color!: string | null;
	capacity!: number;
	freeslots!: number;
	diag!: string;
	threshold!: number;
	timestamp!: number;
	distances!: string;
	currentTimestamp!: number;
	address!: string;
	gmaps!: string;
	link!: string;
	offline!: boolean;
	opening!: OpeningHours;
	open!: number;
	phone!: string;
	website!: string;
	openingFlag!: string;

	constructor(data: Partial<ParkingData>) {
		Object.assign(this, data);
	}

	getDistances(): Distance[] {
		try {
			return JSON.parse(this.distances);
		} catch (error) {
			console.error("Error parsing distances JSON:", error);
			return [];
		}
	}

	getDistancesCompleted(
		parkings: ParkingData[],
	): (Distance &
		Omit<
			ParkingData,
			"getDistances" | "getDistancesCompleted" | "isAvailable" | "isFull"
		>)[] {
		const distances = this.getDistances();
		const distancesCompleted = distances.map((distance) => {
			const parking = parkings.find((p) => p.id === distance.id);
			if (!parking) {
				return null;
			}
			return { ...distance, ...parking };
		});
		return distancesCompleted.filter((distance) => distance !== null);
	}

	isAvailable(): boolean {
		return this.freeslots > 0;
	}

	isFull(): boolean {
		return this.freeslots === 0 && this.capacity > 0;
	}
}
