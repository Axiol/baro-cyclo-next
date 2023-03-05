import { LatLngTuple } from 'leaflet'
import { PlaceProps } from '@interfaces/interfaces'

interface RangeSelectorProps {
  label: string
}

const RangeSelector = ({ label }: RangeSelectorProps) => {
  return (
    <div>
      <p className='mb-3'>{label}</p>
      <input
        type='range'
        min='0'
        max='10'
        value='2'
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
      </div>
    </div>
  )
}

export default RangeSelector
