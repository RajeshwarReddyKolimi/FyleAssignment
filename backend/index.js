const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(
    cors({
        origin: "https://fyle-assignment-github-listing-page.netlify.app/",
        credentials: true,
    })
);

app.use(express.json());

app.post("/", async (req, res) => {
    try {
        const { url } = req.body;
        const githubRes = await fetch(url, {
            method: "GET",
            headers: { Authorization: `Bearer ${process.env.token}` },
        });
        if (githubRes.ok) {
            const topics = await githubRes.json();
            res.json(topics);
        } else {
            res.status(githubRes.status);
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.listen(3000, () => {
    console.log(`Listening at 3000`);
});
