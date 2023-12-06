import React from 'react'
import styled from 'styled-components'

const ContainerButton = styled.div`
    bottom: 45px;
    right: 45px;
    position: fixed;
    z-index: 9999999999;
    background-color: transparent;
    @media (min-width:1440px) and (max-width: 1468px) {
      right: 80px;
    }
    @keyframes radial-pulse {
    0% {
      box-shadow: 0 0 0 0px rgba(3, 87, 154, 0.5);
    }
    100% {
      box-shadow: 0 0 0 40px rgba(3, 87, 154, 0);
    }
  }
`
const Img = styled.img`
  z-index: 99999;
`
const AnimationImg =styled.div`
    border-radius: 50%;
    animation: radial-pulse 2s infinite;
    animation-delay: 8s;
    background-color: transparent;
`

export default function ButtonWsp() {
  
    
    return (
    <>
    <ContainerButton>
    <a target="_blank" href='https://api.whatsapp.com/send/?phone=542213619465&text=¡Hola!%20Quiero%20más%20información%20sobre%20las%20garantías%20de%20alquiler%20🙌🏼&app_absent=0'>
        <AnimationImg>
          <Img width="65px" alt='' src='https://res.cloudinary.com/dqllk3gmq/image/upload/v1692114048/TrustFund/kpoeqfim3caxvp62tmd2.svg'/>
        </AnimationImg>
    </a>
    </ContainerButton>
    </>
  )
}