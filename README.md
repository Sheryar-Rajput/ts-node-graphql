# Node GraphQL Server

This is a simple Node.js GraphQL server using TypeScript, Prisma, and Apollo Server Express. It provides basic functionality for managing users and posts.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [GraphQL Schema](#graphql-schema)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up your environment variables:

   Create a `.env` file in the root directory and add the following:

   ```env
   DATABASE_URL="your-database-url"
   JWT_SECRET="your-jwt-secret"
   ```

## Usage

- Start the server:

  ```bash
  npm start
  ```

  This will start the server at `http://localhost:4000/graphql`. You can use tools like [GraphQL Playground](https://www.apollographql.com/docs/apollo-server/testing/graphql-playground/) or [Apollo Studio Explorer](https://studio.apollographql.com/) to interact with the GraphQL API.

- For development with auto-reloading:

  ```bash
  npm run dev
  ```

## Project Structure

The project follows a modular structure to organize different components:

- `src/`
  - `graphql/`: Contains GraphQL related files (schema, resolvers).
  - `models/`: Contains Prisma models.
  - `prisma/`: Contains Prisma configuration and migrations.
  - `index.ts`: Entry point of the application.

## Configuration

- Prisma configuration is in the `prisma/` directory. Make sure to run Prisma migrations to update your database schema.

## GraphQL Schema

The GraphQL schema is defined in `src/graphql/schema.ts`. It includes types for `User`, `Post`, and the corresponding queries and mutations.

## Scripts

- `npm start`: Start the server.
- `npm run dev`: Start the server with auto-reloading (using nodemon).

## Dependencies

- **@prisma/client**: Prisma ORM for database interaction.
- **apollo-server-express**: Apollo Server for Express.
- **dotenv**: Load environment variables from a `.env` file.
- **express**: Web framework for handling HTTP requests.
- **express-graphql**: Middleware for serving GraphQL queries.
- **graphql**: GraphQL implementation for JavaScript.
- **nodemon**: Development utility for auto-reloading.
- **prisma**: Prisma CLI for database migrations.
- **ts-node**: TypeScript execution and REPL for Node.js.
- **typescript**: TypeScript compiler.

## Contributing

Feel free to contribute by opening issues or submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
