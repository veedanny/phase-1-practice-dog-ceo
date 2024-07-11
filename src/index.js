// index.js

// URL for fetching random dog images
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

// Function to fetch images and add them to the DOM
async function fetchImages() {
    try {
        // Fetch data from the API
        const response = await fetch(imgUrl);
        const data = await response.json();

        // Select the container where images will be added
        const imageContainer = document.getElementById('image-container');

        // Iterate through the array of image URLs and create <img> elements
        data.message.forEach(imgUrl => {
            const imgElement = document.createElement('img');
            imgElement.src = imgUrl;
            imgElement.alt = 'Random dog image';
            imgElement.classList.add('dog-image'); // Optional: Add a class for styling
            imageContainer.appendChild(imgElement);
        });

    } catch (error) {
        console.log('Error fetching and parsing data', error);
    }
}

// Execute fetchImages function when the page loads
window.addEventListener('load', fetchImages);
// index.js

    // Add change event listener to the dropdown
    const filterDropdown = document.getElementById('filter-dropdown');
    filterDropdown.addEventListener('change', fetchBreeds);



