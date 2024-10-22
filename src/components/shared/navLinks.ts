export type SubLinks = {
    header?: string;
    subMenu?: { label: string; href: string }[];
    subImages?: { label: string; href: string; image: string }[];
  };
  
  export type Links = {
    label: string;
    href: string;
    navImage?: string;
    caption?: string;
    subLinks?: SubLinks[];
  };


  
  export const links: Links[] = [
    {
      label: "About Us",
      href: "/about-us",
    },
    {
        label: "Solutions",
        href: "#",
        navImage: "",
        caption: "",
        subLinks: [
          {
            header: "Snowboarding",
            subMenu: [
              {
                label: "Ad Reach",
                href: "/ad-reach",
              },
              {
                label: "Utility Net",
                href: "/utility-net",
              },
              {
                label: "Cell Grid",
                href: "/cell-grid",
              },
              {
                label: "Secure Site",
                href: "/secure-site",
              },
              {
                label: "Shop Spot",
                href: "/shop-spot",
              },
              {
                label: "Nav Optix",
                href: "/nav-optix",
              },
              {
                label: "AgriZone",
                href: "/agri-zone",
              },
              {
                label: "Tour Map",
                href: "/tour-map",
              },
              {
                label: "Health Loc",
                href: "/health-loc",
              },
              {
                label: "Real Sight",
                href: "/real-sight",
              },
              {
                label: "Insur Sight",
                href: "/insur-sight",
              },
              {
                label: "Edu Zone",
                href: "/edu-zone",
              },
              {
                label: "CiviSync",
                href: "/civi-sync",
              },
            ],
          },
        ],
      },
    {
      label: "Careers",
      href: "/careers",
    },
    {
      label: "Privacy Policy",
      href: "/privacy-policy",
    },
    {
      label: "Contact Us",
      href: "/contact-us",
    },
    {
      label: "Terms of Use",
      href: "/terms-of-use",
    },
  ];




