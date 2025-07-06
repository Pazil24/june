"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export function MoodCheckIn() {
  const [mood, setMood] = useState(5);
  const [journal, setJournal] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    // Here you would typically save to blockchain or local storage
    console.log("Mood:", mood, "Journal:", journal);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const moodEmojis = [
    "😢",
    "😔",
    "😐",
    "🙂",
    "😊",
    "😄",
    "🤗",
    "😍",
    "🥰",
    "✨",
  ];
  const moodLabels = [
    "Struggling",
    "Low",
    "Neutral",
    "Okay",
    "Good",
    "Great",
    "Amazing",
    "Fantastic",
    "Blissful",
    "Transcendent",
  ];

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-text-primary mb-4 font-poppins">
            Daily Mood Check-In 🌸
          </h2>
          <p className="text-text-secondary mb-6">
            How are you feeling today? Take a moment to connect with yourself.
          </p>

          <div className="space-y-6">
            {/* Mood Slider */}
            <div>
              <label className="block text-sm font-medium text-text-primary mb-4">
                Rate your mood (1-10):
              </label>
              <div className="relative">
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={mood}
                  onChange={(e) => setMood(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-text-light mt-2">
                  <span>1</span>
                  <span>10</span>
                </div>
              </div>
              <div className="text-center mt-4">
                <div className="text-4xl mb-2">{moodEmojis[mood - 1]}</div>
                <div className="text-lg font-medium text-text-primary">
                  {moodLabels[mood - 1]}
                </div>
              </div>
            </div>

            {/* Journal */}
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                What's on your heart today?
              </label>
              <textarea
                value={journal}
                onChange={(e) => setJournal(e.target.value)}
                placeholder="Share your thoughts, feelings, or gratitude..."
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 min-h-[120px] resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <Button
                variant="primary"
                onClick={handleSubmit}
                disabled={submitted}
                className="px-8"
              >
                {submitted ? "✨ Recorded" : "Record My Day"}
              </Button>
            </div>
          </div>
        </motion.div>
      </Card>

      {/* Daily Tips */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-text-primary mb-4 font-poppins">
          💡 Today's Wellness Tip
        </h3>
        <p className="text-text-secondary">
          Remember: It's okay to have difficult days. Your feelings are valid,
          and you're doing an amazing job. Consider reaching out to a friend,
          taking a warm bath, or simply breathing deeply for a few minutes.
        </p>
      </Card>
    </div>
  );
}
