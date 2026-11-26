# ---- Stage 1: build the app ----
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Auto-detect the build output folder (dist, build, out, dist/<name>/browser ...)
# by looking for the built index.html, ignoring source/template copies.
RUN set -e; \
    OUT_INDEX=$(find /app -maxdepth 5 -name index.html \
      -not -path "*/node_modules/*" \
      -not -path "/app/index.html" \
      -not -path "/app/public/*" \
      -not -path "/app/src/*" | head -n 1); \
    if [ -z "$OUT_INDEX" ]; then \
      echo "ERROR: no built index.html found. Contents of /app:"; \
      ls -la /app; \
      exit 1; \
    fi; \
    echo "Found build output in: $(dirname "$OUT_INDEX")"; \
    mkdir -p /out; \
    cp -r "$(dirname "$OUT_INDEX")"/. /out/

# ---- Stage 2: serve with nginx ----
FROM nginx:alpine
COPY --from=build /out /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]