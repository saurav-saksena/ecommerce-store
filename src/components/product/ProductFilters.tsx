"use client";

interface ProductFiltersProps {
  search: string;
  category: string;
  minPrice: string;
  maxPrice: string;
  categories: string[];

  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onMinPriceChange: (value: string) => void;
  onMaxPriceChange: (value: string) => void;
}

export default function ProductFilters({
  search,
  category,
  minPrice,
  maxPrice,
  categories,
  onSearchChange,
  onCategoryChange,
  onMinPriceChange,
  onMaxPriceChange,
}: ProductFiltersProps) {
  return (
    <div className="mb-6 rounded-xl border bg-white p-4 shadow-sm">
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <input
          type="text"
          placeholder="Search by product name..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="col-span-2 rounded-lg border p-3 text-sm outline-none focus:ring-2 focus:ring-black"
        />

        <select
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="col-span-2 rounded-lg border p-3 text-sm"
        >
          <option value="all">All Categories</option>

          {categories.map((cat) => (
            <option
              key={cat}
              value={cat}
            >
              {cat}
            </option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => onMinPriceChange(e.target.value)}
          className="rounded-lg border p-3 text-sm"
        />

        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => onMaxPriceChange(e.target.value)}
          className="rounded-lg border p-3 text-sm"
        />
      </div>
    </div>
  );
}