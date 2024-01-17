import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `SocialLinks`.
 */
export type SocialLinksProps = SliceComponentProps<Content.SocialLinksSlice>;

/**
 * Component for "SocialLinks" Slices.
 */
const SocialLinks = ({ slice }: SocialLinksProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for social_links (variation: {slice.variation})
      Slices
    </section>
  );
};

export default SocialLinks;
