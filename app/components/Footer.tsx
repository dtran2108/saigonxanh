import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import Instagram from '@/app/icons/Instagram'
import Tiktok from '../icons/Tiktok'
import Youtube from '../icons/Youtube'
import LinkedIn from '../icons/LinkedIn'
import Image from 'next/image'
import SGXLogo from '@/public/images/logos/sgx-logo.svg'
import OnePercentForPlanet from '@/public/images/logos/1_percent_for_the_planet.svg'

export default function Footer() {
  return (
    <div className='bg-black'>
      <div className='container mx-auto w-full py-8'>
        <div className='mb-6 text-white'>
          <h1 className='text-xl font-bold'>Sign up to our newsletter</h1>
          <p>Get our emails to stay in the know.</p>
        </div>
        <div className='flex items-end space-x-2'>
          <Input
            placeholder='Email address'
            className='border-transparent border-b-[#FFFFFF] bg-transparent rounded-none placeholder:text-white text-white focus-visible:border-none'
          />
          <Button className='rounded-full bg-white text-black' size='lg'>
            Subscribe
          </Button>
        </div>
        <div className='mt-20 flex items-center justify-between'>
          <div className='flex items-center space-x-4'>
            <Link href='#!'>
              <Instagram className='text-white' />
            </Link>
            <Link href='#!'>
              <Tiktok className='text-white' />
            </Link>
            <Link href='#!'>
              <Youtube className='text-white' />
            </Link>
            <Link href='#!'>
              <LinkedIn className='text-white' />
            </Link>
          </div>
          <div className='flex items-center space-x-6 text-white uppercase'>
            <Link href='#!'>RIVERS</Link>
            <Link href='#!'>CLEAN UPS</Link>
            <Link href='#!'>ABOUT US</Link>
            <Link href='#!'>2022 Impact Report</Link>
            <Link href='#!'>Contact us</Link>
            <Link href='#!'>SUPPORT us</Link>
          </div>
        </div>
        <div className='mt-20 flex items-center justify-between'>
          <Image
            src={SGXLogo}
            width={200}
            height={100}
            alt='Saigon Xanh Logo'
          />
          <Image
            src={OnePercentForPlanet}
            width={100}
            height={50}
            alt='One percent for the planet Logo'
          />
        </div>
        <div className='mt-8 text-sm text-white'>© 2024 SaiGonXanh</div>
      </div>
    </div>
  )
}