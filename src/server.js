const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const accountRoutes = require('./routes/account.routes');   // ✅ updated
const inventoryRoutes = require('./routes/inventory.routes');

app.use('/login', accountRoutes);
app.use('/products', inventoryRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Database connected');
  app.listen(process.env.PORT || 8080, () => {
    console.log(`Server is live on port ${process.env.PORT || 8080}`);
  });
}).catch((error) => {
  console.error('DB error:', error.message);
});
