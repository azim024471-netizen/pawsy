import Banner from "@/components/homepage/Banner";
import Featured from "@/components/homepage/Featured";
import PetCareTips from "@/components/homepage/PetCareTips";
import WhyAdoptPets from "@/components/homepage/WhyAdoptPets";



export default function Home() {
  return (
    <div>
      <Banner></Banner>
     <Featured></Featured>
     <WhyAdoptPets></WhyAdoptPets>
     <PetCareTips></PetCareTips>
    </div>
  );
}
