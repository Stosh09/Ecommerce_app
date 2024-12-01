import { Outlet } from "react-router-dom";
import ShoppingHeader from "./header";

function StoreLayout() {
	return (
		<div className="flex flex-col bg-white overflow-hidden">
			{/*Common header Component */}
			<ShoppingHeader />
			<main className="flex flex-col w-full">
				<Outlet	/>
			</main>
		</div>
	)
}

export default StoreLayout;