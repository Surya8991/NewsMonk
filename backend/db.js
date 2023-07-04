const mongoose = require('mongoose');

const mongoURI = "mongodb://127.0.0.1:27017/newsApp?directConnection=true&appName=mongosh+1.8.0"

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB Connected Successfully');
  } catch (error) {
    console.log('Error in connecting to MongoDB:', error);
  }
};

module.exports = connectToMongo;
