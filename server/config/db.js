import mongoose from "mongoose";

export const connectDB = async () => {
  //console.log("Mongo URL from .env:", process.env.MONGO_URL); // Debug here

  if (!process.env.MONGO_URL) {
    console.log("❌ MONGO_URL is undefined! Check your .env file.");
    process.exit(1);
  }

  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(" Error connecting to MongoDB:", error);
    process.exit(1);
  }
};
