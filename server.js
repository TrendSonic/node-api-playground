const express = require("express");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config({ path: "./config/config.env" });
// Route files
const bootcamps = require("./routes/bootcampsRoutes");

const app = express();

// Mount routers
app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server is running on port ${PORT} in ${process.env.NODE_ENV} mode`
  );
});
