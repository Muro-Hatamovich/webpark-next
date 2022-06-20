import { CustomLink } from "../CustomLink";

export const Navbar = () => (
	<nav className="navbar">
		<CustomLink className="navbar__link" href="/">
			главная
		</CustomLink>
		<CustomLink className="navbar__link" href="/">
			о нас
		</CustomLink>
		<CustomLink className="navbar__link" href="/">
			услуги
		</CustomLink>
		<CustomLink className="navbar__link" href="/">
			контакты
		</CustomLink>
	</nav>
);
