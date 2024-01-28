import { Button } from '@/components/ui/button'
import { StaticImageData } from 'next/image'
import RightArrowCircle from '../icons/RightArrowCircle'

export default function CallOutCard({
  backgroundImage,
  title,
  buttonLabels,
}: {
  backgroundImage: StaticImageData
  title: string
  buttonLabels: string[]
}) {
  return (
    <div
      className='relative min-h-[500px] p-6 rounded-md'
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        borderRadius: '6px',
      }}
    >
      <div className='bg-black/40 absolute w-full h-full top-0 left-0 z-5'></div>
      <div className='relative z-10'>
        <h1 className='text-2xl text-white font-medium'>{title}</h1>
        <div className='flex items-center space-x-3 flex-wrap'>
          {buttonLabels?.map((label) => (
            <Button
              key={label}
              size='lg'
              className='mt-4 rounded-full flex items-center space-x-6 pr-2 hover:bg-white bg-white text-primary'
            >
              <span>{label}</span>
              <RightArrowCircle className='text-primary' arrowColor='white' />
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
