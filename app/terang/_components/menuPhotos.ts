/**
 * One clean reference photo per menu category (public/placeholder/README.md
 * asks for exactly this shape once real shots exist). Unsplash stand-ins,
 * shared by every section that shows a dish — kept here, not in
 * lib/content.ts, since these are implementation-detail URLs, not
 * restaurant content the other directions need to share.
 */
/*
 * Widths bumped to 1800px — these now stand in as full-width section
 * backgrounds (see MenuCategory), not small thumbnails, so they need more
 * source resolution. `sweet` was swapped from a tall/portrait mound shot to
 * a wider composition with breathing room on one side — the old one cropped
 * badly at banner proportions; this one holds up.
 */
export const CATEGORY_PHOTOS: Record<string, { src: string; alt: string }> = {
  "beef-noodles": {
    src: "https://images.unsplash.com/photo-1774702541015-101e48834357?auto=format&fit=crop&w=1800&q=80",
    alt: "Reference: braised beef noodle soup — stand-in for the shop's own bowl",
  },
  rice: {
    src: "https://images.unsplash.com/photo-1682566509547-5961bc5ea394?auto=format&fit=crop&w=1800&q=80",
    alt: "Reference: braised pork over rice — stand-in for the shop's own bowl",
  },
  sides: {
    src: "https://images.unsplash.com/photo-1781785164696-0154e4dd70c1?auto=format&fit=crop&w=1800&q=80",
    alt: "Reference: steamed gua bao bun with pork belly — stand-in for the shop's own bao",
  },
  sweet: {
    src: "https://images.unsplash.com/photo-1768204042188-f5a337e61ca5?auto=format&fit=crop&w=1800&q=80",
    alt: "Reference: strawberry shaved ice dessert — stand-in for the shop's own shaved ice",
  },
};
