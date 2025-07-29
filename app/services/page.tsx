
import type { Metadata } from "next";
import ServicesPage from "@/components/clientComponents/ServicePage";

export const metadata: Metadata = {
  title: "Our Services | Zero Byte",
  description: "We create impactful web solutions through design, code, and strategy.",
  openGraph: {
    title: "Our Services | Zero Byte",
    description: "Explore the services we offer: from design to deployment.",
    images: [
      {
        url: "/images/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "Our Services",
      },
    ],
  },
};

export default function Page() {
  return <ServicesPage />;
}
