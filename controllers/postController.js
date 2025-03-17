const posts = [
    { id: 1, user_id: 5, title: "AI Trends to Watch in 2025", content: "AI is transforming industries faster than ever before." },
    { id: 2, user_id: 12, title: "My Journey Learning Python", content: "Learning Python has been challenging but rewarding!" },
    { id: 3, user_id: 8, title: "Top 5 Books for Personal Growth", content: "These books have helped me improve my mindset." },
    { id: 4, user_id: 19, title: "The Rise of Remote Work", content: "Remote work is here to stay, and here’s why." },
    { id: 5, user_id: 3, title: "How to Start a Side Hustle", content: "Starting a side hustle can be easier than you think." },
    { id: 6, user_id: 15, title: "Healthy Habits for a Better Life", content: "Small changes can make a big difference in your health." },
    { id: 7, user_id: 7, title: "Web Development in 2025", content: "The future of web development is exciting!" },
    { id: 8, user_id: 22, title: "Exploring Machine Learning Basics", content: "Machine learning is more accessible than ever." },
    { id: 9, user_id: 4, title: "Tips for Effective Public Speaking", content: "Public speaking can be nerve-wracking, but these tips help." },
    { id: 10, user_id: 11, title: "The Importance of Mental Health", content: "Taking care of your mental health is crucial." },
    { id: 11, user_id: 17, title: "How to Invest Wisely in 2025", content: "Investing smartly can secure your financial future." },
    { id: 12, user_id: 9, title: "The Best Tools for Productivity", content: "These tools have boosted my productivity significantly." },
    { id: 13, user_id: 14, title: "Why Cybersecurity Matters", content: "Cybersecurity is more important than ever in our digital world." },
    { id: 14, user_id: 6, title: "A Beginner’s Guide to Photography", content: "Photography is a fun and creative hobby to explore." },
    { id: 15, user_id: 20, title: "The Future of Electric Vehicles", content: "Electric vehicles are changing the automotive industry." },
    { id: 16, user_id: 2, title: "How to Build a Personal Brand", content: "A strong personal brand can open many doors." },
    { id: 17, user_id: 18, title: "The Benefits of Meditation", content: "Meditation has improved my focus and reduced stress." },
    { id: 18, user_id: 5, title: "Top Travel Destinations for 2025", content: "These destinations should be on your travel list!" },
    { id: 19, user_id: 13, title: "How to Learn a New Language Fast", content: "Learning a new language doesn’t have to take years." },
    { id: 20, user_id: 10, title: "The Impact of Climate Change", content: "Climate change is a pressing issue we need to address." },
    { id: 21, user_id: 16, title: "Best Practices for Remote Teams", content: "Managing remote teams effectively requires communication." },
    { id: 22, user_id: 21, title: "How to Cook Healthy Meals", content: "Healthy eating starts with simple, nutritious recipes." },
    { id: 23, user_id: 1, title: "The Evolution of Social Media", content: "Social media platforms continue to evolve rapidly." },
    { id: 24, user_id: 23, title: "Why Reading is Still Relevant", content: "Reading remains one of the best ways to learn and relax." },
    { id: 25, user_id: 25, title: "The Power of Networking", content: "Networking can lead to amazing opportunities." }
  ]


exports.getAllPosts = (req, res) => {
    res.json(posts);
};

exports.getPostById = (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) {
        return res.status(404).json({ message: "Post not found" });
    }
    res.json(post);
};

exports.createPost = (req, res) => {
    const {id, user_id, title, content } = req.body;
    if (!id ||!user_id ||!title ||!content) {
        return res.status(400).json({ message: "Missing required fields" });
    }
    const post = {
        id : id,
        user_id: user_id,
        title: title,
        content: content
    }
    res.status(201).json({message : "Post created successfully", post: post});
};

exports.updatePost = (req, res) => {
    const {id, user_id, title, content } = req.body;
    if (!id ||!user_id ||!title ||!content) {
        return res.status(400).json({ message: "Missing required fields" });
    }
    const post = {
        id : id,
        user_id: user_id,
        title: title,
        content: content
    }
    res.status(201).json({message : "Post updated successfully", post: post});
};

exports.deletePost = (req, res) => {
    res.json({ message: "Post deleted successfully" });
};
