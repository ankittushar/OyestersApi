const express = require("express");
const router = express.Router();

const TaskController = require('../controllers/task');

router.post("/create", TaskController.createTask);

router.put("/:id",TaskController.updateTask);
router.get("/:id", TaskController.getTask);

router.get('/', TaskController.getAllTask);

router.delete("/:id", TaskController.taskDelete);

// router.get("/",checkAuth,UserController.user_get);
module.exports = router;