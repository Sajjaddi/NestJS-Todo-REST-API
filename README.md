# TodoTask API

A clean and modular RESTful API built with **NestJS**, **TypeScript**, **TypeORM**, and **PostgreSQL**. Features user authentication via JWT and full CRUD operations for personal todos with pagination.

---

## Features

- **Authentication & Authorization**: Registration, login, and protected routes using JWT & bcrypt password hashing.
- **Todo Management**: Complete CRUD operations associated with the authenticated user.
- **Pagination**: Paginated listing of todos with customizable `page` and `limit` query parameters.
- **Validation**: Global `ValidationPipe` with DTO validation using `class-validator` and `class-transformer`.
- **Database**: PostgreSQL with TypeORM entities and relations.
- **Docker Ready**: Pre-configured `docker-compose.yml` for spun-up PostgreSQL database.
- **Tooling**: Fast code linting with `oxlint` and formatting with `prettier`.

---

## Tech Stack

- **Framework**: [NestJS](https://nestjs.com/) (v12)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **ORM**: [TypeORM](https://typeorm.io/)
- **Linter & Formatter**: [Oxlint](https://oxc.rs/docs/guide/usage/linter.html), Prettier
- **Containerization**: Docker Compose

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/todotask.git
cd todotask
```

### 2. Environment Configuration

Copy the example `.env.example` file to `.env`:

```bash
cp .env.example .env
```

Ensure the database settings in `.env` match your local or Docker configuration.

### 3. Start Database (Docker)

```bash
docker compose up -d
```

### 4. Install Dependencies

```bash
pnpm install
```

### 5. Run the Application

```bash
# development mode
pnpm run start:dev

# production build & start
pnpm run build
pnpm run start:prod
```

The application will be running at `http://localhost:3000`.

---

## API Endpoints

### Auth
| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `POST` | `/auth/register` | Register a new user account | No |
| `POST` | `/auth/login` | Login and receive a JWT token | No |
| `GET` | `/auth/profile` | Get current user profile & todos | Yes (`Bearer <token>`) |

### Todos
| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `POST` | `/todos` | Create a new todo | Yes (`Bearer <token>`) |
| `GET` | `/todos?page=1&limit=10` | Get paginated list of todos | Yes (`Bearer <token>`) |
| `GET` | `/todos/:id` | Get todo by ID | Yes (`Bearer <token>`) |
| `PATCH` | `/todos/:id` | Update a todo | Yes (`Bearer <token>`) |
| `DELETE`| `/todos/:id` | Delete a todo | Yes (`Bearer <token>`) |

---

## Code Quality

```bash
# Run linter
pnpm run lint

# Format code
pnpm run format
```

---

## License

This project is licensed under the [MIT License](LICENSE).
