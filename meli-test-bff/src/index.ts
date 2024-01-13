import App from "./app";

const app = new App();
const port = Number(process.env.API_PORT) || 5000;

app.start(port);
