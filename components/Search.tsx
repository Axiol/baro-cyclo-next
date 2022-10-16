import Card from '@components/Card';

const Search: React.FC = () => {
  return (
    <Card className='absolute top-2.5 right-2.5 z-10 max-w-xs'>
      <div className='form-control w-full max-w-xs'>
        <label className='label sr-only'>
          <span className='label-text'>Recherchez votre ville</span>
        </label>
        <input
          type='text'
          placeholder='Votre ville...'
          className='input input-bordered w-full max-w-xs'
        />
      </div>
    </Card>
  );
};

export default Search;
