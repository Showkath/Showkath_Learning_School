// Add JavaScript functionality here
document.addEventListener("DOMContentLoaded", function() {
  const courseList = document.getElementById("course-list");
  const courses = ["Web Development", "Programming with Python", "Data Science Fundamentals", "Graphic Design"];

  // Populate the course list dynamically
  courses.forEach(course => {
    const listItem = document.createElement("li");
    listItem.textContent = course;
    courseList.appendChild(listItem);
  });
});