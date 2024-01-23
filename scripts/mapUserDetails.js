// Map user Details

let mapUserDetails = (details) => {
    username = details.login;
    currentPage = 1;
    searchRepos();

    document.getElementById("user-image").src = details.avatar_url;
    document.getElementById("user-username").textContent = details.login;
    document.getElementById("user-fullname").textContent = details.name;
    document.getElementById("user-email").textContent =
        details.email || "Unknown";
    document.getElementById("user-location").textContent =
        details.location || "Unknown";
    document.getElementById("user-office").textContent =
        details.company || "Unknown";
    document.getElementById("user-followers").textContent = details.followers;
    document.getElementById("user-following").textContent = details.following;
    let userURL = document.getElementById("user-url");
    userURL.textContent = details.html_url;
    userURL.href = details.html_url;
    document.getElementById("user-repos").textContent = details.public_repos;
};
