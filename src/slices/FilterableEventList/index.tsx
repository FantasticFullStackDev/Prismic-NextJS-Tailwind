import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import FilterableEventListDefaultVariant from "./variants/default";

/**
 * Props for `FilterableEventList`.
 */
export type FilterableEventListProps =
  SliceComponentProps<Content.FilterableEventListSlice>;

/**
 * Component for "FilterableEventList" Slices.
 */
const FilterableEventList = ({
  slice,
}: FilterableEventListProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.variation === 'default' && <FilterableEventListDefaultVariant {...slice} />}
    </section>
  );
};

export default FilterableEventList;
