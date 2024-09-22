import express from "express";

const router = express.Router();

// This route will respond to the GET request
router.get("/test", (req, res) => {
    console.log("router works!");
    res.send("Router test works!");  // Send response back to the client
});

router.post("/test", (req, res) => {
    console.log("router works!");
    res.send("Router test works!");  // Send response back to the client
});

router.put("/test", (req, res) => {
    console.log("router works!");
    res.send("Router test works!");  // Send response back to the client
});

router.delete("/test", (req, res) => {
    console.log("router works!");
    res.send("Router test works!");  // Send response back to the client
});



export default router;