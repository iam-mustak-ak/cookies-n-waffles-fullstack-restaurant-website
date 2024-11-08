# Use an official Node.js image as the base image
FROM node:20.18.0-alpine AS base

# Set working directory for the app
WORKDIR /app

# Install dependencies
FROM base AS deps
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* bun.lockb* ./
RUN \
    if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
    elif [ -f package-lock.json ]; then npm ci --legacy-peer-deps; \
    elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
    elif [ -f bun.lockb ]; then bun install --frozen-lockfile; \
    else echo "Lockfile not found." && exit 1; \
    fi

# Build the Next.js app
FROM base AS builder
WORKDIR /app
ENV NODE_ENV=production
COPY --from=deps /app/node_modules ./node_modules
COPY . . 

# Run Next.js build command to create optimized production files
RUN \
    if [ -f yarn.lock ]; then yarn run build; \
    elif [ -f package-lock.json ]; then npm run build; \
    elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm run build; \
    elif [ -f bun.lockb ]; then bun run build; \
    else echo "Lockfile not found." && exit 1; \
    fi

# Production image: only copy necessary files and set up the app
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy production build from the builder stage
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

# Set the correct permissions for the build files
RUN chown -R nextjs:nodejs .next public

USER nextjs

# Expose the default port (3000) for the app
EXPOSE 3000

ENV PORT=3000

# Run the Next.js app in production mode
CMD ["npm", "run", "start"]
