import "../App.css";
import Header from "../components/Header.tsx";
import Spin from "../components/Spin.tsx";

function How() {
  return (
    <>
      {/* Import Header component */}
      <Header></Header>
      {/* Main section of the page */}
      <section id="how" className="section-3">
        <div>
          <h1>How can you help?</h1>
          <p>
            We need you! You have the power of fixing the diversity gap in IT by
            undertaking IT courses and subjects, as well as empowering peers.
            Although breaking into the IT world can sometimes feel like
            navigating a maze, fear not! Here are some awesome strategies to
            help you conquer those barriers and soar in your IT career:
          </p>
        </div>
        <ul>
          <li>
            {/* Import 'Spin' component, with relevant props */}
            <Spin
              heading={"Find a Mentor"}
              description={`Think of a mentor like your personal guide through the jungle of
              IT. They've been there, done that, and can offer killer advice on
              everything from career paths to handling workplace challenges.
              Don't be shy to reach out and connect with someone who's been in
              your shoes!`}
            ></Spin>
          </li>
          <li>
            <Spin
              heading={"Build Your Squad"}
              description={`Surround yourself with a tribe of kick-ass people and allies in the
              industry. Whether it's joining professional groups, hitting up
              industry events, or just grabbing coffee with fellow techies,
              having a crew who's got your back can make all the difference.`}
            ></Spin>
          </li>
          <li>
            <Spin
              heading={"Hone Your Tech Skills"}
              description={`Time to sharpen those coding swords! Building up your technical
              skills, whether it's mastering coding languages, diving into
              software development, or beefing up your cybersecurity chops, is
              key to slaying it in the IT realm.`}
            ></Spin>
          </li>
          <li>
            <Spin
              heading={"Speak Up for Yourself"}
              description={`Your voice matters! Don't be afraid to toot your own horn and
              advocate for your skills and achievements. Whether it's
              negotiating your salary, taking on challenging projects, or
              pushing for more training opportunities, own your worth and go
              after what you deserve!`}
            ></Spin>
          </li>
          <li>
            <Spin
              heading={"Fight Bias Like a Boss"}
              description={`Unfortunately, bias can rear its ugly head in the workplace. But
              fear not, you've got the power to combat it! Speak out against any
              unfair treatment, get involved in diversity initiatives, and
              champion a more inclusive workplace culture. Together, we can make
              waves and create a more equitable tech world!`}
            ></Spin>
          </li>
        </ul>
      </section>
    </>
  );
}

export default How;
