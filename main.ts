import { app, BrowserWindow } from 'electron';
import { createServer } from 'vite';
import serve from 'electron-serve';

const DEV_SERVER_PORT = 5555;
const DEV_SERVER = process.env.APP_ENV !== 'production';
let mainWindow: BrowserWindow;
const serveURL = serve({directory: './'});

async function main () {
    await app.whenReady();
    mainWindow = new BrowserWindow({
        webPreferences: { contextIsolation: true, enableRemoteModule: false }
    });

    let webview_page: string;
    if (DEV_SERVER) {
        const devServer = await createServer({
            server: {
                port: DEV_SERVER_PORT
            }
        });
        await devServer.listen();
        webview_page = `http://localhost:${DEV_SERVER_PORT}`;
    } else {
        await serveURL(mainWindow);
        webview_page = `app://-`;
    }
    await mainWindow.loadURL(webview_page);
}

main();
