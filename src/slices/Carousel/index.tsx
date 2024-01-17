import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import CarouselDefaultVariant from "./variants/default";


/**
 * Props for `Carousel`.
 */
export type CarouselProps = SliceComponentProps<Content.CarouselSlice>;

/**
 * Component for "Carousel" Slices.
 */
const Carousel = ({ slice }: CarouselProps): JSX.Element => {

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.variation === 'default' && <CarouselDefaultVariant primary={slice.primary} items={slice.items}/>}
    </section>
  );
};

export default Carousel;
