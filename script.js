document.addEventListener('DOMContentLoaded', (event) => {
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }
    const backgroundImages = ['bg-image-1', 'bg-image-2'];
    // Assuming the first button in your HTML is for the first background, and so on.
    const buttons = document.querySelectorAll('.background-toggle');
    
    buttons.forEach((button, index) => {
        button.addEventListener('click', function() {
            // Remove all background classes first
            backgroundImages.forEach(bgClass => document.body.classList.remove(bgClass));
            // Add the specific background class based on which button was clicked
            document.body.classList.add(backgroundImages[index]);
        });
    });
});


document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.removeItem('darkMode');
    }
});

// Updated to select all elements with the 'background-toggle' class
document.querySelectorAll('.background-toggle').forEach(item => {
    item.addEventListener('click', function() {
        document.body.classList.remove(backgrounds[currentIndex]);
        currentIndex = (currentIndex + 1) % backgrounds.length;
        document.body.classList.add(backgrounds[currentIndex]);
    });
});
