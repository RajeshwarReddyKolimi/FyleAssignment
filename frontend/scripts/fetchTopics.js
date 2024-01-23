// Topics Fetching

let topics = [];
let fetchTopics = async (url) => {
    try {
        let res = await fetch("http://localhost:3000", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
                url,
            }),
        });
        if (res.ok) {
            topics = await res.json();
            return mapTopics();
        }
    } catch (error) {
        console.error(error);
    }
};
