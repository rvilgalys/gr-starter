import mongoose from "mongoose";

let cachedConnection = null;

const connectToDatabase = async (uri) => {
  if (cachedConnection) {
    return cachedConnection;
  }

  cachedConnection = await mongoose.createConnection(uri, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    bufferCommands: false,
    bufferMaxEntries: 0,
  });
  return cachedConnection;
};

export default connectToDatabase;
