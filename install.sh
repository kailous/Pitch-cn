#!/bin/bash
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

# 判断主机是否是arm64架构
if [ "$(uname -m)" = "arm64" ]; then
  # arm64架构变量
  arch="arm64"
else
  # x64架构变量
  arch="x64"
fi
# 源文件路径和文件名
source_dir="https://raw.githubusercontent.com/kailous/Pitch-cn/main/app-$arch.asar"
# 客户端文件夹路径和文件名列表
target_dir="/Applications/Pitch.app/Contents/Resources/app-$arch.asar"



# 判断客户端文件是否存在
if [ ! -f "$target_dir" ]; then
  echo "错误: 未找到客户端文件 '$target_dir' ，请下载完整的项目。"
  exit 1
fi


# 下载源文件到客户端文件夹，覆盖原有文件，显示进度条，判断是否成功，如果失败给出失败原因。
echo "$source_dir"
echo "当前为'$arch'架构"
echo "正在下载'$arch'汉化补丁..."
echo "因为补丁需要直接下载到app修改，所以需要输入管理员密码。"
# 提示输入管理员密码
sudo chmod -R 777 /Applications/Pitch.app
# 备份原有文件
# 判断备份文件是否存在，如果存在则忽略，如果不存在则备份
if [ ! -f "$target_dir.backup" ]; then
  sudo mv "$target_dir" "$target_dir.backup"
fi
sudo curl -# -fo "$target_dir" -L "$source_dir" || { echo "错误: 下载失败，请检查网络连接。"; exit 1; }
echo "下载成功: '$source_dir' 已经下载到 '$target_dir'."
exit 0