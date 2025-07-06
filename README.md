# June - The Mother of All Care 🌸

> Your Web3-powered postpartum wellness companion — built for mothers, governed by mothers.

## 🌟 Overview

June is a gentle space for emotional check-ins, physical recovery, and hormonal nourishment designed specifically for postpartum mothers. Every action you take — from logging your mood to preparing a nutrient-rich smoothie — strengthens not just your own wellbeing, but a community of mothers onchain.

## ✨ Features

### 🌸 Daily Mood Check-In

- Interactive mood slider (1-10 scale)
- Private journaling with emoji feedback
- Daily wellness tips and affirmations
- Non-transferable Care NFTs for consistency

### 🌿 Nourishment + Beauty

- Curated postpartum smoothie recipes
- Gentle skincare routines with natural ingredients
- Nutrition guides for hormonal balance
- Hydration tracking and tips

### 💪 Movement & Confidence

- Gentle yoga and stretching routines
- Pelvic floor strengthening exercises
- Walking meditation guides
- Daily affirmations for self-confidence
- Safety guidelines for postpartum exercise

### 🔐 Proof + Purpose

- **Self Protocol Integration**: Privacy-preserving identity verification
- **GoodDollar Integration**: Access to Universal Basic Income ($G tokens)
- Sybil-resistant community participation
- Future DAO governance for mother-led decisions

## 🚀 Tech Stack

- **Frontend**: Next.js 15, TypeScript, TailwindCSS
- **Animation**: Framer Motion
- **Web3**: Wagmi, Viem, Coinbase Wallet
- **Blockchain**: Base, Base Sepolia, Ethereum
- **Identity**: Self Protocol (zero-knowledge proofs)
- **UBI**: GoodDollar Protocol
- **Platform**: Farcaster Mini App

## 📱 Farcaster Mini App

June is optimized for Farcaster and Coinbase Wallet with:

- Native wallet connections
- Seamless onchain interactions
- Privacy-preserving verification
- Global UBI community access

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm or yarn
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/june-app.git
cd june-app

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

### Environment Variables

Copy `.env.example` to `.env.local` and configure:

```env
# Wallet Connect Project ID (optional for Coinbase Wallet)
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_project_id

# Self Protocol Configuration
NEXT_PUBLIC_SELF_PROTOCOL_API_KEY=your_api_key

# GoodDollar Configuration
NEXT_PUBLIC_GOODDOLLAR_API_URL=https://api.gooddollar.org
NEXT_PUBLIC_GOODDOLLAR_CONTRACT_ADDRESS=your_contract_address

# Application URLs
NEXT_PUBLIC_APP_URL=https://june-app.vercel.app
NEXT_PUBLIC_FARCASTER_FRAME_URL=https://june-app.vercel.app
```

### Build and Deploy

```bash
# Build for production
npm run build

# Start production server
npm start

# Deploy to Vercel
vercel deploy
```

## 🔧 Project Structure

```
june-app/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   └── Card.tsx
│   │   ├── Header.tsx
│   │   ├── TabNavigation.tsx
│   │   ├── MoodCheckIn.tsx
│   │   ├── NourishmentBeauty.tsx
│   │   ├── MovementConfidence.tsx
│   │   ├── ProofPurpose.tsx
│   │   └── Providers.tsx
│   └── lib/
│       └── utils.ts
├── farcaster.json
├── .env.example
└── README.md
```

## 🌍 Community Impact

June connects mothers to:

- **640,000+ GoodDollar members** across 181 countries
- **13 active local chapters** worldwide
- **Privacy-preserving identity verification**
- **Decentralized governance** for community decisions

## 🗳️ Future Governance

June will evolve into a mother-governed DAO where verified members vote on:

- Fund allocation for maternal health research
- New feature development priorities
- Partnerships with healthcare providers
- Community-driven initiatives

## 🤝 Contributing

We welcome contributions from the community! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **GoodDollar**: For building the world's largest UBI community
- **Self Protocol**: For privacy-preserving identity solutions
- **Farcaster**: For the decentralized social platform
- **Base**: For the L2 blockchain infrastructure
- **Coinbase Wallet**: For seamless Web3 integration

## 💜 For Mothers, By Mothers

_"Because postpartum care shouldn't be a privilege — it should be a protocol."_

---

Built with 💜 by the June community for mothers everywhere.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyour-username%2Fjune-app)
