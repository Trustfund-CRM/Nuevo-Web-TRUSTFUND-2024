'use client'

import { Promocion } from '@/components/Promocion'
import React from 'react'
import { Footer, NavbarPrincipal } from '@/components';

export default function page() {

    return (
        <div>
            <NavbarPrincipal styleProp={{ position: 'relative', backgroundColor: '#004994' }}/>
            <section>
                <Promocion />
            </section>
            <Footer styleProp={{ top: '0px', height: '125vh' }}/>
        </div>
    )
}