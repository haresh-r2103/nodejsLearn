import express from "express";

const app = express();
const PORT = 6969;


// Route -> github.com/haresh-r2103/...

app.get('/', (req, res) => {
    res.json({ msg: "Hello Students!"});
});

app.listen(PORT, () => {
    console.log(`The server is running at http://localhost:${PORT}`);
});

