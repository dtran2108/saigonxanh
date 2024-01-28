import Hero from '../../components/Hero'
import riverWarriorsHero from '@/public/images/river-warriors.png'
import founders from '@/public/images/founders.png'
import Link from 'next/link'
import Image from 'next/image'

export default function Page() {
  return (
    <main>
      <Hero backgroundImage={riverWarriorsHero} title='RIVER WARRIORS' />
      <section className='py-16 container'>
        <div>
          <h1 className='text-primary font-medium text-4xl text-center'>
            Sungai Watch is an environmental organization on a mission to stop
            plastic from going into the ocean.
          </h1>
          <p className='mt-8 text-primary text-xl text-center'>
            We are a registered charity, both as a Yayasan in Indonesia and a
            501(c)3 in the United States. We are a certified One Percent for the
            Planet Environmental Partner.
          </p>
        </div>
      </section>
      <section className='grid grid-cols-2 md:min-h-screen'>
        <div
          className='md:min-h-screen md:col-span-1 col-span-2 min-h-[400px] w-full'
          style={{
            backgroundImage: `url(${founders.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        ></div>
        <div className='bg-[#BDD5FC] grid grid-cols-2 gap-4 px-12 md:col-span-1 col-span-2 py-8 md:py-0'>
          <div className='flex items-center text-primary text-[32px] font-medium col-span-2 justify-start'>
            Founders
          </div>
          <div></div>
          <div className='md:col-span-1 col-span-2 justify-center md:justify-start'>
            <p className='text-primary text-lg font-medium'>
              Founded in 2022 by Mr. Ngọc (right person) and Mr. Vĩ (left
              person) in Ho Chi Minh city, Vietnam. SaiGonXanh is now a team of
              100+ passionate river warriors, working every day to create
              solutions to stop the flow of plastic pollution from going into
              the ocean. By designing simple trash barriers and operating a
              collection, sorting and up- cycling system, we have created a
              scalable approach to tackling plastic pollution. We are on a
              mission to install 1,000 barriers throughout Indonesia’s most
              polluted rivers and expand SaiGonXanh internationally.
            </p>
            <p>
              To learn more about the founders' past work,{' '}
              <span>
                <Link href='#!'>click here.</Link>
              </span>
            </p>
          </div>
        </div>
      </section>
      <section className='bg-green py-16'>
        <div className='container text-white'>
          <h1 className='text-medium text-3xl'>Impact achieved:</h1>
          <p className='mt-8'>
            We are scaling rapidly and currently expanding our operation
            throughout Bali and in Java, Indonesia; the world's most populated
            island and home to 90 of the world's 1,000 most polluted rivers. We
            are also researching an international expansion throughout Asia and
            beyond.
          </p>
          <p className='mt-4'>
            Thank you for joining us on this journey, and we invite you to learn
            more about our impacts:
          </p>
          <p>
            <Link href='#!'>2021 Impact Report</Link>
          </p>
          <p>
            <Link href='#!'>2022 Impact Report</Link>
          </p>
        </div>
      </section>
      <section className='container py-16'>
        <h1 className='text-primary font-medium text-2xl'>
          We have more than 50 amazing river warriors that make this adventure
          possible.
        </h1>
        <div className='grid grid-cols-4 md:grid-cols-8 mt-8 gap-6'>
          {Array.from({ length: 78 }, (_, i) => i).map((item) => (
            <Image
              src={`/images/warriors/warrior-${item.toString()}.png`}
              width={300}
              height={300}
              alt={'warrior' + item}
              key={'warrior' + item}
            />
          ))}
        </div>
      </section>
    </main>
  )
}
