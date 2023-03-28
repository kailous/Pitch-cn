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

// 定义需要替换的文本
const allData = [
    [`Link`, `链接`],
    [`Title`, `标题`],
    [`Headline`, `大标题`],
    [`Subheadline`, `副标题`],
    [`Normal text`, `正文`],
    [`Small text`, `小字体正文`]
]
// 定义 MutationObserver 监听器
let MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
let MutationObserverConfig = {
    childList: true,
    subtree: true,
    attributeFilter: ['data-label'],
    characterData: true
};
// 监听器
let observer = new MutationObserver(function (mutations) {
    // 遍历所有节点
    let treeWalker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_ALL,
        {
            // 过滤器
            acceptNode: function (node) {
                // 过滤掉不需要的节点
                if (node.parentNode && node.parentNode.classList && node.parentNode.classList.contains('canvas-wrapper')) {
                    return NodeFilter.FILTER_SKIP;
                } else {
                    return NodeFilter.FILTER_ACCEPT;
                }
            }
        },
        false
    );
    // 去重
    let dataMap = new Map();
    allData.forEach(([key, val]) => {
        if (key && !dataMap.has(key)) {
            dataMap.set(key, val);
        }
    });
    // 替换
    let currentNode = treeWalker.currentNode;
    // 遍历所有节点
    while (currentNode) {
        // 文本节点
        if (currentNode.nodeType === 3) {
            // 替换文本
            let key1 = currentNode.textContent;
            if (dataMap.has(key1)) currentNode.textContent = dataMap.get(key1);
        }
        // 下一个节点
        currentNode = treeWalker.nextNode();
    }
});
// 开始监听
observer.observe(document.body, MutationObserverConfig);