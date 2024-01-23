// Mapping Topics

let mapTopics = () => {
    let topicNames = [];
    let topicContainer = document.createElement("div");
    topicContainer.classList.add("topic-container");

    for (let topic in topics) topicNames.push(topic);

    for (let i = 0; i < 4 && i < topicNames.length; i++) {
        let topicItem = document.createElement("div");
        topicItem.textContent = topicNames[i];
        topicItem.classList.add("topic-item");
        topicContainer.appendChild(topicItem);
    }
    if (topicNames.length > 4) {
        let topicItem = document.createElement("div");
        topicItem.textContent = `${topicNames.length - 4}+`;
        topicItem.classList.add("topic-item");
        topicContainer.appendChild(topicItem);
    }
    return topicContainer;
};
