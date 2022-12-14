import "./Nav.css";
const Nav = () => {
  return (
    <>
      <nav>
        <div class="logo">
          <img
            src="https://www.sacesta.com/assets/img/Screenshot_-removebg-preview.png"
            alt="Logo Image"
          />
        </div>
        <div class="hamburger">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>
        <ul class="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Solutions</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
