FROM postgres:latest

ENV POSTGRES_USER crazycat
ENV POSTGRES_PASSWORD crazycat
ENV POSTGRES_DB crazy_cats

COPY init.sql /docker-entrypoint-initdb.d/
EXPOSE 5432