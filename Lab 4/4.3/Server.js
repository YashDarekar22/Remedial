// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

// --- Middleware ---
app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse incoming JSON payloads

// --- MongoDB Connection ---
// !! Replace with your own MongoDB connection string !!
const MONGO_URI = 'mongodb://localhost:27017/myBlogDB'; 

mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected successfully.'))
  .catch(err => console.error('MongoDB connection error:', err));

// --- Post Model (Schema) ---
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  createdAt: { type: Date, default: Date.now }
});
const Post = mongoose.model('Post', postSchema);

// --- API Routes ---
// 1. Get all posts (for the home page)
app.get('/api/posts', async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 }); // Get latest posts first
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 2. Get a single post by ID (for the post page)
app.get('/api/posts/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// (Optional) 3. Create a new post (to add data)
app.post('/api/posts', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  try {
    const newPost = await post.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


// --- Start Server ---
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});