// Import relevant components, css, etc.
import "../App.css";
import Header from "../components/Header.tsx";

function Why() {
  return (
    <>
      {/* Import Header component */}
      <Header></Header>
      {/* Main content of the page */}
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
    </>
  );
}

export default Why;
