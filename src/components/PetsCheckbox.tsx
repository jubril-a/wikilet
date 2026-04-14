// components/PetsCheckbox.tsx
import { useSearchStore } from "../stores/searchStore";

export default function PetsCheckbox() {
  const { pets, setPets } = useSearchStore();

  return (
    <div className="flex items-start gap-2 mt-8">
      <input
        type="checkbox"
        checked={pets}
        onChange={(e) => setPets(e.target.checked)}
        id="pets"
      />
      <label htmlFor="pets" className="text-sm text-gray-700 -mt-1 max-w-100 cursor-pointer">
        I am moving in with pets. If checked, only properties that allow pets will be shown
      </label>
    </div>
  );
}