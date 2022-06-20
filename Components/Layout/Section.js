import { Wrapper } from "./Wrapper";

export const Section = ({ children, className }) =>
	className && (
		<div className={className}>
			<Wrapper>{children}</Wrapper>
		</div>
	);
