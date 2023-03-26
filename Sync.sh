#!/bin/bash
#
# Script Name: Sync.sh
#
# Author: Kailous
# organization: RainForest
# Date: 2023-03-20
# Version: 1.1.0
#
# Description: 同步根目录的汉化脚本到各个文件夹内。
# Sync files: base.js
#

# 源文件路径和文件名
source_file="./base.js"
# 编号
nb="719998b2-df4b-4b86-9793-3f821d281369"
# 目标文件夹路径和文件名列表
target_arm64="./app-arm64"
target_x64="./app-x64"
target="./app"
target_folders=(
  "./app-arm64/resources/public/static/app/$nb/js/l10n"
  "./app-x64/resources/public/static/app/$nb/js/l10n"
  "./app/resources/public/static/app/$nb/js/l10n"
)
# 备份文件路径和文件名
backup_file="$target_file.$(date +%Y%m%d%H%M%S)"
# 循环遍历目标文件夹列表，将源文件复制到每个目标文件夹中
for target_file in "${target_folders[@]}"; do
  target_folder=$(dirname "$target_file")

  # 如果目标文件夹不存在，则创建它
  if [ ! -d "$target_folder" ]; then
    echo "错误: '$target_folder' 文件夹不存在，请下载完整的项目。"
    exit 1
  fi

  # 如果源文件不存在，则退出脚本并输出错误消息
  if [ ! -f "$source_file" ]; then
    echo "错误: 未找到源文件 '$source_file' ，请下载完整的项目。"
    exit 1
  fi
  # 复制源文件到目标文件夹中
  cp "$source_file" "$target_file"
  echo "同步成功: '$source_file' 已经同步到 '$target_file'."
done
# 打包app-arm64、app-x64和app，分别打包为asar文件到根目录。
asar pack ./$target_arm64 ./$target_arm64.asar
echo "打包成功: '$target_arm64' 已经打包为$target_arm64.asar."
asar pack ./$target_x64 ./$target_x64.asar
echo "打包成功: '$target_x64' 已经打包为$target_x64.asar."
asar pack ./$target ./$target.asar
echo "打包成功: '$target' 已经打包为$target.asar."
exit 0
