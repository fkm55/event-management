import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fname: { type: String },
  lname: { type: String },
  gender: { type: String },
  date_of_birth: { type: Date },
  phone_number: { type: String },
  userType: { type: String }
});

export default mongoose.model('User', userSchema);
