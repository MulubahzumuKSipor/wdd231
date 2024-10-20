let lastVisited = Number(localStorage.getItem('lastVisited') ?? new Date().getTime().toString());
let now = new Date().getTime();
localStorage.setItem('lastVisited', now.toString());

function showWelcomeBack() {
    let minutes = Math.round(((now - lastVisited) / 1000) / 60);
    let days = Math.round(((now - lastVisited) / (1000 * 60 * 60 * 24))); // Calculate days
    let note = "Looks like you're new here. Welcome!";
    
    if (days >= 1) {
        note = `Welcome back! You were gone for ${days} day${days > 1 ? 's' : ''}. We missed you!`;
    }
    
    if (minutes >= 1) {
        note = `Back so soon! Awesome!`;
    }
    
    // Display the message as a popup alert
    alert(note);
}

// Call the function to show the welcome message
showWelcomeBack();


