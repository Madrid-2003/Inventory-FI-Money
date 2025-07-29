# 📦 Fi Money - Inventory Management System

This is a backend system designed for a basic inventory management tool. It allows users to authenticate using JWT and perform operations like adding products, updating product quantities, and retrieving product lists with pagination.

---

## 🚀 Features

### Core Functionality

- 🔐 *User Authentication*: Secure registration and login with JWT tokens
- 📋 *Product Management*: Add, search, and manage inventory items
- 📊 *Inventory Tracking*: Real-time stock level monitoring with low-stock alerts
- 📈 *Analytics Dashboard*: Total products, inventory value, and stock status
- 🔎 *Search & Pagination*: Efficient product browsing
- ⚙️ Backend-only focus, with simple static frontend for interaction

### Technical Highlights

- ✅ *RESTful API* with Swagger/OpenAPI documentation
- 🛢 *MongoDB* with Mongoose ODM
- 🔐 *JWT Authentication* + bcrypt hashing
- 🚀 *Real-time Data Refresh*
- 🧪 *Server-side Validation & Error Handling*

---

## 🛠 Tech Stack

### Frontend

- HTML + CSS
- JavaScript (Fetch API)

### Backend


- Node.js + Express.js
- MongoDB (with Mongoose)
- JWT for authentication
- bcrypt for password hashing
- dotenv for environment config
- CORS for cross-origin requests

---

## 📦 Setup Instructions

### Prerequisites

- Node.js (v16+)
- MongoDB (local or Atlas)
- npm or yarn

### 🔧 Backend Setup

bash
cd src
npm install


---

### ✨ Create a .env file in the Backend directory
env
# .env (DO NOT COMMIT THIS FILE)

PORT=8080
JWT_SECRET=supersecretkey123
MONGO_URI=mongodb+srv://wwwmadridmandalin:madrid123@cluster0.jvefswr.mongodb.net/inventoryDB?retryWrites=true&w=majority&appName=Cluster0


> ⚠ *Note:* Replace DATABASE_URL and ACCESS_TOKEN_SECRET with your actual MongoDB credentials and a secure JWT secret key.

---

### ▶ Start the Backend Server


npm run dev     # development
# or
npm start       # production


- API runs at: [http://localhost:8080](http://localhost:8080)  


---

## 💻 Frontend (Static)

Open directly in the browser:

- *Login/Register:* [http://localhost:8080/public/index.html](http://localhost:8080/public/index.html)
- *Dashboard (Product Operations):* [http://localhost:8080/public/products.html](http://localhost:8080/public/products.html)

---

## 🔐 API Endpoints

### 🛡 Auth

| Method | Endpoint          | Description         |
|--------|-------------------|---------------------|
| POST   | /login/register | Register new user   |
| POST   | /login          | Login and get token |

---

## 📦 Product API (Requires Bearer Token)

| Method | Endpoint                    | Description             |
|--------|-----------------------------|-------------------------|
| GET    | /products                 | Get paginated products  |
| POST   | /products                 | Add new product         |
| PUT    | /products/:id/quantity    | Update product quantity |

---

## 📦 Product API (Requires Bearer Token)

| Method | Endpoint                    | Description             |
|--------|-----------------------------|-------------------------|
| GET    | /products                 | Get paginated products  |
| POST   | /products                 | Add new product         |
| PUT    | /products/:id/quantity    | Update product quantity |

---




### 📁 Project Structure

```bash
inventory-management/
├── public/                   
│   ├── index.html              
│   ├── products.html           
│   └── style.css               
├── src/
│   ├── config/                
│   ├── controllers/           
│   ├── models/                  
│   ├── middlewares/            
│   │   └── token.guard.js
│   ├── routes/                 
│   │   ├── account.routes.js   
│   │   └── inventory.routes.js 
│   └── server.js               
├── .env                        
├── .gitignore
├── package.json
├── package-lock.json
└── README.md

```

## 🧪 Testing

You can test the app using:

- ✅ Postman / Thunder Client  
- ✅ Static frontend UI under /public  
- ✅ cURL or Swagger (future)

### ✅ Test Scenarios

- ✅ Register/Login  
- ✅ Add product  
- ✅ Get product list  
- ✅ Update product quantity

---

## 🚀 Deployment

### 🔧 Backend Deployment

- Set production environment variables  
- Ensure MongoDB connection string is configured  
- Deploy to your preferred platform (Heroku, AWS, DigitalOcean, etc.)

### 💻 Frontend Deployment

Build the production bundle:

cd public
npm run build


## 🌍 Environment Considerations

- Use strong JWT secrets in production  
- Configure CORS properly for your domain  
- Use HTTPS in production  
- Set up proper MongoDB indexes for performance

---

## 🤝 Contributing

Contributions are welcome!  
Please feel free to submit a Pull Request.

For major changes, please open an issue first to discuss what you would like to change.

### 📌 Development Guidelines

- Follow the existing code style  
- Add tests for new features  
- Update documentation as needed  
- Ensure all tests pass before submitting

---

## 📄 License

This project is open source and available under the *MIT License*.

---

## 👤 Author

Madrid-2003
