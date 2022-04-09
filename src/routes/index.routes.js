import { Router } from "express";
const router = Router();
import Task from "../models/Task.js";

// ///////////////
// ///////// GET
router.get("/", async (req, res) => {
  const tasks = await Task.find().lean();
  res.render("index", { tasks: tasks });
});

router.get('/edit', (req,res)=>{
  res.render('edit')
});


// ///////////////
// ///////// POST
router.post("/tasks/add", async (req, res) => {
  try {
    const task = Task(req.body);

  await task.save();
  res.redirect("/");
  } catch (error) {
    console.log(error)
  }
});

router.post('/edit', (req,res)=>{
  res.send('recibidooooo')
});









export default router;
