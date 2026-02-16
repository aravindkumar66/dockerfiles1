FROM almalinux:9
RUN dnf install -y nginx
COPY info.txt .
RUN pwd 
RUN info.txt
CMD ["nginx", "-g", "daemon off;"]