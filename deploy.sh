!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
# npm cache clean -f

npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist


git init
git add -A
git commit -m $1

# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:milyyy/milyyy.github.io.git master

cd -

git add .

git commit -m $1

git push origin master:master # 推到github上
