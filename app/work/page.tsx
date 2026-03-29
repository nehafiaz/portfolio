import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Testimonials from "@/components/sections/Testimonials";

export default function WorkPage() {
  return (
    <>
      <div className="pt-20">
        <FeaturedProjects />
      </div>
      <Testimonials />
    </>
  );
}
