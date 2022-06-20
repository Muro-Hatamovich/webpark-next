import Link from "next/link";

export const CustomLink = ({ children, className, href }) => (
	<Link href={href}>
		<a className={className}>{children}</a>
	</Link>
);
