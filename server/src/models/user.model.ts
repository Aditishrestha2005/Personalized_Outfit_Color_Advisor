import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  fullName: string;
  username: string;
  email: string;
  phone: string;
  password: string;
  profilePicture?: string;
  createdAt: Date;
}

const userSchema = new Schema<IUser>(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      unique: true,
      minlength: 10,
      maxlength: 10,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    profilePicture: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model<IUser>("User", userSchema);

export default User;