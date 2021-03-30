#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

git push origin master:master
echo -e '\033[32m 已推送至 github '

git remote set-url origin git@gitee.com:sanm-zh/vue3-ts-vite.git
git push origin master:master
echo -e '\033[32m 已推送至 gitee '

git remote set-url origin git@github.com:Sanm-ZH/vue3-ts-vite.git
