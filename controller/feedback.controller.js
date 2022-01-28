const db = require("../db");

class FeedbackController {
  async createFeedback(req, res) {
    const { name, email, content } = req.body;
    const newFeedback = await db.query(
      "INSERT INTO feedback (name, email, content) values ($1, $2, $3) RETURNING *",
      [name, email, content]
    );
    res.json(newFeedback.rows[0]);
  }
  async getFeedbacks(req, res) {
    const feedbacks = await db.query("SELECT * FROM feedback");
    res.json(feedbacks.rows);
  }
  async getFeedback(req, res) {
    const id = req.params.id;
    const feedback = await db.query("SELECT * FROM feedback where id = $1", [
      id,
    ]);
    res.json(feedback.rows[0]);
  }
  async deleteFeedback(req, res) {
    const id = req.params.id;
    const feedback = await db.query("DELETE FROM feedback where id = $1", [id]);
    res.json(feedback.rows[0]);
  }
}

module.exports = new FeedbackController();
