# JSONbazaar - Fake API Store

JSONbazaar is a fake API store that provides various endpoints for users, products, posts, todos, comments, and orders. This project is built using Node.js, Express, and EJS.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/jsonbazaar.git
    ```
2. Navigate to the project directory:
    ```sh
    cd jsonbazaar
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

### Running the Server

1. Create a `.env` file in the root directory and add the following:
    ```env
    PORT=8080
    ```
2. Start the server:
    ```sh
    npm start
    ```
3. Open your browser and navigate to `http://localhost:8080` to view the homepage.

## API Endpoints

### Users

- **GET** `/api/users` - Get all users
    ```sh
    curl -X GET http://localhost:8080/api/users
    ```
- **GET** `/api/users/:id` - Get a user by ID
    ```sh
    curl -X GET http://localhost:8080/api/users/1
    ```
- **POST** `/api/users/create` - Create a new user
    ```sh
    curl -X POST http://localhost:8080/api/users/create -H "Content-Type: application/json" -d '{"id":"16","name":"John Doe","email":"john.doe@example.com","username":"johndoe","city":"New York","state":"NY"}'
    ```
- **PUT** `/api/users/update/:id` - Update a user
    ```sh
    curl -X PUT http://localhost:8080/api/users/update/1 -H "Content-Type: application/json" -d '{"id":"1","name":"Amit Sharma","email":"amit.sharma@example.com","username":"amitsharma","city":"Mumbai","state":"Maharashtra"}'
    ```
- **DELETE** `/api/users/delete/:id` - Delete a user
    ```sh
    curl -X DELETE http://localhost:8080/api/users/delete/1
    ```

### Products

- **GET** `/api/products` - Get all products
    ```sh
    curl -X GET http://localhost:8080/api/products
    ```
- **GET** `/api/products/product/:id` - Get a product by ID
    ```sh
    curl -X GET http://localhost:8080/api/products/product/1
    ```
- **POST** `/api/products` - Create a new product
    ```sh
    curl -X POST http://localhost:8080/api/products -H "Content-Type: application/json" -d '{"id":16,"name":"Tablet","price":30000,"category":"Electronics"}'
    ```
- **PUT** `/api/products/:id` - Update a product
    ```sh
    curl -X PUT http://localhost:8080/api/products/1 -H "Content-Type: application/json" -d '{"id":1,"name":"Smartphone","price":20000,"category":"Electronics"}'
    ```
- **DELETE** `/api/products/:id` - Delete a product
    ```sh
    curl -X DELETE http://localhost:8080/api/products/1
    ```

### Posts

- **GET** `/api/posts` - Get all posts
    ```sh
    curl -X GET http://localhost:8080/api/posts
    ```
- **GET** `/api/posts/:id` - Get a post by ID
    ```sh
    curl -X GET http://localhost:8080/api/posts/1
    ```
- **POST** `/api/posts` - Create a new post
    ```sh
    curl -X POST http://localhost:8080/api/posts -H "Content-Type: application/json" -d '{"id":16,"user_id":1,"title":"New Post","content":"This is a new post."}'
    ```
- **PUT** `/api/posts/:id` - Update a post
    ```sh
    curl -X PUT http://localhost:8080/api/posts/1 -H "Content-Type: application/json" -d '{"id":1,"user_id":1,"title":"My first blog post","content":"This is my first post on this platform!"}'
    ```
- **DELETE** `/api/posts/:id` - Delete a post
    ```sh
    curl -X DELETE http://localhost:8080/api/posts/1
    ```

### Todos

- **GET** `/api/todos` - Get all todos
    ```sh
    curl -X GET http://localhost:8080/api/todos
    ```
- **GET** `/api/todos/:id` - Get a todo by ID
    ```sh
    curl -X GET http://localhost:8080/api/todos/1
    ```
- **POST** `/api/todos` - Create a new todo
    ```sh
    curl -X POST http://localhost:8080/api/todos -H "Content-Type: application/json" -d '{"id":16,"user_id":1,"title":"New Todo","completed":false}'
    ```
- **PUT** `/api/todos/:id` - Update a todo
    ```sh
    curl -X PUT http://localhost:8080/api/todos/1 -H "Content-Type: application/json" -d '{"id":1,"user_id":1,"title":"Buy groceries","completed":false}'
    ```
- **DELETE** `/api/todos/:id` - Delete a todo
    ```sh
    curl -X DELETE http://localhost:8080/api/todos/1
    ```

### Comments
- **GET** `/api/comments` - Get all comments
    ```sh
    curl -X GET http://localhost:8080/api/comments
    ```
- **GET** `/api/comments/:id` - Get a comment by ID
    ```sh
    curl -X GET http://localhost:8080/api/comments/1
    ```
- **POST** `/api/comments` - Create a new comment
    ```sh
    curl -X POST http://localhost:8080/api/comments -H "Content-Type: application/json" -d '{"id":16,"post_id":1,"user_id":1,"content":"Great post!"}'
    ```
- **PUT** `/api/comments/:id` - Update a comment
    ```sh
    curl -X PUT http://localhost:8080/api/comments/1 -H "Content-Type: application/json" -d '{"id":1,"post_id":1,"user_id":1,"content":"Great post!"}'
    ```
- **DELETE** `/api/comments/:id` - Delete a comment
    ```sh
    curl -X DELETE http://localhost:8080/api/comments/1
    ```

### Orders

- **GET** `/api/orders` - Get all orders
    ```sh
    curl -X GET http://localhost:8080/api/orders
    ```
- **GET** `/api/orders/:id` - Get an order by ID
    ```sh
    curl -X GET http://localhost:8080/api/orders/1
    ```
- **POST** `/api/orders` - Create a new order
    ```sh
    curl -X POST http://localhost:8080/api/orders -H "Content-Type: application/json" -d '{"id":16,"user_id":1,"product_id":101,"quantity":2,"status":"Pending"}'
    ```
- **PUT** `/api/orders/:id` - Update an order
    ```sh
    curl -X PUT http://localhost:8080/api/orders/1 -H "Content-Type: application/json" -d '{"id":1,"user_id":1,"product_id":101,"quantity":2,"status":"Pending"}'
    ```
- **DELETE** `/api/orders/:id` - Delete an order
    ```sh
    curl -X DELETE http://localhost:8080/api/orders/1
    ```

## License

This project is licensed under the MIT License.#   j s o n b a z a a r  
 