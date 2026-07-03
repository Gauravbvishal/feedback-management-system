export default function RecentFeedback({ feedbacks }) {
  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="text-xl font-semibold mb-5">
        Recent Feedback
      </h2>

      {feedbacks.length === 0 ? (
        <p>No feedback available.</p>
      ) : (
        <div className="space-y-4">

          {feedbacks.map((item) => (

            <div
              key={item.id}
              className="border-b pb-3"
            >

              <div className="flex justify-between">

                <span className="font-semibold">
                  {item.category}
                </span>

                <span className="text-sm text-gray-500">
                  {new Date(item.createdAt).toLocaleDateString()}
                </span>

              </div>

              <p className="mt-2 text-gray-600">
                {item.feedback}
              </p>

            </div>

          ))}

        </div>
      )}

    </div>
  );
}