const express = require("express");
var multer = require("multer");
const User = require("../models/User");
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const FileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 10 },
  fileFilter: FileFilter,
});


// Show All user details
router.get("/", (req, res) => {
  User.find()
    .exec()
    .then((results) => {
      res.status(200).send(results);
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
});


// Add user details
router.post("/addUser",upload.single("userProf"), (req, res) => {
  const user = req.body;
  
  const userProf = req.file.path;
  const newUser = new User({...user,userProf});
  newUser
    .save()
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
});


// show only one user detail
router.get("/showUser/:id", (req, res) => {
  const id = req.params.id;
  User.findById({ _id: id })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
});



// edit specific user detail
router.put("/editUser/:id", (req, res) => {
  const user = req.body;
  const id = req.params.id;
  User.updateOne({ _id: id }, user)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
});



// delete specific user detail
router.delete("/deleteUser/:id", (req, res) => {
  const id = req.params.id;
  User.deleteOne({ _id: id })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
});

module.exports = router;
