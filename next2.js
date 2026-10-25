document.getElementById("7").addEventListener("change", (event) => {
  const Button = document.getElementById("5");

  if (event.target.checked) {
    // Reveal your hidden "Next" button when checked
    Button.style.display = "block";
  } else {
    // Hide it again if they uncheck the box
    Button.style.display = "none";
  }
});

document.getElementById("5").addEventListener("click", (event) => {
if(confirm("Are you sure")){
    window.location.href="next3.html"
}
});
