// Tools
import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
// Componets
import AppLayout from "./components/Layout";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Loader from "./components/Loader";

// Lazy pages
const SearchPage = lazy(
	() => import(/* webpackChunkName: "SearchPage" */ "./pages/Search")
);

const ItemsListPage = lazy(
	() => import(/* webpackChunkName: "ItemsListPage" */ "./pages/List")
);

const ItemPreviewPage = lazy(
	() => import(/* webpackChunkName: "ItemPreviewPage" */ "./pages/Preview")
);

const NotFoundPage = lazy(
	() => import(/* webpackChunkName: "NotFoundPage" */ "./pages/404")
);

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<ScrollToTop useLocation={useLocation} />
				<NavBar />
				<Suspense fallback={<Loader />}>
					<Routes>
						<Route path="/" element={<AppLayout />}>
							<Route index element={<SearchPage />} />
							<Route path="/items" element={<ItemsListPage />} />
							<Route path="/item/:id" element={<ItemPreviewPage />} />
						</Route>
						<Route path="*" element={<NotFoundPage />} />
					</Routes>
				</Suspense>
			</BrowserRouter>
			<Footer />
		</div>
	);
};

export default App;
