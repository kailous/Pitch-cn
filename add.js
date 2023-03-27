// ==UserScript==
// @name         Pitch-cn-add
// @namespace    https://rainforest-kailous.notion.site/
// @version      1.1.0
// @description  补充
// @author       Kailous
// @match        https://app.pitch.com/*
// @match        https://pitch.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=pitch.com
// @grant        none
// @license      MIT
// @run-at       document-start
// ==/UserScript==

const allData = [
            [`Link`, `链接`],
        ]

// MutationObserver 是一个用于监听 DOM 变化的 API
        let MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

// MutationObserverConfig 用于配置 MutationObserver
        let MutationObserverConfig = {
            attributes: true, // 观察属性变化
            childList: true,  // 观察子节点变化
            subtree: true,    // 观察子树变化
            characterData: true, // 观察文本节点变化
            attributeOldValue: true, // 观察属性变化前的值
            characterDataOldValue: true, // 观察文本节点变化前的值
            attributeFilter: ['data-label', 'placeholder'] // 观察指定属性变化
        }

// 创建一个 MutationObserver 实例，用于监听 class为option-panels-panel-wrap的div的 dom 变化
        let observer = new MutationObserver(function (mutations) {
                mutations.forEach(function (mutation) {
                    if (mutation.type === 'childList') {
                        // 当 mutation.type 为 childList 时，表示子节点发生了变化
                        // mutation.addedNodes 为新增的节点
                        // mutation.removedNodes 为被删除的节点
                        mutation.addedNodes.forEach(function (node) {
                            // 当新增的节点为 div 且 class 包含 option-panels-panel-wrap 时，表示新增了一个面板
                            if (node.nodeName === 'DIV' && node.classList.contains('option-panels-panel-wrap')) {
                                // 遍历 allData 数组
                                allData.forEach(function (data) {
                                    // 将所有的键值对替换
                                    node.innerHTML = node.innerHTML.replace(new RegExp(data[0], 'g'), data[1])
                                })
                            }
                        })
                    }
                })
            }
        )
// 开始监听 DOM 变化
        observer.observe(document.body, MutationObserverConfig);
