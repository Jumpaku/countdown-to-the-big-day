FROM ubuntu:20.04

ENV DEBIAN_FRONTEND=noninteractive

WORKDIR /project_root

RUN apt update -y && apt install -y nodejs npm git curl \
    && npm install -g \
        npm-check-updates
        # \
        #typescript \
        #eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin \
        #prettier eslint-config-prettier
