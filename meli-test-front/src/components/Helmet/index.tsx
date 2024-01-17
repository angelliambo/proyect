import { Helmet } from "react-helmet";

const baseUrl = process.env.REACT_APP_BASE_URL;
const nombreSitio = process.env.REACT_APP_NOMBRE_SITIO;

interface SeoHelmetProps {
	description: string;
	path?: string;
}

const SeoHelmet = ({ description, path }: SeoHelmetProps) => {
	return (
		<Helmet>
			<meta charSet="utf-8" />
			<title>{nombreSitio}</title>
			<link rel="canonical" href={`${path ? baseUrl + path : baseUrl}`} />
			<meta name="description" content={`${description}`} />
		</Helmet>
	);
};

export default SeoHelmet;
