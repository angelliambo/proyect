// Tools
import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
// Componets
import AppLayout from "./components/Layout";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Loader from "./components/Loader";

// import SearchPage from "./pages/Search";
import ItemsListPage from "./pages/List";
import ItemPreviewPage from "./pages/Preview";
import NotFoundPage from "./pages/404";

// Lazy pages
const SearchPage = lazy(
	() => import(/* webpackChunkName: "SearchPage" */ "./pages/Search")
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
