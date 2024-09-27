function navigateTo(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = 'none';
    });
    document.getElementById(pageId).style.display = 'block';
}

function runDemo() {
    const uploadImage = document.getElementById('uploadImage');
    const uploadVideo = document.getElementById('uploadVideo');
    const output = document.getElementById('output');

    if (uploadImage.files.length > 0) {
        output.style.display = 'block';
        output.innerHTML = "The student is angry";
    } else if (uploadVideo.files.length > 0) {
        output.style.display = 'block';
        output.innerHTML = "The student is angry";
    } else {
        alert('Please upload an image or a video.');
    }
}

window.onload = function() {
    // Show Home page by default
    navigateTo('home');
};
