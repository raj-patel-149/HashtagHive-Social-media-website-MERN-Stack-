import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URL);
    console.log("DB connnected succesfully");
  } catch (error) {
    console.log("DB Error : " + error);
  }
};

export default dbConnection;
