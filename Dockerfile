# 使用 Nginx 镜像作为基础镜像
FROM nginx:alpine

# 将项目文件复制到 Nginx 的默认网页目录
COPY . /usr/share/nginx/html

# 暴露 Nginx 默认端口
EXPOSE 80
