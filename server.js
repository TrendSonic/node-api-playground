const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db");
dotenv.config({ path: "./config/config.env" });

// connect to database
connectDB();

const bootcamps = require("./routes/bootcampsRoutes");

const app = express();

app.use(express.json());

// use morgan if in development mode
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(
    `Server is running on port ${PORT} in ${process.env.NODE_ENV} mode`
  );
});

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);

  server.close(() => process.exit(1));
});
