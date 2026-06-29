import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.route";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Personalized Outfit Color Advisor API is running!");
});

export default app;