# FROM almalinux:9
# RUN dnf install -y nginx
# WORKDIR /usr/share/nginx/html
# COPY info.txt .
# RUN pwd 
# RUN cat info.txt
# CMD ["nginx", "-g", "daemon off;"]

FROM almalinux:9
RUN dnf install -y nginx
RUN rm -rf /usr/share/nginx/html/index.html
ONBUILD COPY index.html /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]