import mongoose, { mongo } from "mongoose";

async function conectaNaDatabase() {
  mongoose.connect(
    "mongodb+srv://admin:admin123@cluster0.jhxv1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  return mongoose.connection;
}

export default conectaNaDatabase;
