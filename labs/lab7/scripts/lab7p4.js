const newPost = {
  userId: 11,
  title: "Volleyball game this evening!",
  body: "The game is between Thailand and Vietnam.",
};

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(newPost),
})
  .then((response) => response.json())
  .then((data) => {
    document.write("<h1>Adding a New Post</h1>");
    document.write(JSON.stringify(data, null, 2) + "<br><br>");
    document.write(
      `The new post has title as ${data.title} and body as ${data.body}.`
    );
    document.title = data.title;
  })
  .catch((error) => {
    console.error("Error:", error);
  });
