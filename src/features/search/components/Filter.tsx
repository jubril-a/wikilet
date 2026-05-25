import { CheckIcon } from "@heroicons/react/20/solid"
import { useRouter, useSearchParams } from 'next/navigation';

export default function Filter({group, filter}: {group: string, filter: string}) {

    const router = useRouter();
    const searchParams = useSearchParams();

    function updateParams(key: string, value: string) {
        const params = new URLSearchParams(searchParams.toString());
        params.set(key, value);
        router.push(`?${params.toString()}`);
    };

    return (
        <label key={group} className="flex gap-2 items-center mb-2 cursor-pointer" htmlFor={filter}>
          <input onChange={() => updateParams('a', 'b')} className="peer hidden" type="checkbox" name={filter} id={filter} />
          <span className="p-0.5 block border border-gray-600 rounded-sm peer-checked:bg-blue-600 peer-checked:border-blue-600 peer-checked:*:text-white"><CheckIcon className="size-4 text-white font-bold" /></span>
          <span className="text-sm tracking-tight">{filter}</span>
        </label>
    )
}