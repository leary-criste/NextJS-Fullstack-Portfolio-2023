import mongoose from "mongoose";

export default async function connectToDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://user.name.net"
    );
    console.log("Database connected successfully");
  } catch (e) {
    console.log(e);
  }
}

