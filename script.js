const API_KEY = 'USIeruXbuPJsrM4TIcR33GWr4gUBnmwLQJM1gLkh'; // Replace with your API key
const BASE_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos';

async function fetchMarsRoverPhotos(date) {
    const url = ${BASE_URL}?earth_date=${date}&api_key=${API_KEY};
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch photos');
        }
        const data = await response.json();
        displayPhotos(data.photos); // Function to display the photos
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to load photos, please try again later.');
    }
}

function displayPhotos(photos) {
    const gallery = document.getElementById('photo-gallery');
    gallery.innerHTML = ''; // Clear any existing photos
    photos.slice(0, 3).forEach(photo => {
        const img = document.createElement('img');
        img.src = photo.img_src;
        img.alt = Mars Rover photo taken on ${photo.earth_date};
        gallery.appendChild(img);
    });
}

document.getElementById('load-photos-btn').addEventListener('click', () => {
    const date = document.getElementById('date-picker').value;
    if (date) {
        fetchMarsRoverPhotos(date);
    } else {
        alert('Please select a date');
    }
});

// Load photos for a default date
window.onload = () => {
    fetchMarsRoverPhotos('2020-07-20'); // Replace with a significant date
};