"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";

export function NourishmentBeauty() {
  const smoothieRecipes = [
    {
      name: "Postpartum Power Green Smoothie",
      emoji: "🥬",
      ingredients: [
        "Spinach",
        "Banana",
        "Almond milk",
        "Chia seeds",
        "Avocado",
      ],
      benefits: "Rich in iron, folate, and healthy fats for energy and healing",
    },
    {
      name: "Hormone Balance Berry Blend",
      emoji: "🫐",
      ingredients: ["Mixed berries", "Greek yogurt", "Flaxseeds", "Honey"],
      benefits: "Antioxidants and omega-3s to support hormonal balance",
    },
    {
      name: "Calm & Nourish Oat Smoothie",
      emoji: "🌾",
      ingredients: ["Oats", "Banana", "Almond butter", "Cinnamon", "Dates"],
      benefits:
        "Complex carbs and magnesium for stress relief and milk production",
    },
  ];

  const skincareTips = [
    {
      title: "Gentle Morning Ritual",
      emoji: "🌅",
      steps: [
        "Splash face with lukewarm water",
        "Apply a few drops of rosehip oil",
        "Gentle facial massage for 2 minutes",
        "Finish with SPF (even indoors!)",
      ],
    },
    {
      title: "Evening Wind-Down",
      emoji: "🌙",
      steps: [
        "Remove makeup with gentle oil cleanser",
        "Use a soft, damp cloth",
        "Apply pregnancy-safe moisturizer",
        "Take 3 deep breaths and set intention for tomorrow",
      ],
    },
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
            Nourishment + Beauty 🌿
          </h2>
          <p className="text-text-secondary mb-6">
            Feed your body and soul with nurturing recipes and gentle self-care
            rituals.
          </p>
        </motion.div>
      </Card>

      {/* Smoothie Recipes */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-text-primary mb-4 font-poppins">
          🥤 Healing Smoothie Recipes
        </h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {smoothieRecipes.map((recipe, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/40 backdrop-blur-sm rounded-xl p-4 border border-white/20"
            >
              <div className="text-2xl mb-2">{recipe.emoji}</div>
              <h4 className="font-medium text-text-primary mb-2">
                {recipe.name}
              </h4>
              <div className="text-sm text-text-secondary mb-3">
                <strong>Ingredients:</strong> {recipe.ingredients.join(", ")}
              </div>
              <div className="text-xs text-text-light">
                <strong>Benefits:</strong> {recipe.benefits}
              </div>
            </motion.div>
          ))}
        </div>
      </Card>

      {/* Skincare */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-text-primary mb-4 font-poppins">
          ✨ Gentle Skincare Rituals
        </h3>
        <div className="grid gap-6 md:grid-cols-2">
          {skincareTips.map((tip, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/40 backdrop-blur-sm rounded-xl p-4 border border-white/20"
            >
              <div className="text-2xl mb-2">{tip.emoji}</div>
              <h4 className="font-medium text-text-primary mb-3">
                {tip.title}
              </h4>
              <ul className="space-y-2">
                {tip.steps.map((step, stepIndex) => (
                  <li
                    key={stepIndex}
                    className="text-sm text-text-secondary flex items-start"
                  >
                    <span className="text-primary-500 mr-2">•</span>
                    {step}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Card>

      {/* Nutrition Tips */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-text-primary mb-4 font-poppins">
          🍎 Postpartum Nutrition Essentials
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h4 className="font-medium text-text-primary mb-2">
              Key Nutrients:
            </h4>
            <ul className="space-y-1 text-sm text-text-secondary">
              <li>
                • <strong>Iron:</strong> Spinach, lentils, quinoa
              </li>
              <li>
                • <strong>Omega-3:</strong> Salmon, walnuts, flaxseeds
              </li>
              <li>
                • <strong>Folate:</strong> Leafy greens, avocado, beans
              </li>
              <li>
                • <strong>Protein:</strong> Eggs, Greek yogurt, lean meats
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-text-primary mb-2">
              Hydration Tips:
            </h4>
            <ul className="space-y-1 text-sm text-text-secondary">
              <li>• Keep water bottle nearby during nursing</li>
              <li>• Herbal teas: chamomile, ginger, red raspberry leaf</li>
              <li>• Coconut water for natural electrolytes</li>
              <li>• Aim for 8-10 glasses daily</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}
