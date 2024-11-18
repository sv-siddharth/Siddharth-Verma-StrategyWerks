import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem } from "@/components/ui/select";

interface FiltersProps {
  onFilterChange: (value: string) => void;
}

const Filters: React.FC<FiltersProps> = ({ onFilterChange }) => (
  <div className="flex flex-col md:flex-row gap-4 py-4">
    <div className="w-full md:w-1/4">
      <Select onValueChange={(value) => onFilterChange(value)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Filter by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="price_asc">Price: Low to High</SelectItem>
          <SelectItem value="price_desc">Price: High to Low</SelectItem>
          <SelectItem value="category_all">Category: All</SelectItem>
          <SelectItem value="category_beauty">Category: Beauty</SelectItem>
          <SelectItem value="category_electronics">Category: Electronics</SelectItem>
          <SelectItem value="price_all">Price Range: All</SelectItem>
          <SelectItem value="price_0-50">Price Range: $0 - $50</SelectItem>
          <SelectItem value="price_50-100">Price Range: $50 - $100</SelectItem>
          <SelectItem value="price_100-200">Price Range: $100 - $200</SelectItem>
          <SelectItem value="rating_all">Rating: All</SelectItem>
          <SelectItem value="rating_4">Rating: 4 stars & up</SelectItem>
          <SelectItem value="rating_3">Rating: 3 stars & up</SelectItem>
          <SelectItem value="rating_2">Rating: 2 stars & up</SelectItem>
          <SelectItem value="rating_1">Rating: 1 star & up</SelectItem>
        </SelectContent>
      </Select>
    </div>
  </div>
);

export default Filters;