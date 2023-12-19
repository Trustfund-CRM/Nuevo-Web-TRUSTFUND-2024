
'use client'
import { SeccionCollapseRight } from '@/components/ConsultasYReclamos'
import SeccionFomulariosReclamos from '@/components/ConsultasYReclamos/SeccionFomulariosReclamos'
import React from 'react'

export default function page() {
  return (
    <div>
      <section>
        <SeccionCollapseRight />
      </section>
      <section>
        <SeccionFomulariosReclamos />
      </section>
    </div>
  )
}
