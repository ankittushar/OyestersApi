// const mongoose = require("mongoose");

const Task= require('../models/task');


//CREATE Task
exports.createTask= async (req, res) => {
  console.log("1");
  const newTask = new Task(req.body);
  console.log(newTask);
  try {
    console.log('3');
    const savedTask = await newTask.save();
    console.log('4');
    res.status(200).json(savedTask);
  } catch (err) {
    console.log('5');
    res.status(500).json(err);
  }
};


 //UPDATE Task
exports.updateTask = async (req, res) => {
 
      try {
        
        const updatedTask = await Task.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );

        res.status(200).json(updatedTask);

      } catch (err) {
        res.status(500).json(err);
        
      }
    
  
};

// //DELETE Task
exports.taskDelete =async (req, res) => {
  try {
    const tempTask = await Task.findById(req.params.id);
    
      try {
        await tempTask.delete();
        res.status(200).json("Task has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    
  } catch (err) {
    res.status(500).json(err);
  }
};

// //GET Task
exports.getTask= async (req, res) => {
  try {
    const someTask = await Task.findById(req.params.id);
    res.status(200).json(someTask);
  } catch (err) {
    res.status(500).json(err);
  }
};

// //GET ALL TaskS

exports.getAllTask= async (req, res) => {
  try {
    const someTask = await Task.find();
    res.status(200).json(someTask);
  } catch (err) {
    res.status(500).json(err);
  }
};

