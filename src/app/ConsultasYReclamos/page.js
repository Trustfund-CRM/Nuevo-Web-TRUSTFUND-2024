
'use client'
import { SeccionCollapseRight } from '@/components/ConsultasYReclamos'
import SeccionFomulariosReclamos from '@/components/ConsultasYReclamos/SeccionFomulariosReclamos'
import React from 'react'
import { Footer, NavbarPrincipal } from '@/components';

export default function page() {
  return (
    <div>
      <NavbarPrincipal styleProp={{ position: 'relative', backgroundColor: '#004994' }}/>
      <section>
        <SeccionCollapseRight />
      </section>
      <section>
        <SeccionFomulariosReclamos />
      </section>
      <Footer styleProp={{ top: '0px', height: '125vh' }}/>
    </div>
  )
}
