const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");
const greeting = document.getElementById("greeting");
const attendeeCount = document.getElementById("attendeeCount");
const progressBar = document.getElementById("progressBar");

let count = 0;
const maxCount = 50;

function updateProgress() {
  const percentage = (count / maxCount) * 100;
  attendeeCount.textContent = count;
  progressBar.style.width = `${percentage}%`;
}

// Handle form submission
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form values
  const name = nameInput.value.trim();
  const team = teamSelect.value;
  const teamName = teamSelect.options[teamSelect.selectedIndex].textContent;

  count = count + 1;
  updateProgress();

  // Show greeting with the attendee's name and team
  const message = `Welcome, ${name}! You’re checked in for ${teamName}.`;
  greeting.textContent = message;

  form.reset();
});
