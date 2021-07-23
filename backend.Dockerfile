FROM golang:1.16.6-stretch

USER root

ENV GOPROXY="http://goproxy.easystack.io/"

COPY ./go-demo /go-demo

WORKDIR /go-demo

RUN go mod tidy

ENTRYPOINT ["go", "run", "."]