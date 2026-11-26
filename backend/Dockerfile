FROM node:20-alpine

WORKDIR /app

# Install dependencies first (better layer caching)
COPY package*.json ./
RUN npm ci --omit=dev

COPY . .

ENV NODE_ENV=production
EXPOSE 5000

# Run as non-root user
USER node

# Change "server.js" to your entry file (e.g. index.js, src/app.js)
CMD ["node", "server.js"]