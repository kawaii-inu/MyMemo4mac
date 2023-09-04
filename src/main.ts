import path from "path";
import { BrowserWindow, app, Tray, Menu, nativeImage } from "electron";

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 400,
        height: 400,
        webPreferences: {
            preload: path.resolve(__dirname, "preload.js"),
        },
    });
    mainWindow.setPosition(1040, 10);
    //mainWindow.loadURL("http://localhost:3000/MyMemo");
    mainWindow.loadURL("https://kawaii-inu.github.io/MyMemo/");
};

app.whenReady().then(() => {
    const img = nativeImage.createFromPath("src/assets/tray24x24.png");
    let tray = new Tray(img);
    tray.setToolTip("Tray app");
    tray.setContextMenu(
      // TODO: window を全面に持ってくる実装したい
      Menu.buildFromTemplate([{ label: "Quit", role: "quit" }]),
    );
    createWindow();
});

app.once("window-all-closed", () => app.quit());
