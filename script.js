// Simple interactivity for recommendations
document.addEventListener("DOMContentLoaded", function() {
    let recommendations = document.querySelectorAll(".recommendation");

    recommendations.forEach((rec, index) => {
        rec.addEventListener("click", function() {
            alert("You clicked on recommendation " + (index + 1));
        });
    });
});
