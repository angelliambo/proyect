import axios, { AxiosRequestConfig } from "axios";
const BASE_URL = process.env.REACT_APP_API_URL ?? "/";

interface VerbParamsInterface {
	url: string;
	body?: any;
	config?: AxiosRequestConfig;
}

const getConfig = async () => {
	return {
		baseURL: BASE_URL,
	};
};

const Get = async ({ url, config = {} }: VerbParamsInterface) => {
	const defaultConfig = await getConfig();
	const { data } = await axios.get(url, { ...defaultConfig, ...config });
	return data;
};

const Post = async ({ url, body = {}, config = {} }: VerbParamsInterface) => {
	const defaultConfig = await getConfig();
	const { data } = await axios.post(url, body, { ...defaultConfig, ...config });
	return data;
};

const Put = async ({ url, body = {}, config = {} }: VerbParamsInterface) => {
	const defaultConfig = await getConfig();
	const { data } = await axios.put(url, body, { ...defaultConfig, ...config });
	return data;
};

const Del = async ({ url, config = {} }: VerbParamsInterface) => {
	const defaultConfig = await getConfig();
	const { data } = await axios.delete(url, { ...defaultConfig, ...config });
	return data;
};

const Patch = async ({ url, body = {}, config = {} }: VerbParamsInterface) => {
	const defaultConfig = await getConfig();
	const { data } = await axios.patch(url, body, {
		...defaultConfig,
		...config,
	});
	return data;
};

const actions = {
	Get,
	Post,
	Put,
	Del,
	Patch,
};

export default actions;
