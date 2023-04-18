const Router = require("express").Router;
const userController = require("../controllers/user-controller");
const router = new Router();

router.get("/select", userController.get_user);
router.post("/reg", userController.registration);
router.post("/auth");

module.exports = router;
