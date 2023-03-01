'use client';

import { useEffect, useState } from 'react';

import Card from '@components/Card';
import { PlaceProps } from '@interfaces/interfaces';

interface SearchProps {
  onPlaceSelect?: (place: PlaceProps) => void;
}

const Search: React.FC<SearchProps> = ({ onPlaceSelect }) => {
  const [query, setQuery] = useState<string>('');
  const [search, setSearch] = useState<PlaceProps[]>([]);

  useEffect(() => {
    if (query.length >= 2) {
      const fetchPlaces = async () => {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_LOCAL_URL}/api/places/search/${query}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        const places = await res.json();

        setSearch(places.places);
      };

      fetchPlaces();
    }
  }, [query]);

  return (
    <Card className='absolute top-2.5 right-2.5 z-10 max-w-xs text-primary-content'>
      <div className='form-control w-full max-w-xs'>
        <label className='label sr-only'>
          <span className='label-text'>Recherchez votre ville</span>
        </label>
        <input
          type='text'
          placeholder='Votre ville...'
          className='input input-bordered w-full max-w-xs'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {search.length > 0 && (
        <Card className='absolute top-full mt-2 -ml-3'>
          <ul>
            {search.map((place, index) => {
              return (
                <li key={index}>
                  <button
                    onClick={() => {
                      setSearch([]);
                      setQuery('');
                      // onPlaceSelect(place);
                    }}
                    className='w-full text-left py-3 text-secondary hover:text-secondary-focus focus:text-secondary-focus'
                  >
                    {place.name}
                  </button>
                  {index + 1 < search.length && <hr className='' />}
                </li>
              );
            })}
          </ul>
        </Card>
      )}
    </Card>
  );
};

export default Search;
