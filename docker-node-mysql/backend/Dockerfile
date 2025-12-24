# ---------- BUILD STAGE ----------
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY src ./src

# ---------- RUNTIME STAGE ----------
FROM node:20-alpine
WORKDIR /app

# Security: non-root user
RUN addgroup -S app && adduser -S app -G app

COPY --from=builder /app /app
USER app

EXPOSE 3000
CMD ["node", "src/index.js"]
