'use client'

import QuienesSomos from '@/components/Servicios/QuienesSomos/QuienesSomos'
import { ServiciosCards } from '@/components/Servicios/ServiciosCards'
import Contrata from '@/components/Servicios/Contrata/Contrata'
import React from 'react'

export default function page() {
    return (
        <div>
            <section>
                <ServiciosCards />
                <QuienesSomos />
                <Contrata />
            </section>
        </div>
    )
}