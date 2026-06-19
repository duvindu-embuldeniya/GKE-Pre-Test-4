# Stage 1: Build
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# ENV VITE_SERVER_BASE_URL=/api/v1
ENV VITE_SERVER_BASE_URL=http://34.124.228.21:8000/api/v1

RUN npm run build

# Stage 2: Nginx
FROM nginx:alpine

# Takes build react image and put it inside nginx
COPY --from=build /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]