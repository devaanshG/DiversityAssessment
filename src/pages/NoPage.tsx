// Import relevant Components, css, etc.
import "../App.css";
import Header from "../components/Header.tsx";

function Home() {
  return (
    <>
      {/* Import Header component */}
      <Header></Header>
      {/* Main content of the page */}
      <section className="cover">
        <div>
          <div className="typewriter">
            <h1 className="typewriter">Error: Page Not Found!</h1>
          </div>

          <p>
            Sorry, this page deosn't exist. Please return to the home page, or
            try one of our other pages in the navbar above.
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;
