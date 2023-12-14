'use client'

import { ObteneTuGrantiaPrincipal } from '@/components/ObteneTuGarantia'
import React from 'react'
import { Footer, NavbarPrincipal } from '@/components';


export default function page() {

    return (
        <div>
            <NavbarPrincipal styleProp={{ position: 'relative', backgroundColor: '#004994' }}/>
            <section>
                <ObteneTuGrantiaPrincipal />
            </section>
            <Footer styleProp={{ top: '0px', height: '125vh' }}/>
        </div>
    )
}