#!/bin/bash
#
# Script Name: update.sh
#
# Author: Kailous
# organization: RainForest
# Date: 2023-03-24
# Version: 1.1
#
# Description: 拉取最新的语言包到本地。
# Sync files: base.js
#

# 语言包路径
source_file="https://app.pitch.com/static/app/22ddbd59-7550-4fe1-87f6-8426bf74c955/js/l10n/base.js"

# 使用curl，下载到本地 重命名为 base_web.js，显示进度条，覆盖已有文件。
curl -o base_new.js -# -L $source_file
