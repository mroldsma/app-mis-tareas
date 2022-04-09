import mongoose from 'mongoose';

var uri = "mongodb+srv://mroldsma:otakumaster@cluster0.j9pzd.mongodb.net/mis-tareas-db?retryWrites=true&w=majority";

(async()=>{
  try {
    const db = await mongoose.connect(uri);
  console.log('connectado a', db.connection.name)
  } catch (error) {
    console.log(error)
  }
})()