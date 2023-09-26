document.addEventListener("DOMContentLoaded", function () {
    // Get references to your buttons and pages
    const bookBtn = document.getElementById("book-btn");
    const bookBtn1 = document.getElementById("book-btn1");
    const searchBtn = document.getElementById("search-btn");
    const chatbotBtn = document.getElementById("chatbot-btn");
    const homeBtn = document.getElementById("home-btn"); // Reference to the Home button
    const homePage = document.getElementById("home");
    const bookPage = document.getElementById("book");
    const searchPage = document.getElementById("search");
    const chatbotPage = document.getElementById("chatbot");
    
    // Get a reference to the logo image
    const logoImg = document.getElementById("logo-img");

    // Set the desired width and height
    logoImg.style.width = "100px"; // Change to your desired width
    logoImg.style.height = "100px"; // Change to your desired height

    // Event listeners for navigation buttons
    bookBtn.addEventListener("click", function () {
        showPage(bookPage);
    });
    bookBtn1.addEventListener("click", function () {
        showPage(bookPage);
    });

    searchBtn.addEventListener("click", function () {
        showPage(searchPage);
    });

    chatbotBtn.addEventListener("click", function () {
        showPage(chatbotPage);
    });

    homeBtn.addEventListener("click", function () {
        showPage(homePage); // Show the home page when the "Home" button is clicked
    });

    // Function to hide all pages and show the selected one
    function showPage(page) {
        homePage.classList.add("hidden");
        bookPage.classList.add("hidden");
        searchPage.classList.add("hidden");
        chatbotPage.classList.add("hidden");

        page.classList.remove("hidden");
    }
    
    // ... (your previous code remains unchanged)

    // Get references to elements on the search page
    const queryInput = document.getElementById("query");
    const searchResults = document.getElementById("results");
    const searchButton = document.getElementById("search-btn");

    // Event listener for the search button
    searchButton.addEventListener("click", function () {
        const query = queryInput.value.trim();

        if (query !== "") {
            // Call a function to fetch disease information based on the query
            fetchDiseaseInfo(query);
        } else {
            // Clear previous results if the query is empty
            searchResults.innerHTML = "";
        }
    });

    // Function to fetch disease information from the WHO API
    function fetchDiseaseInfo(query) {
        // Construct the API URL based on the query
        const apiUrl = `http://apps.who.int/gho/athena/api/GHO/${query}`;

        // Make a GET request to the API
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                // Display the fetched data in the searchResults element
                displayResults(data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }

    // Function to display search results
    function displayResults(data) {
        // Clear previous results
        searchResults.innerHTML = "";

        // Check if data is empty or an error occurred
        if (!data) {
            searchResults.innerHTML = "No results found.";
            return;
        }

        // Iterate through the data and display it
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                const resultItem = document.createElement("div");
                resultItem.classList.add("result-item");

                // Customize how you want to display each result, e.g., resultItem.innerHTML = data[key];
                
                searchResults.appendChild(resultItem);
            }
        }
    }
});
