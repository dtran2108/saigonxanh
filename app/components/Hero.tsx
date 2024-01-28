import { StaticImageData } from 'next/image'

export default function Hero({
  backgroundImage,
  title,
}: {
  backgroundImage: StaticImageData
  title: string
}) {
  return (
    <section
      className='relative min-h-[500px] w-full'
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <div className='relative container z-10 flex items-center justify-center min-h-[500px]'>
        <h1 className='text-5xl text-center text-white font-medium'>{title}</h1>
      </div>
      <div className='bg-black/50 absolute top-0 left-0 w-full h-full z-5'></div>
    </section>
  )
}
