import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Get all users");
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  res.send(`Get user of id ${id}`);
});

router.post("/", (req, res) => {
  res.send("create a user");
});

router.put("/:id", (req, res) => {
  const id = req.params.id;

  res.send(`Update user of id ${id}`);
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  res.send(`Delete user of id ${id}`);
});

export default router;
