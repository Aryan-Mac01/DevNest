import mongoose, {Schema} from "mongoose";

const videoSchema = new mongoose.Schema({
    videoFile:{
        type:String, //cloudinary url
        required: true,
    },
    thumbnail: {
        type: String, //cloudinary url
        required: true,
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    duraiton:{
        type: Number,
        required: true,
    },
    views:{
        type: Number,
        default: 0,
    },
    isPublished: {
        type: Boolean,
        required: true,
    }
}, {
    timestamps: true,
})

export const Video = mongoose.model("video", videoSchema)