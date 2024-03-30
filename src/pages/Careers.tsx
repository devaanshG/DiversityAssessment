// Import relevant css, React components, etc.
import "../App.css";
import Header from "../components/Header.tsx";
import Carousel from "../components/Carousel.tsx";

function Careers() {
  return (
    <>
      {/* Import Header component */}
      <Header></Header>
      {/* Careers section */}
      <section id="careers" className="section-4">
        <h1>Why choose a career in tech?</h1>
        <p>
          Ever wonder why so many people are jazzed about a career in IT? Check
          it out:
        </p>
        {/*  Import the carousel component we created */}
        <Carousel />
      </section>
    </>
  );
}

export default Careers;
