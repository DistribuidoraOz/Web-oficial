'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import {
  useSearchParams,
  useRouter,
  usePathname
} from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function Search({ placeholder }: { placeholder: string }) {

  const pathname = usePathname();
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const handleSearch = useDebouncedCallback((term: string)=>{
    //console.log(term);
    const params = new URLSearchParams(searchParams);
    if(term){
      params.set('name', term);
    }else{
      params.delete('name');
    }
    push(`/search?${params.toString()}`);
  }, 1000);
  return (
    <div className='sm:w-4/5 md:w-1/2'>
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="sm:w-4/5 peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e)=>{handleSearch(e.target.value);}}
        defaultValue={searchParams.get('name')?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
    </div>
  );
}
