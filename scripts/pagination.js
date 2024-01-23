// Repo pagination
const repoFirstPage = document.getElementById("repo-first-page");
const repoPrevPage = document.getElementById("repo-prev-page");
const repoNextPage = document.getElementById("repo-next-page");
const repoLastPage = document.getElementById("repo-last-page");

const repoPaginator = document.getElementById("repo-paginator");

repoFirstPage.addEventListener("click", () => {
    if (currentPage === 1) return;
    currentPage = 1;
    searchRepos(
        `https://api.github.com/search/repositories`,
        `user:${username} ${currentQuery}`,
        repoLimit,
        currentPage
    );
});
repoLastPage.addEventListener("click", () => {
    if (currentPage === totalPages) return;
    currentPage = totalPages;
    searchRepos(
        `https://api.github.com/search/repositories`,
        `user:${username} ${currentQuery}`,
        repoLimit,
        currentPage
    );
});
repoPrevPage.addEventListener("click", () => {
    if (currentPage === 1) return;
    currentPage--;
    searchRepos(
        `https://api.github.com/search/repositories`,
        `user:${username} ${currentQuery}`,
        repoLimit,
        currentPage
    );
});
repoNextPage.addEventListener("click", () => {
    if (currentPage === totalPages) return;
    ++currentPage;
    searchRepos(
        `https://api.github.com/search/repositories`,
        `user:${username} ${currentQuery}`,
        repoLimit,
        currentPage
    );
});
