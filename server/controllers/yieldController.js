import { predictYield } from "../services/mlClient.js";

export const getYieldPrediction = async (req, res) => {
  try {
    const result = await predictYield(req.body);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Error communicating with ML Service:", error.message);
    res.status(500).json({
      success: false,
      message: "Machine Learning Service is currently unavailable.",
    });
  }
};
