import { ChangeEvent } from 'react'

interface RangeSelectorProps {
  value: number
  name?: string
  label: string
  onChange: (value: ChangeEvent<HTMLInputElement>) => void
  minLabel: string
  maxLabel: string
}

const RangeSelector = ({
  label,
  name,
  value,
  onChange,
  minLabel,
  maxLabel,
}: RangeSelectorProps) => {
  return (
    <div>
      <p className='mb-3'>{label}</p>
      <input
        name={name}
        type='range'
        min='0'
        max='10'
        value={value}
        onChange={(e) => onChange(e)}
        className='range range-secondary'
        step='1'
      />
      <div className='w-full flex justify-between text-xs px-2 pointer-events-none'>
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
      </div>
      <div className='w-full flex justify-between text-xs px-2'>
        <span>{minLabel}</span>
        <span>{maxLabel}</span>
      </div>
    </div>
  )
}

export default RangeSelector
