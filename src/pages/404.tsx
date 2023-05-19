import React from 'react'
import { Button } from '../components/Button';
import Link from 'next/link';

const Custom404 = () => {
    return (
        <div className='min-h-[calc(100vh-4rem)] grid place-content-center text-center gap-4'>
            <h1 className='font-semibold text-3xl'><span className='text-light-black/70'>A</span>re you lost?</h1>
            <span>It looks like the page you are looking for does not exist</span>
            <Link href="/">
                <Button>Go Home</Button>
            </Link>
        </div>
    )
}

export default Custom404
