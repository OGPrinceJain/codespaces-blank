document.getElementById("search-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let searchQuery = document.getElementById("search-query").value;

    // Add the search query to recent searches
    let recentSearches = JSON.parse(localStorage.getItem("recentSearches")) || [];
    if (!recentSearches.includes(searchQuery)) {
        recentSearches.push(searchQuery);
        localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
    }

    // Show the sidebar with recent searches
    showSidebar();

    // Clear the search query
    document.getElementById("search-query").value = "";

    // Display the search results
    displayResults(searchQuery);
});

// Function to display results (placeholder for now)
function displayResults(query) {
    let resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `<div class="result-item"><p>Results for: ${query}</p></div>`;
}

// Function to show the sidebar
function showSidebar() {
    let sidebar = document.getElementById("sidebar");
    sidebar.classList.add("active");

    // Update the recent searches
    let recentSearches = JSON.parse(localStorage.getItem("recentSearches")) || [];
    let recentSearchesList = document.getElementById("recent-searches");
    recentSearchesList.innerHTML = '';
    recentSearches.forEach(function(search) {
        let li = document.createElement("li");
        li.textContent = search;
        li.addEventListener("click", function() {
            displayResults(search);
        });
        recentSearchesList.appendChild(li);
    });
}

