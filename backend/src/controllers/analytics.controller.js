import { getAnalytics } from "../services/analytics.service.js";

export async function fetchAnalytics(req, res, next) {
  try {
    const analytics = await getAnalytics();

    return res.status(200).json({
      success: true,
      data: analytics,
    });
  } catch (error) {
    next(error);
  }
}