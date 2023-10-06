import style from "./Navbar.module.css";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";

export default function Navbar() {
  return <nav className={style.navbar}>
    <Logo />
    <Button>Give Feedback</Button>
  </nav>;
}


