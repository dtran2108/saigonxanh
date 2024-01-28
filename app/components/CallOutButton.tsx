import { Button } from '@/components/ui/button'
import RightArrowCircle from '../icons/RightArrowCircle'
import { cn } from '@/lib/utils'

export default function CallOutButton({
  label,
  variant = 'primary',
}: {
  label: string
  variant?: 'primary' | 'secondary'
}) {
  return (
    <Button
      size='lg'
      className={cn(
        'mt-4 rounded-full flex items-center space-x-6 pr-2',
        variant == 'secondary'
          ? 'hover:bg-white bg-white text-primary'
          : 'hover:bg-primary bg-primary text-white'
      )}
    >
      <span>{label}</span>
      <RightArrowCircle
        className={cn(variant == 'secondary' ? 'text-primary' : 'text-white')}
        arrowColor={variant == 'secondary' ? 'white' : '#0B2B62'}
      />
    </Button>
  )
}
