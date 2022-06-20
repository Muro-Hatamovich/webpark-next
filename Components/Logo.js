import Image from "next/image";

export const Logo = ({ src, alt, width, height, layout, className }) => (
	<div className={`logo ${className ? $className : ""}`}>
		<Image
			src={src}
			alt={alt}
			width={width}
			height={height}
			layout={layout}
		/>
	</div>
);
