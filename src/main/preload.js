const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  runGitCommand: (command) => ipcRenderer.invoke('git-command', command)
});