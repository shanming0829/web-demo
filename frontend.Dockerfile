FROM node:16.5.0-slim as builder

USER root

COPY ./react-demo /react-demo

WORKDIR /react-demo

RUN yarn

RUN yarn build

FROM nginx:1.21.1

USER root

COPY --from=builder /react-demo/build/ /usr/share/nginx/html/
COPY --from=builder /react-demo/build/index.html /etc/nginx/html/index.html

