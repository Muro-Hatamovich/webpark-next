import CustomLink from "../CustomLink";
import { CgArrowUpR } from "react-icons/cg";

const Navbar = () => (
	<nav className="navbar">
		<CustomLink
			scroll={true}
			className="navbar__link"
			href="/"
			smooth={true}
			spy={true}
			to="header"
			duration={500}
		>
			главная
		</CustomLink>
		<CustomLink
			scroll={true}
			className="navbar__link"
			href="/"
			smooth={true}
			spy={true}
			to="intro"
			duration={500}
		>
			о нас
		</CustomLink>

		<CustomLink
			scroll={true}
			className="navbar__link"
			href="/"
			smooth={true}
			spy={true}
			to="partners"
			duration={500}
		>
			Наши клиенты
		</CustomLink>
		<CustomLink
			scroll={true}
			className="navbar__link"
			href="/"
			smooth={true}
			spy={true}
			to="services"
			duration={500}
		>
			услуги
		</CustomLink>
		<CustomLink
			scroll={true}
			className="navbar__link"
			href="/"
			smooth={true}
			spy={true}
			to="contacts"
			duration={500}
		>
			контакты
		</CustomLink>

		<CustomLink
			scroll={true}
			className="navbar__link scroll-top"
			href="/"
			smooth={true}
			spy={true}
			to="header"
			duration={500}
		>
			<CgArrowUpR />
		</CustomLink>
	</nav>
);

export default Navbar;
