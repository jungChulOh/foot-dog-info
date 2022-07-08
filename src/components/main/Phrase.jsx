import React from "react";
import maindoorImg from "@/images/maindoor-background.jpg";

export default function Phrase() {
  return (
    <div
      className="relative mb-10 bg-no-repeat bg-cover bg-center min-h-[200px] md:min-h-[500px]"
      style={{ backgroundImage: `url(${maindoorImg})` }}
    >
      <div className="absolute mx-auto top-3 md:top-auto md:bottom-16 left-0 right-0 w-[280px] md:w-[520px] h-16">
        <p className="text-base md:text-3xl text-white font-bold italic text-center mt-2">
          &quot;힘든가? 오늘 쉬면 내일은 뛰어야 한다.&quot;
        </p>
        <p className="text-white italic text-right">- 카를레스 푸욜</p>
      </div>
    </div>
  );
}
