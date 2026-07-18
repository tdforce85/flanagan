// Before/after gallery items. Add photos to /public/images/gallery/ and fill in
// `beforeSrc` / `afterSrc`. Items with empty srcs render as labeled placeholders
// so the layout and slider still work before real photos exist.

export interface GalleryItem {
  id: string;
  caption: string;
  beforeSrc?: string;
  afterSrc?: string;
}

export const GALLERY: GalleryItem[] = [
  {
    id: "kitchen-backsplash",
    caption: "Kitchen backsplash tile install",
    beforeSrc: "",
    afterSrc: "",
  },
  {
    id: "deck-refinish",
    caption: "Deck board repair & re-stain",
    beforeSrc: "",
    afterSrc: "",
  },
  {
    id: "bathroom-vanity",
    caption: "Bathroom vanity & fixture swap",
    beforeSrc: "",
    afterSrc: "",
  },
  {
    id: "fence-repair",
    caption: "Fence section rebuild",
    beforeSrc: "",
    afterSrc: "",
  },
  {
    id: "drywall-patch",
    caption: "Drywall patch & repaint",
    beforeSrc: "",
    afterSrc: "",
  },
  {
    id: "door-install",
    caption: "Interior door replacement",
    beforeSrc: "",
    afterSrc: "",
  },
];
