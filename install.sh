#!/bin/sh
#
# Script Name: install.sh
#
# Author: Kailous
# organization: RainForest
# Date: 2023-03-20
# Version: 1.1
#
# Description: 安装汉化补丁到客户端。
# Sync files: app-arm64.asar, app-x64.asar
#

# 源文件路径和文件名
source_arm64="https://raw.githubusercontent.com/kailous/Pitch-cn/main/app-arm64.asar"
source_x64="https://raw.githubusercontent.com/kailous/Pitch-cn/main/app-x64.asar"
# 客户端文件夹路径和文件名列表
target_dir="/Applications/Pitch.app/Contents/Resources/"

# 判断主机是否是arm64架构
if [ "$(uname -m)" = "arm64" ]; then
  # arm64架构
  source_file="$source_arm64"
  # 架构变量
  arch="arm64"
else
  # x64架构
  source_file="$source_x64"
  # 架构变量
  arch="x64"
fi

# 判断客户端文件夹是否存在
if [ ! -d "$target_dir" ]; then
  echo "错误: '$target_dir' 客户端没有正确安装，请安装在 应用程序(Applications)文件夹下，并确保客户端名称没有被修改。"
  exit 1
fi

# 下载源文件到客户端文件夹，覆盖原有文件，显示进度条，判断是否成功，如果失败给出失败原因。
echo "当前为'$arch'架构"
echo "正在下载'$arch'汉化补丁..."
curl -# -o "$target_dir" "$source_file" || { echo "错误: 下载失败，请检查网络连接。"; exit 1; }
echo "下载成功: '$source_file' 已经下载到 '$target_dir'."
exit 0
