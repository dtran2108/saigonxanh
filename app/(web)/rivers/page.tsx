import Hero from '../../components/Hero'
import riversHero from '@/public/images/rivers-hero.png'
import phuongMyChi from '@/public/images/phuongMyChi.png'
import trashBarrier from '@/public/images/trash-barrier.png'
import manWithBarrier from '@/public/images/man-with-barrier.png'
import trashInWater from '@/public/images/trash-in-water.png'
import workflowStep1 from '@/public/images/workflow-step-1.png'
import workflowStep2 from '@/public/images/workflow-step-2.png'
import workflowStep3 from '@/public/images/workflow-step-3.png'
import workflowStep4 from '@/public/images/workflow-step-4.png'
import workflowStep5 from '@/public/images/workflow-step-5.png'
import riverDive from '@/public/images/river-dive.png'
import community from '@/public/images/community.png'
import barrierSponsor from '@/public/images/barrier-2.png'
import WorkFlowCard from '../../components/WorkFlowCard'
import CallOutCard from '../../components/CallOutCard'
import CallOutButton from '../../components/CallOutButton'

export default function Page() {
  const workflowSteps = [
    {
      image: workflowStep1,
      title: 'Daily cleanups of every barrier',
    },
    {
      image: workflowStep2,
      title:
        'Sort every piece of trash we collect into 30+ material categories',
    },
    {
      image: workflowStep3,
      title:
        'Analyze and record data to fuel conversations around plastic pollution with stakeholders',
    },
    {
      image: workflowStep4,
      title: 'Wash, shred and prepare trash for recycling',
    },
    {
      image: workflowStep5,
      title:
        'Every material category we collect has value - with the help of our sister company, Sungai Design, we are innovating ways to recycle low-value plastics!',
    },
  ]

  return (
    <main>
      <Hero
        backgroundImage={riversHero}
        title='More than 80% of plastic pollution in the ocean comes from rivers and streams.'
      />
      <section className='py-16 container'>
        <div>
          <h1 className='text-primary font-medium text-4xl text-center'>
            We believe one of the simplest ways to clean our ocean is by
            starting in our rivers, where we can still prevent the flow of
            plastic.
          </h1>
          <p className='mt-8 text-primary text-xl text-center'>
            The Solution — Install Simple Trash Barriers
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-8'>
          <div className='min-h-[500px] bg-[#B0CDBA] w-full'></div>
          <div
            className='min-h-[500px] bg-[#B0CDBA] w-full'
            style={{
              backgroundImage: `url(${phuongMyChi.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
            }}
          ></div>
          <div
            className='min-h-[500px] bg-[#B0CDBA] w-full'
            style={{
              backgroundImage: `url(${trashBarrier.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
            }}
          ></div>
        </div>
      </section>
      <section className='grid grid-cols-2 md:min-h-screen'>
        <div
          className='md:min-h-screen md:col-span-1 col-span-2 min-h-[400px] w-full'
          style={{
            backgroundImage: `url(${manWithBarrier.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        ></div>
        <div className='bg-[#82C341] grid grid-cols-2 gap-4 px-12 md:col-span-1 col-span-2 py-8 md:py-0'>
          <div className='flex items-center text-primary text-[32px] font-medium col-span-2 justify-start'>
            Plastic is now polluting every river <br /> in the world.
          </div>
          <div></div>
          <div className='md:col-span-1 col-span-2 justify-center md:justify-start'>
            <p className='text-primary text-lg font-medium'>
              Our mission is clear: to protect and revitalize our waterways. No
              two rivers are the same and while we acknowledge the challenges
              posed by factors like river width, currents, and boat traffic, we
              firmly believe that every free-running river, regardless of size,
              deserves safeguarding. <br />
              We believe that our innovative barrier solutions are the key to
              engaging communities and governments in cleaning up our rivers.
              With your support, we can make a real difference. By installing
              our barriers in the world&apos;s most polluted rivers we can gain
              crucial insights into river pollution, empowering us to take
              targeted actions on land.
            </p>
          </div>
        </div>
      </section>
      <section
        className='relative min-h-screen w-full'
        style={{
          backgroundImage: `url(${trashInWater.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      >
        <div className='relative container z-10 flex flex-col justify-center min-h-screen'>
          <h1 className='text-5xl text-white font-medium'>
            Strategy To Clean Rivers
          </h1>
          <ul className='text-xl text-white mt-8 leading-loosed list-disc ml-6 font-light'>
            <li>
              We map the sources of river pollution to optimise the placement of
              our barriers
            </li>
            <li>
              We install multiple barriers per river to better understand flaws
              in waste management
            </li>
            <li>
              We organize emergency cleanups at illegal landfills and along
              riverbanks to prevent plastic from entering rivers
            </li>
            <li>
              We host education and socialization campaigns with local
              communities to prevent throw-away behavior
            </li>
            <li>
              We partner with governments to develop clear waste management
              roadmaps
            </li>
          </ul>
        </div>
        <div className='bg-black/50 absolute top-0 left-0 w-full h-full z-5'></div>
      </section>
      <section className='container py-16'>
        <h1 className='text-3xl font-medium text-primary'>Our workflow:</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-14 mt-16'>
          {workflowSteps.map((step, i) => (
            <WorkFlowCard
              step={i + 1}
              image={step.image}
              title={step.title}
              key={i}
            />
          ))}
        </div>
      </section>
      <section className='grid grid-cols-3'>
        <div className='col-span-3 md:col-span-2 bg-[#EFEFEF] p-16'>
          <div className='w-full md:w-6/12'>
            <h1 className='text-green font-medium text-2xl'>
              We are grateful to be working with more than 110 river warriors
              who go out every day to clean our rivers
              <br /> on behalf of Sungai Watch.
            </h1>
            <p className='text-green mt-8'>
              We are big believers that in order to see real changes in our
              rivers, we need to empower local heroes at every cleanup.
            </p>
          </div>
        </div>
        <div
          className='col-span-3 min-h-[200px] md:col-span-1'
          style={{
            backgroundImage: `url(${riverDive.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        ></div>
      </section>
      <section className='container py-20'>
        <h1 className='text-green font-medium text-4xl text-center mb-16'>
          Help us place more barriers in the world’s most polluted rivers!
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <CallOutCard
            backgroundImage={barrierSponsor}
            buttonLabels={['Contact Us']}
            title='Sponsor a barrier'
          />
          <CallOutCard
            backgroundImage={community}
            buttonLabels={['Learn more']}
            title='Organize a fundraiser with your school or community'
          />
          <div className='relative min-h-[500px] p-6 rounded-md bg-red'>
            <div className='relative z-10'>
              <h1 className='text-2xl text-white font-medium'>
                Report a dirty river in Ho Chi Minh city
              </h1>
              <CallOutButton label='SGX Hotline' variant='secondary' />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
