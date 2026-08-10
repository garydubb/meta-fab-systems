export const blogIntro = {
  kicker: "MetaFab Blog",
  title: "Insights from the Shop Floor",
  body: "Practical guidance on materials, design, and fabrication from the team building it in Ludhiana, Punjab.",
};

export const blogPosts = [
  {
    slug: "choosing-the-right-steel-grade",
    title: "How to Choose the Right Steel Grade for Your Fabrication Project",
    excerpt:
      "Mild steel, stainless steel, or structural steel — the grade you pick affects cost, durability, and how the finished piece performs. Here's how to decide.",
    category: "Materials",
    coverImage: "/images/gallery/bridges-structures.jpg",
    publishedAt: "2026-06-08",
    readTime: "5 min read",
    sections: [
      {
        heading: undefined,
        body: "One of the first questions on any fabrication project is which steel grade to use. It's easy to default to whatever's cheapest or most familiar, but the wrong choice shows up later as premature corrosion, excess weight, or a structure that doesn't meet its load rating.",
      },
      {
        heading: "Start With the Load, Not the Budget",
        body: "Structural steel is engineered for load-bearing applications — shed frameworks, mezzanines, and architectural elevations all need a grade rated for the forces they'll actually carry. Sizing this correctly from the start avoids costly rework once a structural engineer reviews the drawings.",
      },
      {
        heading: "Factor In the Environment",
        body: "Mild steel is cost-effective and easy to weld, but needs a protective coating for outdoor or high-humidity use. Stainless steel costs more upfront but resists corrosion without ongoing maintenance — a better fit for coastal sites, food-grade equipment, or fixtures exposed to constant moisture.",
      },
      {
        heading: "Don't Forget Finish and Fabrication Method",
        body: "The grade you choose also affects how a piece can be finished. Powder coating, galvanizing, and polishing all interact differently with mild steel versus stainless. We factor this in at the CAD stage, before a single cut is made, so the finished piece matches both the engineering brief and the intended look.",
      },
    ],
  },
  {
    slug: "cad-design-mistakes-shop-floor",
    title: "CAD Design Mistakes That Cost You on the Shop Floor",
    excerpt:
      "A model that looks right on screen can still cause delays, rework, or wasted material once it reaches fabrication. These are the mistakes we catch most often.",
    category: "Design",
    coverImage: "/images/gallery/solidworks-3d-design.jpg",
    publishedAt: "2026-06-22",
    readTime: "4 min read",
    sections: [
      {
        heading: undefined,
        body: "CAD design is where most fabrication problems are either prevented or created. A model that renders cleanly in SolidWorks or AutoCAD doesn't automatically translate into a part that's easy — or cheap — to build.",
      },
      {
        heading: "Ignoring Manufacturing Tolerances",
        body: "Designs drawn to theoretical precision without accounting for real-world cutting, welding, and assembly tolerances lead to parts that don't fit on-site. Every drawing we release for fabrication is toleranced for the actual process it'll go through, not just the geometry.",
      },
      {
        heading: "Skipping Fit Checks Between Components",
        body: "On multi-part assemblies, it's common for individual components to be modelled correctly in isolation but not checked against each other. We run interference and fit checks across the full assembly before anything goes to the shop floor, so problems are caught on screen instead of during installation.",
      },
      {
        heading: "Designing Without Talking to the Fabricators",
        body: "The fastest way to save material and labour is to loop in the people doing the welding and cutting before the design is finalised. A small change in a joint or a bend radius can significantly cut fabrication time — but only if it's caught before drawings are locked.",
      },
    ],
  },
  {
    slug: "custom-vs-standard-gates",
    title: "Custom Gates vs Standard Gates: What's Right for Your Property",
    excerpt:
      "Standard gates are faster and cheaper. Custom gates are built to fit. Here's how to know which one actually makes sense for your project.",
    category: "Fabrication",
    coverImage: "/images/gallery/elevation-gates-grills.jpg",
    publishedAt: "2026-07-03",
    readTime: "4 min read",
    sections: [
      {
        heading: undefined,
        body: "Gates and railing are often one of the first things people notice about a property, which makes the standard-versus-custom decision more than just a budget question.",
      },
      {
        heading: "When a Standard Gate Makes Sense",
        body: "For straightforward openings with common dimensions, a standard gate design can be a faster and more economical option — particularly for utility entrances or boundary fencing where appearance is a secondary concern.",
      },
      {
        heading: "When Custom Is Worth It",
        body: "Irregular openings, architectural matching, or added security requirements usually push the decision toward custom fabrication. A gate built to your exact opening avoids the gaps, packing, and awkward fit that come with forcing a standard size into a non-standard space.",
      },
      {
        heading: "Finish Matters as Much as the Frame",
        body: "Whichever route you take, the finish is what determines how the gate holds up. Powder coating gives a durable, corrosion-resistant surface in a colour that matches your property, and it's worth specifying upfront rather than as an afterthought.",
      },
    ],
  },
  {
    slug: "signs-industrial-structure-needs-maintenance",
    title: "5 Signs Your Industrial Structure Needs Maintenance",
    excerpt:
      "Structural steel is durable, but it isn't maintenance-free. These are the early warning signs worth acting on before they become a bigger repair.",
    category: "Maintenance",
    coverImage: "/images/gallery/industrial-machines.jpg",
    publishedAt: "2026-07-17",
    readTime: "3 min read",
    sections: [
      {
        heading: undefined,
        body: "A well-engineered steel structure can last for decades, but only if it's inspected and maintained along the way. Waiting until something fails is almost always more expensive than catching it early.",
      },
      {
        heading: "1. Visible Rust or Coating Breakdown",
        body: "Surface rust or peeling paint is usually the earliest visible sign that a protective coating has failed. Left untreated, it progresses from cosmetic to structural.",
      },
      {
        heading: "2. Unusual Noises Under Load",
        body: "Creaking, popping, or shifting sounds when a structure is under load can indicate loosening connections or fatigue in welded joints — worth a professional inspection rather than a wait-and-see approach.",
      },
      {
        heading: "3–5: Misaligned Framing, Water Pooling, and Loose Fasteners",
        body: "Framing that's visibly out of alignment, water pooling on flat sections instead of draining, and fasteners that have worked loose are all signs that a structure needs attention before the next inspection cycle rather than at it.",
      },
    ],
  },
  {
    slug: "fabrication-process-explained",
    title: "The Fabrication Process Explained: From CAD to Installation",
    excerpt:
      "A look at what actually happens between a first sketch and a finished, installed structure — and why keeping it all in-house changes the outcome.",
    category: "Process",
    coverImage: "/images/gallery/custom-fabrication.jpg",
    publishedAt: "2026-07-30",
    readTime: "5 min read",
    sections: [
      {
        heading: undefined,
        body: "Fabrication projects move through several distinct stages before they're finished — understanding them helps set realistic expectations for timeline and cost.",
      },
      {
        heading: "1. CAD Design & Modelling",
        body: "Every project starts with a 3D model, toleranced and checked for manufacturability before fabrication begins. This is where fit, load, and finish decisions all get made.",
      },
      {
        heading: "2. Cutting, Forming & Welding",
        body: "Once drawings are approved, material is cut and formed to spec, then welded by our in-house team. Working across mild steel, stainless steel, and aluminium means we can move between material types without handing work off to a separate vendor.",
      },
      {
        heading: "3. Finishing",
        body: "Powder coating, galvanizing, or polishing is applied based on the environment the piece will live in — a step that's planned at the design stage, not decided at the end.",
      },
      {
        heading: "4. Installation & Erection",
        body: "The same team that designed and built the piece handles on-site installation, so nothing gets lost in translation between the drawing and the finished install. That continuity is the main reason we keep the whole process in-house.",
      },
    ],
  },
] as const;
