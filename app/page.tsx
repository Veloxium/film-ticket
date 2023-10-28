import Image from "next/image";
import Partner1 from "./images/partner1.png";
import Partner2 from "./images/partner2.jpg";
import Partner3 from "./images/partner3.png";
import Partner4 from "./images/partner4.webp";
import Partner5 from "./images/partner5.png";
import Slides from "./slides";
import CardFilm from "./cardfilm";

export default async function Home() {

  return (
    <div>
      <Slides />
      <div className="px-[120px] py-10 ">
        <CardFilm />
        <h1 className="font-bold text-2xl text-center mt-20">OUR PARTNERS</h1>
        <div className="partners flex justify-evenly my-10">
          <div className="netflix items-center flex">
            <Image src={Partner1} width={100} alt="partner" />
          </div>
          <div className="cgv items-center flex">
            <Image src={Partner2} width={100} alt="partner" />
          </div>
          <div className="cinepolis items-center flex">
            <Image src={Partner3} width={100} alt="partner" />
          </div>
          <div className="vidio items-center flex">
            <Image src={Partner4} width={100} alt="partner" />
          </div>
          <div className="dana items-center flex">
            <Image src={Partner5} width={100} alt="partner" />
          </div>
        </div>
      </div>
    </div>
  );
}

