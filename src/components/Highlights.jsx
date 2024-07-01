import gsap from "gsap/src";
import { useGSAP } from "@gsap/react";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";
import { useAnimations } from "@react-three/drei";
import { animateWithGsap } from "../utils/animations";
import React from "react";

const Highlights = () => {
  useGSAP(() => {
    animateWithGsap("#title", {
      y: 0,
      opacity: 1,
    });
    animateWithGsap(".link", {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.25,
    });
  }, []);
  return (
    <section
      id="highligh"
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex justify-between items-end">
          <h1 id="title" className="section-heading">
            Get the highlights.
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the Film
              <img src={watchImg} alt="watch" className="ml-2" />
            </p>
            <p className="link">
              Watch the event
              <img src={rightImg} alt="watch" className="ml-2" />
            </p>
          </div>
        </div>

        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
