import * as questionRepo from "../repositories/questionRepository.mjs";
import * as answerRepo from "../repositories/answerRepository.mjs";

export const createQuestion = async ({ title, description, category }) => {
  try {
    await questionRepo.createQuestion({ title, description, category });
    return { success: true };
  } catch {
    return { success: false, message: "Unable to create question." };
  }
};

export const getAllQuestions = async () => {
  try {
    const data = await questionRepo.getAllQuestions();
    return { success: true, data };
  } catch {
    return { success: false, message: "Unable to fetch questions." };
  }
};

export const searchQuestions = async ({ title, category }) => {
  try {
    const data = await questionRepo.searchQuestions({ title, category });
    return { success: true, data };
  } catch {
    return { success: false, message: "Unable to fetch a question." };
  }
};

export const voteQuestion = async (id, vote) => {
  try {
    await questionRepo.voteQuestion(id, vote);
    return { success: true };
  } catch {
    return { success: false, message: "Unable to vote question." };
  }
};

export const updateQuestion = async (id, { title, description }) => {
  try {
    await questionRepo.updateQuestion(id, { title, description });
    return { success: true };
  } catch {
    return { success: false, message: "Unable to update question." };
  }
};

export const deleteQuestion = async (id) => {
  try {
    await questionRepo.deleteQuestion(id);
    return { success: true };
  } catch {
    return { success: false, message: "Unable to delete question." };
  }
};

export const createAnswer = async (questionId, content) => {
  try {
    await answerRepo.createAnswer(questionId, content);
    return { success: true };
  } catch {
    return { success: false, message: "Unable to create answers." };
  }
};

export const getAnswersByQuestion = async (questionId) => {
  try {
    const data = await answerRepo.getAnswersByQuestion(questionId);
    return { success: true, data };
  } catch {
    return { success: false, message: "Unable to fetch answers." };
  }
};

export const deleteAnswersByQuestion = async (questionId) => {
  try {
    await answerRepo.deleteAnswersByQuestion(questionId);
    return { success: true };
  } catch {
    return { success: false, message: "Unable to delete answers." };
  }
};

export const getQuestionById = async (id) => {
  try {
    const data = await questionRepo.getQuestionById(id);
    if (!data) return { success: false, message: "Question not found." };
    return { success: true, data };
  } catch {
    return { success: false, message: "Unable to fetch question." };
  }
};