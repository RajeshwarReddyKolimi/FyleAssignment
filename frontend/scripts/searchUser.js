let userSearchForm = document.getElementById("user-search-form");
let userSearchInput = document.getElementById("user-search-input");
userSearchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    username = userSearchInput.value;
    if (username.trim() == "") {
        userError.textContent = "Username cannot be empty";
        userError.classList.remove("hide-item");
        userDetails.classList.add("hide-item");
    } else fetchUserDetails();
});
