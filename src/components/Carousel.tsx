import CarouselItem from "./CarouselItem";
import "./Carousel.css";
import { useState } from "react";

function Carousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselItems = [
    {
      title: "High Demand",
      desc: `Think about how much we rely on tech every day. From scrolling
      through social media to streaming our fave shows, tech is
      everywhere! That's why companies are always on the lookout for
      tech whizzes who can keep things running smoothly.`,
    },
    {
      title: "Job Security",
      desc: `As long as tech keeps booming, there'll always be gigs for IT
      rockstars. So, if you're looking for a career path with some
      serious stability, IT might be your jam!`,
    },
    {
      title: "Good Pay",
      desc: `Cha-ching! With all that demand for tech skills, comes some sweet
      paychecks. Score!`,
    },
    {
      title: "Continuous Learning",
      desc: `Tech is like a never-ending rollercoaster of new stuff to learn.
      Whether it's mastering the latest coding language or diving into
      cutting-edge tech, there's always something exciting to sink your
      teeth into.`,
    },
    {
      title: "Flexibility",
      desc: `Wanna work from a cozy coffee shop or your fave chill spot? No
      problemo! Tech jobs often offer the flexibility to work from
      anywhere, whether it's in an office or your fave hangout spot.`,
    },
    {
      title: "Innovation",
      desc: `If you're into cool, cutting-edge stuff, IT is where it's at!
      Think VR, AI, and all sorts of mind-blowing tech that's changing
      the world as we know it.`,
    },
  ];

  const updateSlide = (newSlide: number) => {
    if (newSlide < 0) {
      newSlide = 0;
    } else if (newSlide >= carouselItems.length) {
      newSlide = carouselItems.length - 1;
    }

    setActiveSlide(newSlide);
  };

  return (
    <>
      <div className="carousel">
        <div
          className="carousel-inner"
          style={{ transform: `translateX(-${activeSlide * 80}vw)` }}
        >
          {carouselItems.map((item) => {
            return <CarouselItem title={item.title} desc={item.desc} />;
          })}
        </div>
        <div className="carousel-buttons">
          <button
            onClick={() => {
              updateSlide(activeSlide - 1);
              console.log("increased");
            }}
          >
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </button>
          <button>
            {carouselItems.map((item, index) => {
              if (index == activeSlide) {
                return (
                  <span
                    className="material-symbols-outlined"
                    style={{ transform: `scale(1.1)` }}
                  >
                    radio_button_unchecked
                  </span>
                );
              } else {
                return (
                  <span className="material-symbols-outlined">
                    radio_button_unchecked
                  </span>
                );
              }
            })}
          </button>
          <button
            onClick={() => {
              updateSlide(activeSlide + 1);
            }}
          >
            <span className="material-symbols-outlined">arrow_forward_ios</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Carousel;
