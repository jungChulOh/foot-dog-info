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
            π Introduce Team
          </p>
          <p className="text-sm md:text-lg text-gray-600 font-medium mb-2">
            FCνλκ·Έλ μμ, κ΅°ν¬, μμ μΆκ΅¬/νμ΄ ν μλλ€. <br />
            20 ~ 30λ νμλλ€. <br />
            μΈμ±κ³Ό μ΄μ μ κ²ΈλΉν μ μ νμλλ€μ κ°μμ κΈ°λ€λ¦¬κ³  μμ΅λλ€.{" "}
            <br />
          </p>
          <p className="text-center font-bold text-gray-600 text-base md:text-xl border-b-2 py-2 border-gray-200 mb-2">
            π Sign Up
          </p>
          <p className="text-sm md:text-lg text-gray-600 font-medium mb-2">
            π λμ΄ μ ν : 20 ~ 30 λ <br />
            π΅ μ νλΉ : 20,000μ (μ²«λ¬ μ μκΈ°κ° 10,000μ) <br />
            π κ°μ μ μ°¨ : κ°μλ¬Έμ β‘οΈ κ²½κΈ° μ°Έμ β‘οΈ λ³ΈμΈ κ°μμμ¬μ μ²«λ¬
            μ μκΈ°κ°(μ΄ 3~4κ²½κΈ°) β‘οΈ κ°μ
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
            β½ Activity information
          </p>
          <p className="text-sm md:text-lg text-gray-600 font-medium mb-2">
            π μ£Ό μ₯μ : μμμμ€κ³΅λ¨ μ΄λμ₯μ μ΄μ©νκ³  μμ΅λλ€. <br />
            (λΉμ°μ²΄μ‘κ³΅μ, μμμ²΄μ‘κ³΅μ, μμμλ¬Όκ³΅μ, νμ΄μμ κ³΅μ,μμμΆκ΅¬μ₯){" "}
            <br />
            π£ μκ°λ : λ§€μ£Ό μΌμμΌ μ λ νμ (λμ κΈ°: 9 ~ 11μ, νμ κΈ°: 8 ~
            10μ)
            <br /> [βΉοΈ μμ€κ³΅λ¨ λκ΄μ λ°λΌ λ€λ¦]
          </p>
        </FadeInDiv>
      </div>
    </div>
  );
}
