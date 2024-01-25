import React from "react";
import { useState } from "react";
import logo from "../../assets/Logos/QuizzaHutLogo.svg";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
const Hero = () => {
  const [bigShowImg, setbigShowImg] = useState("bigShoe1");

  return (
    <ContentWrapper>
      <section
        id="home"
        className="w-full py-16 flex xl:flex-row flex-col justify-center min-h-[100px] gap-5 max-container px-12"
      >
        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-8 ">
          <p className="text-xl font-montserrat text-coral-red">
            Our Ultimate Quiz Series
          </p>
          <h1 className="mt-2 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold z-1 max-lg:z-0 leading-3 ">
            <span className=" xl:whitespace-nowrap relative z-10 pr-10 rounded-full text-5xl sm:text-6xl ">
              To Enhance <br /> Knowledge{" "}
            </span>
            <br />
            <span className="text-coral-red text-6xl sm:text-7xl inline-block mt-3 pr-3 text-slate-600">
              Have QuizzaHut
            </span>
          </h1>
          <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-6 sm:max-w-sm ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur praesentium, id quidem ipsum unde omnis obcaecati.
          </p>
          <button className="bg-blue-500 p-4 text-lg text-white rounded-xl">
            Learn More...
          </button>
        </div>

        <div className=" bg-slate-300 relative flex-1 flex justify-center items-center max-xl:py-5 bg-primary bg-hero bg-center bg-cover mb-6">
          <img
            src={logo}
            alt="Nike Shoe"
            width={610}
            height={500}
            className="object-contain relative z-10 "
          />

          <div className="flex gap-4 sm:gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
            {/* {shoes.map((shoe)=>(
              <div key={shoe}>
            
              <ShoeCard 
              imgURL ={shoe}
              changeMainShoeImage={(shoe)=>setbigShowImg(shoe)}
              bigShowIMG = {bigShowImg}
              className=""
              />
             
              </div>
            ))} */}

            <img src={logo} alt="" />
          </div>
        </div>
      </section>
    </ContentWrapper>
  );
};

export default Hero;
