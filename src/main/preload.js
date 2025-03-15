const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  // openFiles: () => ipcRenderer.invoke('open-files'),
});