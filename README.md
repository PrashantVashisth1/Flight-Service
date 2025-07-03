# ✈️ Flights API

Welcome to the Flights API — a robust, scalable, and modular RESTful API for managing flights, airplanes, airports, and cities!  
Built with Node.js, this project is designed for easy integration, extensibility, and real-world airline management scenarios.

---

## 🚀 Features

- **CRUD Operations** for Airplanes, Airports, Cities, and Flights
- **RESTful API** design with clear versioning (v1, v2)
- **Modular Architecture**: Controllers, Services, Repositories, and Middlewares
- **Sequelize ORM** for database management and migrations
- **Centralized Error & Success Handling**
- **Configurable** via JSON and environment variables
- **Extensible**: Easily add new resources or business logic

---

## 🗂️ Project Structure

```
src/
  config/         # App configuration & logger
  controllers/    # Request handlers (business logic entry)
  middlewares/    # Request validation & processing
  migrations/     # Sequelize DB migrations
  models/         # Sequelize models (DB schema)
  repositories/   # Data access layer
  routes/         # API route definitions (v1, v2)
  seeders/        # DB seed data
  services/       # Business logic layer
  utils/          # Helpers, enums, error/success responses
```

---

## 📦 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/flights.git
cd flights
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment

- Edit `src/config/config.json` for DB and app settings.
- (Optional) Set environment variables as needed.

### 4. Run Migrations & Seeders

```bash
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

### 5. Start the Server

```bash
npm start
```

Server runs on the port specified in your config (default: `3000`).

---

## 🛣️ API Endpoints

All endpoints are prefixed with `/api/v1/` (or `/api/v2/` for future versions).

### ✈️ Airplanes

- `POST   /api/v1/airplanes` — Create an airplane
- `GET    /api/v1/airplanes` — List all airplanes
- `GET    /api/v1/airplanes/:id` — Get airplane by ID
- `PATCH  /api/v1/airplanes/:id` — Update airplane capacity
- `DELETE /api/v1/airplanes/:id` — Delete airplane

### 🏙️ Cities, 🛫 Airports, 🛩️ Flights

- Similar CRUD endpoints for cities, airports, and flights!
- See `src/routes/v1/` for full details.

---

## 🧩 Tech Stack

- **Node.js** & **Express.js**
- **Sequelize** (ORM)
- **MySQL** (or your configured DB)
- **HTTP Status Codes** for clear API responses

---

## 🛡️ Error Handling & Responses

- All responses are wrapped in a consistent format via `SuccessResponse` and `ErrorResponse` (see `src/utils/common/`).
- Centralized error handling for robust, predictable API behavior.

---

## 🛠️ Extending the API

- Add new models in `src/models/`
- Create corresponding controllers, services, and routes
- Register new routes in `src/routes/v1/`

---

## ✨ Acknowledgements

- Inspired by real-world airline management systems

---

> _Ready for takeoff? Start building with the Flights API today!_ 🚀 