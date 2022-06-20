import { Header } from "./Header";

export const Layout = ({ children }) => (
	<div>
		<Header />

		<main>{children}</main>

		<footer />
	</div>
);
