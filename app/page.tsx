import Image from 'next/image'
import { Button } from '@/components/ui/button'
import RightArrowCircle from './icons/RightArrowCircle'
import heroImage from '@/public/images/hero-bg.png'
import watchCleaningRivers from '@/public/images/sungai-watch-cleaning-rivers.png'
import mieCleaning from '@/public/images/mie-cleaning.png'
import garageBarrier from '@/public/images/garage-barrier.png'
import dirtyRiver from '@/public/images/dirty-river.png'
import landFieldCleanup from '@/public/images/landfield-cleanup.png'
import volunteerOpportunity from '@/public/images/volunteer-opportunity.png'
import CallOutCard from './components/CallOutCard'
import Link from 'next/link'
import Instagram from './icons/Instagram'
import Tiktok from './icons/Tiktok'
import Youtube from './icons/Youtube'
import LinkedIn from './icons/LinkedIn'
import CallOutButton from './components/CallOutButton'

export default function Home() {
  return (
    <main className='min-h-screen'>
      <section
        className='relative min-h-screen w-screen'
        style={{
          backgroundImage: `url(${heroImage.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      >
        <div className='absolute w-full h-full top-0 left-0 bg-gradient-to-t from-[#049F58] to-transparent z-5'></div>
        <div className='relative container flex flex-col justify-center z-10 min-h-screen'>
          <h1 className='text-white font-bold text-3xl lg:text-6xl leading-none'>
            Protecting rivers <br /> starting in <br /> Vietnam
          </h1>
          <p className='w-full md:w-6/12 mt-8 text-white md:font-medium'>
            The Saigon Green Group is committed not only to collecting and
            recycling waste from the rivers in Saigon but also to changing the
            community&apos;s perception of the importance of environmental
            protection. Through advocating and promoting community actions
            towards sustainability, we aim to expand our influence across
            Vietnam and the world.
          </p>
        </div>
      </section>
      <div className='bg-[#049F58] py-6'>
        <div className='container grid grid-cols-1 md:grid-cols-2 gap-6 text-white'>
          <div>
            <p className='md:text-2xl'>42,582 kg of plastics collected</p>
            <p className='md:text-2xl'>32 villages cleaned</p>
          </div>
          <div>
            <p className='md:text-2xl'>12 Barriers installed</p>
            <p className='md:text-2xl'>371 community cleanups organized</p>
          </div>
        </div>
      </div>
      <section className='grid grid-cols-2 md:min-h-screen'>
        <div
          className='md:min-h-screen md:col-span-1 col-span-2 min-h-[200px] w-full'
          style={{
            backgroundImage: `url(${watchCleaningRivers.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        ></div>
        <div className='bg-[#B0CDBA] grid grid-cols-2 gap-4 px-12 md:col-span-1 col-span-2 py-8 md:py-0'>
          <div className='flex items-end text-primary text-[32px] font-medium md:col-span-1 col-span-2 justify-center md:justify-start'>
            CLEANING RIVERS
          </div>
          <div></div>
          <div></div>
          <div className='md:col-span-1 col-span-2 justify-center md:justify-start'>
            <p className='text-primary'>
              We believe trash barriers are the quickest and most cost effective
              way to eradicate plastic pollution by activating communities on
              land. Rivers are the perfect connection point between life on land
              and our ocean.
            </p>
            <div className='flex items-center justify-center md:justify-start'>
              <CallOutButton label='Learn more' />
            </div>
          </div>
        </div>
      </section>
      <section className='grid grid-cols-2 md:min-h-screen'>
        <div
          className='md:min-h-screen md:col-span-1 col-span-2 min-h-[200px] w-full'
          style={{
            backgroundImage: `url(${mieCleaning.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        ></div>
        <div className='bg-[#BDD5FC] grid grid-cols-2 gap-4 px-12 md:col-span-1 col-span-2 py-8 md:py-0'>
          <div className='flex items-end text-primary text-[32px] font-medium md:col-span-1 col-span-2 justify-center md:justify-start'>
            EMERGENCY CLEANUPS
          </div>
          <div></div>
          <div></div>
          <div className='md:col-span-1 col-span-2 justify-center md:justify-start'>
            <p className='text-primary'>
              We organize emergency cleanups at illegal dumps and along
              riverbanks to prevent plastic from entering rivers as well as work
              on enforcing proper waste management at the local level.
            </p>
            <div className='flex items-center justify-center md:justify-start'>
              <CallOutButton label='Learn more' />
            </div>
          </div>
        </div>
      </section>
      <section className='bg-[#EFEFEF]'>
        <div className='container py-16 flex items-center'>
          <div className='grid grid-cols-3 gap-16'>
            <div className='col-span-3 md:col-span-1'>
              <h1 className='text-[32px] text-primary font-medium'>
                MAPPING OUR WORK
              </h1>
              <p className='mt-8 text-primary'>
                To better track the sources of plastic pollution, we are
                dedicated to collecting as much data as possible about rivers
                and trash illegal landfills (in red). We use our barriers (in
                blue) and cleanups (in green) as a tool to work with communities
                and governments to improve local waste management practices.
              </p>
            </div>
            <div className='col-span-3 md:col-span-2'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125409.84909087028!2d106.692608!3d10.8068864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529111aa89f9d%3A0xd8f09cc0aa1b27f3!2zQ-G6o25nIGjDoG5nIGtow7RuZyBRdeG7kWMgdOG6vyBUw6JuIFPGoW4gTmjhuqV0IChUSUEp!5e0!3m2!1svi!2s!4v1706445642298!5m2!1svi!2s'
                width='100%'
                height='450'
                style={{ border: '0' }}
                allowFullScreen={true}
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-white'>
        <div className='container py-16'>
          <div className='text-center'>
            <h1 className='text-2xl md:text-4xl text-primary font-medium'>
              Help us install the next 1,000 Barriers to clean the <br />
              world’s most polluted rivers!
            </h1>
            <p className='text-primary mt-8 md:text-xl'>
              To achieve this substantial goal, we need your help! <br />
              Here is how you can help us get there:
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-8'>
            <CallOutCard
              backgroundImage={garageBarrier}
              title='Sponsor a barrier'
              buttonLabels={['Contact Us']}
            />
            <CallOutCard
              backgroundImage={landFieldCleanup}
              title='Help us fund more river and illegal landfill cleanups'
              buttonLabels={['Donate']}
            />
            <CallOutCard
              backgroundImage={volunteerOpportunity}
              title='Join our volunteer opportunities'
              buttonLabels={['View calendar', 'Register']}
            />
            <CallOutCard
              backgroundImage={dirtyRiver}
              title='Report a dirty river'
              buttonLabels={['SGX Hotline']}
            />
            <div className='min-h-[500px] w-full border border-primary border-dashed rounded-md p-6'>
              <h1 className='text-2xl text-primary font-medium'>
                Read our annual impact report
              </h1>
              <CallOutButton label='Read report' />
            </div>
            <div className='min-h-[500px] w-full bg-[#82C341] rounded-md p-6 flex flex-col justify-end'>
              <h1 className='text-2xl text-primary font-medium'>
                Help us spread the word and follow us on social media
              </h1>
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
          </div>
        </div>
      </section>
    </main>
  )
}
