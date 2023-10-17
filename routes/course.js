var expressFunction = require("express");
const router = expressFunction.Router();
const authorization = require("../config/authorize");

let courses = require("../data/course_data");

router.route("/course").get(authorization, (req, res) => {
  res.status(200).json(courses);

});

module.exports = router;