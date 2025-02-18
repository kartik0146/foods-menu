document.addEventListener('DOMContentLoaded', () => {
    const foodItems = document.getElementById('food-items');

    // Sample menu items
    const items = [
        { name: 'Pizza', price: '₹250' },
        { name: 'Burger', price: '₹150' },
        { name: 'Pasta', price: '₹200' },
        { name: 'Salad', price: '₹100' }
    ];

    // Function to display menu items
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price}`;
        li.addEventListener('click', () => {
            alert(`You selected: ${item.name}`);
        });
        foodItems.appendChild(li);
    });
});
