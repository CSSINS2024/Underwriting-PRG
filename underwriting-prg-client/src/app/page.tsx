import { MainLayout } from "@/layouts";
import { Hero, AboutUs, OurProducts } from "@/components";

export default function Home() {
  return (
    <MainLayout>
      <Hero
        title="Citrus Speciality"
        subtitle="Citrus Underwriters"
        showLink
        linkText="Contact us"
        linkTo="/contact"
      />
      <AboutUs short />
      <OurProducts
        title="Check out products"
        products={[
          {
            src: "/assets/images/art.jpg",
            alt: "insurance",
            title: "insurance",
            category: "insurance",
          },
          {
            src: "/assets/images/art.jpg",
            alt: "insurance",
            title: "insurance",
            category: "Pastry",
          },
          {
            src: "/assets/images/art.jpg",
            alt: "Cookies",
            title: "Cookies",
            category: "Snacks",
          },
        ]}
        showButton
        darkVersion
      />
    </MainLayout>
  );
}
