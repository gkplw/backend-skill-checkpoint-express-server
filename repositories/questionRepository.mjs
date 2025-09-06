import connectionPool from "../utils/db.mjs";

export const createQuestion = async ({ title, description, category }) => {
  await connectionPool.query(
    "INSERT INTO questions (title, description, category) VALUES ($1, $2, $3)",
    [title, description, category]
  );
};

export const getAllQuestions = async () => {
  const result = await connectionPool.query("SELECT * FROM questions");
  return result.rows;
};

export const searchQuestions = async ({ title, category }) => {
  let query = "SELECT * FROM questions WHERE 1=1";
  let values = [];
  let count = 1;
  if (title) {
    query += ` AND title ILIKE $${count}`;
    values.push(`%${title}%`);
    count++;
  }
  if (category) {
    query += ` AND category ILIKE $${count}`;
    values.push(`%${category}%`);
  }
  const result = await connectionPool.query(query, values);
  return result.rows;
};

export const voteQuestion = async (id, vote) => {
  await connectionPool.query(
    "INSERT INTO question_votes (question_id, vote) VALUES ($1, $2)",
    [id, vote]
  );
};

export const updateQuestion = async (id, { title, description, category }) => {
  await connectionPool.query(
    "UPDATE questions SET title=$1, description=$2, category=$3 WHERE id=$4",
    [title, description, category, id]
  );
};

export const deleteQuestion = async (id) => {
  await connectionPool.query("DELETE FROM answers WHERE question_id=$1", [id]);
  await connectionPool.query("DELETE FROM questions WHERE id=$1", [id]);
};

export const getQuestionById = async (id) => {
  const result = await connectionPool.query("SELECT * FROM questions WHERE id=$1", [id]);
  return result.rows[0];
};
