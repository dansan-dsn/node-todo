const connection = require("../model/model");

class TodoControllers {
  static getTodos = (req, res) => {
    connection.query("SELECT * FROM todo_tb", (err, result) => {
      if (err) return res.json({ err: err.message });
      res.status(200).json(result);
    });
  };

  static getTodo = (req, res) => {
    const { id } = req.params;
    connection.query("SELECT * FROM todo_tb WHERE id=?", id, (err, result) => {
      if (err) return res.json({ err: err.message });

      if (result.length === 0)
        return res.status(500).json({ msg: "Id not Found" }).status(404);
      res.status(200).json(result);
    });
  };

  static addTodo = (req, res) => {
    const { title, content, checked } = req.body;
    connection.query(
      "INSERT INTO todo_tb(title, content, checked) VALUES(?,?,?)",
      [title, content, checked],
      (err, result) => {
        if (err) return res.json({ err: err.message }).status(500);

        res.status(201).json({ msg: "Todo added Successfully!", data: result });
      }
    );
  };

  static updateTodo = (req, res) => {
    const { id } = req.params;
    const { title, content, checked } = req.body;
    connection.query(
      "UPDATE todo_tb SET title=?, content=?, checked=? WHERE id=?",
      [title, content, checked, id],
      (err, result) => {
        if (err) return res.json({ err: err.message }).status(500);

        if (result.affectedRows == 0) return res.json({ msg: "Id not Found" });
        if (result.affectedRows == 1 && result.changedRows == 0)
          return res.json({ msg: "same data towards a given id, NO UPDATE" });

        res.status(200).json({ msg: "Todo updated successfully" });
      }
    );
  };

  static deleteTodo = (req, res) => {
    const { id } = req.params;
    connection.query("DELETE FROM todo_tb WHERE id=?", id, (err, result) => {
      if (err) return res.json({ err: err.message }).status(500);

      if (result.affectedRows == 0) return res.json({ msg: "Id not Found" });
      res.status(200).json({ msg: "Todo Deleted successfully" });
    });
  };
}

module.exports = TodoControllers;
