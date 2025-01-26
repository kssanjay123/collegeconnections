// Event listener to handle the DOM content loaded event
document.addEventListener("DOMContentLoaded", () => {
    // Welcome message when the page loads
    console.log("Welcome to the College Network Website!");
  
    // Scroll-to-top button functionality
    const scrollToTopButton = document.createElement("button");
    scrollToTopButton.innerText = "Back to Top";
    scrollToTopButton.id = "scrollToTopBtn";
    document.body.appendChild(scrollToTopButton);
  
    // Hide the scroll-to-top button initially
    scrollToTopButton.style.display = "none";
  
    // Show or hide the scroll-to-top button based on scrolling
    window.addEventListener("scroll", () => {
      if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        scrollToTopButton.style.display = "block";
      } else {
        scrollToTopButton.style.display = "none";
      }
    });
  
    // Scroll to top functionality
    scrollToTopButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  
    // Form validation for contact form (if you decide to add one)
    const contactForm = document.querySelector("#contactForm");
  
    if (contactForm) {
      contactForm.addEventListener("submit", (event) => {
        const emailInput = contactForm.querySelector('input[name="email"]');
        const messageInput = contactForm.querySelector('textarea[name="message"]');
  
        if (emailInput.value === "" || messageInput.value === "") {
          alert("Please fill out both email and message fields.");
          event.preventDefault();
        }
      });
    }
  
    // Function to display a dynamic list of events from an array
    const events = [
      { title: "Annual Tech Conference", date: "15th February", description: "A tech conference with top industry speakers." },
      { title: "Online Coding Challenge", date: "25th February", description: "A chance to test your coding skills with others." },
      { title: "Annual Sports Meet", date: "5th March", description: "Participate in various sports events." }
    ];
  
    const eventsSection = document.querySelector("#eventsList");
    if (eventsSection) {
      events.forEach(event => {
        const eventDiv = document.createElement("div");
        eventDiv.classList.add("event");
        eventDiv.innerHTML = `
          <h3>${event.title}</h3>
          <p><strong>Date:</strong> ${event.date}</p>
          <p>${event.description}</p>
        `;
        eventsSection.appendChild(eventDiv);
      });
    }
  });