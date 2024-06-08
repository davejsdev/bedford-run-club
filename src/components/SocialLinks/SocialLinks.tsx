
import Image from "astro/components/Image.astro"
import classes from './SocialLinks.module.scss'
import stravaLogo from "../../assets/strava-logo.svg"
import instagramLogo from "../../assets/instagram-logo.svg"

const links = [
	{
		href: "https://www.strava.com/clubs/935968",
		icon: stravaLogo,
		alt: "Strava"
	},
	{
		href: "https://www.instagram.com/bedfordrunclub",
		icon: instagramLogo,
		alt: "Instagram"
	}
];

const SocialLinks = () => (
	<ul className={classes.navMenu}>
		{links.map(link => (<li className={classes.navItem}>
			<a className={classes.navLink} href={link.href} target="_blank" rel="noopener noreferrer">
				<img className={classes.icon} src={link.icon.src} alt={link.alt} />
			</a>
		</li>))}
	</ul>
);

export default SocialLinks;