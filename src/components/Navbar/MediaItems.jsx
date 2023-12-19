import Image from "next/image";
import style from "./Navbar.module.css";
import style2 from "../Footer/Footer.module.css";
import {
    LogoTrust,
    Facebook,
    Instagram,
    Youtube,
    Linkedin,
  } from "@/styles/assets";
export const MediaItems = ({media}) => {
  return (
    <div>
      {media && media.matches && (
        <div style={{ position: "relative", top: "250px" }}>
          <div
            style={{
              display: "flex",
              height: "100%",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <div className={style.textNav}>NUESTRAS REDES SOCIALES</div>
            <div style={{ marginTop: "20px" }}>
              <div className={style2.subBoxRedes}>
                <div style={{ columnGap: "20px", display: "flex" }}>
                  <a
                    className={style2.iconRedes}
                    href="https://www.facebook.com/garantiastrustfund?ref=pages_you_manage%2F"
                  >
                    <Image
                      style={{ scale: "80%" }}
                      alt="facebook"
                      src={Facebook}
                    />
                  </a>
                  <a
                    className={style2.iconRedes}
                    href="https://www.instagram.com/trustfundgarantias/"
                  >
                    <Image
                      style={{ scale: "80%" }}
                      alt="instagram"
                      src={Instagram}
                    />
                  </a>
                  <a
                    className={style2.iconRedes}
                    href="https://www.youtube.com/@trustfundgarantias9186"
                  >
                    <Image
                      style={{ scale: "80%" }}
                      alt="youtube"
                      src={Youtube}
                    />
                  </a>
                  <a
                    className={style2.iconRedes}
                    href="https://www.linkedin.com/company/trust-fund-garantias/"
                  >
                    <Image
                      style={{ scale: "80%" }}
                      alt="linkedin"
                      src={Linkedin}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
