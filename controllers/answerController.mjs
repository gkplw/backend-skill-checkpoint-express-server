import * as answerService from "../services/answerService.mjs";

export const voteAnswer = async (req, res) => {
  const { id } = req.params;
  const { vote } = req.body;
  const result = await answerService.voteAnswer(id, vote);
  if (!result.success) {
    return res.status(500).json({ message: result.message });
  }
  res.status(200).json({ message: "Vote on the answer has been recorded successfully." });
};