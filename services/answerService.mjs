import * as answerRepo from "../repositories/answerRepository.mjs";

export const voteAnswer = async (id, vote) => {
  try {
    await answerRepo.voteAnswer(id, vote);
    return { success: true };
  } catch {
    return { success: false, message: "Unable to vote answer." };
  }
};