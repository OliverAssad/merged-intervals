FROM node:12-alpine
WORKDIR /app
COPY . .
RUN npm ci && npm run build 
RUN npm prune --production


FROM node:12-alpine
WORKDIR /app

COPY --from=0 /app/ .
COPY . .
