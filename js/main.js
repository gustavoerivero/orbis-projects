
// Get all the elements of the class "close".
let links = document.querySelectorAll(".close");

// Loop through all the elements obtained from the class "close".
links.forEach(function(link){

    // Add a listener event of type "click".
    link.addEventListener("click", function(ev){

        ev.preventDefault();

        // Get the element of the class "Content".
        let content = document.querySelector(".content");

        // Remove the indicated animations.
        content.classList.remove("animate__fadeInDown");
        content.classList.remove("animate__animated");

        // Add new exit animations.
        content.classList.add("animate__fadeOutUp");
        content.classList.add("animate__animated");

        // After a second, redirect to index.html
        setTimeout(function(){
            location.href = "/orbis-projects/";
        }, 600);

        return false;

    });

});