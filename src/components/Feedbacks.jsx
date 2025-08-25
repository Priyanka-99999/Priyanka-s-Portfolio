import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { testimonials } from "../constants";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const FeedbackCard = ({ index, testimonial, name, designation, company, image }) => {
  // Use a `ref` to apply GSAP animations
  const cardRef = React.useRef(null);

  useEffect(() => {
    const el = cardRef.current;

    // Add the ScrollTrigger animation with GSAP
    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 100, // Initial position off-screen
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: el,
          start: "top bottom", // Trigger when the top of the element reaches the bottom of the viewport
          end: "top center",   // End the animation when the top reaches the center
          scrub: true,         // Link the animation progress to the scroll position
          markers: false,      // Set to true if you want to see the markers for debugging
        },
      }
    );
  }, []);

  return (
    <div
      ref={cardRef}
      className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
    >
      <p className="text-white font-black text-[48px]">"</p>

      <div className="mt-1">
        <p className="text-white tracking-wider text-[18px]">{testimonial}</p>

        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@</span> {name}
            </p>
            <p className="mt-1 text-secondary text-[12px]">
              {designation} of {company}
            </p>
          </div>

          <img
            src={image}
            alt={`feedback_by-${name}`}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

const Feedbacks = () => null;

export default SectionWrapper(Feedbacks, "");
