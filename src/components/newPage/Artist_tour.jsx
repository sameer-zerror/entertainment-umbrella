import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
gsap.registerPlugin(ScrollTrigger);
const Artist_tour = () => {
  useGSAP(() => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".Artist_tour",
        start: "top top",
        end: "top -400%",
        scrub: 2,
        pin: true,
      },
    });
    tl.to(".Artist_tour_left_imageCntr", {
      y: "0%",
      stagger: 0.2,
      duration: 1,
    })
      .to(
        ".Artist_tour_image", // Target all elements with the same class
        {
          x: (index, target, targets) => {
            // Set custom x values for each image based on its index
            if (index === 0) {
              return "200%"; // First image
            } else if (index === 1) {
              return "100%"; // Second image
            } else if (index === 2) {
              return "0%"; // Third image
            }
            return "0%"; // Default if there are more than 3 images
          },
          duration: 2, // Duration for the horizontal movement
          onStart: function () {
            // Dynamically set z-index for all images, in decreasing order
            this.targets().forEach((target, index, targets) => {
              gsap.set(target, { zIndex: targets.length - index });
            });
          },
        },
        "a" // All images start moving at the same time
      )
      //   .to(
      //     ".st",
      //     {
      //       opacity: 0,
      //       duration: 0,
      //     },
      //     "a"
      //   )
      .to(
        ".Artist_tour_text-wrap h1",
        {
          y: 0,
          stagger: 0.2,
          duration: 1,
          delay: 0.5,
        },
        "a"
      )
      .to(
        ".learn_more_text_cntr, .Artist_tour-middleCntr,.Artist_tour_btm_text",
        {
          opacity: 1,
          duration: 0.5,
          delay: -0.2,
        }
      )
      .to(
        ".defl",
        {
          scale: 1.2,
          duration: 1,
        },
        "b"
      )
      .to(
        ".tour_image.im-1",
        {
          top: 0,
          duration: 1,
        },
        "b"
      )
      .to(
        "#count",
        {
          y: "-100%",
          duration: 1,
        },
        "b"
      )
      .to(
        ".t-1",
        {
          opacity: 0.4,
          duration: 0.3,
        },
        "b"
      )
      .to(
        ".t-2",
        {
          opacity: 1,
          duration: 0.3,
        },
        "b"
      )
      .to(
        ".tour_image.im-1",
        {
          scale: 1.2,
          duration: 1,
        },
        "c"
      )
      .to(
        ".tour_image.im-2",
        {
          top: 0,
          duration: 1,
        },
        "c"
      )
      .to(
        "#count",
        {
          y: "-200%",
          duration: 1,
        },
        "c"
      )
      .to(
        ".t-2",
        {
          opacity: 0.4,
          duration: 0.3,
        },
        "c"
      )
      .to(
        ".t-3",
        {
          opacity: 1,
          duration: 0.3,
        },
        "c"
      )
      .to(
        ".tour_image.im-2",
        {
          scale: 1.2,
          duration: 1,
        },
        "d"
      )
      .to(
        ".tour_image.im-3",
        {
          top: 0,
          duration: 1,
        },
        "d"
      )
      .to(
        "#count",
        {
          y: "-300%",
          duration: 1,
        },
        "d"
      )
      .to(
        ".t-3",
        {
          opacity: 0.4,
          duration: 0.3,
        },
        "d"
      )
      .to(
        ".t-4",
        {
          opacity: 1,
          duration: 0.3,
        },
        "d"
      )
      .to(
        ".tour_image.im-3",
        {
          scale: 1.2,
          duration: 1,
        },
        "e"
      )
      .to(
        ".tour_image.im-4",
        {
          top: 0,
          duration: 1,
        },
        "e"
      )
      .to(
        "#count",
        {
          y: "-400%",
          duration: 1,
        },
        "e"
      )
      .to(
        ".t-4",
        {
          opacity: 0.4,
          duration: 0.3,
        },
        "e"
      )
      .to(
        ".t-5",
        {
          opacity: 1,
          duration: 0.3,
        },
        "e"
      )
      .to(
        ".tour_image.im-4",
        {
          scale: 1.2,
          duration: 1,
        },
        "f"
      )
      .to(
        ".tour_image.im-5",
        {
          top: 0,
          duration: 1,
        },
        "f"
      )
      .to(
        "#count",
        {
          y: "-500%",
          duration: 1,
        },
        "f"
      )
      .to(
        ".t-5",
        {
          opacity: 0.4,
          duration: 0.3,
        },
        "f"
      )
      .to(
        ".t-6",
        {
          opacity: 1,
          duration: 0.3,
        },
        "f"
      );
  });
  return (
    <div className="Artist_tour">
      <div className="Artist_tour_inner">
        <div className="Artist_tour_left_textCntr">
          <div>
            <div className="Artist_tour_text-wrap">
              <h1>Explore</h1>
            </div>
            <div className="Artist_tour_text-wrap">
              <h1>Experiment</h1>
            </div>
            <div className="learn_more_text_cntr">
              <h4 className="learn_more_text">learn more</h4>
              <div className="learn_more_arrow">
                <FaArrowRightLong />
                <FaArrowRightLong />
              </div>
            </div>
          </div>
          <h4 className="Artist_tour_btm_text">
            Kharkiv Modernism × Obys × AI
          </h4>
        </div>
        <div className="Artist_tour-middleCntr">
          <h4 className="Number_paginationCntr">
            <span id="count">
              <h4>1</h4>
              <h4>2</h4>
              <h4>3</h4>
              <h4>4</h4>
              <h4>5</h4>
              <h4>6</h4>
            </span>
            — 6
          </h4>
          <div className="featured_cntr_artist_tour">
            <h4>[06] Featured:</h4>
            <h4>
              Name:
              <br />
              {[
                "Suprematista",
                "Buntesglas",
                "Vierensee",
                "Formen",
                "Sesselbaa",
                "Salzfeld",
              ].map((el, index) => {
                const tclasses = ["t-1", "t-2", "t-3", "t-4", "t-5", "t-6"];
                return (
                  <span key={index} className={`${tclasses[index]}`}>
                    {" "}
                    <br />
                    {el}
                  </span>
                );
              })}
            </h4>
          </div>
          <h4 className="year_artist_tour">©2023</h4>
        </div>
      </div>
      <div className="Artist_tour_imageCntr">
        <div className="Artist_tour_left_imageCntr Artist_tour_image">
          <img
            className="defl"
            src="https://assets-global.website-files.com/6543bb275c1f9a259661c7c8/655f0d0dbbc3bde0877784da_home-slider-1-p-800.webp"
          />
          <img
            className="tour_image im-1"
            src="https://assets-global.website-files.com/6543bb275c1f9a259661c7c8/655f0d0ee783579004b21b74_home-slider-2-p-800.webp"
          />{" "}
          <img
            className="tour_image im-2"
            src="https://assets-global.website-files.com/6543bb275c1f9a259661c7c8/655f0d635f68c6d63d3a5f74_home-slider-3-p-800.webp"
          />
          <img
            className="tour_image im-3"
            src="https://assets-global.website-files.com/6543bb275c1f9a259661c7c8/655f0d0d3961e504250c5556_home-slider-4.webp"
          />
          <img
            className="tour_image im-4"
            src="https://assets-global.website-files.com/6543bb275c1f9a259661c7c8/655f0d0e5f68c6d63d3a2864_home-slider-5-p-800.webp"
          />{" "}
          <img
            className="tour_image im-5"
            src="https://assets-global.website-files.com/6543bb275c1f9a259661c7c8/655f0d0e99dafb75c1177ba4_home-slider-5-1-p-800.webp"
          />
        </div>
        <div className="Artist_tour_left_imageCntr Artist_tour_image">
          <img src="https://assets-global.website-files.com/6543bb275c1f9a259661c7c8/655f625673fbbf85113d5882_Kosarev-art-1-6.webp" />
        </div>
        <div className="Artist_tour_left_imageCntr Artist_tour_image">
          <img src="https://assets-global.website-files.com/6543bb275c1f9a259661c7c8/655f62564099bffe03063b85_Kosarev-art-1-10.webp" />
        </div>
      </div>
    </div>
  );
};

export default Artist_tour;
