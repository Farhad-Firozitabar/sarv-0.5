require('dotenv').config({ path: __dirname + '/.env' });
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dbURL = process.env.DB_URL;

const app = express();
const port = 3001;

// Connect to MongoDB (make sure your MongoDB server is running)
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('error', (error) => console.error('MongoDB connection error:', error));
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use(cors());
app.use(bodyParser.json());

const projectSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  phoneNumber: String,
  email: String,
  projectDescription: String,
  projectType: String,
});

const Project = mongoose.model('Project', projectSchema);

app.post('/projects', (req, res) => {
  const formData = req.body;
  const project = new Project(formData);

  project.save()
    .then((project) => {
      console.log('Project saved:', project);
      res.status(201).json(project);
    })
    .catch((error) => {
      console.error('Error saving project:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
