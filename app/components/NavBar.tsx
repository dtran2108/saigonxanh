'use client'

import Image from 'next/image'
import logo from '@/public/images/logos/sgx-logo.svg'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet'
import Menu from '../icons/Menu'
import Instagram from '../icons/Instagram'
import Tiktok from '../icons/Tiktok'
import Youtube from '../icons/Youtube'
import LinkedIn from '../icons/LinkedIn'

export default function NavBar() {
  return (
    <div className='px-4 py-2 flex items-center justify-between bg-white z-50'>
      <Link href='/'>
        <Image src={logo} width={150} height={70} alt='SGX Logo' />
      </Link>
      <Sheet>
        <SheetTrigger asChild className='block md:hidden'>
          <Button variant='ghost'>
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className='border-b pb-4'>
            <Link href='/'>
              <Image src={logo} width={150} height={70} alt='SGX Logo' />
            </Link>
          </SheetHeader>
          <div className='mt-8'>
            <ul className='text-primary font-medium'>
              <li>
                <Link href='/rivers' legacyBehavior passHref>
                  RIVERS
                </Link>
              </li>
              <li>
                <Link href='/clean-ups' legacyBehavior passHref>
                  CLEANUPS
                </Link>
              </li>
              <li>
                <Link href='/about-us' legacyBehavior passHref>
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link href='/partners' legacyBehavior passHref>
                  PARTNERS
                </Link>
              </li>
            </ul>
            <Link href='/donate'>
              <Button size='sm' className='hover:bg-primary mt-4'>
                DONATE
              </Button>
            </Link>
            <div className='flex items-center space-x-4 mt-8'>
              <Link href='#!'>
                <Instagram className='text-primary' />
              </Link>
              <Link href='#!'>
                <Tiktok className='text-primary' />
              </Link>
              <Link href='#!'>
                <Youtube className='text-primary' />
              </Link>
              <Link href='#!'>
                <LinkedIn className='text-primary' />
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>
      <div className='hidden md:flex items-center space-x-3 text-primary font-medium'>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href='/rivers' legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  RIVERS
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href='/clean-ups' legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  CLEANUPS
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className='text-primary'>
                ABOUT
              </NavigationMenuTrigger>
              <NavigationMenuContent className='text-primary'>
                <Link href='/about-us' legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    ABOUT US
                  </NavigationMenuLink>
                </Link>
                <Link href='/partners' legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    PARTNERS
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Link href='/donate'>
          <Button className='rounded-full hover:bg-primary'>DONATE</Button>
        </Link>
      </div>
    </div>
  )
}
