import { Navbar } from "./Navbar";
import { Logo } from "../Logo";
import { Wrapper } from "./Wrapper";

export const Header = () => {
	return (
		<header className="header">
			<Wrapper>
				<div className="header__content">
					<Logo
						src="/images/site/logo.png"
						alt="Официальный логотип WEBPARK"
						width={175}
						height={40}
					/>

					<Navbar />
				</div>
			</Wrapper>
		</header>
	);
};
