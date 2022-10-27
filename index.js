const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5001;

app.use(cors());
const course_category = require('./Data/course.json');
const course = require('./Data/courseDetails.json')

app.get('/', (req, res) => {
  res.send('Course Site is ok?');
});

app.get('/courses', (req, res) => {
  res.send(course_category);
})

app.get('/coursepage/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const singleCourse = course.find(c => c.id === id);
  res.send(singleCourse);
})

app.get('/checkout/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const singleCourse = course.find(c => c.id === id);
  res.send(singleCourse);
})

app.listen(port, () => {
  console.log('using port no--', port);
})
