import * as questionService from "../services/questionService.mjs";

export const createQuestion = async (req, res) => {
  const { title, description, category } = req.body;
  const result = await questionService.createQuestion({ title, description, category });
  if (!result.success) return res.status(500).json({ message: result.message });
  res.status(201).json({ message: "Question created successfully." });
};

export const getAllQuestions = async (req, res) => {
  const result = await questionService.getAllQuestions();
  if (!result.success) return res.status(500).json({ message: result.message });
  res.status(200).json({ data: result.data });
};

export const searchQuestions = async (req, res) => {
  const { title, category } = req.query;
  const result = await questionService.searchQuestions({ title, category });
  if (!result.success) return res.status(500).json({ message: result.message });
  res.status(200).json({ data: result.data });
};

export const voteQuestion = async (req, res) => {
  const { id } = req.params;
  const { vote } = req.body;
  const result = await questionService.voteQuestion(id, vote);
  if (!result.success) return res.status(500).json({ message: result.message });
  res.status(200).json({ message: "Vote on the question has been recorded successfully." });
};

export const updateQuestion = async (req, res) => {
  const { id } = req.params;
  const { title, description, category } = req.body;
  const result = await questionService.updateQuestion(id, { title, description, category });
  if (!result.success) return res.status(500).json({ message: result.message });
  res.status(200).json({ message: "Question updated successfully." });
};

export const deleteQuestion = async (req, res) => {
  const { id } = req.params;
  const result = await questionService.deleteQuestion(id);
  if (!result.success) return res.status(500).json({ message: result.message });
  res.status(200).json({ message: "Question post has been deleted successfully." });
};

export const createAnswer = async (req, res) => {
  const { id } = req.params;
  const { content } = req.body;
  const result = await questionService.createAnswer(id, content);
  if (!result.success) return res.status(500).json({ message: result.message });
  res.status(201).json({ message: "Answer created successfully." });
};

export const getAnswersByQuestion = async (req, res) => {
  const { id } = req.params;
  const result = await questionService.getAnswersByQuestion(id);
  if (!result.success) return res.status(500).json({ message: result.message });
  res.status(200).json({ data: result.data });
};

export const deleteAnswersByQuestion = async (req, res) => {
  const { id } = req.params;
  const result = await questionService.deleteAnswersByQuestion(id);
  if (!result.success) return res.status(500).json({ message: result.message });
  res.status(200).json({ message: "All answers for the question have been deleted successfully." });
};

export const getQuestionById = async (req, res) => {
  const { id } = req.params;
  const result = await questionService.getQuestionById(id);
  if (!result.success) return res.status(404).json({ message: result.message });
  res.status(200).json({ data: result.data });
};