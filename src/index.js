import Task from "./Task.js";

// Create a new Task object
const exampleTask = new Task(
  "Buy groceries",
  "Purchase fruits, vegetables, and dairy products from the store.",
  new Date("2023-05-04T15:00:00"),
  "medium"
);

// Display the task details
console.log("Title:", exampleTask.title);
console.log("Description:", exampleTask.description);
console.log("Due Date:", exampleTask.dueDate.toISOString());
console.log("Priority:", exampleTask.priority);
console.log("Finished:", exampleTask.finished);
