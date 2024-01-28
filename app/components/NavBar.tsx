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

export default function NavBar() {
  return (
    <div className='px-4 py-2 flex items-center justify-between bg-white z-50'>
      <Link href='/'>
        <Image src={logo} width={150} height={70} alt='SGX Logo' />
      </Link>
      <div className='flex items-center space-x-3 text-primary font-medium'>
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
