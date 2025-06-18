A simple proof of concept for a serverless API written in typescript. It is currently live, deployed through docker containers on [Render](https://render.com/)

It consists of 3 subfolders:

- api: the api
- common: containing some database models and helper functions, and a logger
- scraper: a simple web scraper to collect car data

Although it is entirely functional, the repo is a work in progress that needs:

- unit and integration tests
- automated testing and deployment
- a better way to manage secrets
- isolated dependencies (everything pulls from the same package.json right now)
- container orchestration locally via docker-compose

Some useful commands:

### build the api from the root directory
docker build -f api/Dockerfile -t local-car-api .
### poke around inside
docker run -it --entrypoint bash local-car-api
### run it locally
docker run --rm -p 3000:3000 -e DATABASE_URL=postgresql://postgres:postgres@172.17.0.1:5432/car_parts local-car-api
### run a postgres container and sync
docker run --name prisma-db -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=car_parts -p 5432:5432 -d postgres:15
cd common && npx prisma db push
### start api
npm run start-api
### scrape the data
npm run scrape

## API Details

All endpoints return JSON responses and are prefixed from root (`/`).

---

### Health Checks

| Method | Endpoint  | Description             |
|--------|-----------|-------------------------|
| `HEAD` | `/`       | Lightweight uptime ping |
| `GET`  | `/health` | Health status of service |

---

### Car Makes

#### `GET /makes`

Retrieve a list of car makes.

**Query Parameters (optional):**

- `name` – Filter makes by name (partial match)
- `limit` – Max number of results
- `offset` – Skip a number of results for pagination

---

### Models by Make

#### `GET /makes/:makeId/models`

Retrieve car models for a given make.

**Path Parameters:**

- `makeId` (required) – ID of the car make

**Query Parameters (optional):**

- `name` – Filter models by name
- `limit` – Max number of results
- `offset` – Skip a number of results for pagination

**Responses:**

- `200 OK` – List of models
- `404 Not Found` – No models found for this make

---

### Parts by Model

#### `GET /models/:modelId/parts`

Retrieve parts associated with a specific model.

**Path Parameters:**

- `modelId` (required) – ID of the car model

**Query Parameters (optional):**

- `name` – Filter parts by name
- `limit` – Max number of results
- `offset` – Skip a number of results for pagination

**Responses:**

- `200 OK` – List of parts
- `404 Not Found` – No parts found for this model

---

### Part by ID

#### `GET /parts/:partId`

Retrieve a single part by its ID.

**Path Parameters:**

- `partId` (required) – ID of the part

**Responses:**

- `200 OK` – Part object
- `404 Not Found` – Part not found


