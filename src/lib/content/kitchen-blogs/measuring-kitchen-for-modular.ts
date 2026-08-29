export type KitchenBlogSection = { heading?: string; body: string[] };
export type KitchenBlogContent = {
  sections: KitchenBlogSection[];
  faqs: { question: string; answer: string }[];
};

export const content: KitchenBlogContent = {
  sections: [
    {
      heading: "How to Measure Your Kitchen for Modular Cabinets",
      body: [
        "Accurate measurements are the single most important input for a well-fitting modular kitchen. Even a 10 mm error can result in gaps, misaligned doors, or modules that simply do not fit. This guide teaches you how to measure your kitchen like a professional — or at least how to verify the measurements your vendor takes.",
        "Whether you are renovating an existing kitchen or fitting out a new flat in Delhi NCR, these steps will ensure your modular cabinets fit perfectly the first time.",
      ],
    },
    {
      heading: "Tools You Will Need",
      body: [
        "A 5-metre steel tape measure (not a cloth tape — cloth stretches and gives inaccurate readings). A laser distance meter if available (highly recommended for long walls). A spirit level (at least 60 cm). A pencil and notepad or a phone camera for sketching. A step stool to measure upper reaches safely.",
        "If you do not own a laser meter, a good steel tape will suffice for kitchens under 12 feet in any direction. For larger spaces or very precise work, a laser meter eliminates human error.",
      ],
    },
    {
      heading: "Step 1: Draw a Rough Floor Plan",
      body: [
        "Before taking any measurements, sketch a bird's-eye view of your kitchen on paper. Mark the entry door, windows, and the approximate location of the gas pipeline, water inlet, drain outlet, and electrical switchboard. This sketch becomes your measurement map — you will write dimensions directly onto it.",
        "Label each wall (Wall A, Wall B, Wall C, etc.) to keep things organised. Indicate which walls will have cabinets and which are open.",
      ],
    },
    {
      heading: "Step 2: Measure Wall Lengths",
      body: [
        "Measure each wall length at three heights: 100 mm from the floor, 900 mm from the floor (countertop height), and 2100 mm from the floor (wall cabinet zone). Indian walls are rarely perfectly plumb or parallel, so these three readings will reveal any tapering.",
        "Record the smallest of the three readings for each wall — your cabinet modules will be designed to this dimension to guarantee they fit. Fillers or scribing strips will cover any gaps caused by walls that bow outward.",
        "Measure wall-to-wall (inside face to inside face), not skirting-to-skirting. Remove any existing skirting tiles before measuring if they interfere with the tape.",
      ],
    },
    {
      heading: "Step 3: Measure Floor to Ceiling Height",
      body: [
        "Measure the floor-to-ceiling height at all four corners of the kitchen and at the centre. Note the lowest reading — this determines the maximum height of your tall cabinets. In most Delhi NCR apartments, ceiling height is between 2700 mm and 3000 mm (9 to 10 feet).",
        "If there is a beam running across the ceiling, measure its depth (how far it drops below the ceiling) and its position. Beams are the number one reason modular cabinets need to be customised in Indian kitchens — never ignore them.",
      ],
    },
    {
      heading: "Step 4: Mark Windows, Doors, and Openings",
      body: [
        "For each window, measure its width, height, distance from the floor (sill height), distance from the ceiling, and distance from each adjacent wall. The sill height determines whether you can run a countertop below the window — standard countertop height in India is 850–900 mm, and if the sill is above this, you can fit base cabinets below.",
        "For the kitchen entry door, measure the door width, height, and the distance from each side wall. Ensure there is enough clearance for cabinet doors to open without hitting the entry door.",
      ],
    },
    {
      heading: "Step 5: Mark Utility Points",
      body: [
        "Record the exact position (distance from floor and from nearest wall) of the following: gas inlet pipe, water inlet pipe, drain outlet, geyser inlet/outlet if inside the kitchen, exhaust fan opening or chimney duct, electrical sockets, switches, and MCB box.",
        "These utility points dictate where your sink, hob, and chimney must go. Moving plumbing and gas is expensive, so most modular kitchen designs work around existing utility locations wherever possible.",
      ],
    },
    {
      heading: "Standard Cabinet Dimensions in India",
      body: [
        "Base cabinet height (including legs): 850–900 mm. Base cabinet depth: 550–600 mm. Countertop overhang: 20–25 mm beyond cabinet face. Wall cabinet height: 600–720 mm. Wall cabinet depth: 300–350 mm. Gap between countertop and wall cabinet bottom: 450–600 mm. Tall unit height: 2100–2400 mm (adjusted to ceiling height minus beam depth if applicable).",
        "These are industry-standard dimensions that accommodate Indian cooking ergonomics. However, if the primary cook is significantly taller or shorter than average, countertop height can be adjusted by plus or minus 50 mm for comfort.",
      ],
    },
    {
      heading: "Common Measurement Mistakes to Avoid",
      body: [
        "Not accounting for beams: Beams can reduce usable height by 200–450 mm. If you ignore them, wall cabinets or tall units will not fit. Always measure beam depth and width.",
        "Measuring over existing tiles without checking if they will be replaced: If the kitchen floor is being re-tiled, the finished floor level may change by 10–20 mm, affecting base cabinet heights.",
        "Ignoring uneven walls: A wall that bows inward by 15 mm at one point will cause a visible gap behind the countertop. Measure at multiple heights to catch this.",
        "Forgetting to note which way doors and windows open: An inward-opening window can collide with an upper cabinet door. Record the swing direction of every opening.",
        "Not measuring the entry path: Your modular cabinet modules need to physically enter the kitchen. Measure corridor widths, door frame sizes, and stairwell turns if you live in an upper-floor apartment. Modules wider than 600 mm may not fit through narrow passages.",
      ],
    },
    {
      heading: "When to Get Professional Help",
      body: [
        "If you are not confident in your measurements, or if your kitchen has complex geometry (multiple beams, angled walls, columns), a professional site survey is essential. Errors at the measurement stage cascade into manufacturing — and fixing a wrongly sized module costs time and money.",
        'FurniRevive offers a free professional site measurement and 3D design consultation for all kitchen projects in Delhi NCR. <a href="/book">Book your free measurement visit today</a> and let our team handle the precision work while you focus on choosing your dream design.',
      ],
    },
  ],
  faqs: [
    {
      question: "Can I measure my kitchen myself or should I get a professional?",
      answer:
        "You can absolutely measure it yourself using a steel tape measure if you follow the steps in this guide carefully. However, for complex kitchens with beams, columns, or angled walls, a professional laser measurement ensures zero errors. FurniRevive offers free site measurements across Delhi NCR.",
    },
    {
      question: "What is the standard countertop height for Indian kitchens?",
      answer:
        "The standard countertop height in India is 850–900 mm (approximately 34–36 inches) from the finished floor. This can be adjusted by plus or minus 50 mm based on the primary cook's height for ergonomic comfort.",
    },
    {
      question: "How do I account for beams when measuring?",
      answer:
        "Measure the beam's depth (distance from ceiling to beam bottom), width (how far it extends from the wall), and its exact position along the wall. Share these dimensions with your kitchen designer so they can plan wall cabinets and tall units to fit below or around the beam.",
    },
    {
      question: "Should I measure before or after floor tiling is done?",
      answer:
        "Ideally, measure after floor tiling is complete so you have the accurate finished floor level. If measuring before tiling, add the expected tile thickness (8–12 mm for vitrified tiles) to your floor-level calculations.",
    },
    {
      question: "What if my walls are not straight?",
      answer:
        "Uneven walls are extremely common in Indian construction. Measure at multiple heights to identify the variance. Your modular kitchen designer will use filler strips and scribing techniques to ensure a flush, gap-free fit against irregular surfaces.",
    },
    {
      question: "How much space should I leave between the countertop and wall cabinets?",
      answer:
        "The standard gap is 450–600 mm. A 600 mm gap works well if you plan to mount a microwave or use tall appliances on the countertop. A 450 mm gap maximises upper storage but limits countertop appliance height.",
    },
    {
      question: "Do I need to measure the path from my front door to the kitchen?",
      answer:
        "Yes. Modular kitchen panels and assembled modules need to physically enter your kitchen. Measure corridor widths, doorframe sizes, elevator dimensions, and stairwell turns. Inform your vendor of any access constraints so they can plan module sizes accordingly.",
    },
  ],
};

export default content;
