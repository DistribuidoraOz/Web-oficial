import { ListBulletIcon } from "@heroicons/react/24/outline";
import { optionField, propsImput } from "../lib/definitions";

export function ImputListName({list, prop}: 
  {list: optionField[], prop: propsImput}){

    return (
      <div className="mb-4">
        <label htmlFor={prop.name} className="mb-2 block text-sm font-medium">
          {`Seleccione una ${prop.name}`}
        </label>
        <div className="relative">
          <select
            id={prop.id}
            name={prop.name}
            className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            defaultValue=""
            aria-describedby={`${prop.id}-error`}
          >
            <option value="" disabled>
              {`Seleccione una ${prop.name}`}
            </option>
            {list.map((option) => (
              <option key={option.id} value={option.id}>
                {option.nombre}
              </option>
            ))}
          </select>
          <ListBulletIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
        </div>
        <div id={`${prop.id}-error`} aria-live="polite" aria-atomic="true">
          {prop.errors?.map((error: any) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
        </div>
      </div>
    );
  };