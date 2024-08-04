FROM node:latest as clarkeenergia
WORKDIR /app
COPY package.json  /app
RUN npm install --silent
COPY . .
RUN npm run build

FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=clarkeenergia app/dist/clarkeenergia /usr/share/nginx/html
COPY ./config/nginx.conf etc/nginx/conf.d/default.conf

# docker build -t clarkeenergia .
# docker run -p 8080:80 clarkeenergia
