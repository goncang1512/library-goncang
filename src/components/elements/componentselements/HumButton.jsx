import React from "react";

function HumButton() {
  return (
    <>
      <div className="html">
        <p className="text-xl">HTML</p>
        <pre>
          <code>
            &lt;div class="pots-toggle"&gt; <br />
            &lt;input type="checkbox" id="boxcheck" /&gt; <br />
            &lt;label htmlFor="boxcheck" class="toggleLabel"&gt; <br />
            &lt;div class="bar" id="bar-1"&gt; &lt;/div&gt; <br />
            &lt;div class="bar" id="bar-2"&gt; &lt;/div&gt; <br />
            &lt;div class="bar" id="bar-3"&gt; &lt;/div&gt; <br />
            &lt;/label&gt; <br />
            &lt;/div&gt;
          </code>
        </pre>
        <p className="text-xl pt-5">CSS</p>
        <pre>
          <code>
            {`// CSS styles
            .pots-toggle {
            display: flex;
            flex-direction: column;
            height: 20px;
            justify-content: space-between;
            position: relative;
            }

            #boxcheck {
            display: none;
            }

            .toggleLabel {
            position: relative;
            width: 35px;
            height: 35px;
            cursor: pointer;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 7px;
            transition-duration: 0.5s;
            }

            .bar {
            width: 100%;
            height: 4px;
            background-color: #000;
            border-radius: 5px;
            }

            #bar-2 {
            transition-duration: 0.8s;
            }

            #bar-1,
            #bar-3 {
            width: 100%;
            }

            #boxcheck:checked + .toggleLabel .bar {
            position: absolute;
            transition-duration: 0.5s;
            }

            #boxcheck:checked + .toggleLabel #bar-2 {
            transform: scaleX(0);
            transition-duration: 0.5s;
            background-color: red;
            }

            #boxcheck:checked + .toggleLabel #bar-1 {
            width: 100%;
            transform: rotate(45deg);
            transition-duration: 0.5s;
            background-color: red;
            }

            #boxcheck:checked + .toggleLabel #bar-3 {
            width: 100%;
            transform: rotate(-45deg);
            transition-duration: 0.5s;
            background-color: red;
            }

            #boxcheck:checked + .toggleLabel {
            transition-duration: 0.5s;
            transform: rotate(180deg);
            }`}
          </code>
        </pre>
      </div>
    </>
  );
}

const TeksAnimation = () => {
  return (
    <>
      <p className="text-xl">HTML</p>
      <pre>
        <code>
          {` <div class="teks-name text-black text-start pl-20">
      I'm a <span></span>
   </div>`}
        </code>
      </pre>
      <p className="text-xl pt-5">CSS</p>
      <pre>
        <code>
          {`
      .container-teks {
        padding: 10px 50px;
      }
      
      .teks-name {
        font-size: 20px;
        font-weight: 600;
        min-width: 280px;
        width: 450px;
      }
      
      .teks-name span {
        position: relative;
      }
      
      .teks-name span::before {
        content: "developer";
        color: #147efb;
        animation: words 25s infinite;
      }
      
      .teks-name span::after {
        content: "";
        position: absolute;
        width: calc(100% + 8px);
        height: 105%;
        background-color: #fff;
        border-left: 2px solid #000;
        right: -8px;
        animation: cursor 0.7s infinite, typing 25s steps(14) infinite;
      }
      
      @keyframes cursor {
        to {
          border-left: 2px solid #fff;
        }
      }
      
      @keyframes words {
        0%,
        20% {
          content: "programmer";
        }
        21%,
        40% {
          content: "front-end";
        }
        41%,
        60% {
          content: "web development ";
        }
        61%,
        80% {
          content: "developer ";
        }
        81%,
        100% {
          content: "gamer";
        }
      }
      
      @keyframes typing {
        10%,
        14%,
        30%,
        35%,
        50%,
        55%,
        70%,
        75%,
        90%,
        95% {
          width: 0;
        }
        5%,
        20%,
        25%,
        40%,
        45%,
        60%,
        65%,
        80%,
        85% {
          width: calc(100% + 8px);
        }
      }`}
        </code>
      </pre>
    </>
  );
};

const FotoAnimation = () => {
  return (
    <>
      <div>
        <pre>
          <p className="text-xl">HTML</p>
          {`<div class="foto-profil"></div>`}
        </pre>
        <p className="text-xl pt-5">CSS</p>
        <pre>
          <code>{`.foto-profil {
      margin: 100px 50px 50px 50px;
      animation: morph 9s ease-in-out infinite;
      background-image: url(masukkan url foto kalian);
      background-position: 50%;
      background-repeat: no-repeat;
      background-size: cover;
      border: 3px solid #2d2e32;
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
      height: 18rem;
      width: 18rem;
      position: relative;
      transition: all 1s ease-in-out;
    }

    @keyframes morph {
      0% {
        border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
      }
      50% {
        border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
      }
      100% {
        border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
      }
    }`}</code>
        </pre>
      </div>
    </>
  );
};

export { TeksAnimation, FotoAnimation };
export default HumButton;
