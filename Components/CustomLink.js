import Link from "next/link";

const CustomLink = ({ children, className, href }) => (
	<Link href={href}>
		<a className={className}>{children}</a>
	</Link>
);

export default CustomLink;
