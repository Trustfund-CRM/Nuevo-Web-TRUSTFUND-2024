"use client";

import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import style from "./Navbar.module.css";
import style2 from "../Footer/Footer.module.css"
import { LogoTrust, Facebook, Instagram, Youtube, Linkedin } from "@/styles/assets";
import { nuevoLogo, logoAzul } from "@/styles/assets";
import Button from "react-bootstrap/Button";
import Image from "next/image";
import Link from "next/link";
import "../../styles/globals.css";
import { CruzModal } from '@/styles/assets'


export default function NavbarPrincipal({ styleProp }) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(!show);
  const handleShow = () => setShow(!show);
  const [activeNavItem, setActiveNavItem] = useState("");
  const [media, setMedia] = useState()
  const [logo, setLogo] = useState(nuevoLogo);

  useEffect(() => {
    setActiveNavItem("");
    if (window !== "undefined") {
      setMedia(window.matchMedia("(max-width: 991px)"))
    }

  }, []);

  useEffect(() => {
    if (window !== 'undefined') {
      function handleScroll() {
        var scrollY = window.scrollY || window.pageYOffset;

        var triggerPosition = 1000;

        if (scrollY > triggerPosition) {
          document.getElementById('nav-bar').style.backgroundColor = '#D9D9D980';
          document.getElementById('text-navbar1').style.color = '#1A1A1A';
          document.getElementById('text-navbar2').style.color = '#1A1A1A';
          document.getElementById('text-navbar3').style.color = '#1A1A1A';
          setLogo(logoAzul);
        } else {
          document.getElementById('nav-bar').style.backgroundColor = 'rgb(255 255 255 / 0%)';
          document.getElementById('text-navbar1').style.color = '#FFFFFF';
          document.getElementById('text-navbar2').style.color = '#FFFFFF';
          document.getElementById('text-navbar3').style.color = '#FFFFFF';
          setLogo(nuevoLogo);
        }
      }

      window.addEventListener('scroll', handleScroll);
    }
  }, [])


  return (
    <div id="nav-bar" className={style.navContainer} style={styleProp ? styleProp : null}>
      <Navbar expand="lg" className={style.navbarPrincipal}>
        <Container fluid className={style.container}>
          <Navbar.Brand >
            <Link href="/" className={`${activeNavItem === "vacio" ? "" : ""
              }`} onClick={() => { setActiveNavItem("vacio") }}>
              <Image
                className={style.FotoLogoNavbar}
                alt="logoNavbarTrust"
                src={logo}
              />
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" onClick={handleShow} />
          <Navbar.Offcanvas
            show={show} onHide={handleClose}
            // id="offcanvasNavbar-expand-lg"
            // aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="end"
            className={style.OffCanvasPrincipal}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg" style={{ display: 'none' }}>
                <Link href="/">
                  <Image
                    className={style.FotoLogoNavbar}
                    alt="logoNavbarTrust"
                    src={nuevoLogo}
                  />
                </Link>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body style={{ display: 'flex' }} >
              <Nav
                activeKey="/nuestra-garantia"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                className={`justify-content-end flex-grow-1 pe-3 ${style.subNavLinks}`}
              >
                <Link
                  href="/nuestra-garantia"
                  className={`${style.navLink} ${activeNavItem === "nuestra-garantia" ? style.active : ""
                    }`}
                  onClick={() => { setActiveNavItem("nuestra-garantia"); media && media.matches && handleClose() }}
                >
                  <div id="text-navbar1" style={{ color: '#FFFFFF' }} className={style.textNav} >
                    NUESTRA GARANTÍA
                  </div>
                </Link>
                <Link
                  href="/InmobiliariasYPropietarios"
                  className={`${style.navLink} ${activeNavItem === "inmobiliarias-y-propietarios"
                    ? style.active
                    : ""
                    }`}
                  onClick={() => { setActiveNavItem("inmobiliarias-y-propietarios"); media && media.matches && handleClose() }
                  }
                >
                  <div id="text-navbar2" style={{ color: '#FFFFFF' }} className={style.textNav}>
                    INMOBILIARIA Y PROPIETARIOS
                  </div>
                </Link>
                <Link
                  href="/ConsultasYReclamos"
                  className={`${style.navLink} ${activeNavItem === "ConsultasYReclamos" ? style.active : ""
                    }`}
                  onClick={() => { setActiveNavItem("ConsultasYReclamos"); media && media.matches && handleClose() }}
                >
                  <div id="text-navbar3" style={{ color: '#FFFFFF' }} className={style.textNav}>
                    CONSULTAS Y RECLAMOS
                  </div>
                </Link>
                {/* <Nav.Link href="#action1" variant="outline-primary" className={style.navLink}>REGISTRATE</Nav.Link> */}
                {
                  /*
                  <div className={style.BoxButtonCrm}>
                    <Button
                      target="_blank"
                      rel="noreferrer"
                      href="https://crm.trustfund.com.ar/login"
                      variant="outline-primary"
                      className={style.buttonCrm}
                    >
                      REGISTRATE
                    </Button>
                  </div>
                  */
                }
                <div>
                  {
                    media && media.matches ?
                      <div style={{ position: "relative", top: "250px" }}>
                        <div style={{ display: "flex", height: "100%", flexDirection: "column", justifyContent: "center", alignItems: "flex-start" }}>
                          <div className={style.textNav}>NUESTRAS REDES SOCIALES</div>
                          <div style={{ marginTop: "20px" }}>
                            <div className={style2.subBoxRedes}>
                              <div style={{ columnGap: "20px", display: 'flex' }}>
                                <a className={style2.iconRedes} href="https://www.facebook.com/garantiastrustfund?ref=pages_you_manage%2F">
                                  <Image style={{ scale: "80%" }} alt="facebook" src={Facebook} />
                                </a>
                                <a className={style2.iconRedes} href="https://www.instagram.com/trustfundgarantias/">
                                  <Image style={{ scale: "80%" }} alt="instagram" src={Instagram} />
                                </a>
                                <a className={style2.iconRedes} href="https://www.youtube.com/@trustfundgarantias9186">
                                  <Image style={{ scale: "80%" }} alt="youtube" src={Youtube} />
                                </a>
                                <a className={style2.iconRedes} href="https://www.linkedin.com/company/trust-fund-garantias/">
                                  <Image style={{ scale: "80%" }} alt="linkedin" src={Linkedin} />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      :
                      <div></div>
                  }
                </div>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}
