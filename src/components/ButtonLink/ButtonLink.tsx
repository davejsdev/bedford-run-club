import React from 'react';
import classes from './ButtonLink.module.scss';

interface ButtonLinkProps {
	href: string;
	children: React.ReactNode;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ href, children }) => {
	return (
		<a className={classes.buttonLink} href={href}>
			{children}
		</a>
	);
};

export default ButtonLink;