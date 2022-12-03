import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <MailingList />
      <NavigationLinks />
    </footer>
  );
}

function MailingList() {
  return (
    <div className="mailing">
      <h4>Join The FakeKedu Mailing List</h4>
      <p>Exclusive offers sent right to your inbox</p>
      <div className="input">
        <input
          type="text"
          placeholder="Enter your email"
        />
        <button>Sign Up</button>
      </div>
    </div>
  );
}

function NavigationLinks() {
  return (
    <div className="link">
      <Contact />
      <FakeKedu />
      <Shop />
    </div>
  );
}

function FakeKedu() {
  return (
    <div className="about">
      <h4>FakeKedu</h4>
      <ul>
        <li>ABout</li>
        <li>Careers</li>
      </ul>
    </div>
  );
}

function Shop() {
  return (
    <div className="footer-shop">
      <h4>Shop</h4>
      <ul>
        <li>Tennis Racquests</li>
        <li>Men's Clothing</li>
        <li>Women's Clothing</li>
        <li>Strings</li>
      </ul>
    </div>
  );
}

function Contact() {
  return (
    <div className="contact">
      <h4>Contact</h4>
      <ul>
        <li>Email</li>
        <li>Github</li>
        <li>LinkedIn</li>
      </ul>
    </div>
  );
}
