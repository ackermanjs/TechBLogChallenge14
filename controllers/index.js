const router = require("express").router();

const apiRoutes = require("./api");

const homepageRoutes = require("./homepageRoutes");
const userdashRoutes = require("./userdashRoutes");

router.use("/", homepageRoutes);
router.use("/userdash", userdashRoutes);
router.use("/api", apiRoutes);