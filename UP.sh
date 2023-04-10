#!/bin/bash
#
# Script Name: Up.sh
#
# Author: Kailous
# organization: RainForest
# Date: 2023-04-10
# Version: 1.1.0
#
# Description: 上传大文件到GitHub
# Sync files: base.js
#

git lfs track "*.asar"
git add app.asar app-arm64.asar app-x64.asar
git commit -m "追加汉化1.2.2"
git push origin main