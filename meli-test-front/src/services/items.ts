import action from "../helpers/rest-client";
import {
	GetOneItemOutDto,
	GetOneItemDescriptionOutDto,
	GetAllItemsOutDto,
} from "../types/item.dto";

const module = "/items";

class Item {
	public getOne({ idItem }: GetOneItemOutDto) {
		return action
			.Get({
				url: `${module}/${idItem}`,
			})
			.then((response) => {
				return { error: undefined, response };
			})
			.catch((error) => {
				return { error, response: undefined };
			});
	}

	public getAll({ query }: GetAllItemsOutDto) {
		console.log(":: ~ Item ~ getAll ~ query", query);

		return action
			.Get({
				url: `${module}/?q=${query}`,
			})
			.then((response) => {
				return { error: undefined, response };
			})
			.catch((error) => {
				return { error, response: undefined };
			});
	}

	public getItemDescription({ idItem }: GetOneItemDescriptionOutDto) {
		return action
			.Get({
				url: `${module}/${idItem}/description`,
			})
			.then((response) => {
				return { error: undefined, response };
			})
			.catch((error) => {
				return { error, response: undefined };
			});
	}
}

const customer = new Item();
export default customer;
