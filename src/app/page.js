import Banner from "@/components/homepage/Banner";
import Featured from "@/components/homepage/Featured";
import { Button } from "@heroui/react";



export default function Home() {
  return (
    <div>
      <Banner></Banner>
       
     Hom page
     <Button>Primary</Button>
     <Featured></Featured>
    </div>
  );
}
