# ---- Stage 1: build the app ----
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Set this to your build output folder: dist or build
ARG BUILD_DIR=build
RUN mkdir -p /out && cp -r /app/${BUILD_DIR}/. /out/

# ---- Stage 2: serve with nginx ----
FROM nginx:alpine
COPY --from=build /out /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]