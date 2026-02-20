FROM almalinux:9
RUN dnf install -y nginx
RUN rm -rf /usr/share/nginx/html/index.html
ONBUILD COPY index.html /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]