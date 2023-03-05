interface RangeSelectorProps {
  value: number
  label: string
  onChange: (value: string) => void
  minLabel: string
  maxLabel: string
}

const RangeSelector = ({
  label,
  value,
  onChange,
  minLabel,
  maxLabel,
}: RangeSelectorProps) => {
  return (
    <div>
      <p className='mb-3'>{label}</p>
      <input
        type='range'
        min='0'
        max='10'
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className='range range-secondary'
        step='1'
      />
      <div className='w-full flex justify-between text-xs px-2'>
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
