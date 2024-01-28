import CallOutButton from '@/app/components/CallOutButton'
import Hero from '@/app/components/Hero'
import partnerHero from '@/public/images/partners.png'
import Image from 'next/image'

export default function Page() {
  const partners = [
    {
      image: 'saigonese.png',
      location: 'Badung, Bali, Indonesia',
      partner: 'Multi sponsored',
    },
    {
      image: 'grimm-dc.png',
      location: 'Banyuwangi, Java, Indonesia',
      partner: 'Corona x WSL',
    },
    {
      image: 'dau-ma-mix.png',
      location: 'Buleleng, Bali, Indonesia',
      partner: 'Mariott International',
    },
    {
      image: 'BVIS-HCM.png',
      location: 'Denpasar, Bali, Indonesia',
      partner: 'Solgaard',
    },
    {
      image: 'TP-bank.png',
      location: 'Gianyar, Bali, Indonesia',
      partner: 'Only One',
    },
    {
      image: 'herbario.png',
      location: 'Tabanan, Bali, Indonesia',
      partner: 'Karmagawa',
    },
    {
      image: 'laura-sunshine.png',
      location: 'Denpasar, Bali, Indonesia',
      partner: 'Solgaard',
    },
    {
      image: 'adiva.png',
      location: 'Gianyar, Bali, Indonesia',
      partner: 'Only One',
    },
    {
      image: 'tea-joy.png',
      location: 'Tabanan, Bali, Indonesia',
      partner: 'Karmagawa',
    },
    {
      image: 'AC-pharma.png',
      location: 'Denpasar, Bali, Indonesia',
      partner: 'Solgaard',
    },
    {
      image: 'yummy-vietnam.png',
      location: 'Gianyar, Bali, Indonesia',
      partner: 'Only One',
    },
    {
      image: 'thaco.png',
      location: 'Tabanan, Bali, Indonesia',
      partner: 'Karmagawa',
    },
  ]

  const barrierPartners = [
    'Astris',
    'Kura Kura',
    'Red Crescent',
    'Bali Rovers & Balism',
    'Laros',
    'Safe Earth',
    'Club Kakatua',
    'Magali Pascal',
    'Scampi',
    'CnC & Natural Light Candle',
    'Maida Foundation',
    'Secret Spot',
    'DotsEco',
    'MixMag/ByeByePlastic',
    'Shared Earth',
    'Earth Brand',
    'MOICA',
    'She Is I',
    'EasyTees',
    'Montpensier',
    'Sunrise School',
    'Ecobusters',
    'Nusa Cana',
    'Tale of Two',
    'Forever Living',
    'Ocean Foundation',
    'United By Blue',
    'In Loving Memory of Yves',
    'Oliver & Ellie',
    'W Hotel',
    'Influence Star',
    'Ovolo Hotels',
    'We Like Bali',
    'John Hardy',
    'Princess Traveler',
    'WWF',
  ]

  const missionPartners = [
    'Asker Healthcare',
    'Kura Kura',
    'Potato Head',
    'Astungkara Way',
    'Little Ripper',
    'SAP',
    'Bookinglayer',
    'Lodge in the Woods',
    'Secret Spot',
    'Jiwa Garden',
    'Milk and Madu',
  ]

  return (
    <main>
      <Hero
        backgroundImage={partnerHero}
        title='Partners make our work possible!'
      />
      <section className='py-16 container'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-primary font-medium text-4xl text-center'>
            Partner with us!
          </h1>
          <p className='mt-8 text-primary text-xl text-center'>
            Our work to end river and marine plastic pollution is 100% funded by
            our incredible sponsors and partners. Plastic pollution is not going
            to fix itself alone and we need the help of many more partners to
            create long term environmental change. From small start-ups to large
            charitable foundations, we are confident that we can clean our
            world’s most polluted rivers together. Is your company ready to join
            our mission?
          </p>
          <CallOutButton label='Our Partnership Tiers' />
        </div>
      </section>
      <section className='container py-16 text-primary'>
        <h1 className='text-4xl font-medium'>Our Supporters</h1>
        <p className='mt-2'>
          Our success also comes from our sponsors and sponsoring brands
        </p>
        <CallOutButton label='Become our donor' />
        <div className='grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-20 mt-8'>
          {partners.map((partner) => (
            <div key={partner.image}>
              <Image
                src={`/images/sponsors/${partner.image}`}
                width={500}
                height={500}
                alt={partner.image}
              />
              <div className='mt-8 flex flex-col items-center space-x-3'>
                <h2 className='text-2xl'>{partner.location}</h2>
                <p className='text-xl'>Partner: {partner.partner}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className='container py-16 text-primary'>
        <h1 className='text-4xl font-medium'>Barrier Partners</h1>
        <p className='mt-2'>
          Our barriers can be individually sponsored. Each sponsor allows us to
          place a barrier in one river and clean it every day for one year.
        </p>
        <CallOutButton label='Become a Barrier Partner' />
        <div className='grid grid-cols-2 md:grid-cols-3 gap-x-32 mt-16'>
          {barrierPartners.map((partner) => (
            <p key={partner} className='text-primary font-medium'>
              {partner}
            </p>
          ))}
        </div>
      </section>
      <section className='container py-16 text-primary'>
        <h1 className='text-4xl font-medium'>Mission Partners</h1>
        <p className='mt-2'>
          Sponsors of our operations, cleanup, and research work.
        </p>
        <CallOutButton label='Become a Mission Partner' />
        <div className='grid grid-cols-2 md:grid-cols-3 gap-x-32 mt-16'>
          {missionPartners.map((partner) => (
            <p key={partner} className='text-primary font-medium'>
              {partner}
            </p>
          ))}
        </div>
      </section>
      <section className='py-16 container'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-primary font-medium text-4xl text-center'>
            If you are interested in sponsoring our work or have any questions,
            please feel free to contact us.
          </h1>
          <CallOutButton label='Contact Us' />
        </div>
      </section>
    </main>
  )
}
