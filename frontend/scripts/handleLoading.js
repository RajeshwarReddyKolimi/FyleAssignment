const userLoader = document.getElementById("user-loader");
const repoSearch = document.getElementById("repo-search");
let handleUserLoading = () => {
    currentQuery = "";
    repoSearchInput.value = "";
    userDetails.classList.add("hide-item");
    userError.classList.add("hide-item");
    userLoader.classList.remove("hide-item");
};

const repoLoader = document.getElementById("repo-loader");
let handleRepoLoading = () => {
    repoPagination.classList.add("hide-item");
    repoContainer.classList.add("hide-item");
    repoLoader.classList.remove("hide-item");
    userLoader.classList.add("hide-item");
    userError.classList.add("hide-item");
};
