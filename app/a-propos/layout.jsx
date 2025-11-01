export const metadata = {
  title: "À Propos de B&C Conciergerie | Notre Histoire & Valeurs",
  description:
    "Découvrez B&C Conciergerie, votre partenaire de confiance sur la Côte d'Azur. Notre expertise, nos valeurs, notre engagement pour une gestion locative d'excellence.",
  keywords: [
    "à propos b&c conciergerie",
    "histoire conciergerie nice",
    "valeurs conciergerie",
    "équipe conciergerie côte d'azur",
    "expertise gestion locative",
    "conciergerie de confiance",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "À Propos de B&C Conciergerie | Notre Histoire & Valeurs",
    description:
      "Découvrez B&C Conciergerie, votre partenaire de confiance sur la Côte d'Azur.",
    url: "https://www.bcconciergerie.com/a-propos",
    images: [
      {
        url: "https://www.bcconciergerie.com/logo.jpg",
        width: 1200,
        height: 630,
        alt: "À Propos B&C Conciergerie",
      },
    ],
  },
  alternates: {
    canonical: "https://www.bcconciergerie.com/a-propos",
  },
};

export default function AProposLayout({ children }) {
  return children;
}
