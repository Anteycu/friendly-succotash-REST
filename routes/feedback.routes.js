const Router = require("express");
const feedbackController = require("../controller/feedback.controller");
const router = new Router();

router.post("/feedback", feedbackController.createFeedback);
router.get("/feedback", feedbackController.getFeedbacks);
router.get("/feedback/:id", feedbackController.getFeedback);
router.delete("/feedback/:id", feedbackController.deleteFeedback);

module.exports = router;
