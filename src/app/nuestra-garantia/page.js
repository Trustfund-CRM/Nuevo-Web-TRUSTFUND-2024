'use client'

import { SectionTop } from '@/components/nuestraGrantia'
import SectionBottom from '@/components/nuestraGrantia/SectionBottom/SectionBottom'
import SectionMid from '@/components/nuestraGrantia/SectionMid/SectionMid'

import React from 'react'

export default function page({ data }) {

    return (
        <div>
            <section>
                <SectionTop />
            </section>
            <section>
                <SectionMid />
            </section>
            <section>
                <SectionBottom />
            </section>
        </div>
    )
}

