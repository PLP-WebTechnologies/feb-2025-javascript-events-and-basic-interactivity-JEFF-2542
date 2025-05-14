// Event Handling
document.getElementById("clickBtn").addEventListener("click", function () {
    alert("Button clicked! 🎉");
  });
  
  document.getElementById("hoverBox").addEventListener("mouseover", function () {
    console.log("You're hovering over the box!");
  });
  
  document.getElementById("keyInput").addEventListener("keypress", function (event) {
    console.log("Key pressed:", event.key);
  });
  
  document.getElementById("clickBtn").addEventListener("dblclick", function () {
    alert("Double-clicked! 🤫");
  });
  
  // Interactive Elements
  document.getElementById("changeTextBtn").addEventListener("click", function () {
    this.textContent = "Text Changed!";
    this.style.backgroundColor = "green";
    this.style.color = "white";
  });
  
  // Image Gallery
  const images = [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150/0000FF",
    "https://via.placeholder.com/150/FF0000"
  ];
  let currentImage = 0;
  
  document.getElementById("nextImageBtn").addEventListener("click", function () {
    currentImage = (currentImage + 1) % images.length;
    document.getElementById("galleryImage").src = images[currentImage];
  });
  
  // Tabs
  const tabButtons = document.querySelectorAll(".tab-btn");
  
  tabButtons.forEach(button => {
    button.addEventListener("click", function () {
      document.querySelectorAll(".tab-content").forEach(tab => {
        tab.style.display = "none";
      });
      document.getElementById(this.dataset.tab).style.display = "block";
    });
  });
  
  // Form Validation
  document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
  
    let message = "";
  
    if (name === "") {
      message = "Name is required!";
    } else if (!email.includes("@")) {
      message = "Please enter a valid email!";
    } else if (password.length < 8) {
      message = "Password must be at least 8 characters!";
    } else {
      message = "Form submitted successfully! 🎉";
    }
  
    document.getElementById("formFeedback").textContent = message;
  });
  
  // Real-time Password Feedback
  document.getElementById("password").addEventListener("input", function () {
    const feedback = document.getElementById("formFeedback");
    if (this.value.length < 8) {
      feedback.textContent = "Password too short!";
    } else {
      feedback.textContent = "Password looks good!";
    }
  });