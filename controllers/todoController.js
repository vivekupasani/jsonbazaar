const todos = [
  { id: 1, user_id: 5, title: "Finish reading book", completed: false },
  { id: 2, user_id: 12, title: "Buy groceries", completed: true },
  { id: 3, user_id: 8, title: "Call plumber", completed: false },
  { id: 4, user_id: 19, title: "Update resume", completed: true },
  { id: 5, user_id: 3, title: "Schedule doctor appointment", completed: false },
  { id: 6, user_id: 15, title: "Plan weekend trip", completed: false },
  { id: 7, user_id: 7, title: "Send follow-up email", completed: true },
  { id: 8, user_id: 8, title: "Prepare for meeting", completed: false },
  { id: 9, user_id: 22, title: "Water plants", completed: true },
  { id: 10, user_id: 4, title: "Complete laundry", completed: false },
  { id: 11, user_id: 11, title: "Write blog post", completed: false },
  { id: 12, user_id: 17, title: "Pay electricity bill", completed: true },
  { id: 13, user_id: 9, title: "Organize desk", completed: false },
  { id: 14, user_id: 14, title: "Practice guitar", completed: true },
  { id: 15, user_id: 6, title: "Meal prep for week", completed: false },
  { id: 16, user_id: 20, title: "Review project plan", completed: true },
  { id: 17, user_id: 2, title: "Call sister", completed: false },
  { id: 18, user_id: 18, title: "Backup files", completed: true },
  { id: 19, user_id: 5, title: "Update phone apps", completed: false },
  { id: 20, user_id: 13, title: "Clean kitchen", completed: true },
  { id: 21, user_id: 10, title: "Reply to client email", completed: false },
  { id: 22, user_id: 16, title: "Exercise for 30 minutes", completed: true },
  { id: 23, user_id: 21, title: "Book flight tickets", completed: false },
  { id: 24, user_id: 1, title: "Check car tires", completed: true },
  { id: 25, user_id: 23, title: "Meditate", completed: false },
  { id: 26, user_id: 25, title: "Finish coding task", completed: true },
  { id: 27, user_id: 7, title: "Buy birthday gift", completed: false },
  { id: 28, user_id: 9, title: "Schedule team meeting", completed: true },
  { id: 29, user_id: 14, title: "Update LinkedIn profile", completed: false },
  { id: 30, user_id: 3, title: "Clean bathroom", completed: true },
  { id: 31, user_id: 11, title: "Plan budget", completed: false },
  { id: 32, user_id: 17, title: "Call insurance company", completed: true },
  { id: 33, user_id: 8, title: "Review presentation slides", completed: false },
  { id: 34, user_id: 19, title: "Send thank-you note", completed: true },
  { id: 35, user_id: 5, title: "Organize closet", completed: false },
  { id: 36, user_id: 12, title: "Check email", completed: true },
  { id: 37, user_id: 15, title: "Buy new notebook", completed: false },
  { id: 38, user_id: 22, title: "Update software", completed: true },
  { id: 39, user_id: 4, title: "Plan dinner menu", completed: false },
  { id: 40, user_id: 6, title: "Walk dog", completed: true },
  { id: 41, user_id: 20, title: "Submit expense report", completed: false },
  { id: 42, user_id: 2, title: "Clean windows", completed: true },
  { id: 43, user_id: 18, title: "Practice yoga", completed: false },
  { id: 44, user_id: 13, title: "Review meeting notes", completed: true },
  { id: 45, user_id: 10, title: "Call friend", completed: false },
  { id: 46, user_id: 16, title: "Buy office supplies", completed: true },
  { id: 47, user_id: 21, title: "Plan social media posts", completed: false },
  { id: 48, user_id: 1, title: "Check investments", completed: true },
  { id: 49, user_id: 23, title: "Water garden", completed: false },
  { id: 50, user_id: 25, title: "Finish report", completed: true },
  { id: 51, user_id: 7, title: "Plan vacation", completed: false },
  { id: 52, user_id: 9, title: "Update passwords", completed: true },
  { id: 53, user_id: 14, title: "Buy new shoes", completed: false },
  { id: 54, user_id: 3, title: "Organize photos", completed: true },
  { id: 55, user_id: 11, title: "Call bank", completed: false },
  { id: 56, user_id: 17, title: "Review contract", completed: true },
  { id: 57, user_id: 8, title: "Plan workout routine", completed: false },
  { id: 58, user_id: 19, title: "Send invoice", completed: true },
  { id: 59, user_id: 5, title: "Clean garage", completed: false },
  { id: 60, user_id: 12, title: "Update calendar", completed: true },
  { id: 61, user_id: 15, title: "Buy concert tickets", completed: false },
  { id: 62, user_id: 22, title: "Check smoke detectors", completed: true },
  { id: 63, user_id: 4, title: "Plan family outing", completed: false },
  { id: 64, user_id: 6, title: "Review budget", completed: true },
  { id: 65, user_id: 20, title: "Call mechanic", completed: false },
  { id: 66, user_id: 2, title: "Organize bookshelf", completed: true },
  { id: 67, user_id: 18, title: "Plan grocery list", completed: false },
  { id: 68, user_id: 13, title: "Send feedback", completed: true },
  { id: 69, user_id: 10, title: "Finish online course", completed: false }
];

// Get all todos
exports.getAllTodos = (req, res) => {
  res.json(todos);
};


// Get a single todo by ID
exports.getTodoById = (req, res) => {
  const todo = todos.find((t) => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).json({ message: "Todo not found" });
  res.json(todo);
};


// Create a new todo
exports.createTodo = (req, res) => {
  const { id, user_id, title, completed } = req.body;
  if (!id || !user_id || !title) {
    return res.status(400).json({ message: "Missing required fields" });
  }
  const newTodo = {
    id: id,
    user_id: user_id,
    title: title,
    completed: completed,
  };
  res.status(201).json({ message: "Todo created successfully", todo: newTodo });
};


// Update a todo
exports.updateTodo = (req, res) => {
  const { id, user_id, title, completed } = req.body;
  if (!id || !user_id || !title) {
    return res.status(400).json({ message: "Missing required fields" });
  }
  const newTodo = {
    id: id,
    user_id: user_id,
    title: title,
    completed: completed,
  };
  res.status(201).json({ message: "Todo updated successfully", todo: newTodo });
};


// Delete a todo
exports.deleteTodo = (req, res) => {
  res.json({ message: "Todo deleted successfully" });
};
