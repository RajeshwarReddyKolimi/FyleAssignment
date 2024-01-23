// Fetch User Details

const userDetails = document.getElementById("user-details");

let fetchUserDetails = async () => {
    handleUserLoading();
    try {
        let res = await fetch(`https://fyle-assignment-backend.onrender.com`, {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
                url: `https://api.github.com/users/${username}`,
            }),
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
