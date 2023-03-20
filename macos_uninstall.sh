#!/bin/bash
#
# Script Name: macos_uninstall.sh
#
# Author: Kailous
# organization: RainForest
# Date: 2023-03-20
# Version: 1.1
#
# Description: 卸载汉化补丁到客户端。
# Sync files: app-arm64.asar, app-x64.asar
#

# 判断主机是否是arm64架构
if [ "$(uname -m)" = "arm64" ]; then
  # arm64架构变量
  arch="arm64"
else
  # x64架构变量
  arch="x64"
fi

# 客户端文件夹路径和文件名列表
target_dir="/Applications/Pitch.app/Contents/Resources/app-$arch.asar"

# 判断客户端文件是否存在
if [ ! -f "$target_dir" ]; then
  echo "错误: 未找到客户端文件 '$target_dir' ，请正确安装客户端。"
  echo "提示: 客户端安装路径为/Applications/Pitch.app"
  exit 1
fi

# 判断备份文件是否存在，如果存在则恢复，如果不存在则忽略
if [ -f "$target_dir.backup" ]; then
  sudo mv -f "$target_dir.backup" "$target_dir"
fi
