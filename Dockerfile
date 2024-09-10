# 从ecr仓库中拉取node：18镜像
FROM 559050230964.dkr.ecr.ap-southeast-2.amazonaws.com/node-18:latest

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
