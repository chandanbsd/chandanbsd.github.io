'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const App = dynamic(() => import('../../App'), { ssr: true, loading: () => <div>Loading....</div> })

export function ClientOnly() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <App />
        </Suspense>)
}
