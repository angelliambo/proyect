// app.ts
import express, { Application } from "express";
import modulesRouter from "./modules";
import cors from "cors";

class App {
	private app: Application;

	constructor() {
		this.app = express();
		this.app.use(cors());
		this.config();
		this.routes();
	}

	private config() {
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: true }));
	}

	private routes() {
		this.app.use("/api/", modulesRouter);
	}

	public start(port: number) {
		this.app.listen(port, () => {
			console.log(`App running at port ${port}`);
		});
	}
}

export default App;
