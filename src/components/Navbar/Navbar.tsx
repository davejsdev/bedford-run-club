import React, { useState } from 'react';
import classes from './Navbar.module.scss';
import logo from '../../assets/ns-crest.png';
import SocialLinks from '../SocialLinks/SocialLinks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRoute, faPersonRunning, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ path }: { path?: string }) => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleMenu = () => setIsOpen(!isOpen);

	return (
		<nav className={classes.navbar}>
			<a className={classes.title} href="/">
				<img className={classes.logo} src={logo.src} alt="" />
				Bedford Run Club
			</a>
			<div className={classes.menus}>
				
				<ul className={classes.navMenu} data-is-open={isOpen}>
					<li className={classes.navItem}>
						<a className={classes.navLink} href="/about" aria-current={path === '/about' ? 'page' : undefined}>
						<FontAwesomeIcon icon={faPersonRunning} />
							About
							</a>
					</li>
					<li className={classes.navItem}>
						<a className={classes.navLink} href="/routes" aria-current={path === '/routes' ? 'page' : undefined}>
						<FontAwesomeIcon icon={faRoute} />
							Route
							</a>
					</li>
					<li className={classes.navItem}>
						<a className={classes.navLink} href="/events" aria-current={path === '/events' ? 'page' : undefined}>
						<FontAwesomeIcon icon={faCalendarAlt} />
							Events
						</a>
					</li>
					{/* <li className={classes.navItem}>
						<a className={classes.navLink} href="/photos" aria-current={path === '/photos' ? 'page' : undefined}>
						<FontAwesomeIcon icon={faImages} />
							Photos
						</a>
					</li> */}
				</ul>
				<SocialLinks />
			</div>
				<button className={`${classes.navLink} ${classes.navToggle}`} onClick={toggleMenu}>
					<span className={classes.invisible}>Menu</span>
					<div className={classes.menuIcon}>
						<div className={classes.line} />
						<div className={classes.line} />
						<div className={classes.line} />
					</div>
				</button>
		</nav> 
	);
};

export default Navbar;