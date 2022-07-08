import React from "react";
import soccerBallIcon from "@/images/icons/soccer-ball-icon.png";
import FadeInDiv from "~/components/animation/FadeInDiv";

export default function AboutTeam() {
  return (
    <div className="max-w-7xl mx-auto px-4 mb-5 bg-white overflow-hidden">
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
          <p className="text-center font-bold text-gray-600 text-base md:text-xl border-b-2 py-2 border-gray-200 mb-2">
            📖 Introduce Team
          </p>
          <p className="text-sm md:text-lg text-gray-600 font-medium mb-2">
            FC풋도그는 안양, 군포, 의왕 축구/풋살 팀 입니다. <br />
            20 ~ 30대 팀입니다. <br />
            인성과 열정을 겸비한 신입 회원님들의 가입을 기다리고 있습니다.{" "}
            <br />
          </p>
          <p className="text-center font-bold text-gray-600 text-base md:text-xl border-b-2 py-2 border-gray-200 mb-2">
            📃 Sign Up
          </p>
          <p className="text-sm md:text-lg text-gray-600 font-medium mb-2">
            👋 나이 제한 : 20 ~ 30 대 <br />
            💵 월 회비 : 20,000원 (첫달 유예기간 10,000원) <br />
            📑 가입 절차 : 가입문의 ➡️ 경기 참석 ➡️ 본인 가입의사시 첫달
            유예기간(총 3~4경기) ➡️ 가입
            <br />
          </p>
        </FadeInDiv>

        <FadeInDiv
          as="div"
          className="basis-1/2 p-2 md:p-5"
          duration={1.5}
          delay={0.3}
          rightLeft
        >
          <p className="text-center font-bold text-gray-600 text-base md:text-xl border-b-2 py-2 border-gray-200 mb-2">
            ⚽ Activity information
          </p>
          <p className="text-sm md:text-lg text-gray-600 font-medium mb-2">
            🌏 주 장소 : 안양시설공단 운동장을 이용하고 있습니다. <br />
            (비산체육공원, 석수체육공원, 안양새물공원, 평촌자유공원,의왕축구장){" "}
            <br />
            🕣 시간대 : 매주 일요일 저녁 타임 (동절기: 9 ~ 11시, 하절기: 8 ~
            10시)
            <br /> [ℹ️ 시설공단 대관에 따라 다름]
          </p>
        </FadeInDiv>
      </div>
    </div>
  );
}
