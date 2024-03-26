import "./App.css";
import down_arrow from "./assets/icons/down_arrow.svg";
import Header from "./components/Header.tsx";
import Statistic from "./components/Statisitic.tsx";
import Spin from "./components/Spin.tsx";

function App() {
  return (
    <>
      <Header></Header>
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
      <section id="why" className="section-2">
        <h1>But why is this a problem?</h1>
        <p>
          When the IT industry lacks diversity, it can cause some serious
          problems. Check it out:
        </p>
        <ul>
          <li>
            <h2>Limited Perspectives</h2>
            <p>
              When everyone in a certain profession comes from similar
              backgrounds, they might not think of all the different ways people
              might use technology. This means we could miss out on cool new
              ideas and inventions that could help everyone.
            </p>
          </li>
          <li>
            <h2>Bias in Technology</h2>
            <p>
              Ever heard the saying "garbage in, garbage out"? Well, it's true
              for tech too! Sometimes, the people who make technology don't
              think about everyone who might use it. For example, facial
              recognition software might not work as well for people with darker
              skin tones, which could lead to some pretty bad situations.
            </p>
          </li>
          <li>
            <h2>Underrepresentation of Customers</h2>
            <p>
              If the people making tech don't look like the people using it,
              they might not make stuff that works for everyone. This means some
              people could miss out on cool tech that could make their lives
              easier.
            </p>
          </li>
          <li>
            <h2>Limited Opportunities</h2>
            <p>
              When there's not enough diversity in the IT world, it's harder for
              people from different backgrounds to get in on the action. That
              means some really smart and talented people might not get the
              chance to shine.
            </p>
          </li>
          <li>
            <h2>Negative Impacts on Society</h2>
            <p>
              Tech has a huge impact on how we live our lives, and when it's not
              made with everyone in mind, it can make things worse. Biased tech
              can make unfairness and inequality even worse in our society.
            </p>
          </li>
        </ul>
        <p>
          To fix these problems, we need to make sure the IT world looks more
          like the real world. That means doing things like training people on
          diversity and inclusion, reaching out to groups that don't have as
          much representation, and making workplaces more welcoming to everyone.
        </p>
      </section>
      <section id="how" className="section-3">
        <h1>How can you help?</h1>
        <p>
          Hey ladies, breaking into the IT world can sometimes feel like
          navigating a maze, but fear not! Here are some awesome strategies to
          help you conquer those barriers and soar in your IT career:
        </p>
        <ul>
          <li>
            <Spin></Spin>
            <h2>Find a Mentor</h2>
            <p>
              Think of a mentor like your personal guide through the jungle of
              IT. They've been there, done that, and can offer killer advice on
              everything from career paths to handling workplace challenges.
              Don't be shy to reach out and connect with someone who's been in
              your shoes!
            </p>
          </li>
          <li>
            <h2>Build Your Squad</h2>
            <p>
              Surround yourself with a tribe of kick-ass women and allies in the
              industry. Whether it's joining professional groups, hitting up
              industry events, or just grabbing coffee with fellow techies,
              having a crew who's got your back can make all the difference.
            </p>
          </li>
          <li>
            <h2>Hone Your Tech Skills</h2>
            <p>
              Time to sharpen those coding swords! Building up your technical
              skills, whether it's mastering coding languages, diving into
              software development, or beefing up your cybersecurity chops, is
              key to slaying it in the IT realm.
            </p>
          </li>
          <li>
            <h2>Speak Up for Yourself</h2>
            <p>
              Your voice matters! Don't be afraid to toot your own horn and
              advocate for your skills and achievements. Whether it's
              negotiating your salary, taking on challenging projects, or
              pushing for more training opportunities, own your worth and go
              after what you deserve!
            </p>
          </li>
          <li>
            <h2>Fight Bias Like a Boss</h2>
            <p>
              Unfortunately, bias can rear its ugly head in the workplace. But
              fear not, you've got the power to combat it! Speak out against any
              unfair treatment, get involved in diversity initiatives, and
              champion a more inclusive workplace culture. Together, we can make
              waves and create a more equitable tech world!
            </p>
          </li>
        </ul>
      </section>
      <section id="careers" className="section-4">
        <h1>Why choose a career in tech?</h1>
        <p>
          Ever wonder why so many people are jazzed about a career in IT? Check
          it out:
        </p>
        <ul>
          <li>
            <h2>
              High Demand
              <span className="material-symbols-outlined">trending_up</span>
            </h2>
            <p>
              Think about how much we rely on tech every day. From scrolling
              through social media to streaming our fave shows, tech is
              everywhere! That's why companies are always on the lookout for
              tech whizzes who can keep things running smoothly.
            </p>
          </li>
          <li>
            <h2>
              Job Security
              <span className="material-symbols-outlined">encrypted</span>
            </h2>
            <p>
              As long as tech keeps booming, there'll always be gigs for IT
              rockstars. So, if you're looking for a career path with some
              serious stability, IT might be your jam!
            </p>
          </li>
          <li>
            <h2>
              Good Pay <span className="material-symbols-outlined">paid</span>
            </h2>
            <p>
              Cha-ching! With all that demand for tech skills, comes some sweet
              paychecks. Score!
            </p>
          </li>
          <li>
            <h2>
              Continuous Learning
              <span className="material-symbols-outlined">local_library</span>
            </h2>
            <p>
              Tech is like a never-ending rollercoaster of new stuff to learn.
              Whether it's mastering the latest coding language or diving into
              cutting-edge tech, there's always something exciting to sink your
              teeth into.
            </p>
          </li>
          <li>
            <h2>
              Flexibility
              <span className="material-symbols-outlined">alt_route</span>
            </h2>
            <p>
              Wanna work from a cozy coffee shop or your fave chill spot? No
              problemo! Tech jobs often offer the flexibility to work from
              anywhere, whether it's in an office or your fave hangout spot.
            </p>
          </li>
          <li>
            <h2>
              Innovation
              <span className="material-symbols-outlined">lightbulb</span>
            </h2>
            <p>
              If you're into cool, cutting-edge stuff, IT is where it's at!
              Think VR, AI, and all sorts of mind-blowing tech that's changing
              the world as we know it.
            </p>
          </li>
        </ul>
      </section>
    </>
  );
}

export default App;
