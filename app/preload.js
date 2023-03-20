// eslint-disable-next-line no-unused-vars
function attachPreload(shellToAppConfig) {
  const electron = require('electron')
  const { ipcRenderer, contextBridge } = electron

  const ipcChannel = shellToAppConfig['ipc-channel']
  const ipcAPI = {
    'send-to-shell': (transitPayload) => ipcRenderer.send(ipcChannel, transitPayload),
    'invoke-from-shell': (transitPayload) => ipcRenderer.invoke(ipcChannel, transitPayload),
    'on-shell-msg': (handler) => {
      ipcRenderer.on(ipcChannel, (_, transitPayload) => handler(transitPayload))
    },
  }

  if (shellToAppConfig['desktop-app-context-isolation']) {
    contextBridge.exposeInMainWorld('pitch-shell-to-app-config', shellToAppConfig)
    contextBridge.exposeInMainWorld('pitch-ipc', ipcAPI)
  } else {
    window.electronRequire = require
    window['pitch-shell-to-app-config'] = shellToAppConfig
    window['pitch-ipc'] = ipcAPI
  }
}
