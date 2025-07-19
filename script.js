// script.js

// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    console.log("Website Loaded");

    // Get reference to the button and the output paragraph
    const button = document.getElementById("changeTextBtn");
    const output = document.getElementById("outputText");

    // Add event listener to the button
    button.addEventListener("click", function () {
        output.textContent = "You clicked the button! 🎉";
    });
});
