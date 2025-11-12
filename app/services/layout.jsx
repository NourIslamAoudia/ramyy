export const metadata = {
  title: "Services de Conciergerie Premium | B&C Côte d'Azur",
  description:
    "Découvrez nos services de conciergerie haut de gamme : gestion locative complète, ménage professionnel, accueil personnalisé, maintenance 24/7. Nice, Monaco, Cannes.",
  keywords: [
    "services conciergerie",
    "gestion locative nice",
    "ménage professionnel monaco",
    "accueil personnalisé",
    "maintenance propriété",
    "conciergerie luxe",
    "services premium côte d'azur",
    "gestion airbnb",
    "optimisation revenus locatifs",
  ],
  openGraph: {
    title: "Services de Conciergerie Premium | B&C Côte d'Azur",
    description:
      "Découvrez nos services de conciergerie haut de gamme : gestion locative complète, ménage professionnel, accueil personnalisé, maintenance 24/7.",
    url: "https://www.bcconciergerie.com/services",
    images: [
      {
        url: "https://www.bcconciergerie.com/icon_new.png",
        width: 1200,
        height: 630,
        alt: "Services B&C Conciergerie",
      },
    ],
  },
  alternates: {
    canonical: "https://www.bcconciergerie.com/services",
  },
};

export default function ServicesLayout({ children }) {
  return children;
}
