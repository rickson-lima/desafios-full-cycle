FROM golang:alpine AS builder

WORKDIR /go/src/app

COPY hello.go ./hello.go

RUN go build -o /app hello.go

FROM scratch

COPY --from=builder /app /app

CMD [ "/app" ]