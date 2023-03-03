interface SkeletonProps {
  type?: 'progress' | 'sumTitle' | 'sumSub'
  className?: string
}

const Skeleton = ({ type, className }: SkeletonProps) => {
  let sizeClasses
  switch (type) {
    case 'sumTitle':
      sizeClasses = 'h-[26px] rounded'
      break
    case 'sumSub':
      sizeClasses = 'h-[20px] rounded'
      break
    case 'progress':
      sizeClasses = 'h-[8px] rounded-full'
      break
    default:
      sizeClasses = 'h-[16px] rounded'
      break
  }

  return (
    <div
      className={`animate-pulse bg-base-200 ${sizeClasses} ${className}`}
    ></div>
  )
}

export default Skeleton
