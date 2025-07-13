# 🌱 Plantsy

Plantsy is a React-based plant management app that allows users to view, add, search, update, and delete plants. It also supports toggling availability status and editing plant prices, all backed by a JSON server API.

## 📦 Features

- ✅ Fetch all plants from an API
- 🔍 Search for plants by name
- ➕ Add a new plant (name, image, price)
- ❌ Delete a plant
- 🔄 Toggle sold out / available status
- 💲 Edit a plant's price
- ⚡ Mobile responsive layout

## 🛠️ Built With

- React (Functional components + Hooks)
- JSON Server (Fake REST API)
- JavaScript (ES6+)
- CSS

## 🚀 Getting Started

### Prerequisites

- Node.js
- JSON Server installed globally or locally

### Running the Project

1. **Clone or unzip the project**  
2. Install dependencies:

   ```bash
   npm install

3. Start JSON Server (in root directory where db.json exists)
   json-server --watch db.json --port 6001

4. Start the React app:
  npm start

  🗂️ Project Structure

  Plantsy/
├── public/
├── src/
│   ├── components/
│   │   ├── NewPlantForm.js
│   │   ├── PlantList.js
│   │   └── Search.js
│   ├── App.js
│   ├── index.css
│   └── index.js
├── db.json
└── README.md

📬 API Endpoint

GET /plants

POST /plants

PATCH /plants/:id

DELETE /plants/:id

👤 Author
Dom Dev
Feel free to connect if you want to collaborate!

📄 License
This project is for educational/demo purposes.

