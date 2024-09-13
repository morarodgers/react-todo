import style from "./NavItem.module.css";

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <a className={style.NavItem} href="/">
          Home
        </a>
      </li>
      <li>
        <a className={style.NavItem} href="/about">
          About
        </a>
      </li>
      <li>
        <a className={style.NavItem} href="/contact">
          Contact
        </a>
      </li>
    </ul>
  </nav>
);

export default Navigation;
