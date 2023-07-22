import React from "react";
import HumButton, {
  TeksAnimation,
  FotoAnimation,
} from "../../elements/componentselements/HumButton";
import CardCompt from "../../fragments/componenfrag/CardCompt";

function CardComponents() {
  return (
    <>
      <CardCompt>
        <CardCompt.Figure>
          <div className="pots-toggle">
            <input type="checkbox" id="boxcheck" />
            <label for="boxcheck" className="toggleLabel">
              <div className="bar" id="bar-1"></div>
              <div className="bar" id="bar-2"></div>
              <div className="bar" id="bar-3"></div>
            </label>
          </div>
        </CardCompt.Figure>
        <CardCompt.Code>
          <HumButton />
        </CardCompt.Code>
      </CardCompt>

      <CardCompt>
        <CardCompt.Figure>
          <div className="teks-name text-black text-start pl-20">
            I'm a <span></span>
          </div>
        </CardCompt.Figure>
        <CardCompt.Code>
          <TeksAnimation />
        </CardCompt.Code>
      </CardCompt>

      <CardCompt>
        <CardCompt.Figure>
          <div className="foto-profil"></div>
        </CardCompt.Figure>
        <CardCompt.Code>
          <FotoAnimation />
        </CardCompt.Code>
      </CardCompt>
    </>
  );
}

export default CardComponents;
