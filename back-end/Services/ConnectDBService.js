import mongoose from "mongoose";
async function connectDatabase(){
  try {
    await mongoose.connect('mongodb+srv://khavinhthuan114:EC1FE44fuZOdJnJu@cluster0.sopwz.mongodb.net/');
   console.log('Connect database success');
  } catch(err) {
    console.log('connect database fail', err);
  }
}
export default connectDatabase;