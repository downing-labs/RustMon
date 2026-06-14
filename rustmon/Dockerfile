### STAGE 1: Build ###
FROM node:20-alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build -- --configuration production

### STAGE 2: Run ###
FROM nginx:alpine
COPY --from=build /usr/src/app/dist/rustmon /usr/share/nginx/html
COPY --from=build /usr/src/app/nginx.default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
