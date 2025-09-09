import { Router } from "express";
import * as questionController from "../controllers/questionController.mjs";
import {
  validateQuestionInput,
  validateAnswerInput,
  validateVoteInput,
  validateSearchQuery,
  checkQuestionExists,
  validateUpdateQuestionInput
} from "../middlewares/validator.mjs";

const router = Router();

router.post("/", validateQuestionInput, questionController.createQuestion);
router.get("/", questionController.getAllQuestions);
router.get("/search", validateSearchQuery, questionController.searchQuestions);
router.post("/:id/vote", validateVoteInput, checkQuestionExists, questionController.voteQuestion);
router.put("/:id", validateUpdateQuestionInput, checkQuestionExists, questionController.updateQuestion);
router.delete("/:id", checkQuestionExists, questionController.deleteQuestion);
router.get("/:id", checkQuestionExists, questionController.getQuestionById);

router.post("/:id/answers", validateAnswerInput, checkQuestionExists, questionController.createAnswer);
router.get("/:id/answers", checkQuestionExists, questionController.getAnswersByQuestion);
router.delete("/:id/answers", checkQuestionExists, questionController.deleteAnswersByQuestion);

export default router;