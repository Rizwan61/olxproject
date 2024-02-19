const express = require("express")
const router = express.Router();
const postCrtl = require("../controllers/Post");
const multer = require("multer");
const checkAuth = require("../middlewares/CheckAuth");

const storage = multer.memoryStorage();
const upload = multer ({storage : storage});

router.post("/createpost" , postCrtl.createPost);


module.exports = router;