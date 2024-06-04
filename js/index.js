
// This code is for the search functionality on the home page
document.querySelector('.search-button').addEventListener('click', () => {
    const query = document.querySelector('.search-input').value.trim().toLowerCase();
    const messageElement = document.getElementById('message');

    if (query === 'black shirt') {
        window.location.href = './t-shirt-page1.html'; // Replace with your actual t-shirt page URL
    } else {

        alert('Item not available');
    }
});
//this function changes the image gallary image when clicked
function changeImage(src) {
    document.getElementById('mainImage').src = src;
}

// This function shows the content of the selected section
function showContent(sectionId) {
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}
