import { Description } from "./components/Description";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { Testimonials } from "./components/Testimonials";
import { Faq } from "./components/Faq";

export const HomePage = () => {
  return (
    <main>
      <Description></Description>
      <FeaturedProducts></FeaturedProducts>
      <Testimonials></Testimonials>
      <Faq></Faq>
    </main>
  )
}
