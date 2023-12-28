'use client'

import QuienesSomos from '@/components/Servicios/QuienesSomos/QuienesSomos'
import { ServiciosCards } from '@/components/Servicios/ServiciosCards'
import Contrata from '@/components/Servicios/Contrata/Contrata'
import Firma from '@/components/Servicios/Firma/Firma'
import React from 'react'

export default function page() {
    return (
        <div>
            <section>
                <ServiciosCards />
                <QuienesSomos />
                <Contrata />
                <Firma />
            </section>
        </div>
    )
}