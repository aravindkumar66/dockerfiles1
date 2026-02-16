FROM almalinux:9
RUN dnf install -y nginx
WORKDIR /usr/share/nginx/html
COPY info.txt .
RUN pwd 
RUN cat info.txt
CMD ["nginx", "-g", "daemon off;"]