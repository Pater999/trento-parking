# Trento Parking

[![Npm version](https://img.shields.io/npm/v/trento-parking)](https://www.npmjs.com/package/trento-parking) [![install size](https://packagephobia.com/badge?p=trento-parking)](https://www.npmjs.com/package/trento-parking)  [![Support version](https://img.shields.io/node/v-lts/trento-parking)](https://github.com/Pater999/trento-parking) [![GitHub top language](https://img.shields.io/github/languages/top/pater999/trento-parking?style=flat-square&logo=github)](https://github.com/Pater999/trento-parking)  [![GitHub license](https://img.shields.io/github/license/pater999/trento-parking)](https://github.com/Pater999/trento-parking/blob/master/LICENSE)  [![GitHub issues](https://img.shields.io/github/issues/pater999/trento-parking)](https://github.com/Pater999/trento-parking/issues)  [![GitHub Workflow Status](https://github.com/pater999/trento-parking/actions/workflows/changesets.yml/badge.svg)](https://github.com/Pater999/trento-parking) [![Github last commit](https://img.shields.io/github/last-commit/pater999/trento-parking)](https://github.com/Pater999/trento-parking/commits/master/)

A TypeScript library providing easy access to parking and bike slot availability, location, and details in Trento, Italy. This library fetches real-time data from the official Comune di Trento parking services.

## Features

- Real-time parking availability data
- Bike slot information
- Parking location details
- Distance calculations between parking locations
- Filtering capabilities (by type, availability, etc.)
- TypeScript support with full type definitions

## Installation

```bash
npm install trento-parking
# or
yarn add trento-parking
# or
pnpm add trento-parking
```

## Usage

```typescript
import { ParkingDataCollection } from 'trento-parking';

// Initialize the parking collection
const parkingCollection = new ParkingDataCollection();

// Refresh the data
await parkingCollection.refresh();

// Get all parking locations
const allParkings = parkingCollection.all();

// Get a specific parking by ID
const parkingById = parkingCollection.byId(211);

// Get available parking spots
const availableParkings = parkingCollection.getAvailable();

// Get full parking locations
const fullParkings = parkingCollection.getFull();

// Get parking locations by type
const parkingsByType = parkingCollection.byType('park');

// Get distances between parking locations
const parkingWithDistances = parkingCollection.byId(211);
const distances = parkingWithDistances?.getDistancesCompleted(parkingCollection.all());
```

## API Reference

### ParkingDataCollection

The main class for interacting with parking data.

#### Methods

- `refresh()`: Fetches the latest parking data
- `all()`: Returns all parking locations
- `byId(id: number)`: Returns a specific parking location by ID
- `byType(type: ParkingType)`: Returns parking locations filtered by type
- `getAvailable()`: Returns parking locations with available spots
- `getFull()`: Returns parking locations that are at capacity
- `getLastRefresh()`: Returns the timestamp of the last data refresh

### Parking Data Model

Each parking location includes:
- `id`: Unique identifier
- `name`: Parking location name
- `type`: Type of parking facility
- `capacity`: Total number of spots
- `freeslots`: Number of available spots
- `coordinates`: Location coordinates
- `getDistances()`: Calculates distances to other parking locations

## Requirements

- Node.js >= 18
- TypeScript (for TypeScript projects)

## Development

This project uses:
- TypeScript for type safety
- Vitest for testing
- Biome for linting and formatting
- Changesets for version management
- tsup for building

### Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Run tests:
   ```bash
   pnpm test
   ```

### Available Scripts

- `pnpm build`: Build the library
- `pnpm test`: Run tests
- `pnpm format`: Format code
- `pnpm lint`: Lint code
- `pnpm type-check`: Check TypeScript types

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.