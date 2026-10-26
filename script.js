function getPostsWithCallback(callback) {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
      const sorted = data.sort((a, b) => b.title.length - a.title.length);
      callback(sorted);
    });
}

function getCommentsWithCallback(callback) {
  fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(data => {
      const sorted = data.sort((a, b) => a.name.localeCompare(b.name));
      callback(sorted);
    });
}

function getUsersWithPromise() {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      return data.map(user => ({
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone
      }));
    });
}

function getTodosWithPromise() {
  return fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => {
      return data.filter(todo => !todo.completed);
    });
}

async function getPostsAsync() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data.sort((a, b) => b.title.length - a.title.length);
}

async function getCommentsAsync() {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments');
  const data = await response.json();
  return data.sort((a, b) => a.name.localeCompare(b.name));
}

async function getUsersAsync() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return data.map(user => ({
    id: user.id,
    name: user.name,
    username: user.username,
    email: user.email,
    phone: user.phone
  }));
}

async function getTodosAsync() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await response.json();
  return data.filter(todo => !todo.completed);
}