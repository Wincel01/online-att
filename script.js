document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("attendance-form");
  const attendeeList = document.getElementById("attendee-list");

  // Load existing attendees from localStorage
  const attendees = JSON.parse(localStorage.getItem("attendees")) || [];
  attendees.forEach(addAttendeeToList);

  // Handle form submission
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();

    if (name) {
      addAttendeeToList(name);
      attendees.push(name);
      localStorage.setItem("attendees", JSON.stringify(attendees));
      form.reset();
    }
  });

  // Add attendee to the list
  function addAttendeeToList(name) {
    const li = document.createElement("li");
    li.textContent = name;
    attendeeList.appendChild(li);
  }
});
