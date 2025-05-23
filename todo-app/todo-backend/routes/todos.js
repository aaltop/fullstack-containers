const express = require('express');
const { Todo } = require('../mongo')
const { incrementTodosNum } = require("../redis/todos")
const router = express.Router();

/* GET todos listing. */
router.get('/', async (_, res) => {
  const todos = await Todo.find({})
  res.send(todos);
});

/* POST todo to listing. */
router.post('/', async (req, res) => {
  const todo = await Todo.create({
    text: req.body.text,
    done: false
  })
  res.send(todo);

  await incrementTodosNum();
});

const singleRouter = express.Router();

const findByIdMiddleware = async (req, res, next) => {
  const { id } = req.params
  req.todo = await Todo.findById(id)
  if (!req.todo) return res.sendStatus(404)

  next()
}

/* DELETE todo. */
singleRouter.delete('/', async (req, res) => {
  await req.todo.delete()  
  res.sendStatus(200);
});

/* GET todo. */
singleRouter.get('/', async (req, res) => {
  res.status(200).json(req.todo.toJSON());
});

/* PUT todo. */
singleRouter.put('/', async (req, res) => {
  req.todo.set(req.body);
  updatedTodo = await req.todo.save();

  res.status(200).json(updatedTodo.toJSON());
});

router.use('/:id', findByIdMiddleware, singleRouter)


module.exports = router;
