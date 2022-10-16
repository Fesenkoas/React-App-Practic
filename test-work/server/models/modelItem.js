import mongoose from "mongoose";

const itemShema = new mongoose.Schema({

      data: {
        type: String,
      },
      title: {
        type: String,
      },
      quantity: {
        type: Number,
      },
      distance: {
        type: Number,
      },
      
    },);

export default mongoose.model("Item", itemShema);
