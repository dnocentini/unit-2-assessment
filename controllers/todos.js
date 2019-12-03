const todos = require("../data/todos");

module.exports = {
  index,
  create,
  delete: deleteTodo
};

function index(req, res) {
  res.render('index', {
    todos
  })
};

function create(req, res) {
  req.body.done = false;
  todos.push(req.body)
  res.redirect('/');

}

function deleteTodo(req, res) {
  todos.splice(req.params.id, 1)
  res.redirect('/')
}

