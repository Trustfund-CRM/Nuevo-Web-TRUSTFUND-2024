'use client'

import { SectionTop } from '@/components/nuestraGrantia'
import SectionBottom from '@/components/nuestraGrantia/SectionBottom/SectionBottom'
import SectionMid from '@/components/nuestraGrantia/SectionMid/SectionMid'
import { Footer, NavbarPrincipal } from '@/components';

import React from 'react'

export default function page({ data }) {

    return (
        <div>
            <NavbarPrincipal styleProp={{ position: 'relative', backgroundColor: '#004994' }}/>
            <section>
                <SectionTop />
            </section>
            <section>
                <SectionMid />
            </section>
            <section>
                <SectionBottom />
            </section>
            <Footer styleProp={{ top: '0px', height: '125vh' }}/>
        </div>
    )
}

