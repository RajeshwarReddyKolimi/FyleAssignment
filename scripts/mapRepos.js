// Mappin Repos

const repoContainer = document.getElementById("repo-container");
const repoResults = document.getElementById("repo-results");

let mapRepos = (repos) => {
    repoContainer.innerHTML = "";
    repoResults.textContent = `${Math.min(
        (currentPage - 1) * repoLimit + 1,
        repoCount
    )}-${Math.min(currentPage * repoLimit, repoCount)} of ${repoCount} results`;
    repos.map(async (repo) => {
        const repoItem = document.createElement("div");
        repoItem.classList.add("user-repo-item");

        const repoHeader = document.createElement("div");

        repoHeader.classList.add("user-repo-header");
        const repoIcon = document.createElement("i");
        repoHeader
            .appendChild(repoIcon)
            .classList.add("fa-solid", "fa-book-bookmark", "fa-icon");

        const repoName = document.createElement("a");
        repoName.classList.add("user-repo-name");
        repoName.textContent = repo?.name;
        repoName.href = repo?.html_url;
        repoName.target = "_blank";
        repoHeader.appendChild(repoName);

        const repoType = document.createElement("div");
        repoType.textContent = repo.visibility;
        repoType.classList.add("user-repo-type");
        repoHeader.appendChild(repoType);

        repoItem.appendChild(repoHeader);

        const repoDesc = document.createElement("div");
        repoDesc.classList.add("user-repo-desc");
        repoDesc.textContent = repo?.description;
        repoItem.appendChild(repoDesc);

        const repoExtra = document.createElement("div");
        repoExtra.classList.add("user-repo-extra-container");
        repoItem.appendChild(repoExtra);

        const repoForks = document.createElement("a");
        repoForks.textContent = repo?.forks;
        repoForks.href = `${repo?.html_url}/forks`;
        repoForks.target = "_blank";
        repoForks.classList.add("user-repo-extra");
        repoExtra.appendChild(repoForks);

        const repoForksIcon = document.createElement("i");
        repoForksIcon.classList.add("fa-solid", "fa-code-fork", "fa-icon");

        repoForks.appendChild(repoForksIcon);

        const repoStars = document.createElement("a");
        repoStars.href = `${repo?.html_url}/stargazers`;
        repoStars.target = "_blank";
        repoStars.classList.add("user-repo-extra");
        repoStars.textContent = repo?.stargazers_count;
        repoExtra.appendChild(repoStars);

        const repoStarsIcon = document.createElement("i");
        repoStars.appendChild(repoStarsIcon);
        repoStarsIcon.classList.add("fa-regular", "fa-star", "fa-icon");

        const repoViews = document.createElement("div");
        repoViews.classList.add("user-repo-extra");
        repoViews.textContent = repo.watchers;
        repoViews
            .appendChild(document.createElement("i"))
            .classList.add("fa-eye", "fa-solid", "fa-icon");
        repoExtra.appendChild(repoViews);

        let topics = await fetchTopics(repo.languages_url);
        repoItem.appendChild(topics);
        repoContainer.appendChild(repoItem);
    });
};
