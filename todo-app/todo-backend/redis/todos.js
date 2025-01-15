const redis = require("./index")

const keys = {
  addedTodosNum: "todos:added_todos:num"
};
/**
 * 
 * @returns zero if not found, else the number of added Todos.
 */
async function getAddedTodosNum()
{
  const value = await redis.getAsync(keys.addedTodosNum);
  return value ? parseInt(value) : 0;
};

async function incrementTodosNum(by = 1)
{
  const key = keys.addedTodosNum
  const oldValue = await getAddedTodosNum();
  await redis.setAsync(key, oldValue+by)
};


module.exports = {
  incrementTodosNum,
  getAddedTodosNum
};