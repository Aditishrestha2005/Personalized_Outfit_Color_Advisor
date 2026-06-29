import dotenv from "dotenv";
import app from "./app";
import connectDB from "./database/mongodb";

dotenv.config();

connectDB();

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});