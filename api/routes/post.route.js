import express from "express";

const router = express.Router();

// This route will respond to the GET request
router.get("/test", (req, res) => {
    console.log("router works!");
    res.send("Router get test works!");  // Send response back to the client
});

router.post("/test", (req, res) => {
    console.log("router works!");
    res.send("Router post test works!");  // Send response back to the client
});

router.put("/test", (req, res) => {
    console.log("router works!");
    res.send("Router put test works!");  // Send response back to the client
});

router.delete("/test", (req, res) => {
    console.log("router works!");
    res.send("Router delete test works!");  // Send response back to the client
});



export default router;