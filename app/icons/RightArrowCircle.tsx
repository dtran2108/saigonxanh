export default function RightArrowCircle({
  className,
  arrowColor,
}: {
  className?: string
  arrowColor?: string
}) {
  return (
    <svg
      className={className}
      width='32'
      height='33'
      viewBox='0 0 32 33'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect y='0.669922' width='32' height='32' rx='16' fill='currentColor' />
      <path
        d='M18.7479 9.52295L25.5538 16.6425L18.7479 23.762L17.9598 22.9373L23.3934 17.2523H6.26465V16.0327L23.3938 16.0323L17.9598 10.3476L18.7479 9.52295Z'
        fill={arrowColor || 'white'}
        stroke={arrowColor || 'white'}
        strokeWidth='0.40625'
      />
    </svg>
  )
}
