import React from "react";
import { Grid } from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";
import useStyles from "./style";

import cus1 from "../../Img/Footer/Customer/1.png";
import cus2 from "../../Img/Footer/Customer/2.png";
import cus3 from "../../Img/Footer/Customer/3.png";
import cus4 from "../../Img/Footer/Customer/4.png";
import cus5 from "../../Img/Footer/Customer/5.png";
import cus6 from "../../Img/Footer/Customer/6.png";
import cus7 from "../../Img/Footer/Customer/7.png";
import cus8 from "../../Img/Footer/Customer/8.png";
import cus9 from "../../Img/Footer/Customer/9.png";
import cus10 from "../../Img/Footer/Customer/10.png";
import cus11 from "../../Img/Footer/Customer/11.png";
import cus12 from "../../Img/Footer/Customer/12.png";
import cus13 from "../../Img/Footer/Customer/13.png";
import cus14 from "../../Img/Footer/Customer/14.png";
import cus15 from "../../Img/Footer/Customer/15.png";
import cus16 from "../../Img/Footer/Customer/16.png";
import cus17 from "../../Img/Footer/Customer/17.png";
import cus18 from "../../Img/Footer/Customer/18.png";
import cus19 from "../../Img/Footer/Customer/19.png";
import app1 from "../../Img/Footer/App/1.png";
import app2 from "../../Img/Footer/App/2.png";

import soc1 from "../../Img/Footer/Social/1.png";
import soc2 from "../../Img/Footer/Social/2.png";
import info1 from "../../Img/Footer/Info/1.jpg";
import info2 from "../../Img/Footer/Info/2.jpg";

function Footer() {
  const customerList = [
    cus1,
    cus2,
    cus3,
    cus4,
    cus5,
    cus6,
    cus7,
    cus8,
    cus9,
    cus10,
    cus11,
    cus12,
    cus13,
    cus14,
    cus15,
    cus16,
    cus17,
    cus18,
    cus19,
  ];
  const renderCustomer = () => {
    return customerList.map((item) => {
      return (
        <a href="#bottom" key={uuidv4()}>
          <img className={classes.customerImg} src={item} alt="customer-logo" />
        </a>
      );
    });
  };
  const classes = useStyles();

  return (
    <div className={`${classes.footer}`}>
      <div className="container">
        <Grid className={classes.topContent} container>
          <Grid item xs={5}>
            <p className={classes.title}>TIX</p>
            <div className={classes.content}>
              <a href="#bottom" className={classes.contentItem}>
                FAQ
              </a>
              <a href="#bottom" className={classes.contentItem}>
                Thỏa thuận sử dụng
              </a>
              <a href="#bottom" className={classes.contentItem}>
                Brand Guidelines
              </a>
              <a href="#bottom" className={classes.contentItem}>
                Chính sách bảo mật
              </a>
            </div>
          </Grid>
          <Grid item xs={3}>
            <p className={classes.title}>ĐỐI TÁC</p>
            <div className={classes.content}>{renderCustomer()}</div>
          </Grid>
          <Grid className={classes.appMobile} item xs={2}>
            <p className={classes.title}>MOBILE APP</p>
            <div className={`flexHorizon ${classes.appContent}`}>
              <a href="#bottom">
                <img className={classes.appItem} src={app1} alt="app-mobile" />
              </a>
              <a href="#bottom">
                <img className={classes.appItem} src={app2} alt="app-mobile" />
              </a>
            </div>
          </Grid>
          <Grid className={classes.appMobile} item xs={2}>
            <p className={classes.title}>SOCIAL</p>
            <div className={`flexHorizon ${classes.appContent}`}>
              <a
                href="https://www.facebook.com/hoangkhai.triump/"
                target="_blank"
                rel="noreferrer"
              >
                <img className={classes.appItem} src={soc1} alt="app-mobile" />
              </a>
              <a href="#bottom">
                <img className={classes.appItem} src={soc2} alt="app-mobile" />
              </a>
            </div>
          </Grid>
        </Grid>
        <Grid className={classes.botContent} container spacing={3}>
          <Grid item xs={1}>
            <img className={classes.infoLogoLeft} src={info1} alt="info-1" />
          </Grid>
          <Grid className={classes.infoCenter} item xs={9}>
            <p className={classes.title}>
              The New TIX – SẢN PHẨM CỦA HOANGKHAI
            </p>
            <p className={classes.infoText}>Fresher Front-End Developer</p>
            <p className={classes.infoText}>
              Email:{" "}
              <a className={classes.email} href="mailto:trankhai3624@gmail.com">
                trankhai3624@gmail.com
              </a>
            </p>
            <p className={classes.infoText}>Phone: 0929 393 624</p>

            <p className={classes.infoText}>
              Địa chỉ: 21 Đỗ Thúc Tịnh, Phường 12, Gò Vấp, TPHCM
            </p>
          </Grid>
          <Grid className={classes.appMobile} item xs={1}>
            <img className={classes.infoLogoRight} src={info2} alt="info-1" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
