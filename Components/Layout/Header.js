import Navbar from "./Navbar";
import Logo from "../Logo";
import Wrapper from "./Wrapper";

const Header = () => {
	return (
		<header className="header">
			<Wrapper>
				<div className="header__content">
					<Logo
						src={`/images/site/logo.png`}
						alt=""
						width={175}
						height={40}
						layout="responsive"
					/>

					<Navbar />
				</div>
			</Wrapper>
		</header>
	);
};

export default Header;
