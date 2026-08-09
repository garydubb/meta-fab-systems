export const siteInfo = {
	name: "MetaFab Systems",
	tagline: ["Designing Strength", "Fabricating Excellence"],
	subheading: "Complete Engineering & Fabrication Solutions Under One Roof",
	heroKicker: "From Concept to Creation, We Build Your Vision",
	motto: "Committed to Building a Stronger Tomorrow",
};

export const contact = {
	officePhone: "+91 97799 02894",
	officePhoneLabel: "Office",
	personalPhone: "+91 99159 29948",
	//   personalPhoneLabel: "Er. Neeraj Sehgal",
	address: [
		"Near Sai Computer Kanta,",
		"Maan Industrial Estate,",
		"Ludhiana 141014, Punjab, India.",
	],
};

export const trustBadges = [
	{ title: "Quality Assured", icon: "ShieldCheck" },
	{ title: "Safety Focused", icon: "HardHat" },
	{ title: "Precision Engineering", icon: "Target" },
	{ title: "On-Time Delivery", icon: "Clock" },
] as const;

export const materials = [
	"Mild Steel",
	"Stainless Steel",
	"Aluminium",
	"Structural Steel",
	"Sheet Metal",
	"Brass",
	"Copper",
] as const;

export const navLinks = [
	{ label: "Home", href: "/" },
	{ label: "Services", href: "/services" },
	{ label: "About", href: "/about" },
	{ label: "Contact", href: "/contact" },
] as const;
