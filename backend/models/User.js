const mongoose = require("mongoose");

const { objectId } = mongoose.Schema;

const userSchema = mongoose.Schema({
  first_name: {
    type: String,
    required: [true, "first name is required"],
    trim: true,
    text: true,
  },
  last_name: {
    type: String,
    required: [true, "last name is required"],
    trim: true,
    text: true,
  },
  user_name: {
    type: String,
    required: [true, "user name is required"],
    trim: true,
    unique: true,
    text: true,
  },
  email: {
    type: String,
    required: [true, "email is required"],
    trim: true,
    text: true,
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  picture: {
    type: String,
    default:
      "https://res.cloudinary.com/dmhcnhtng/image/upload/v1643044376/avatars/default_pic_jeaybr.png",
  },
  cover: {
    type: String,
  },
  gender: {
    type: String,
    required: [true, "gender name is required"],
    trim: true,
    text: true,
  },
  bYear: {
    type: Number,
    required: true,
    trim: true,
  },
  bMonth: {
    type: Number,
    required: true,
    trim: true,
  },
  bDay: {
    type: Number,
    required: true,
    trim: true,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  friends: {
    type: Array,
    default: [],
  },
  followers: {
    type: Array,
    default: [],
  },
  following: {
    type: Array,
    default: [],
  },
  requests: {
    type: Array,
    default: [],
  },
  search: [
    {
      user: {
        type: objectId,
        ref: "User",
      },
    },
  ],
  details: {
    bio: {
      type: String,
    },
    otherName: {
      type: String,
    },
    job: {
      type: String,
    },
    workPlace: {
      type: String,
    },
    highSchool: {
      type: String,
    },
    college: {
      type: String,
    },
    currentCity: {
      type: String,
    },
    homeTown: {
      type: String,
    },
    relationship: {
      type: String,
      enum: ["single", "divorced", "it's complicated", "widow", "married"],
    },
    instagram: {
      type: String,
    },
  },
  savedPosts: [
    {
      post: {
        type: objectId,
        ref: "Post",
      },
      savedAt: {
        type: Date,
        default: new Date();
      }
    },
  ],
},
{
    timestamps: true
}
);

module.exports = mongoose.model("User", userSchema)
