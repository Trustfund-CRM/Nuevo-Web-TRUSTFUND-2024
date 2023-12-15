"use client";

import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import style from "./Navbar.module.css";

import { nuevoLogo, logoAzul } from "@/styles/assets";
import Image from "next/image";
import Link from "next/link";
import "../../styles/globals.css";
import { DataNav } from "@/config/constants";
import { MediaItems } from "./MediaItems";
import { usePathname } from "next/navigation";

export default function NavbarPrincipal({ styleProp }) {
  const path = usePathname();
  console.log('pathname', path)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(!show);
  const handleShow = () => setShow(!show);
  const [activeNavItem, setActiveNavItem] = useState("");
  const [media, setMedia] = useState();
  const [logo, setLogo] = useState(nuevoLogo);

  useEffect(() => {
    setActiveNavItem("");
    if (window !== "undefined") {
      setMedia(window.matchMedia("(max-width: 991px)"));
    }
  }, []);

  return (
    <div
      id="nav-bar"
      className={style.navContainer}
      style={styleProp ? styleProp : null}
    >
      <Navbar expand="lg" className={style.navbarPrincipal}>
        <Container fluid className={style.container}>
          <Navbar.Brand>
            <Link
              href="/"
              className={`${activeNavItem === "vacio" ? "" : ""}`}
              onClick={() => {
                setActiveNavItem("vacio");
              }}
            >
              <Image
                className={style.FotoLogoNavbar}
                alt="logoNavbarTrust"
                src={logo}
              />
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="offcanvasNavbar-expand-lg"
            onClick={handleShow}
            className={style.toggleNav}
          />
          <Navbar.Offcanvas
            show={show}
            onHide={handleClose}
            placement="end"
            className={style.OffCanvasPrincipal}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                id="offcanvasNavbarLabel-expand-lg"
                style={{ display: "none" }}
              >
                <Link href="/">
                  <Image
                    className={style.FotoLogoNavbar}
                    alt="logoNavbarTrust"
                    src={nuevoLogo}
                  />
                </Link>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body style={{ display: "flex" }}>
              <Nav
                activeKey="/nuestra-garantia"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                className={`justify-content-end flex-grow-1 pe-3 ${style.subNavLinks}`}
              >
                {DataNav.map((item) => (
                  <Link
                    href={item.url}
                    onClick={() => {
                      setActiveNavItem(item.action);
                      media && media.matches && handleClose();
                    }}
                    className={`${
                        path === item.url ? 
                        style.newLinkActive : 
                        style.newLink
                      }
                    `}
                    key={item.name} 
                  >
                    {item.name}
                  </Link>
                ))}
                <MediaItems media={media} />
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}
