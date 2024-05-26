import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/codeit");

    console.log("MongoDB connected...");
  } catch (error) {
    console.log(error.message);

    process.exit(1);
  }
};

export default connectDB;