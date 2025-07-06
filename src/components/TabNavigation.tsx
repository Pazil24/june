"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Tab {
  id: number;
  label: string;
  emoji: string;
}

interface TabNavigationProps {
  tabs: Tab[];
  activeTab: number;
  onTabChange: (tabId: number) => void;
}

export function TabNavigation({
  tabs,
  activeTab,
  onTabChange,
}: TabNavigationProps) {
  return (
    <nav className="bg-white/20 backdrop-blur-sm rounded-2xl p-2 shadow-soft">
      <div className="flex space-x-1">
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              "flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-200",
              activeTab === tab.id
                ? "bg-white text-text-primary shadow-md"
                : "text-text-secondary hover:text-text-primary hover:bg-white/30"
            )}
          >
            <span className="text-lg">{tab.emoji}</span>
            <span className="text-sm font-medium hidden sm:inline">
              {tab.label}
            </span>
          </motion.button>
        ))}
      </div>
    </nav>
  );
}
