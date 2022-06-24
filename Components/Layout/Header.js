import { Navbar } from "./Navbar";
import { Logo } from "../Logo";
import { Wrapper } from "./Wrapper";

export const Header = ({ logo, nav }) => {
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
