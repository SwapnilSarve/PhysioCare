import { useState, useEffect } from "react";
import { Star } from "lucide-react";

const STORAGE_KEY = "physio_reviews_v1";

export default function Reviews() {
  const [reviews, setReviews] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [
        {
          id: Date.now() - 200000,
          name: "Rahul S.",
          rating: 5,
          comment:
            "After a few sessions, my back pain improved significantly. Highly recommended!",
          date: new Date().toISOString(),
        },
      ];
    } catch (e) {
      return [];
    }
  });

  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
    } catch (e) {}
  }, [reviews]);

  function addReview(e) {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;
    const newReview = {
      id: Date.now(),
      name: name.trim(),
      rating: Number(rating),
      comment: comment.trim(),
      date: new Date().toISOString(),
    };
    setReviews((r) => [newReview, ...r]);
    setName("");
    setRating(5);
    setComment("");
  }

  function removeReview(id) {
    setReviews((r) => r.filter((x) => x.id !== id));
  }

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-6">
        {reviews.length === 0 ? (
          <p className="text-slate-600">No reviews yet. Be the first to add one.</p>
        ) : (
          reviews.map((r) => (
            <article key={r.id} className="rounded-xl bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-semibold text-slate-900">{r.name}</p>
                  <div className="mt-2 flex items-center gap-1 text-amber-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < r.rating ? "text-amber-500" : "text-slate-200"}`}
                      />
                    ))}
                  </div>
                  <p className="mt-3 text-slate-700">{r.comment}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-400">{new Date(r.date).toLocaleDateString()}</p>
                  <button
                    onClick={() => removeReview(r.id)}
                    className="mt-4 text-xs text-red-500 hover:underline"
                    aria-label="Remove review"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </article>
          ))
        )}
      </div>

      <aside className="rounded-[1.25rem] border border-slate-200/80 bg-white p-6 shadow-lg">
        <h3 className="text-lg font-semibold text-slate-900">Leave a review</h3>
        <form onSubmit={addReview} className="mt-4 space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-600">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-600">Rating</label>
            <select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="rounded-md border border-slate-200 px-3 py-2 text-sm"
            >
              {[5, 4, 3, 2, 1].map((n) => (
                <option key={n} value={n}>
                  {n} star{n > 1 ? "s" : ""}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-600">Comment</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={4}
              className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-teal-600 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-700"
            >
              Submit Review
            </button>
          </div>
        </form>
      </aside>
    </div>
  );
}
