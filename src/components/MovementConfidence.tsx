"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";

export function MovementConfidence() {
  const exercises = [
    {
      name: "Gentle Postpartum Yoga",
      emoji: "🧘‍♀️",
      duration: "10-15 minutes",
      description: "Gentle stretches to reconnect with your body",
      poses: [
        "Child's pose",
        "Cat-cow stretches",
        "Gentle twists",
        "Legs up the wall",
      ],
      benefits: "Reduces stress, improves flexibility, promotes healing",
    },
    {
      name: "Pelvic Floor Strengthening",
      emoji: "💪",
      duration: "5-10 minutes",
      description: "Essential exercises for core recovery",
      poses: ["Kegel exercises", "Bridge pose", "Dead bug", "Wall sits"],
      benefits: "Strengthens pelvic floor, improves posture, reduces back pain",
    },
    {
      name: "Walking Meditation",
      emoji: "🚶‍♀️",
      duration: "15-30 minutes",
      description: "Mindful movement in nature",
      poses: [
        "Slow mindful steps",
        "Deep breathing",
        "Gratitude practice",
        "Sun salutation",
      ],
      benefits: "Boosts mood, increases energy, vitamin D exposure",
    },
  ];

  const confidenceAffirmations = [
    "I am healing and growing stronger every day",
    "My body has done something incredible",
    "I deserve love, rest, and gentle care",
    "I am exactly where I need to be",
    "My journey is unique and beautiful",
    "I trust my body's wisdom",
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
            Movement & Confidence 💪
          </h2>
          <p className="text-text-secondary mb-6">
            Gentle movement and positive affirmations to rebuild strength and
            confidence.
          </p>
        </motion.div>
      </Card>

      {/* Exercise Routines */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-text-primary mb-4 font-poppins">
          🏃‍♀️ Gentle Movement Routines
        </h3>
        <div className="space-y-4">
          {exercises.map((exercise, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/40 backdrop-blur-sm rounded-xl p-4 border border-white/20"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">{exercise.emoji}</div>
                <div className="flex-1">
                  <h4 className="font-medium text-text-primary mb-1">
                    {exercise.name}
                  </h4>
                  <p className="text-sm text-text-secondary mb-2">
                    {exercise.description}
                  </p>
                  <div className="text-xs text-text-light mb-2">
                    <strong>Duration:</strong> {exercise.duration}
                  </div>
                  <div className="text-sm text-text-secondary mb-2">
                    <strong>Includes:</strong> {exercise.poses.join(", ")}
                  </div>
                  <div className="text-xs text-primary-600 font-medium">
                    ✨ {exercise.benefits}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Card>

      {/* Daily Affirmations */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-text-primary mb-4 font-poppins">
          💎 Daily Affirmations
        </h3>
        <p className="text-text-secondary mb-4">
          Choose one affirmation that resonates with you today. Repeat it
          throughout your day.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          {confidenceAffirmations.map((affirmation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-r from-primary-100 to-accent-100 rounded-lg p-4 border border-white/20"
            >
              <p className="text-sm text-text-primary italic text-center">
                "{affirmation}"
              </p>
            </motion.div>
          ))}
        </div>
      </Card>

      {/* Safety Guidelines */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-text-primary mb-4 font-poppins">
          ⚠️ Exercise Safety Guidelines
        </h3>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>
              • Always consult your healthcare provider before starting any
              exercise routine
            </li>
            <li>• Start slowly and listen to your body</li>
            <li>
              • Stop immediately if you experience pain, dizziness, or bleeding
            </li>
            <li>• Stay hydrated and avoid overheating</li>
            <li>• Consider working with a postpartum fitness specialist</li>
            <li>• Remember: rest is just as important as movement</li>
          </ul>
        </div>
      </Card>
    </div>
  );
}
