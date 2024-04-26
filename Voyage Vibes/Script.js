// app.js
document.addEventListener('DOMContentLoaded', function () {
    const destinationGrid = document.querySelector('.destination-grid');
    const blogGrid = document.querySelector('.blog-grid');

    // Sample data for destinations and blog posts
    const destinations = [
        { name: 'Paris', image: 'paris.jpg' },
        { name: 'Tokyo', image: 'tokyo.jpg' },
        { name: 'New York', image: 'new-york.jpg' },
        // Add more destinations here
    ];

    const blogPosts = [
        { title: '10 Must-Visit Attractions in Paris', author: 'John Doe', image: 'paris-attractions.jpg' },
        { title: 'Discover the Hidden Gems of Tokyo', author: 'Jane Smith', image: 'tokyo-hidden-gems.jpg' },
        { title: 'A Local\'s Guide to New York City', author: 'Alex Johnson', image: 'new-york-local-guide.jpg' },
        // Add more blog posts here
    ];

    // Function to create destination cards
    function createDestinationCard(destination) {
        const card = document.createElement('div');
        card.classList.add('destination-card');
        card.innerHTML = `
            <img src="images/${destination.image}" alt="${destination.name}">
            <h3>${destination.name}</h3>
        `;
        destinationGrid.appendChild(card);
    }

    // Function to create blog post cards
    function createBlogPostCard(post) {
        const card = document.createElement('div');
        card.classList.add('blog-post-card');
        card.innerHTML = `
            <img src="images/${post.image}" alt="${post.title}">
            <h3>${post.title}</h3>
            <p>By ${post.author}</p>
        `;
        blogGrid.appendChild(card);
    }

    // Populate destination grid
    destinations.forEach(destination => createDestinationCard(destination));

    // Populate blog grid
    blogPosts.forEach(post => createBlogPostCard(post));
});
