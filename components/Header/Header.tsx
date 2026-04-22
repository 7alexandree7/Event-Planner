import { UserButton } from '@neondatabase/auth/react'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className='border-b border-(--border) bg-(--surface)/90 backdrop-blur'>
            <div className='mx-auto  flex h-16 w-full max-w-6xl items-center justify-between px-4'>
                <Link href="/">Event Planner</Link>
                <nav className='flex items-center gap-4'>
                    <Link href="/dashboard" className='px-3 py-2 rounded-md text-sm font-medium hover:bg-(--foreground)/10'>Dashboard</Link>
                    <UserButton size="icon" />
                </nav>
            </div>
        </header>
    )
}

export default Header
