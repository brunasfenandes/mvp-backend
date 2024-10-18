import express from "express";
const router = express.Router();

router.get("/", async(_req,_res)=>{
    _res.send("GET all rooms");
})
router.get("/:id", async(_req, _res)=>{
    _res.send('GET a single room')
})
router.post("/:id/chat", async(_req, _res)=>{
    _res.send("POST a chat")
})
router.delete("/:id", async(_req, _res)=>{
    _res.send("DELETE all chats in room")
})
router.delete("/:id/chat/:id", async(_req, _res)=>{
    _res.send("DELETE a particular comment in a room")
})

export default router;