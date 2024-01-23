// Topics Fetching

let topics = [];
let fetchTopics = async (url) => {
    try {
        let res = await fetch(url, {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
        });
        if (res.ok) {
            topics = await res.json();
            return mapTopics();
        }
    } catch (error) {
        console.error(error);
    }
};
