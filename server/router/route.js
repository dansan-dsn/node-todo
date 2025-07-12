const express = require("express");
const router = express.Router();
const TodoControllers = require("../controllers/todo.services");

router
  .get("/", TodoControllers.getTodos)

  .get("/:id", TodoControllers.getTodo)

  .post("/create", TodoControllers.addTodo)

  .put("/update/:id", TodoControllers.updateTodo)

  .delete("/remove/:id", TodoControllers.deleteTodo);

module.exports = router;
