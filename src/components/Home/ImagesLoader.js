import React from "react";
import challenge from "assets/images/challenge1.jpg";
import questions from "assets/images/questions.jpg";
import plan from "assets/images/plan.jpg";

export default function ImagesLoader() {
  return (
    <>
      <img src={questions} style={{ display: "none" }} alt={"make questions"} />
      <img src={plan} style={{ display: "none" }} alt={"plan"} />
      <img
        src={challenge}
        style={{ display: "none" }}
        alt={"face the challenge"}
      />
    </>
  );
}
