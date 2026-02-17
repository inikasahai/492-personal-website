"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type FeedbackRow = {
  id: string;
  name: string;
  message: string;
  rating: number;
  created_at: string;
};

export default function Feedback() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(5);
  const [items, setItems] = useState<FeedbackRow[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function load() {
    const { data, error } = await supabase
      .from("feedback")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) setError(error.message);
    else setItems((data ?? []) as FeedbackRow[]);
  }

  useEffect(() => {
    load();

    const channel = supabase
      .channel("feedback-live")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "feedback" },
        (payload) => setItems((prev) => [payload.new as FeedbackRow, ...prev])
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.from("feedback").insert([
      { name: name.trim(), message: message.trim(), rating },
    ]);

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    setName("");
    setMessage("");
    setRating(5);
    await load();
  }

  return (
    <section id="feedback" style={{ padding: "48px 0" }}>
      <h2 style={{ fontSize: 28, fontWeight: 700 }}>Feedback</h2>

      <form
        onSubmit={onSubmit}
        style={{ marginTop: 16, display: "grid", gap: 12, maxWidth: 520 }}
      >
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          style={{ padding: 12, borderRadius: 12, border: "1px solid #ddd" }}
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Feedback message"
          rows={4}
          style={{ padding: 12, borderRadius: 12, border: "1px solid #ddd" }}
        />
        <input
          type="number"
          min={1}
          max={5}
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          style={{ padding: 12, borderRadius: 12, border: "1px solid #ddd", width: 180 }}
        />
        <button
          type="submit"
          disabled={loading || !name.trim() || !message.trim()}
          style={{ padding: "12px 16px", borderRadius: 12, border: "none" }}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>

        {error && <p style={{ color: "crimson" }}>{error}</p>}
      </form>

      <div style={{ marginTop: 24, display: "grid", gap: 12 }}>
        {items.map((f) => (
          <div
            key={f.id}
            style={{ border: "1px solid #eee", borderRadius: 16, padding: 16 }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <strong>{f.name}</strong>
              <span>{"⭐".repeat(Math.max(1, Math.min(5, f.rating)))}</span>
            </div>
            <p style={{ marginTop: 8 }}>{f.message}</p>
            <div style={{ marginTop: 8, opacity: 0.7, fontSize: 12 }}>
              {new Date(f.created_at).toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}