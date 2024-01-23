const repoPagination = document.getElementById("repo-pagination");
let handleRepoError = () => {
    repoPagination.classList.add("hide-item");
    repoContainer.classList.add("hide-item");
    repoLoader.classList.add("hide-item");
};
let handleRepoSuccess = () => {
    repoContainer.classList.remove("hide-item");
    repoPagination.classList.remove("hide-item");
    repoLoader.classList.add("hide-item");
};
