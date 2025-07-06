<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# June - Copilot Instructions

## Project Overview

June is a Web3-powered postpartum wellness companion built as a Farcaster Mini App. It provides a safe, nurturing space for mothers to track their mood, access wellness resources, and connect with decentralized protocols.

## Key Technologies

- **Frontend**: Next.js 15 with TypeScript and TailwindCSS
- **Web3**: Wagmi, Viem, Coinbase Wallet integration
- **Blockchain**: Base, Base Sepolia, Ethereum
- **Animation**: Framer Motion for smooth interactions
- **Identity**: Self Protocol for zero-knowledge identity verification
- **UBI**: GoodDollar Protocol for Universal Basic Income
- **Platform**: Farcaster Mini App

## Design Principles

- **Gentle & Nurturing**: Use soft colors, rounded corners, and gentle animations
- **Privacy-First**: Implement zero-knowledge proofs and privacy-preserving features
- **Mobile-Optimized**: Prioritize mobile experience for Farcaster users
- **Accessible**: Ensure all components are accessible and inclusive
- **Mother-Centric**: Design with postpartum mothers' needs in mind

## Code Style Guidelines

- Use TypeScript for all components
- Follow React best practices with hooks
- Use Tailwind utility classes for styling
- Implement proper error handling for Web3 interactions
- Use Framer Motion for animations
- Keep components modular and reusable

## Component Structure

- Use the `@/components/ui/` directory for reusable UI components
- Keep page-specific components in `@/components/`
- Use the `@/lib/` directory for utility functions
- Follow the established naming conventions

## Web3 Integration

- Always handle wallet connection states properly
- Use proper error handling for blockchain interactions
- Implement loading states for async operations
- Consider gas optimization for transactions
- Use Base network for lower fees

## Farcaster Mini App Considerations

- Optimize for mobile viewports
- Use proper meta tags for sharing
- Implement proper frame metadata
- Consider deeplink handling
- Follow Farcaster Mini App best practices

## Wellness & Healthcare Context

- Be sensitive to postpartum mental health topics
- Provide appropriate disclaimers for health advice
- Include safety guidelines for exercise recommendations
- Use inclusive and supportive language
- Consider cultural sensitivities around motherhood

## Performance & Accessibility

- Optimize images and assets
- Implement proper loading states
- Use semantic HTML
- Ensure keyboard navigation
- Maintain proper color contrast ratios
- Test with screen readers

## Environment Variables

- Use NEXT*PUBLIC* prefix for client-side variables
- Keep sensitive keys server-side only
- Document all environment variables in .env.example
- Use proper TypeScript types for env variables
