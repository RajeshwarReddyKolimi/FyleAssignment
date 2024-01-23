// Searching Repos
const repoSearchForm = document.getElementById("repo-search-form");
const repoSearchInput = document.getElementById("repo-search-input");
const limitControl = document.getElementById("limit-select");

limitControl.addEventListener("change", () => {
    repoLimit = limitControl.value;
    currentPage = 1;
    searchRepos();
});

let currentQuery = "";

repoSearchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    currentQuery = repoSearchInput.value;
    currentPage = 1;
    searchRepos();
});

let searchRepos = async () => {
    handleRepoLoading();
    try {
        const repoURL = `https://api.github.com/search/repositories?q=user:${username} ${currentQuery}&per_page=${repoLimit}&page=${currentPage}`;
        let res = await fetch("http://localhost:3000", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
                url: repoURL,
            }),
        });
        if (res.ok) {
            handleRepoSuccess();
            repoList = await res.json();
            repoCount = repoList.total_count;
            totalPages = Math.ceil(repoCount / repoLimit);
            mapRepos(repoList.items);
            paginate();
        } else {
            handleRepoError();
        }
    } catch (error) {
        console.error(error);
    }
};
