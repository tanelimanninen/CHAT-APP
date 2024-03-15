//SCRIPT FILE FOR ADDING SEED DATA TO MONGO DATABASE
const mongoose = require('mongoose');
require('dotenv').config();

const User = require('./models/user');
const Post = require('./models/post');

const seedData = [
    {
        user: 'peksii',
        text: 'Tällä kertaa ei onnistunut. Onnittelut Alexille.'
    },
];

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB for seeding');
    
    // Insert seed data into the User collection
    return Post.insertMany(seedData);
  })
  .then(() => {
    console.log('Seed data added successfully');
  })
  .catch((error) => {
    console.error('Error seeding data:', error.message);
  })
  .finally(() => {
    mongoose.connection.close();
  });
