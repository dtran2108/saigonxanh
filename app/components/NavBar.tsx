import Image from 'next/image'
import logo from '@/public/images/logos/sgx-logo.svg'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NavBar() {
  return (
    <div className='px-4 py-2 flex items-center justify-between bg-white z-100'>
      <Link href='/'>
        <Image src={logo} width={150} height={70} alt='SGX Logo' />
      </Link>
      <div className='flex items-center space-x-8 text-primary font-medium'>
        <Link href='/rivers'>RIVERS</Link>
        <Link href='/clean-ups'>CLEANUPS</Link>
        <Link href='/about-us'>ABOUT</Link>
        <Link href='/donate'>
          <Button className='rounded-full'>DONATE</Button>
        </Link>
      </div>
    </div>
  )
}
