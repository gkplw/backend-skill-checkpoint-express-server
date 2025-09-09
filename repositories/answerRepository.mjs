import connectionPool from "../utils/db.mjs";

export const createAnswer = async (questionId, content) => {
  await connectionPool.query(
    "INSERT INTO answers (question_id, content, created_at, updated_at) VALUES ($1, $2, NOW(), NOW())",
    [questionId, content]
  );
};

export const getAnswersByQuestion = async (questionId) => {
  const result = await connectionPool.query(
    `SELECT a.id, a.content
     FROM answers a
     WHERE a.question_id = $1
     ORDER BY a.id ASC`,
    [questionId]
  );
  return result.rows;
};

export const deleteAnswersByQuestion = async (questionId) => {
  await connectionPool.query("DELETE FROM answers WHERE question_id=$1", [questionId]);
};

export const voteAnswer = async (id, vote) => {
  await connectionPool.query(
    "INSERT INTO answer_votes (answer_id, vote) VALUES ($1, $2)",
    [id, vote]
  );
};