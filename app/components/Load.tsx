import React from "react";
import { TEAnimation } from "tw-elements-react";

export default function AnimationsOnLoad(): JSX.Element {
  return (
    <div className="flex justify-center">
      <TEAnimation
        animation="[fade-in-down_1s_ease-in-out]"
        start="onLoad"
        
      >
      

      </TEAnimation>
    </div>
  );
}
