"use client";

import { useState } from "react";
import { Send, Mail, MessageSquare, FolderOpen } from "lucide-react";
import toast from "react-hot-toast";

import { submitFeedback } from "@/services/feedback.service";

export default function FeedbackForm() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    category: "",
    feedback: "",
    email: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!formData.category) {
      return toast.error("Please select a category.");
    }

    if (!formData.feedback.trim()) {
      return toast.error("Please enter your feedback.");
    }

    try {
      setLoading(true);

      const response = await submitFeedback(formData);

      if (response.success) {
        toast.success("Feedback submitted successfully!");

        setFormData({
          category: "",
          feedback: "",
          email: "",
        });
      }
    } catch (error) {
      toast.error(error.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 p-8">

      <div className="mb-8">

        <h2 className="text-3xl font-bold text-slate-800">
          Submit Feedback
        </h2>

        <p className="text-slate-500 mt-2">
          We value your suggestions. Your feedback helps us improve our
          product and user experience.
        </p>

      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >

        {/* Category */}

        <div>

          <label className="flex items-center gap-2 font-medium mb-2">
            <FolderOpen size={18} />
            Category
          </label>

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">
              Select Category
            </option>

            <option value="Bug Report">
              Bug Report
            </option>

            <option value="Feature Request">
              Feature Request
            </option>

            <option value="UI / UX">
              UI / UX
            </option>

            <option value="Performance">
              Performance
            </option>

            <option value="Other">
              Other
            </option>

          </select>

        </div>

        {/* Feedback */}

        <div>

          <label className="flex items-center gap-2 font-medium mb-2">
            <MessageSquare size={18} />
            Feedback
          </label>

          <textarea
            rows={5}
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            placeholder="Tell us what happened or share your idea..."
            className="w-full rounded-xl border border-slate-300 px-4 py-3 resize-none outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

        {/* Email */}

        <div>

          <label className="flex items-center gap-2 font-medium mb-2">
            <Mail size={18} />
            Email (Optional)
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <p className="mt-2 text-sm text-slate-500">
            Leave this blank if you'd like to stay anonymous.
          </p>

        </div>

        {/* Button */}

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white py-3 font-semibold transition disabled:opacity-50"
        >
          <Send size={18} />

          {loading ? "Submitting..." : "Submit Feedback"}

        </button>

      </form>

      {/* Footer */}

      <div className="mt-8 border-t pt-6">

        <div className="grid grid-cols-3 text-center gap-4">

          <div>

            <h3 className="text-2xl font-bold text-blue-600">
              500+
            </h3>

            <p className="text-sm text-slate-500">
              Feedback Received
            </p>

          </div>

          <div>

            <h3 className="text-2xl font-bold text-green-600">
              100%
            </h3>

            <p className="text-sm text-slate-500">
              Secure
            </p>

          </div>

          <div>

            <h3 className="text-2xl font-bold text-purple-600">
              24/7
            </h3>

            <p className="text-sm text-slate-500">
              Always Available
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}