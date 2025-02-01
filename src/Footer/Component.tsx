
import React from 'react'

import type { Footer } from '@/payload-types'

import { ThemeSelector } from '@/providers/Theme/ThemeSelector'


export async function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-black dark:bg-card text-white">
        <div className="conatiner h-36 flex items-center justify-center">
            <p>A product of Texas Imaginology</p>
            <div className="ml-4">
              <ThemeSelector />
            </div>
        </div>
    </footer>
  )
}
