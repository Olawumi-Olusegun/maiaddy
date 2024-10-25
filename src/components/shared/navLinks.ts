export type SubLinks = {
    header?: string;
    subMenu?: { label: string; href: string, description: string }[];
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
            subMenu: [
              {
                label: "Ad Reach",
                href: "/ad-reach",
                description: "Achieve geo -targeted advertising for maximum impact with AdReach",
              },
              {
                label: "Utility Net",
                href: "/utility-net",
                description: "Optimize utility services with precision using UtilityNet.",
              },
              {
                label: "Cell Grid",
                href: "/cell-grid",
                description: "Infuse precision planning into Telecoms with CellGrid.",
              },
              {
                label: "Secure Site",
                href: "/secure-site",
                description: "Use location intelligence for financial security with SecureSite.",
              },
              {
                label: "Shop Spot",
                href: "/shop-spot",
                description: "Attain retail success with strategic location planning using ShopSpot.",
              },
              {
                label: "Nav Optix",
                href: "/nav-optix",
                description: "Own precision navigation and route optimization with NavOptix",
              },
              {
                label: "AgriZone",
                href: "/agri-zone",
                description: "",
              },
              {
                label: "Tour Map",
                href: "/tour-map",
                description: "Elevate your agricultural solutions with AgriZone",
              },
              {
                label: "Health Loc",
                href: "/health-loc",
                description: "Deliver Healthcare with Precision LocationIntelligence using HealthLoc.",
              },
              {
                label: "Real Sight",
                href: "/real-sight",
                description: "Build real estate success on precision data with RealSight.",
              },
              {
                label: "Insur Sight",
                href: "/insur-sight",
                description: "Get advanced location intelligence for risk assessment with InsurSight.",
              },
              {
                label: "Edu Zone",
                href: "/edu-zone",
                description: "Transform education planning with EduZone.",
              },
              {
                label: "CiviSync",
                href: "/civi-sync",
                description: "Streamline government services with CiviSync.",
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

  




