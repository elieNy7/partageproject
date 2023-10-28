import { NavLinks } from '@/constants'
import { link } from 'fs'
import Image from 'next/image'
import Link from 'next/link'
import AuthProviders from './AuthProviders'


const NavBar = () => {
    const session = null;
  return (
    <nav className='flexBetween navbar'>
        <div className='flex-1 flexStart gap-10'>
            <Link href="/">
                <Image
                src="/logo.svg"
                width={115}
                height={43}
                alt='flexible logo'
                />
            </Link>
            <ul className='xl:flex hidden text-small gap-7'>
                {NavLinks.map((link) => (
                    <Link href={link.href} key={link.key}>
                        {link.text}
                    </Link>
                ))}
            </ul>
        </div>
        <div className='flex-Center gap-4'>
            {session ? (
                <>
                UserPhoto
                <Link href="/creat-project">
                Partage ton travail
                </Link>
                </>
            ): (<AuthProviders/>)}
        </div>
    </nav>
    
  )
}

export default NavBar