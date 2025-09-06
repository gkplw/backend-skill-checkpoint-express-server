import { Router } from "express";
import { voteAnswer } from "../controllers/answerController.mjs";
import { validateVoteInput, checkAnswerExists } from "../middlewares/validator.mjs";

const router = Router();

router.post("/:id/vote", validateVoteInput, checkAnswerExists, voteAnswer);

export default router;
