FROM mysql:5.7

ENV MYSQL_ROOT_PASSWORD=senha_root
ENV MYSQL_DATABASE=node_db

COPY ./script.sql /docker-entrypoint-initdb.d/
