const Search: React.FC = () => {
  return (
    <div className='absolute top-2.5 right-2.5 z-10 w-full max-w-xs bg-base-100 rounded-box p-3 shadow-lg'>
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
    </div>
  );
};

export default Search;
