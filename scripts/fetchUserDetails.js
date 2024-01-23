// Fetch User Details

const userDetails = document.getElementById("user-details");

let fetchUserDetails = async () => {
    handleUserLoading();
    try {
        let res = await fetch(`https://api.github.com/users/${username}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        if (res.ok) {
            data = await res.json();
            handleUserSuccess();
            mapUserDetails(data);
        } else {
            handleUserError();
        }
    } catch (error) {
        console.error(error);
    }
};
