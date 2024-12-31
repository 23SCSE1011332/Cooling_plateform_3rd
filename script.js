const searchButton = document.getElementById("searchButton");
const searchResults = document.getElementById("searchResults");

searchButton.addEventListener("click", () => {
    const ingredient = document.getElementById("ingredient").value.trim();
    if (ingredient === "") {
        alert("Please enter an ingredient.");
        return;
    }

    searchResults.innerHTML = `<p>Searching for recipes with "${ingredient}"...</p>`;

    // Simulating search results (Replace this with real API call)
    setTimeout(() => {
        searchResults.innerHTML = `
            <div class="recipe-card">
                <h3>${ingredient} Salad</h3>
                <p>A healthy and delicious ${ingredient} salad recipe.</p>
            </div>
            <div class="recipe-card">
                <h3>${ingredient} Soup</h3>
                <p>Warm and comforting ${ingredient} soup for chilly days.</p>
            </div>
        `;
    }, 1000);
});
