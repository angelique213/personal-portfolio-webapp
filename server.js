// Imports the Express framework
const express = require("express");

// Creates the Express app
const app = express();

// Sets the local server port
const PORT = 3000;

// Imports my project data
const projects = require("./data/projects");

// Allows Express to use files from the public folder like CSS
app.use(express.static("public"));

// Sets EJS as the template engine for dynamic pages
app.set("view engine", "ejs");

// Creates the Home page route
app.get("/", (req, res) => {

  // Sends data to index.ejs
  res.render("index", {
    name: "Angelique Legaspi",
    title: "My Personal Portfolio"
  });

});

// Creates the Projects page route
app.get("/projects", (req, res) => {

  // Sends project data to projects.ejs
  res.render("projects", {
    title: "My Projects",
    projects: projects
  });

});

// Creates the Contact page route
app.get("/contact", (req, res) => {

  // Sends data to contact.ejs
  res.render("contact", {
    title: "Contact Me"
  });

});

// Starts the server on localhost:3000
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});