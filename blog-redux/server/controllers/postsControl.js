import Post from "../models/Post.js";
import User from "../models/User.js";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

// Create Post
export const createPost = async (req, res) => {
  try {
    const { title, text } = req.body;
    const user = await User.findById(req.userId);
    if (req.files) {
      let fileName = Date.now().toString() + req.files.image.name;
      const __dirname = dirname(fileURLToPath(import.meta.url));
      req.files.image.mv(path.join(__dirname, "..", "upload", fileName));

      const newPostWithImage = new Post({
        username: user.username,
        title,
        text,
        imgUrl: fileName,
        autor: req.userId,
      });

      await newPostWithImage.save();
      await User.findByIdAndUpdate(req.userId, {
        $push: { posts: newPostWithImage },
      });
      return res.json(newPostWithImage);
    }

    const newPostWithoutImage = new Post({
      username: user.username,
      title,
      text,
      imageUrl: "",
      autor: req.userId,
    });

    await newPostWithoutImage.save();
    await User.findByIdAndUpdate(req.userId, {
      $push: { posts: newPostWithoutImage },
    });
    return res.json(newPostWithoutImage);
  } catch (e) {
    res.json({ message:'So some wrong' });
  }
};

//Get All Posts

export const getAll = async (req, res) =>{
  try {
    const posts = await Post.find().sort('-createdAt')
    const popularPosts = await Post.find().limit(5).sort('-views')
    if(!posts){
      return res.json({message:'Not Post'})
    }
    res.json({posts, popularPosts})
  } catch (error) {
    res.json({ message: error.message });
  }
}

