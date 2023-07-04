import React from "react";
import HeroImage from "../assets/HeroImage.png";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import TicTacToe from "../TikTok";
export default function HeroSection() {
  return (
    <div className="MySection justify-content-center" id="profile">
      <div className=" heroSection  text-center">
        <div className="row align-items-center justify-content-between ">
          <div className="col-md-6 text-start">
            <span className="subTitle"> Hi, I am</span>
            <h1 className="Title"> Mohit Goyal</h1>
            <h2 className="subTitleBottom">{">"} Front-end developer</h2>
            <div className="codeHero mt-5">
              <SyntaxHighlighter language="javascript" style={dracula}>
                // complete the game to continue
              </SyntaxHighlighter>
              <SyntaxHighlighter language="javascript" style={dracula}>
                // you can also see it on my Github page
              </SyntaxHighlighter>
              <SyntaxHighlighter
                className="mt-2"
                language="javascript"
                style={dracula}
              >
                const githubLink = "https://github.com/Mohit1108"
              </SyntaxHighlighter>
            </div>
          </div>
          <div className="col-md-6 text-end gameToe">
            <TicTacToe></TicTacToe>
            {/* <img className=" w-100" src={HeroImage} alt="HeroImage"></img> */}
          </div>
        </div>
      </div>
    </div>
  );
}
