import React, { useState } from 'react'
import Head from 'next/head'

export default function Home(): React.ReactElement {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  function toggleMobileMenu() {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <div>
      <Head>
        <title>Personal Website</title>
      </Head>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  { /* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */ }
                  <a href="/" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>

                  <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              {/* Mobile menu button */}
              <button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" onClick={toggleMobileMenu}>
                <span className="sr-only">Open main menu</span>
                {/*
                  Heroicon name: menu

                  Menu open: "hidden", Menu closed: "block"
                  */}
                <svg className={`${mobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                {/*
                  Heroicon name: x

                  Menu open: "block", Menu closed: "hidden"
                  */}
                <svg className={`${mobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/*
          Mobile menu, toggle classNamees based on menu state.

          Open: "block", closed: "hidden"
          */}
        <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
            <a href="/" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>
          </div>
        </div>
      </nav>

      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Replace with your content */}
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
          </div>
          {/* /End replace */}
        </div>
      </main>
    </div>
  )
}
