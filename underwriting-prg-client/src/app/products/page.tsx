import { MainLayout } from "@/layouts";
import { Hero, OurProducts } from "@/components";

export default function Products() {
  return (
    <MainLayout>
      <Hero title="Products" shrink />
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
          {
            src: "/assets/images/art.jpg",
            alt: "Challah",
            title: "Challah",
            category: "insurance",
          },
          {
            src: "/assets/images/art.jpg",
            alt: "Sourdough",
            title: "Sourdough",
            category: "insurance",
          },
          {
            src: "/assets/images/art.jpg",
            alt: "Seed insurance",
            title: "Seed insurance",
            category: "insurance",
          },
          {
            src: "/assets/images/art.jpg",
            alt: "Bagel",
            title: "Bagel",
            category: "insurance",
          },
        ]}
      />
    </MainLayout>
  );
}
