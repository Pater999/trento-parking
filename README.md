# Node.js TypeScript Boilerplate

This repository provides a solid foundation for building Node.js applications with TypeScript, incorporating best practices and essential tools for modern development. It's designed to get you started quickly with a well-structured project and a robust development workflow.

## Features

* **TypeScript:** Static typing for enhanced code quality and maintainability.
* **Vitest:** A fast and easy-to-use unit testing framework.
* **Biome.js:** A fast and opinionated linter and formatter.
* **Pre-commit Hooks (Lefthook):** Automate code checks before each commit to ensure code quality.
* **Docker:** Containerization for easy deployment and consistent environments (using Docker Compose).
* **GitHub Actions CI:** Automated testing and linting on every push and pull request.

## Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) (>=22, LTS version recommended)
* [pnpm](https://pnpm.io/) (>=10, Recommended package manager)
* [Docker](https://www.docker.com/)
* [Docker Compose](https://docs.docker.com/compose/install/)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Pater999/node-boilerplate.git
    ```

2. Navigate to the project directory:
    ```bash
    cd node-boilerplate
    ```

3. Install dependencies:   

    ```bash
    pnpm install
    ```

### Development

- Running the app in development mode

    ```bash
    pnpm run dev
    ```

- Running tests
    ```bash
    pnpm run test
    ```

- Running the linter and formatter
    ```bash
    pnpm run lint
    ```

- Building the Docker image
    ```bash
    docker build -t <your-image-name> .
    ```

- Running the Docker container with Docker Compose
    ```bash
    docker-compose up -d
    ```

### Project Structure

```
.
├── .github/workflows/pull-request.yml   # GitHub Actions workflow
├── node_modules/                      # Node modules (not in repo)
├── src/                              # Source code
│   └── index.ts                    # Main application file
├── test/                             # Unit tests
│   └── unit/                         # Unit test files
│       ├── setup.ts                  # Test setup
│       └── index.test.ts             # Example test file
├── .gitignore                         # Files ignored by Git
├── .npmrc                             # npm configuration
├── .nvmrc                             # Node.js version specification
├── biome.json                         # Biome configuration
├── docker-compose.yml                 # Docker Compose configuration
├── Dockerfile                         # Docker configuration
├── lefthook.yml                       # Lefthook configuration
├── package.json                       # Project configuration
├── pnpm-lock.yaml                     # Lock file for dependencies
├── README.md                          # This file
├── tsconfig.build.json                # TypeScript build configuration
├── tsconfig.json                      # TypeScript configuration
├── vitest.config.mts                  # Vitest configuration
```

### Contributing

Contributions are welcome! Please open an issue or submit a pull request.