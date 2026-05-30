import AboutStreetPet from "@/components/homepage/AboutStreetPet";
import Banner from "@/components/homepage/Banner";
import Featured from "@/components/homepage/Featured";
import PetCareTips from "@/components/homepage/PetCareTips";
import SussessFulStories from "@/components/homepage/SussessFulStories";
import WhyAdoptPets from "@/components/homepage/WhyAdoptPets";
import ZooPetWarning from "@/components/homepage/ZooPetWarning";



export default function Home() {
  return (
    <div>
      <Banner></Banner>
     <Featured></Featured>
     <WhyAdoptPets></WhyAdoptPets>
     <SussessFulStories></SussessFulStories>
     <PetCareTips></PetCareTips>
     <AboutStreetPet></AboutStreetPet>
     <ZooPetWarning></ZooPetWarning>

    </div>
  );
}
