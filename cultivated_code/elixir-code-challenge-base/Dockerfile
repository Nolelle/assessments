FROM elixir:1.13

RUN apt-get update && \
  apt-get install -y postgresql-client

RUN mix local.hex --force
RUN mix archive.install hex phx_new 1.6.6

RUN mkdir /home/app
COPY . /home/app
WORKDIR /home/app

