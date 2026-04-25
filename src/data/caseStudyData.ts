export interface CaseStudy {
    id: string;
    title: string;
    subtitle: string;
    category: string;
    // longDescription: string;

    problem: string[];
    solution: string[];
    result: string[];

    image: string;
    metrics: { label: string; value: string }[];

    analytics: {
        totalSales: { value: string; change: string; isUp: boolean };
        sessions: { value: string; change: string; isUp: boolean };
        totalOrders: { value: string; change: string; isUp: boolean };
        conversionRate: { value: string; change: string; isUp: boolean };
    }

    store: {
      layoutType: 'District99' | 'clothing' | 'jewelry' | 'Saha' | 'restaurant' | 'luxury';
      themeColor: string;
      secondaryColor: string;
      fontStyle: 'urban' | 'modern' | 'classic' | 'serif' ;
      hero: { 
        backgroundImage: string; 
        headline: string; 
        cta: string; 
      };
      varients: { 
        image: string; 
      }[];
      products: { 
        name: string; 
        price: string; 
        image: string; 
        desc?: string 
      }[];


      // Yeh line add karein:
      marqueeText?: string; 
    }
}


// const services = [
//     {
//       title: "Premium Store Design",
//       description: "I build high-conversion Shopify stores with a focus on luxury editorial aesthetics and minimal clutter.",
//       tags: ["UI/UX", "Shopify", "Branding"]
//     },
//     {
//       title: "Performance Optimization",
//       description: "Complete technical SEO and speed optimization to ensure your store loads in under 2 seconds.",
//       tags: ["SEO", "Page Speed", "CRO"]
//     },
//     {
//       title: "Custom Development",
//       description: "Tailor-made liquid sections and custom CSS animations to make your brand stand out from competitors.",
//       tags: ["Liquid", "React", "Custom CSS"]
//     }
//   ];


