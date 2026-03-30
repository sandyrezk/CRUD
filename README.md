# 🚀 Full Stack CRUD Project

A complete Full Stack CRUD (Create, Read, Update, Delete) application built using Node.js, Express, and MongoDB for the backend, with a simple frontend using HTML & CSS. All APIs were tested using Postman.

---

## 📌 Features

* ✅ Create new data
* 📖 Read all data or single item
* ✏️ Update existing data
* 🗑️ Delete data
* 🌐 Simple Frontend using HTML & CSS
* 🔗 RESTful API integration
* ⚡ Organized and scalable project structure

---

## 🛠️ Tech Stack

### 🔹 Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### 🔹 Frontend

* HTML
* CSS

### 🔹 Tools

* Postman (API Testing)

---

## 📂 Project Structure

```id="cxh2q8"
project/
│
├── controllers/
│   ├── auth.controller.js
│   ├── group.controller.js
│   └── message.controller.js
│
├── routes/
├── models/
├── public/        # HTML & CSS files
├── config/
├── server.js
└── package.json
```

---

## ⚙️ Installation

1. Clone the repository:

```id="kxfy76"
git clone https://github.com/your-username/your-repo.git
```

2. Navigate into the project folder:

```id="c3n8q0"
cd your-repo
```

3. Install dependencies:

```id="3j1p9s"
npm install
```

4. Create a `.env` file:

```id="c5rr4o"
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

5. Run the server:

```id="w9t9dp"
npm start
```

---

## 🌐 Frontend Usage

* Open the HTML files from the `public` folder in your browser
* The frontend is connected to the backend API
* You can perform all CRUD operations directly from the UI

---

## 📡 API Endpoints

### 🔹 Create

```id="qrfbq4"
POST /api/resource
```

### 🔹 Read All

```id="4e0gnb"
GET /api/resource
```

### 🔹 Read One

```id="m1njc7"
GET /api/resource/:id
```

### 🔹 Update

```id="l1b1xz"
PUT /api/resource/:id
```

### 🔹 Delete

```id="txo3pt"
DELETE /api/resource/:id
```

---

## 🧪 Testing

All endpoints were tested using Postman to ensure correct functionality and responses.

---

## 💾 Database

MongoDB is used as the main database with Mongoose for schema and data handling.

---

## 🤝 Contributing

Feel free to fork this project and submit pull requests.

---

## 📜 License

This project is licensed under the MIT License.

---

## ⭐ Support

If you like this project, don't forget to give it a star ⭐
