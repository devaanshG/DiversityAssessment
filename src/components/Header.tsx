import "./Header.css";

function Header() {
  return (
    <>
      {/* Create the header, with a nav component with the links to other pages */}
      <header>
        <nav>
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/why">Why</a>
            </li>
            <li>
              <a href="/how">How</a>
            </li>
            <li>
              <a href="/careers">Careers</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
