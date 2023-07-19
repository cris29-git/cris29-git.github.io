document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const feedback = document.getElementById("feedback").value;
  
    if (name === "" || email === "" || feedback === "") {
      alert("Please fill in all the fields.");
      return;
    }
  
    // Here, you can perform additional actions like sending the data to a server.
    // For this example, I'll just show an alert indicating successful submission.
    alert("Thank you for your feedback!");
    document.getElementById("contactForm").reset();
  });
  