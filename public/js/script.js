(() => {
// Define the list of restaurants
const restaurants = [
    {
      name: 'Italiano Pizza',
      address: '123 Main St, Anytown USA',
      phone: '555-555-1234',
      rating: 4.2
    },
    {
      name: 'Burger Joint',
      address: '456 Elm St, Anytown USA',
      phone: '555-555-5678',
      rating: 3.9
    },
    {
      name: 'Sushi Palace',
      address: '789 Oak St, Anytown USA',
      phone: '555-555-9012',
      rating: 4.8
    },
    {
      name: 'Mexican Grill',
      address: '321 Maple St, Anytown USA',
      phone: '555-555-3456',
      rating: 4.1
    },
    {
      name: 'Thai Kitchen',
      address: '654 Pine St, Anytown USA',
      phone: '555-555-7890',
      rating: 4.6
    },
    {
      name: 'Steakhouse',
      address: '987 Cedar St, Anytown USA',
      phone: '555-555-2345',
      rating: 4.4
    }
  ];

  const list = document.getElementById('restaurants')
  
  restaurants.forEach(r => {
    let html = `
    <div class=" shadow h-72 p-4 rounded">
        <h1 class="text-xl font-bold text-yellow-500">${r.name}</h1>
        <div class="leading-8 text-1xl w-72">
            <p>Address: ${r.address}</p>
            <p>contact: ${r.contact}</p>
            <p>rating: ${r.rating}</p>
            <div class="bg-green-500 w-32 mt-8 text-center text-white text-2xlg rounded ">
                <button>Read More</button>
            </div>
        </div>
    </div>
    `
    list.innerHTML += html

  })

// Store the list of restaurants in localStorage
localStorage.setItem('restaurants', JSON.stringify(restaurants));
})()