FROM node:lts-alpine AS builder

WORKDIR /app

COPY . .
RUN yarn install
RUN yarn build
RUN yarn run export

FROM node:lts-alpine
WORKDIR /app

RUN yarn global add serve
COPY --from=builder /app/out .

CMD ["serve", "-s", ".", "-p", "80"]
