const Todos = require("../models/todo");

module.exports.home = function (req, res) {
  Todos.find({}, (err, todo) => {
    if (err) {
      console.log(`Error ${err}`);
      return;
    }
    return res.render("home", {
      title: "Todo App",
      Todos: todo,
    });
  });
};

module.exports.createTodo = function (req, res) {
  console.log(req.body);
  Todos.create(
    {
      task: req.body.task,
      category: req.body.category,
      dueDate: req.body.dueDate,
    },
    (err, newTodo) => {
      if (err) {
        console.log("Error in to creating a todo", err);
        return;
      }
      console.log(`******************** ${newTodo}`);
      return res.redirect("back");
    }
  );
};

module.exports.deleteTodo = function (req, res) {
    const id = req.query.id;
  Todos.findByIdAndDelete(id, (err) => {
    if (err) {
      console.log("Error while deleting a todo:", err);
      return;
    }
  });
  return res.redirect("back");
};
