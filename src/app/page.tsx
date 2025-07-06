"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TabNavigation } from "@/components/TabNavigation";
import { MoodCheckIn } from "@/components/MoodCheckIn";
import { NourishmentBeauty } from "@/components/NourishmentBeauty";
import { MovementConfidence } from "@/components/MovementConfidence";
import { ProofPurpose } from "@/components/ProofPurpose";
import { Header } from "@/components/Header";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, label: "Daily Check-In", emoji: "🌸" },
    { id: 1, label: "Nourishment", emoji: "🌿" },
    { id: 2, label: "Movement", emoji: "💪" },
    { id: 3, label: "Proof + Purpose", emoji: "🔐" },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return <MoodCheckIn />;
      case 1:
        return <NourishmentBeauty />;
      case 2:
        return <MovementConfidence />;
      case 3:
        return <ProofPurpose />;
      default:
        return <MoodCheckIn />;
    }
  };

  return (
    <div className="min-h-screen gradient-bg">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <Header />

        <div className="mt-8">
          <TabNavigation
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-8"
        >
          {renderTabContent()}
        </motion.div>
      </div>
    </div>
  );
}
