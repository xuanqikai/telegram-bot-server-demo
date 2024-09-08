FROM node:18

# 使用淘宝 NPM 镜像（国内机器构建推荐启用）
RUN npm config set registry https://registry.npm.taobao.org/
# RUN npm config set registry https://registry.npmmirror.com

RUN npm i -g typescript && npm i -g pm2 && pm2 install pm2-logrotate
# npm install
ADD package*.json /src/
WORKDIR /src
RUN npm i --legacy-peer-deps

# build
ADD . /src

# 开始编译代码并移动文件
RUN npm run build \
    && rm -rf /app \
    && mv dist /app \
    && mv ecosystem.config.js /app \
    && mv node_modules /app/ \
    && rm -rf /src

EXPOSE 3000

WORKDIR /app
CMD pm2 set pm2-logrotate:retain 100000 && pm2-docker start ecosystem.config.js