export const caseStudies: CaseStudy[] = [
    {
        id: "District99",
        title: "District 99",
        subtitle: "High-end Streetwear.",
        category: "Streetwear",
        // longDescription: "District 99 had a really cool brand and great clothes, but their website was a mess. They were getting a lot of clicks from Instagram and TikTok, but nobody was actually buying anything.",
        
        problem: [ "District 99 had a really cool brand and great clothes, but their website was a mess. They were getting a lot of clicks from Instagram and TikTok, but nobody was actually buying anything. The site felt slow and looked a bit 'cheap' because of low-quality visuals, making people lose trust.",
        ],
        solution: ["I decided to strip everything back and go for a clean, 'dark mode' aesthetic. I rebuilt the mobile version from scratch, optimized all heavy images so the site would load in under two seconds, and made the 'Add to Cart' button prominent and easy to find."
        ],
        result:[ "Once we launched the new version, the numbers changed fast. The conversion rate went from 0.9% to 2.8% in just a few weeks. Customers started buying more than one item per order because the site felt professional and trustworthy."
        ],

        image: "/district-99-online-store.webp",
        metrics: [{ label: "Speed", value: "85/100" }, { label: "Revenue", value: "+40%" }],

        analytics: {
            totalSales: { value: "$12,400", change: "12%", isUp: true },
            sessions: { value: "4,200", change: "8%", isUp: true },
            totalOrders: { value: "154", change: "2%", isUp: false },
            conversionRate: { value: "3.2%", change: "1.5%", isUp: true }
        },

        store: {
          layoutType: 'District99',
          themeColor: "#050505",
          secondaryColor: "#E11D48",
          fontStyle: 'urban',
          hero: { 
            backgroundImage: "/district-99-online-store.webp", 
            headline: "ELEVATE<br/>YOUR DROP", 
            cta: "Shop Now" 
          },
          varients: [
            { image: "" },
            { image: "" },
            { image: "" }
          ],
          // In sections ko hum loop mein use karenge
          products: [
            { name: "Rough Cargo", price: "$80", image: "/district-99-pent-online-stor.webp" },
            { name: "Vanguard Tee", price: "$40", image: "/district-99-Tee-online-stor.webp" },
            { name: "Varsity Wild", price: "$160", image: "/district-99-jak-online-stor.webp" },
            { name: "Puffer", price: "$280", image: "/district-99-puff-online-stor.webp" },
            { name: "Apex Hoodie", price: "$90", image: "/district-99-hod-online-stor.webp" },
            { name: "Union Bag", price: "$120", image: "/district-99-bag-online-stor.webp" }
          ],
          
            

         marqueeText: "NEW DROP LIVE — WORLDWIDE SHIPPING — District99 2026 —"
        }
      },
      {
        id: "clothing-store",
        title: "Urban Threads",
        subtitle: "Street Style.",
        category: "Clothing",
        
        problem: 
        [
            "Urban Threads had a messy product page. It was very hard to use. There was too much noise and too many distracting colors.",
            "Customers were confused. They could not find the size chart. They did not know if the 'Heavyweight Tee' was good quality. Because the page was confusing, people did not click the buy button. The store was losing money every day." // Dusra paragraph
        ],
        solution:
        [
            "I built a new, clean product page. I used a simple layout. I put the 'Add to Cart' button right at the top. I made the 'Size Guide' very easy to see.",
            "I added a section for 340+ customer reviews. This proves the brand is real and trusted. I also added a 'You Might Also Like' section at the bottom. This shows customers other cool items like caps and bags. I made sure the page loads very fast on mobile phones."
        ],
        result:
        [
            "The new page works perfectly. The conversion rate went up by 35%. This is because the shop is now very easy to use.",
            "Customers now buy more items at once. They trust the store because the reviews are easy to read. The brand now looks like a professional streetwear giant. It is clean, fast, and brings in more profit."
        ],

        image: "/urban-threads-show-shopify-store.webp",
        metrics: [{ label: "Conversion", value: "3.8%" }, { label: "Sales", value: "+55%" }],

        analytics: {
            totalSales: { value: "$12,400", change: "12%", isUp: true },
            sessions: { value: "4,200", change: "8%", isUp: true },
            totalOrders: { value: "154", change: "2%", isUp: false },
            conversionRate: { value: "3.2%", change: "1.5%", isUp: true }
        },

        store: {
          layoutType: 'clothing',
          themeColor: "#ffffff",
          secondaryColor: "#000000",
          fontStyle: 'modern',
          hero: { 
            backgroundImage: "/urban-threads-shopify-store.webp", 
            headline: "ESSENTIALS<br/>FOR SUMMER", 
            cta: "Explore Collection" 
          },
          varients: [
            { image: "/urban-threads-black-shopify-store.webp" },
            { image: "/urban-threads-skin-shopify-store.webp" },
            { image: "/urban-threads-beig-shopify-store.webp" }
          ],
          products: [
            { name: "Urban Path Cap", price: "$45.00", image: "/urban-threads-cap-shopify-store.webp" },
            { name: "Urban Path Bag", price: "$120.00", image: "/urban-threads-bag-shopify-store.webp" },
            { name: "Utility Bomber Jacket", price: "$195.00", image: "/urban-threads-jacket-shopify-store.webp" }
          ]
        }
      },
    {
      id: "jewelry-store",
      title: "Lumina Gems",
      subtitle: "Luxury Jewelry.",
      category: "Luxury",
    //   longDescription: "Elegant gold-themed store for high-end buyers with premium product interactions.",

    problem: 
    [
        "Lumina Gems sells very expensive diamond jewelry. But their old website did not look luxury. The layout was messy and the fonts were hard to read.",
        "Customers did not feel safe spending thousands of dollars. There were no customer reviews on the home page. The site did not show the 'story' behind the brand. Because it lacked a premium feel, people would look at the jewelry but never buy it. The trust was very low."
    ],
    solution:
    [ 
        "I built a high-end layout for Lumina Gems. I used a very clean white and gold theme. I added a bold hero section that says 'Timeless Artistry.' This makes the brand feel like it has been around since 1950.",
        "I added 'Trust Icons' at the top to show they offer worldwide shipping and money-back guarantees. I also built a 'New Arrivals' section with sharp, beautiful images of rings and necklaces. Finally, I added a 'What Our Clients Say' section. This shows real feedback from happy customers. This makes the brand look professional and honest."
    ],
    result: 
    [
        "The store now looks like a real luxury boutique. Sales grew quickly because the site feels expensive and safe.",
        "The new 'Trust Icons' and reviews helped lower the fear of buying online. More people are now clicking the 'Shop Now' button. The conversion rate is much higher than before. Lumina Gems is now a trusted name in the jewelry market. It looks perfect on both desktop and mobile."
    ],

      image: "/lumina-gems-shopify-store.webp",
      metrics: [{ label: "AOV", value: "$1,200" }, { label: "Trust", value: "98%" }],

      analytics: {
        totalSales: { value: "$12,400", change: "12%", isUp: true },
        sessions: { value: "4,200", change: "8%", isUp: true },
        totalOrders: { value: "154", change: "2%", isUp: false },
        conversionRate: { value: "3.2%", change: "1.5%", isUp: true }
    },

      store:
      {
        layoutType: 'jewelry',
        themeColor: "#0a0a0a",
        secondaryColor: "#D4AF37",
        fontStyle: 'classic',
        hero: { backgroundImage: "/lumina-gems-shopify-store.webp", headline: "TIMELESS<br/>ELEGANCE", cta: "Inquire Now" },
        varients: [
            { image: "" },
            { image: "" },
            { image: "" }
          ],
        products: [{ name: "Diamond Ring", price: "$4,500", image: "" }]
      }
    },
    {
      id: "Saha",
      title: "Saha Garden",
      subtitle: "Master Barbers.",
      category: "Service",
    //   longDescription: "Service-oriented layout for professional grooming salons with booking focus.",


    problem: 
    [
        "Saha Garden provides premium landscaping and garden decor. But their old website was just a simple gallery. It did not help them get new clients. There was no way for people to book a service or ask for a price.",
        "The site was also very slow because of large images. People would visit the site, look at one photo, and then leave. They did not know how to contact the business. Because of this, Saha Garden was losing many local leads to their competitors."
    ],
    solution:
    [ 
        "I redesigned the site to be a lead-generation machine. I used a clean, modern layout that highlights their best work. I added a clear 'Our Services' section so people know exactly what they offer.",
        "The most important change was adding a 'Get a Quote' form. Now, customers can easily send a message to ask for a price. I also added a 'Our Story' section to build trust. I optimized all the photos so the site loads very fast on mobile phones. This makes it easy for people to browse their beautiful garden designs."
    ],
    result:
    [
         "The new website is a huge success. The number of people asking for a quote has tripled. Because the site is fast and professional, customers trust Saha Garden more.",
         "They are now getting more local leads than ever before. The business is growing fast, and they are fully booked for the next few months. Saha Garden now has a website that works as hard as they do. It is simple, beautiful, and brings in new business every day."
    ],

      image: "/saha-garden-cover-shopify-store.webp",
      metrics: [{ label: "Bookings", value: "+80%" }, { label: "Retention", value: "92%" }],

      analytics: {
        totalSales: { value: "$12,400", change: "12%", isUp: true },
        sessions: { value: "4,200", change: "8%", isUp: true },
        totalOrders: { value: "154", change: "2%", isUp: false },
        conversionRate: { value: "3.2%", change: "1.5%", isUp: true }
    },

      store: {
        layoutType: 'Saha',
        themeColor: "#111111",
        secondaryColor: "#ffffff",
        fontStyle: 'urban',
        hero: { backgroundImage: "/saha-garden-cover-shopify-store.webp", headline: "SHARP<br/>FINISH", cta: "Book Now" },
        varients: [
            { image: "" },
            { image: "" },
            { image: "" }
          ],
        products: [
          { name: "", price: "$40", desc: "", image: "" },
          { name: "", price: "", desc: "", image: "" }
        ]
      }
    },
    {
        id: "kith-store", // Aapne ab isay restaurant se change kar ke kith-store kar dena hai
        title: "Kith Editorial",
        subtitle: "Foottwear & Lifestyle.",
        category: "Fashion",
        // longDescription: "A high-end editorial commerce experience featuring multi-layered navigation and immersive brand storytelling inspired by Kith NYC.",

        problem: 
        [
            "Kith Editorial had a very cool brand, but their website was not working. They wanted to mix fashion news with an online shop. But the old site was very messy.",
            "Readers would enjoy the articles, but they could not find the shop. If they wanted to buy a pair of shoes from a story, it took too many clicks. The checkout process was slow. People got bored and left the site before buying. The conversion rate was very low because the 'News' and 'Shop' were not connected."
        ],
        solution:
        [ 
            "I designed a new 'Luxury Editorial' layout. I used a clean, black-and-white style. This makes the photos look like a high-end magazine. I made sure the 'Shop' and 'Stories' live together on one page.",
            "I added a 'Shop the Look' feature. Now, people can see a cool outfit in a story and buy it instantly. I also added a very fast 'Slide-out Cart.' This means users don't have to leave the page to check their items. I made the text bold and easy to read. The whole site now feels like a premium fashion book."
        ],
        result: [
            "The results were amazing. People started spending more time on the site. Because the shop is so easy to find, sales went up by 40%.",
            "Readers are now customers. They love the clean look and the fast speed. The brand now looks like a leader in the fashion world. It is a perfect mix of content and commerce. The owner is very happy because the site finally represents their high-end vision."
        ],

        image: "/kith-c-shopify-store.webp",
        metrics: [
          { label: "AOV", value: "$450" }, 
          { label: "Conversion", value: "4.2%" }
        ],

        analytics: {
            totalSales: { value: "$12,400", change: "12%", isUp: true },
            sessions: { value: "4,200", change: "8%", isUp: true },
            totalOrders: { value: "154", change: "2%", isUp: false },
            conversionRate: { value: "3.2%", change: "1.5%", isUp: true }
        },

        store: {
          layoutType: 'luxury',
          themeColor: "#000000",
          secondaryColor: "#ffffff",
          fontStyle: 'serif',
          hero: { 
              backgroundImage: "/kith-ck-shopify-store.webp", 
              headline: "Kith for the <br/> New York Knicks", 
              cta: "Shop Now" 
          },
          varients: [
            { image: "" },
            { image: "" },
            { image: "" }
          ],
          products: [
            { 
              name: "White Sneakers", 
              price: "1700", 
              desc: "", 
              image: "/kith-white-shopify-store.webp" 
            },
            { 
              name: "Brown Canvas", 
              price: "2500", 
              desc: "", 
              image: "/kith-brown-shopify-store.webp" 
            },
            { 
              name: "Navy Boots", 
              price: "1600", 
              desc: "", 
              image: "/kith-neck-shopify-store.webp" 
            },
            { 
              name: "Grey Trainers", 
              price: "4000", 
              desc: "", 
              image: "/kith-rock-shopify-store.webp" 
            }
          ]
        }
      }
];