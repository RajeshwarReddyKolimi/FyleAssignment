let paginate = () => {
    repoPaginator.innerHTML = "";
    if (repoCount === 0) repoContainer.textContent = "No repositories found";
    if (repoCount > 0) {
        if (currentPage != 1) repoFirstPage.classList.remove("button-disabled");
        else repoFirstPage.classList.add("button-disabled");

        if (currentPage != totalPages)
            repoLastPage.classList.remove("button-disabled");
        else repoLastPage.classList.add("button-disabled");

        if (currentPage > 1) repoPrevPage.classList.remove("button-disabled");
        else repoPrevPage.classList.add("button-disabled");

        if (currentPage != totalPages)
            repoNextPage.classList.remove("button-disabled");
        else repoNextPage.classList.add("button-disabled");
    }
    let prev = "...";
    for (let i = 1; i <= totalPages; i++) {
        if (
            i == 1 ||
            i == totalPages ||
            i == currentPage ||
            i + 1 == currentPage ||
            i - 1 == currentPage
        ) {
            let page = document.createElement("button");
            page.textContent = i;
            if (i == currentPage) page.classList.add("pagination-current");

            page.classList.add("paginator-item");
            page.addEventListener("click", () => {
                if (currentPage !== i) {
                    currentPage = i;
                    searchRepos();
                }
            });
            repoPaginator.appendChild(page);
            prev = "";
        } else {
            if (prev != "...") {
                let page = document.createElement("button");
                page.classList.add("paginator-item", "paginator-spread");
                page.innerHTML = `<i class="fa-solid fa-ellipsis"></i>`;
                repoPaginator.appendChild(page);
            }
            prev = "...";
        }
    }
};
