(() => {
    // Retrieve the list of restaurants from localStorage
    const restaurants = JSON.parse(localStorage.getItem('restaurants'));

    function searchRestaurantsByName(resList, name) {
        // Create an empty array to store matching restaurants
        const matchingRestaurants = [];

        // Loop through the list of restaurants
        for (let i = 0; i < resList.length; i++) {
            // Check if the restaurant name contains the search query (case-insensitive)
            if (resList[i].name.toLowerCase().includes(name.toLowerCase())) {
                // Add the matching restaurant to the array
                matchingRestaurants.push(resList[i]);
            }
        }

        // Return the array of matching restaurants
        return matchingRestaurants;
    }

    const searchBtn = document.getElementById('search-btn')
    const list = document.getElementById('restaurants')

    searchBtn.addEventListener('click', function () {
        // get search value

        const value = document.getElementById('search-str').value
        if (value === '') {
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
            return
        }

        const result = searchRestaurantsByName(restaurants, value)

        list.innerHTML = ''

        result.forEach(r => {
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



    })
})()