'use client'

import QuienesSomos from '@/components/Servicios/QuienesSomos/QuienesSomos'
import { ServiciosCards } from '@/components/Servicios/ServiciosCards'
import React from 'react'

export default function page() {
    return (
        <div>
            <section>
                <ServiciosCards />
                <QuienesSomos />
            </section>
        </div>
    )
}