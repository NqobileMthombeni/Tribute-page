
// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to play videos when they enter the viewport
function playVideosOnScroll() {
    const videos = document.querySelectorAll('.video-grid video');

    videos.forEach(video => {
        if (isInViewport(video)) {
            video.play();
        } else {
            video.pause();
        }
    });
}

// Attach playVideosOnScroll function to scroll event
window.addEventListener('scroll', playVideosOnScroll);

// Call playVideosOnScroll initially to play videos that are already in viewport
playVideosOnScroll();

