import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("DB Connected");
    });
    connection.off("error", (err) => {
      console.log("Connection Failed" + err.message);
      process.exit();
    });
  } catch (error) {
    console.log("Error Occured", +error.message);
  }
}