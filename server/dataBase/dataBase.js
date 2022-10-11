import mongoose from "mongoose";

try {
  const client = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(`Connected to MongoDB @ ${client.connection.host}`);
} catch (error) {
  console.log(error);
}