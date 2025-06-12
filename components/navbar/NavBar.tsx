import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import DropdownMenu from './DropDownMenu'

export default function NavBar() {
    return (
        <header className="sticky top-0 z-50 w-full shadow-sm">
            <nav className="w-full bg-base-100 py-2 px-4 md:px-10 lg:px-24 border-b border-gray-100">
                <div className="flex items-center justify-between w-full h-14 max-w-7xl mx-auto">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="pl-2 sm:pl-4 transition-opacity hover:opacity-90"
                        aria-label="Home"
                    >
                        <Image
                            src="/logo/logo.jpg"
                            alt="The ProEducator Logo"
                            width={160}
                            height={40}
                            className="w-auto h-10 object-contain"
                            priority
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="lg:flex hidden items-center space-x-6">
                        <ul className='flex items-center space-x-6'>

                            {/* dropdown menu */}
                            <DropdownMenu />

                            <li>
                                <Link
                                    href="/contact"
                                    className="text-[1rem] font-semibold text-gray-600 hover:text-gray-900"
                                >
                                    Contact
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
