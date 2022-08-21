import style from '../styles/Footer.module.css';
import Image from 'next/image';

import Link from 'next/link';

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.cardL}>
        <h1 className={style.title}>CHAMPIONS CREATIVES.</h1>
        <h1 className={style.linkTitle}>
          <Link href="/contact" className={style.link} passHref>
            <>
              <span className={style.linkText}>WORK WITH US</span>
              <img src="/img/link.png" width="40px" height="40px" alt="" />
            </>
          </Link>
        </h1>
      </div>
      <div className={style.cardS}>
        <div className={style.cardItem}>
          45 ADAM STREET,
          <br /> LAGOS
        </div>
        <div className={style.cardItem}>
          CONTACT@The Champions
          <br /> +2348106530608
        </div>
      </div>
      <div className={style.cardS}>
        <div className={style.cardItem}>
          FOLLOW US:
          <br /> The Champpions Academy
        </div>
        <div className={style.cardItem}>
          © 2022 THE CHAMPIONS DEV,
          <br />
          ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  );
};

export default Footer;
