import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import userRouter from "./routes/userRoutes.js";
import OwnerRouter from "./routes/ownerRoutes.js";
import bookingRouter from "./routes/bookingRoutes.js";

// Initialize Express app
const app = express();

// Wrap startup in an async IIFE to allow await anywhere
(async () => {
  // Connect Database
  await connectDB();

  // Middleware
  app.use(cors());
  app.use(express.json());

  // Test route
  app.get("/", (req, res) => res.send("Server is running"));

  // Routes
  app.use("/api/user", userRouter);
  app.use("/api/owner", OwnerRouter);
  app.use('/api/booking', bookingRouter)

  // Server Listen
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, "0.0.0.0", () =>
    console.log(`✅ Server running on port ${PORT}`)
  );
})();