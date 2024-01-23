const userError = document.getElementById("user-error");
let handleUserError = () => {
    userError.textContent = "Username does not exist";
    userError.classList.remove("hide-item");
    userLoader.classList.add("hide-item");
    userDetails.classList.add("hide-item");
};

let handleUserSuccess = () => {
    userError.textContent = "";
    userError.classList.add("hide-item");
    userLoader.classList.add("hide-item");
    userDetails.classList.remove("hide-item");
};
