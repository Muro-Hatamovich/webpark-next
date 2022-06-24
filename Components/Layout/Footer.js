import Contacts from "../Contacts";
import { useContext } from "react";
import { DataContext } from "../../store/DataContext";

export const Footer = ({ config }) => {
	return (
		<footer>
			<Contacts />
		</footer>
	);
};
