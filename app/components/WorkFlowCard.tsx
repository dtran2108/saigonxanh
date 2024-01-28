import Image, { StaticImageData } from 'next/image'

export default function WorkFlowCard({
  step,
  title,
  image,
}: {
  step: string | number
  title: string
  image: StaticImageData
}) {
  return (
    <div>
      <div>
        <span className='p-2 px-3 rounded-full bg-black text-white'>
          {step}
        </span>
      </div>
      <p className='text-primary mt-4 h-16'>{title}</p>
      <Image
        className='mt-8'
        src={image}
        width={500}
        height={500}
        alt={title}
      />
    </div>
  )
}
