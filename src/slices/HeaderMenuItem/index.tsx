import { Content } from "@prismicio/client";
import { PrismicLink, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `HeaderMenuItem`.
 */
export type HeaderMenuItemProps =
  SliceComponentProps<Content.HeaderMenuItemSlice>;

/**
 * Component for "HeaderMenuItem" Slices.
 */
const HeaderMenuItem = ({ slice }: any): JSX.Element => {
  return (
    <div className="w-fit flex justify-between items-center text-[16px] leading-[18px] font-medium p-2 relative hoverBox">
      <div className="text-white hover:text-yellow cursor-pointer">
        {
          slice.items.length ?
            <span>{slice.primary.label}</span> :
            <PrismicLink field={slice.primary.link} className="w-max block">
              {slice.primary.label}
            </PrismicLink>
        }
      </div>
        <div className="absolute top-8 right-0 min-w-full bg-white px-6 font-normal text-typo-primary hidden">
          {
            slice.items.map((item: any, index: number) => (
              <PrismicLink key={index} field={item.link} className="w-max block py-4">
                {item.label}
              </PrismicLink>
            ))
          }
        </div>
    </div>
  );
};

export default HeaderMenuItem;
