import path from "path";
import { BrowserWindow, app } from "electron";

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 400,
    height: 400,
    webPreferences: {
      preload: path.resolve(__dirname, "preload.js"),
    },
  });

  mainWindow.loadFile("dist/index.html");
  // mainWindow.webContents.openDevTools({ mode: "detach" });
};

app.whenReady().then(() => {
  createWindow();
});

app.once("window-all-closed", () => app.quit());
