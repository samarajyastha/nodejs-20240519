import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/code-it`);

    console.log("MongoDB connected...");
  } catch (error) {
    console.log(error.message);

    process.exit(1);
  }
};

export default connectDB;