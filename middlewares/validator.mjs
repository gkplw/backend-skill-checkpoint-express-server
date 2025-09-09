import connectionPool from "../utils/db.mjs";

//check question exists
export const checkQuestionExists = async (req, res, next) => {
  try {
    const result = await connectionPool.query(
      "SELECT * FROM questions WHERE id=$1",
      [req.params.id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Question not found." });
    }
    // เก็บข้อมูล question ไว้ใน req เผื่อ handler ข้างหลังอยากใช้
    req.question = result.rows[0];
    next();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error checking question." });
  }
};

//validate question input
export const validateQuestionInput = (req, res, next) => {
  const { title, description, category } = req.body;
  if (!title || !description || !category) {
    return res.status(400).json({ message: "Invalid request data." });
  }
  next();
};

//validate vote input
export const validateVoteInput = (req, res, next) => {
  const { vote } = req.body;
  if (![1, -1].includes(vote)) {
    return res.status(400).json({ message: "Invalid vote value." });
  }
  next();
};

//validate answer input
export const validateAnswerInput = (req, res, next) => {
  const { content } = req.body;
  if (!content) {
    return res.status(400).json({ message: "Invalid request data." });
  }
  if (content.length > 300) {
    return res
      .status(400)
      .json({ message: "Content must not exceed 300 characters." });
  }
  next();
};

//check answer exists
export const checkAnswerExists = async (req, res, next) => {
  try {
    const result = await connectionPool.query(
      "SELECT * FROM answers WHERE id=$1",
      [req.params.id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Answer not found." });
    }
    // เก็บ answer ลง req เผื่อ handler ข้างหลังใช้
    req.answer = result.rows[0];
    next();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error checking answer." });
  }
};

//validate search query
export const validateSearchQuery = (req, res, next) => {
  const { title, category } = req.query;
  if (!title && !category) {
    return res.status(400).json({ message: "Invalid search parameters." });
  }
  next();
};

//validate update question input
export const validateUpdateQuestionInput = (req, res, next) => {
  const allowedFields = ["title", "description"];
  const keys = Object.keys(req.body);

  // at least 1 field is required
  if (keys.length === 0) {
    return res.status(400).json({ message: "Invalid request data." });
  }

  // check field that is sent is valid according to allowedFields
  const isValid = keys.every((key) => allowedFields.includes(key));
  if (!isValid) {
    return res.status(400).json({ message: "Invalid request data." });
  }

  next();
};
