
import Image from "astro/components/Image.astro"
import classes from './SocialLinks.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faStrava } from "@fortawesome/free-brands-svg-icons";

const links = [
	{
		href: "https://www.strava.com/clubs/935968",
		icon: faStrava,
		alt: "Strava"
	},
	{
		href: "https://www.instagram.com/bedfordrunclub",
		icon: faInstagram,
		alt: "Instagram"
	}
];

const SocialLinks = () => (
	<ul className={classes.navMenu}>
		{links.map(link => (<li className={classes.navItem}>
			<a className={classes.navLink} href={link.href} target="_blank" rel="noopener noreferrer">
			<FontAwesomeIcon icon={link.icon} aria-label={link.alt} />
			</a>
		</li>))}
	</ul>
);

export default SocialLinks;