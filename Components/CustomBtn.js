export const CustomBtn = ({ children, className, link = false }) =>
	!link ? (
		<button className={`btn ${className ? className : ""}`}>
			{children}
		</button>
	) : (
		<a
			href={link.href}
			target="_blank"
			rel="noreferrer"
			className={`btn ${className}`}
		>
			{children}
		</a>
	);
