'use client'

import { ServiciosCards } from '@/components/Servicios/ServiciosCards'
import React from 'react'

export default function page() {
    console.log('page Servicios')
    return (
        <div>
            <section>
                <ServiciosCards />
            </section>
        </div>
    )
}