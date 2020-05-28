import {WebView} from "./deps.ts";

const SERVER_URL = 'https://sgk-news.pl';

const webview = new WebView({
    title: "SGK-News app",
    url: SERVER_URL,
    width: 800,
    height: 600,
    resizable: true,
    debug: true,
    frameless: false
});
// Running the webview
webview.run();
