import React from "react";
import useStyles from "./style";
import Logo from "../../Img/Header/logo.png";
import Avatar from "../../Img/Header/avatar.png";

function Header() {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <a className={classes.headerLogo} href="/">
        <img className={classes.headerLogoImg} src={Logo} alt="logo" />
      </a>
      <ul className={classes.headerMenu}>
        <li className={classes.headerMenuItem}>
          <a className={classes.headerMenuLink} href="#top">
            Lịch Chiếu
          </a>
        </li>
        <li className={classes.headerMenuItem}>
          <a className={classes.headerMenuLink} href="#top">
            Cụm rạp
          </a>
        </li>
        <li className={classes.headerMenuItem}>
          <a className={classes.headerMenuLink} href="#top">
            Tin Tức
          </a>
        </li>
        <li className={classes.headerMenuItem}>
          <a className={classes.headerMenuLink} href="#top">
            Ứng dụng
          </a>
        </li>
      </ul>
      <a className={classes.headerUser} href="#top">
        <img className={classes.headerUserAvata} src={Avatar} alt="avata" />
        <p className={classes.headerUserText}>Đăng nhập</p>
      </a>
    </div>
  );
}

export default Header;
