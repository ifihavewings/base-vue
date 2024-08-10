# 指定基础镜像为 Node.js 16
FROM node:20

# 设置工作目录
WORKDIR /app

# 将 package.json 和 package-lock.json 复制到工作目录
COPY package*.json ./

# 安装 Vue CLI
RUN npm install -g @vue/cli

# 创建一个 Vue 3 项目，并配置 TypeScript
RUN vue create --default --packageManager npm my-vue-app
WORKDIR /app/my-vue-app
RUN vue add typescript

# 安装 Element UI 和 Vue Router
RUN npm install element-plus vue-router

# 复制环境配置文件到项目中
COPY .env.development .env.development
COPY .env.production .env.production

# 根据环境变量选择相应的环境配置文件
ARG NODE_ENV
RUN if [ "$NODE_ENV" = "production" ]; then cp .env.production .env; else cp .env.development .env; fi

# 暴露端口
EXPOSE 8080

# 启动开发服务器
CMD ["npm", "run", "serve"]
