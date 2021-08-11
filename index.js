require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const db = require('./db');

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// Routes

// 1. Create a todo
app.post('/todos', async (req, res) => {
  try {
    const { description } = req.body;

    const newTodo = await db.query(
      'INSERT INTO todo (description) VALUES($1) RETURNING *;',
      [description]
    );

    res.status(201).json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// 2. Get all todos
app.get('/todos', async (req, res) => {
  try {
    const todos = await db.query('SELECT * FROM todo;');

    res.status(200).json(todos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// 3. Get a todo
app.get('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await db.query('SELECT * FROM todo WHERE todo_id = $1', [id]);

    res.status(200).json(todo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// 4. Update a todo
app.put('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;

    const updateTodo = await db.query(
      'UPDATE todo SET description = $1 WHERE todo_id = $2 RETURNING *;',
      [description, id]
    );

    res.status(200).json(updateTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// 5. Delete a todo
app.delete('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;

    await db.query('DELETE FROM todo WHERE todo_id = $1;', [id]);

    res.status(200).json('Todo Deleted');
  } catch (err) {
    console.error(err.message);
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server listening on port ${port}`));
