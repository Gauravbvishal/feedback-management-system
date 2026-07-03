import {
  createFeedback,
  getFeedback,
} from "../services/feedback.service.js";

export async function submitFeedback(req, res, next) {
  try {
    await createFeedback(req.body);

    return res.status(201).json({
      success: true,
      message: "Feedback submitted successfully.",
    });
  } catch (error) {
    next(error);
  }
}

export async function fetchFeedback(req, res, next) {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    const search = req.query.search || "";
    const category = req.query.category || "";

    const data = await getFeedback({
      page,
      limit,
      search,
      category,
    });

    return res.json({
      success: true,
      ...data,
    });
  } catch (error) {
    next(error);
  }
}