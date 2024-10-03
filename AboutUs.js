function showSlides(slideContainerId, slidesClass) {
    let slideIndex = 0;
    const slides = document.querySelectorAll(`#${slideContainerId} .${slidesClass}`);
    function displaySlides() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    
        slides[slideIndex-1].style.display = "block";  
        setTimeout(displaySlides, 4000); // Change image every 4 seconds
    }
    displaySlides();
}

// Call the showSlides function for each slideshow
showSlides("slideshow1", "slide");
showSlides("slideshow2", "slide");
showSlides("slideshow3", "slide");
showSlides("slideshow4", "slide");
showSlides("slideshow5", "slide");
