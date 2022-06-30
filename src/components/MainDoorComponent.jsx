import React from "react";
import maindoorImg from "@/images/maindoor-background.jpg";
import soccerBallIcon from "@/images/icons/soccer-ball-icon.png";
import FadeInDiv from "./animation/FadeInDiv";

export default function MainDoorComponent() {
  return (
    <div className="relative pt-28">
      <div className="max-w-7xl mx-auto px-4 bg-white overflow-hidden">
        <div className="flex flex-col justify-center items-center mb-2">
          <FadeInDiv
            className="flex flex-col justify-center items-center"
            duration={1.5}
            delay={0.3}
            topBottom
          >
            <h1 className="text-xl md:text-3xl font-bold mt-5 mb-2">
              ABOUT TEAM
            </h1>
            <div
              className="w-20 h-4 bg-contain bg-repeat-x"
              style={{ backgroundImage: `url(${soccerBallIcon})` }}
            ></div>
          </FadeInDiv>
        </div>
        <div className="flex flex-col md:flex-row justify-around">
          <FadeInDiv
            as="div"
            className="basis-1/2 p-2 md:p-5"
            duration={1.5}
            delay={0.3}
            leftRight
          >
            <p className="text-sm md:text-lg text-gray-600 font-medium mb-2">
              FC풋도그는 안양, 군포, 의왕 축구/풋살 팀 입니다! <br />
              20 ~ 30대 팀입니다! <br />
              실력보단 인성과 열정! 젊은 분들 참여를 독려하고있습니다! <br />
            </p>
            <p className="text-sm md:text-lg text-gray-600 border-t-2 border-gray-200">
              👋 나이 제한 : 20 ~ 30 대 <br />
              💵 월 회비 : 20,000원 (가입희망 유예기간 1달 이땐 10,000원) <br />
            </p>
          </FadeInDiv>

          <FadeInDiv
            as="div"
            className="basis-1/2 p-2 md:p-5"
            duration={1.5}
            delay={0.3}
            rightLeft
          >
            <p className="text-sm md:text-lg text-gray-600 font-medium mb-2">
              안양시설공단 운동장을 이용하고 있습니다. <br />
              (비산체육공원, 석수체육공원, 안양새물공원,
              평촌자유공원,의왕축구장)
            </p>
            <p className="text-sm md:text-lg text-gray-600 border-t-2 border-gray-200">
              🕣 주 운동시간 : 매주 일요일 저녁 타임 <br />
              (동절기: 9 ~ 11시, 하절기: 8 ~ 10시) [‼️ 시설공단 대관에 따라
              다름]
            </p>
          </FadeInDiv>
        </div>
      </div>
      <div
        className="relative bg-no-repeat bg-cover bg-center min-h-[200px] md:min-h-[500px]"
        style={{ backgroundImage: `url(${maindoorImg})` }}
      >
        <div className="absolute m-auto top-3 md:top-0 md:bottom-0 left-0 right-0 w-[280px] md:w-[520px] h-16">
          <p className="text-base md:text-3xl text-white font-bold italic text-center mt-2">
            &quot;힘든가? 오늘 쉬면 내일은 뛰어야 한다.&quot;
          </p>
          <p className="text-white italic text-right">- 카를레스 푸욜</p>
        </div>
      </div>
    </div>
  );
}
