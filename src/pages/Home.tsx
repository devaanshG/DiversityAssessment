// Import releveant libraries, css, and React components
import "../App.css";
import down_arrow from "../assets/icons/down_arrow.svg";
import Header from "../components/Header.tsx";
import Statistic from "../components/Statisitic.tsx";

function Home() {
  return (
    <>
      {/* Import the Header component */}
      <Header></Header>
      {/* Cover section, with the typeriter text */}
      <section className="cover">
        <div>
          <div className="typewriter">
            <h1 className="typewriter">Tech needs Diversity</h1>
          </div>

          <p>
            Diversity in tech is essential, but it's currently an issue. We need
            to work towards a more diverse future for tech. Scroll below to find
            out how.
          </p>
          <img className="down-arrow" src={down_arrow} alt="Down Arrow" />
        </div>
      </section>
      {/* Spacer section, to allow the scrolling effect. It takes the space the cover section would take if it didn't have a fixed position */}
      <section className="cover-spacer"></section>
      {/* First section that introduces the issue with some stats */}
      <section id="what" className="section-1">
        <h1>So what's the issue?</h1>
        <p>
          Hey there, welcome to our spot on the web where we're diving deep into
          the issue of diversity in the IT world! Over the past few years,
          information technology has exploded, becoming a major force driving
          innovation and change. But here's the thing: even though women and
          folks of color have been rocking it in IT, there's still a big lack of
          diversity in many areas.
        </p>
        <p>
          This lack of diversity isn't just a bummer for the individuals who
          aren't represented—it's a big deal for the whole industry. That's why
          our website is here! We're all about sharing info and resources on
          this super important topic. Plus, we want to get the conversation
          going and spur some action towards making the IT world a more diverse
          and inclusive place.
        </p>
        <p>
          So, take a look around, dive into the discussions, and let's team up
          to make the future of IT fairer and more awesome for everyone. Glad to
          have you here!
        </p>

        {/* Import the Statistic component, passing in relevant props */}
        <Statistic
          stat={75}
          desc={"Males represent over 75% of the tech industry"}
        ></Statistic>

        <Statistic
          stat={3.1}
          desc={
            "In 2020, only 3.1% of developers identified as Black or African American in the United States."
          }
        ></Statistic>
      </section>
    </>
  );
}

export default Home;
