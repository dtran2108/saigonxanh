import Hero from '../../components/Hero'
import cleanUpHero from '@/public/images/clean-ups.png'
import educationPlusOutreach from '@/public/images/education-plus-outreach.png'
import volunteerPrizing from '@/public/images/volunteer-prizing.png'
import joinCleanUps from '@/public/images/join-cleanups.png'
import CallOutButton from '../../components/CallOutButton'
import Image from 'next/image'
import CallOutCard from '@/app/components/CallOutCard'
import { Link } from 'lucide-react'
import Instagram from '@/app/icons/Instagram'
import Tiktok from '@/app/icons/Tiktok'
import Youtube from '@/app/icons/Youtube'
import LinkedIn from '@/app/icons/LinkedIn'

export default function Page() {
  return (
    <main>
      <Hero
        backgroundImage={cleanUpHero}
        title='Vietnam ranks as the 4th largest plastic polluter to the oceans.'
      />
      <section className='py-16 container'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-primary font-medium text-2xl md:text-4xl text-center'>
            We have identified over 350 illegal landfills in Bali.
          </h1>
          <p className='mt-8 text-primary md:text-xl text-center'>
            A lot of this is due to the lack of waste management and recycling
            infrastructure. Although Indonesia has pledged to reduce 70% of
            plastic pollution it emits into the ocean by 2025, we are continuing
            to see an increase in illegal landfills that are piling up alongside
            rivers.
          </p>
          <CallOutButton label='Join a cleanup!' />
        </div>
      </section>
      <section className='container py-16'>
        <h1 className='text-primary font-medium text-2xl'>
          Our biggest emergency cleanups to date:
        </h1>
        <div className='grid grid-cols-2 md:grid-cols-5 mt-8 gap-2 md:gap-6'>
          {Array.from({ length: 15 }, (_, i) => i + 1).map((item) => (
            <Image
              src={`/images/emergency-${item.toString()}.png`}
              width={300}
              height={300}
              alt={'emergency' + item}
              key={'emergency' + item}
            />
          ))}
        </div>
      </section>
      <section className='grid grid-cols-2 md:min-h-screen'>
        <div
          className='md:min-h-screen md:col-span-1 col-span-2 min-h-[400px] w-full'
          style={{
            backgroundImage: `url(${educationPlusOutreach.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        ></div>
        <div className='bg-[#82C341] grid grid-cols-2 gap-4 px-12 md:col-span-1 col-span-2 py-8 md:py-0'>
          <div className='flex items-center text-primary text-3xl font-medium col-span-2 justify-start'>
            Education + Outreach
          </div>
          <div></div>
          <div className='md:col-span-1 col-span-2 justify-center md:justify-start'>
            <p className='text-primary md:text-lg font-medium'>
              Community outreach is an essential part of our mission to combat
              plastic pollution. We organize education sessions to engage
              communities and encourage better waste management. We host
              education and cleanup events with local schools on a regular
              basis. We invite local businesses, governments, and social groups
              to our cleanups to try and curb plastic pollution at the local
              level.
            </p>
          </div>
        </div>
      </section>
      <section className='grid grid-cols-2 md:min-h-screen'>
        <div className='bg-[#EFEFEF] px-12 md:col-span-1 col-span-2 py-16'>
          <h1 className='text-primary text-3xl font-medium'>
            Thank you to our volunteers!
          </h1>
          <p className='text-primary md:text-lg font-medium mt-8'>
            Since launching our weekly volunteer cleanup programs in April 2022,
            we have accomplished over 23,210 volunteer hours and removed over
            534,728kg of non-organic trash! Through our weekly volunteer
            cleanups, we are proud to empower local communities to stop illegal
            dumping.
          </p>
        </div>
        <div
          className='md:min-h-screen md:col-span-1 col-span-2 min-h-[400px] w-full'
          style={{
            backgroundImage: `url(${volunteerPrizing.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        ></div>
      </section>
      <section className='container py-20'>
        <h1 className='text-primary font-medium text-2xl md:text-4xl text-center mb-24'>
          Help us identify and clean illegal landfills throughout Indonesia!
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='relative min-h-[500px] p-6 rounded-md bg-green'>
            <div className='relative z-10'>
              <h1 className='text-2xl text-white font-medium'>
                Report an illegal landfill
              </h1>
              <CallOutButton label='SGX Hotline' variant='secondary' />
            </div>
          </div>
          <CallOutCard
            backgroundImage={joinCleanUps}
            buttonLabels={['Register']}
            title='Join a volunteer cleanup'
          />
          <div className='relative min-h-[500px] p-6 rounded-md bg-primary'>
            <div className='relative z-10'>
              <h1 className='text-2xl text-white font-medium'>
                Share our work
              </h1>
              <div className='flex items-center space-x-4 mt-4'>
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
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
