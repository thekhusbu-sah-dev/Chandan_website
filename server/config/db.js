import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/chandanceramics';
    const conn = await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 5000 // 5 sec timeout to avoid blocking startup
    });
    console.log(`[MongoDB] Connected successfully: ${conn.connection.host}`);
  } catch (error) {
    console.error(`==================================================`);
    console.error(`⚠️  [MongoDB Connection Warning]: Could not connect to MongoDB`);
    console.error(`   Error details: ${error.message}`);
    console.error(``);
    console.error(`📌 How to resolve this:`);
    console.error(`   Option A (Local MongoDB): Start your local MongoDB service (e.g. run 'mongod' or start MongoDB Service in Windows Services).`);
    console.error(`   Option B (MongoDB Atlas Cloud): Add your MongoDB Atlas Connection String in 'server/.env' as:`);
    console.error(`   MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/chandanceramics`);
    console.error(`==================================================`);
  }
};

export default connectDB;
