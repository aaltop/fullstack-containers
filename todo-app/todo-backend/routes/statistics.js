const express = require("express");

const { getAddedTodosNum } = require("../redis/todos")


const router = express.Router();


router.get("/", async (req, res) => {
  const value = await getAddedTodosNum();
  res.json({ added_todos: value }).status(200);
});


module.exports = router;