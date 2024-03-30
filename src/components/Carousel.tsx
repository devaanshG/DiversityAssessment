// Import the relevant css, and objects from other libraries
import CarouselItem from "./CarouselItem";
import "./Carousel.css";
import { useState } from "react";

function Carousel() {
  // Create the variables to hold the current slide position, with a setter function, and an initial value of 0
  // We use the React useState hook to track the value, so that the UI updates when the value of the variable updates
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselItems = [
    {
      title: "High Demand",
      desc: `Think about how much we rely on tech every day. From scrolling
      through social media to streaming our fave shows, tech is
      everywhere! That's why companies are always on the lookout for
      tech whizzes who can keep things running smoothly.`,
      icon: "trending_up",
    },
    {
      title: "Job Security",
      desc: `As long as tech keeps booming, there'll always be gigs for IT
      rockstars. So, if you're looking for a career path with some
      serious stability, IT might be your jam!`,
      icon: "lock",
    },
    {
      title: "Good Pay",
      desc: `Cha-ching! With all that demand for tech skills, comes some sweet
      paychecks. Score!`,
      icon: "paid",
    },
    {
      title: "Continuous Learning",
      desc: `Tech is like a never-ending rollercoaster of new stuff to learn.
      Whether it's mastering the latest coding language or diving into
      cutting-edge tech, there's always something exciting to sink your
      teeth into.`,
      icon: "local_library",
    },
    {
      title: "Flexibility",
      desc: `Wanna work from a cozy coffee shop or your fave chill spot? No
      problemo! Tech jobs often offer the flexibility to work from
      anywhere, whether it's in an office or your fave hangout spot.`,
      icon: "alt_route",
    },
    {
      title: "Innovation",
      desc: `If you're into cool, cutting-edge stuff, IT is where it's at!
      Think VR, AI, and all sorts of mind-blowing tech that's changing
      the world as we know it.`,
      icon: "cognition",
    },
  ];

  // Function to handle the update in the carousel slide being displayed. Checks whether the carousel has reached the end, and stops the value of activeSlide exceeding the limit
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
          {/* Iterate through easch carousel item in the list, and create a CarouselItem component for it, passing in the relevant props */}
          {carouselItems.map((item) => {
            return (
              <CarouselItem
                title={item.title}
                desc={item.desc}
                icon={item.icon}
              />
            );
          })}
        </div>
        {/* The carousel buttons and indicators */}
        <div className="carousel-buttons">
          <button
            // Call the updateSlide function onClick, which updates the value of activeSlide
            onClick={() => {
              updateSlide(activeSlide - 1);
            }}
          >
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </button>
          <button>
            {/* Iterate through the carouselItems, creating a carousel indicator for each */}
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
            // Call the updateSlide function onClick, which updates the value of activeSlide
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
