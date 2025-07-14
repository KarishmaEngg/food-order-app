import React, { useState, useEffect } from "react";
import axios from "../api/axios";

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    comment: "",
  });

  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      const res = await axios.get("/feedback");
      setFeedbacks(res.data);
    } catch (err) {
      console.error("Error fetching feedbacks:", err);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/feedback/create", formData);
      console.log("Feedback saved:", response.data);
      alert("Feedback submitted successfully!");

      setFormData({ name: "", comment: "" });
      fetchFeedbacks(); // Refresh feedback list after submit
    } catch (err) {
      console.error("Error saving feedback:", err.response?.data || err.message);
      alert("Failed to submit feedback. Please try again.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Feedback Form</h1>

      {/* Feedback Form */}
      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <div>
          <label className="block mb-1 font-semibold">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Comment</label>
          <textarea
            name="comment"
            placeholder="Your feedback"
            value={formData.comment}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Submit Feedback
        </button>
      </form>

      {/* Feedback List */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">What users say:</h2>
        {feedbacks.length === 0 ? (
          <p>No feedback yet.</p>
        ) : (
          <div className="space-y-4">
            {feedbacks.map((fb, idx) => (
              <div key={idx} className="border p-3 rounded bg-gray-50">
                <p className="font-semibold">{fb.name}</p>
                <p>{fb.comment}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Feedback;
