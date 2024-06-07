import React, { useState } from 'react';
import classes from './Navbar.module.scss';
import logo from '../../assets/ns-crest.png';

const Navbar: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleMenu = () => setIsOpen(!isOpen);

	return (
		<nav className={classes.navbar}>
			<a className={classes.title} href="/">
				<img className={classes.logo} src={logo.src} alt="" />
				Bedford Run Club</a>
			<button className={classes.navToggle} onClick={toggleMenu}>
				<span className={classes.invisible}>Menu</span>
				<div className={classes.menuIcon}>
					<div className={classes.line} />
					<div className={classes.line} />
					<div className={classes.line} />
				</div>
			</button>
			
			<ul className={classes.navMenu} data-is-open={isOpen}>
				<li className={classes.navItem}>
			<a className={classes.navLink} href="/">About</a>

				</li>
				<li className={classes.navItem}>
			<a className={classes.navLink} href="/">Route</a>

				</li>
				<li className={classes.navItem}>
			<a className={classes.navLink} href="/">Events</a>

				</li>
			</ul>
		</nav> 
	);
};

export default Navbar;