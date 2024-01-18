import { Request, Response } from "express";
import Service from "./service";
import { ItemDescriptionDto, ItemDto, itemsDto } from "./dto/item.dto";

/**
 * editData:
 *  el param data es la respuesta previamente obtenida de la api de mercado-libre
 *  antes de enviarla al front, le agregamos firma de autor segun se ha solicitado
 * @param {*} data
 * @return {*} data + firma de autor
 */
const editData = (data) => {
	const modifiedData = {
		...data,
		author: {
			name: "Angel Adrián",
			lastname: "Liambo",
		},
	};
	return modifiedData;
};

class Controller {
	private service: Service;

	constructor() {
		this.service = new Service();
	}

	/**
	 * searchItems:
	 *  Solicitamos a la  api realizar un busqueda general
	 * req: string required
	 *
	 * @param {Request} req
	 * @param {Response} res
	 * @memberof Controller
	 */
	async searchItems(req: Request, res: Response) {
		try {
			const data: itemsDto = await this.service.searchItems(req);

			res.json(editData(data));
		} catch (error) {
			console.error("Error! searchItems.");
			res.status(500).json({ error: "Error al obtener los datos." });
		}
	}

	/**
	 * getItemById:
	 *  Solicitamos a la  api realizar un busqueda especifica
	 * id: string required
	 *
	 * @param {Request} req
	 * @param {Response} res
	 * @memberof Controller
	 */
	async getItemById(req: Request, res: Response) {
		try {
			const data: ItemDto = await this.service.getItemById(req);
			res.json(editData(data));
		} catch (error) {
			console.error("Error! getItemById.");
			res.status(500).json({ error: "Error al obtener los datos." });
		}
	}

	/**
	 * getItemDescription:
	 *  Solicitamos a la  api realizar un busqueda
	 *  de la descripcion de un elemento en particular
	 * id: string required
	 *
	 * @param {Request} req
	 * @param {Response} res
	 * @memberof Controller
	 */
	async getItemDescription(req: Request, res: Response) {
		try {
			const data: ItemDescriptionDto = await this.service.getItemDescription(
				req
			);
			res.json(editData(data));
		} catch (error) {
			console.error("Error! getItemDescription.");
			res.status(500).json({ error: "Error al obtener los datos." });
		}
	}
}

export default Controller;
