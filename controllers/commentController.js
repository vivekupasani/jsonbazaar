const comments = [
    { id: 1, post_id: 5, user_id: 12, content: "Great post, really enjoyed reading it!" },
    { id: 2, post_id: 8, user_id: 3, content: "This helped me understand the topic better, thanks!" },
    { id: 3, post_id: 2, user_id: 19, content: "I disagree with some points, but interesting perspective." },
    { id: 4, post_id: 10, user_id: 7, content: "Can you elaborate more on this concept?" },
    { id: 5, post_id: 3, user_id: 15, content: "Amazing insights, keep up the good work!" },
    { id: 6, post_id: 7, user_id: 8, content: "I learned something new today." },
    { id: 7, post_id: 1, user_id: 22, content: "This was a bit confusing, could use more examples." },
    { id: 8, post_id: 9, user_id: 4, content: "Loved the way you explained this, very clear!" },
    { id: 9, post_id: 6, user_id: 11, content: "I have a similar experience to share, thanks for posting." },
    { id: 10, post_id: 4, user_id: 17, content: "Not sure I agree, but I appreciate the effort." },
    { id: 11, post_id: 5, user_id: 9, content: "This post deserves more attention, great job!" },
    { id: 12, post_id: 8, user_id: 14, content: "I found this really helpful for my project." },
    { id: 13, post_id: 2, user_id: 6, content: "Could you share more resources on this topic?" },
    { id: 14, post_id: 10, user_id: 20, content: "This changed my perspective, thank you!" },
    { id: 15, post_id: 3, user_id: 2, content: "I think there’s a typo in the second paragraph." },
    { id: 16, post_id: 7, user_id: 18, content: "I’ve bookmarked this for future reference." },
    { id: 17, post_id: 1, user_id: 5, content: "Great discussion, looking forward to more posts like this." },
    { id: 18, post_id: 9, user_id: 13, content: "This was exactly what I was looking for, thanks!" },
    { id: 19, post_id: 6, user_id: 10, content: "I have a question about the third point you mentioned." },
    { id: 20, post_id: 4, user_id: 16, content: "Well written and informative, appreciated!" }
  ];

// Get all comments
exports.getAllComments = (req, res) => {
    res.json(comments);
};

// Get a single comment by ID
exports.getCommentById = (req, res) => {
    const comment = comments.find(c => c.id === parseInt(req.params.id));
    if (!comment) return res.status(404).json({ message: "Comment not found" });
    res.json(comment);
};

// Create a new comment
exports.createComment = (req, res) => {
    const {id, post_id, user_id, content } = req.body;
    if (!id ||!post_id ||!user_id ||!content) {
        return res.status(400).json({ message: "Missing required fields" });
    }
    const newComment = { id, post_id, user_id, content };
    res.status(201).json({message : "Comment created" , comment: newComment});
};

// Update a comment
exports.updateComment = (req, res) => {
    const {id, post_id, user_id, content } = req.body;
    if (!id ||!post_id ||!user_id ||!content) {
        return res.status(400).json({ message: "Missing required fields" });
    }
    const newComment = { id, post_id, user_id, content };
    res.status(201).json({message : "Comment updated" , comment: newComment});
};

// Delete a comment
exports.deleteComment = (req, res) => {
    res.json({ message: "Comment deleted successfully" });
};
