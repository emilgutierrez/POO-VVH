// script.js

document.addEventListener('DOMContentLoaded', () => {
    const flexItems = document.querySelectorAll('.flex-item');

    flexItems.forEach((item, index) => {
        item.style.backgroundColor = index % 2 === 0 ? '#e0e0e0' : '#c0c0c0';
    });
});