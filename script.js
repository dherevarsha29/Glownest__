/**
 * GlowNest Skincare & Beauty E-Commerce Engine
 * Complete client-side state management, LocalStorage synchronization,
 * CRUD product operations, dynamic multi-filtering, search, cart, wishlist,
 * coupon system, checkout flow, and content marketing readers.
 */

// Initial 20 High-Quality Curated Sample Products
const DEFAULT_PRODUCTS = [
  {
    id: 1,
    name: "GlowNest Vitamin C Brightening Serum",
    category: "Skincare",
    subCategory: "Serums",
    originalPrice: 599,
    discountPercent: 17,
    discountedPrice: 499,
    rating: 4.8,
    reviewsCount: 184,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
    description: "An antioxidant-rich brightening serum with 10% Ethyl Ascorbic Acid, Ferulic Acid, and Hyaluronic Acid to fade dark spots and boost collagen.",
    benefits: "Fades pigmentation, boosts luminosity, fights free radical damage, smooths texture",
    ingredients: "10% Pure Vitamin C, Hyaluronic Acid, Ferulic Acid, Centella Asiatica, Aloe Vera Extract",
    skinType: "All Skin Types",
    howToUse: "Apply 3-4 drops every morning on clean skin before moisturizer and SPF.",
    stock: 85,
    isBestSeller: true,
    isOffer: true
  },
  {
    id: 2,
    name: "GlowNest 10% Niacinamide Clarifying Serum",
    category: "Skincare",
    subCategory: "Serums",
    originalPrice: 549,
    discountPercent: 10,
    discountedPrice: 494,
    rating: 4.9,
    reviewsCount: 220,
    image: "https://images.unsplash.com/photo-1608248597359-216956272db9?auto=format&fit=crop&w=600&q=80",
    description: "Formulated with pure Niacinamide and 1% Zinc PCA to minimize enlarged pores, control excess oil, and reduce blemishes.",
    benefits: "Controls excess sebum, tightens pores, calms redness, strengthens lipid barrier",
    ingredients: "10% Niacinamide, 1% Zinc PCA, Green Tea Extract, Allantoin",
    skinType: "Oily / Acne-Prone",
    howToUse: "Apply 2-3 drops morning and evening after cleansing.",
    stock: 60,
    isBestSeller: true,
    isOffer: false
  },
  {
    id: 3,
    name: "GlowNest Multi-Molecular Hyaluronic Acid Serum",
    category: "Skincare",
    subCategory: "Serums",
    originalPrice: 650,
    discountPercent: 15,
    discountedPrice: 552,
    rating: 4.7,
    reviewsCount: 140,
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80",
    description: "An intense moisture-quenching serum with 4 molecular weights of Hyaluronic Acid that penetrate deeply to plump and hydrate.",
    benefits: "Instant plumping hydration, diminishes fine dry lines, restores bounce",
    ingredients: "4D Hyaluronic Acid, Vitamin B5 (Panthenol), Rose Water, Glycerin",
    skinType: "Dry / Dehydrated",
    howToUse: "Apply onto slightly damp skin and lock in immediately with moisturizer.",
    stock: 45,
    isBestSeller: false,
    isOffer: true
  },
  {
    id: 4,
    name: "GlowNest Gentle Oat & Honey Face Wash",
    category: "Skincare",
    subCategory: "Face Wash",
    originalPrice: 399,
    discountPercent: 15,
    discountedPrice: 339,
    rating: 4.8,
    reviewsCount: 95,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
    description: "A non-stripping, pH-balanced creamy cleanser infused with Colloidal Oat and raw organic Honey that melts away impurities gently.",
    benefits: "Cleanses without dryness, soothes irritation, maintains natural moisture barrier",
    ingredients: "Colloidal Oatmeal, Organic Honey, Chamomile Flower Extract, Sweet Almond Oil",
    skinType: "Sensitive",
    howToUse: "Massage a small amount onto wet face in circular motions. Rinse with lukewarm water.",
    stock: 90,
    isBestSeller: true,
    isOffer: false
  },
  {
    id: 5,
    name: "GlowNest Tea Tree Foaming Cleanser",
    category: "Skincare",
    subCategory: "Cleansers",
    originalPrice: 449,
    discountPercent: 12,
    discountedPrice: 395,
    rating: 4.6,
    reviewsCount: 110,
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&q=80",
    description: "An airy micro-foam cleanser packed with Australian Tea Tree and Salicylic Acid (BHA) to unclog pores and prevent breakouts.",
    benefits: "Removes deep impurities, combats acne-causing bacteria, refreshing sensation",
    ingredients: "Australian Tea Tree Leaf Oil, 0.5% Salicylic Acid, Neem Extract, Peppermint Water",
    skinType: "Oily / Acne-Prone",
    howToUse: "Pump 1-2 clouds of foam, massage over wet face, and rinse thoroughly.",
    stock: 70,
    isBestSeller: false,
    isOffer: false
  },
  {
    id: 6,
    name: "GlowNest Ceramide Hydrating Barrier Cream",
    category: "Skincare",
    subCategory: "Moisturizers",
    originalPrice: 699,
    discountPercent: 20,
    discountedPrice: 559,
    rating: 4.9,
    reviewsCount: 310,
    image: "https://images.unsplash.com/photo-1512290900672-1f5be50702d7?auto=format&fit=crop&w=600&q=80",
    description: "A nourishing yet fast-absorbing cream enriched with 5 essential Ceramides, Fatty Acids, and Cholesterol to heal compromised barriers.",
    benefits: "Locks in 72-hour moisture, calms peeling & irritation, seals skin barrier",
    ingredients: "Ceramides Complex (NP, AP, EOP), Plant Squalane, Shea Butter, Centella",
    skinType: "Dry / Dehydrated",
    howToUse: "Smooth over face and neck as the final skincare step morning and evening.",
    stock: 55,
    isBestSeller: true,
    isOffer: true
  },
  {
    id: 7,
    name: "GlowNest Water-Gel Oil-Free Moisturizer",
    category: "Skincare",
    subCategory: "Moisturizers",
    originalPrice: 499,
    discountPercent: 10,
    discountedPrice: 449,
    rating: 4.7,
    reviewsCount: 165,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80",
    description: "Ultra-lightweight cooling gel formulated with Hyaluronic Acid and Willow Bark that hydrates intensely without leaving a greasy sheen.",
    benefits: "Weightless matte finish, zero clogging, cooling soothing hydration",
    ingredients: "Sodium Hyaluronate, Willow Bark Extract, Cucumber Juice, Niacinamide",
    skinType: "Normal to Combination",
    howToUse: "Apply generously on clean face morning and night.",
    stock: 80,
    isBestSeller: false,
    isOffer: false
  },
  {
    id: 8,
    name: "GlowNest Mineral SPF 50 PA++++ Sunscreen",
    category: "Skincare",
    subCategory: "Sunscreen",
    originalPrice: 599,
    discountPercent: 15,
    discountedPrice: 509,
    rating: 4.8,
    reviewsCount: 240,
    image: "https://images.unsplash.com/photo-1567928815104-b631d86d52ee?auto=format&fit=crop&w=600&q=80",
    description: "100% mineral sunscreen with Non-Nano Zinc Oxide providing broad-spectrum UVA/UVB and Blue Light protection without white cast.",
    benefits: "Broad spectrum SPF 50, zero chalky residue, water-resistant for 80 mins",
    ingredients: "Non-Nano Zinc Oxide 18%, Titanium Dioxide, Vitamin E, Argan Oil",
    skinType: "Sensitive",
    howToUse: "Apply two finger lengths over face and neck 15 minutes before sun exposure.",
    stock: 100,
    isBestSeller: true,
    isOffer: true
  },
  {
    id: 9,
    name: "GlowNest Ultra-Light Sunscreen Gel SPF 50",
    category: "Skincare",
    subCategory: "Sunscreen",
    originalPrice: 549,
    discountPercent: 10,
    discountedPrice: 494,
    rating: 4.9,
    reviewsCount: 380,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
    description: "A fast-absorbing gel sunscreen that feels like water on application. Leaves no sticky layer and serves as a priming base under makeup.",
    benefits: "Invisible finish, non-greasy, sweat-resistant, no eye stinging",
    ingredients: "Modern UV Filters (Tinosorb M, Uvinul A Plus), Centella, Hyaluronic Acid",
    skinType: "All Skin Types",
    howToUse: "Apply generously every morning and reapply every 2-3 hours during direct sun exposure.",
    stock: 120,
    isBestSeller: true,
    isOffer: false
  },
  {
    id: 10,
    name: "GlowNest French Rose & Petal Glow Mask",
    category: "Skincare",
    subCategory: "Face Masks",
    originalPrice: 499,
    discountPercent: 20,
    discountedPrice: 399,
    rating: 4.6,
    reviewsCount: 88,
    image: "https://images.unsplash.com/photo-1512290900672-1f5be50702d7?auto=format&fit=crop&w=600&q=80",
    description: "A luxurious jelly mask infused with real Damask Rose petals and Aloe to revive dull skin and impart an immediate dewy glow.",
    benefits: "Instant glass-skin radiance, reduces redness, deeply quenches skin",
    ingredients: "Damask Rose Hydrosol, Real Rose Petals, Aloe Barbadensis, Glycerin",
    skinType: "All Skin Types",
    howToUse: "Smooth over clean skin, leave on for 15 minutes, then rinse with cool water.",
    stock: 40,
    isBestSeller: false,
    isOffer: true
  },
  {
    id: 11,
    name: "GlowNest Pink Clay Detox & Pore Mask",
    category: "Skincare",
    subCategory: "Face Masks",
    originalPrice: 549,
    discountPercent: 15,
    discountedPrice: 466,
    rating: 4.7,
    reviewsCount: 104,
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&q=80",
    description: "Formulated with Australian Pink Clay and Witch Hazel to draw out impurities and tighten pores without stripping vital moisture.",
    benefits: "Deep detox, refined pores, silky soft touch, gentle on sensitive skin",
    ingredients: "Australian Pink Kaolin Clay, Witch Hazel, Rosehip Seed Oil, Bentonite",
    skinType: "Normal to Combination",
    howToUse: "Apply an even layer with brush, let dry for 10 minutes, and gently wash off.",
    stock: 50,
    isBestSeller: false,
    isOffer: false
  },
  {
    id: 12,
    name: "GlowNest Tinted Peptide Lip Balm",
    category: "Makeup",
    subCategory: "Lip Balm",
    originalPrice: 299,
    discountPercent: 10,
    discountedPrice: 269,
    rating: 4.8,
    reviewsCount: 275,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
    description: "An ultra-nourishing buttery balm packed with Shea Butter and Peptides that softens chapped lips and delivers a sheer pink tint.",
    benefits: "Repairs dry lips, plumps with peptides, long-lasting dewy sheen",
    ingredients: "Shea Butter, Volulip Peptides, Jojoba Oil, Vitamin E, Beetroot Extract",
    skinType: "All Skin Types",
    howToUse: "Swipe directly over lips throughout the day or layer thickly as an overnight lip mask.",
    stock: 150,
    isBestSeller: true,
    isOffer: true
  },
  {
    id: 13,
    name: "GlowNest High-Shine Glassy Lip Gloss",
    category: "Makeup",
    subCategory: "Lip Gloss",
    originalPrice: 399,
    discountPercent: 15,
    discountedPrice: 339,
    rating: 4.7,
    reviewsCount: 130,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
    description: "Non-sticky, mirror-like gloss enriched with Hyaluronic Acid and Coconut Oil for maximum dimension and juicy hydration.",
    benefits: "Crystal shine, non-tacky feel, hydrating cushion finish",
    ingredients: "Hyaluronic Acid spheres, Coconut Oil, Vitamin E, Jojoba Esters",
    skinType: "All Skin Types",
    howToUse: "Glide wand over bare lips or over your favorite lipstick for intense glass shine.",
    stock: 90,
    isBestSeller: false,
    isOffer: false
  },
  {
    id: 14,
    name: "GlowNest Lash Lift & Lengthening Mascara",
    category: "Makeup",
    subCategory: "Mascara",
    originalPrice: 499,
    discountPercent: 20,
    discountedPrice: 399,
    rating: 4.6,
    reviewsCount: 92,
    image: "https://images.unsplash.com/photo-1512290900672-1f5be50702d7?auto=format&fit=crop&w=600&q=80",
    description: "A smudge-proof clean tubing mascara infused with Biotin and Castor Oil that lengthens and holds a curl all day without clumping.",
    benefits: "Clump-free length, smudge-proof 16hr wear, removes easily with warm water",
    ingredients: "Biotin, Castor Seed Oil, Carnauba Wax, Acacia Senegal Gum",
    skinType: "All Skin Types",
    howToUse: "Wiggle brush from the base to the tips of your lashes. Apply 2 coats for dramatic drama.",
    stock: 65,
    isBestSeller: false,
    isOffer: false
  },
  {
    id: 15,
    name: "GlowNest Rosemary & Biotin Hair Serum",
    category: "Hair Care",
    subCategory: "Hair Serum",
    originalPrice: 699,
    discountPercent: 25,
    discountedPrice: 524,
    rating: 4.9,
    reviewsCount: 290,
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=600&q=80",
    description: "A potent scalp and hair follicle revitalizer with Rosemary Essential Oil, Redensyl, and Biotin to encourage density and reduce hair fall.",
    benefits: "Stimulates scalp circulation, strengthens roots, adds glossy bounce",
    ingredients: "Rosemary Essential Oil, 3% Redensyl, Biotin, Peppermint Leaf Oil, Bhringraj",
    skinType: "All Skin Types",
    howToUse: "Apply 4-5 drops directly onto the scalp daily and gently massage with fingertips.",
    stock: 75,
    isBestSeller: true,
    isOffer: true
  },
  {
    id: 16,
    name: "GlowNest Keratin & Argan Nourishing Shampoo",
    category: "Hair Care",
    subCategory: "Shampoo",
    originalPrice: 499,
    discountPercent: 10,
    discountedPrice: 449,
    rating: 4.7,
    reviewsCount: 115,
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&q=80",
    description: "Sulfate-free replenishing shampoo infused with pure Moroccan Argan Oil and Plant Keratin that smoothens frizz and repairs split ends.",
    benefits: "Gently cleanses scalp, eliminates frizzy flyaways, safe for color-treated hair",
    ingredients: "Hydrolyzed Plant Keratin, Organic Moroccan Argan Oil, Coconut Cleansing Base",
    skinType: "All Skin Types",
    howToUse: "Massage into wet scalp to build lather, then rinse thoroughly. Follow with conditioner.",
    stock: 85,
    isBestSeller: false,
    isOffer: false
  },
  {
    id: 17,
    name: "GlowNest Whipped Shea & Vanilla Body Lotion",
    category: "Body Care",
    subCategory: "Body Lotion",
    originalPrice: 449,
    discountPercent: 12,
    discountedPrice: 395,
    rating: 4.8,
    reviewsCount: 160,
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=600&q=80",
    description: "A rich, whipped moisturizing body lotion infused with raw Shea Butter, Cocoa Butter, and warm French Vanilla that melts instantly.",
    benefits: "48-hour velvety hydration, non-sticky feel, warm cozy comforting scent",
    ingredients: "Raw African Shea Butter, Cocoa Butter, Sweet Almond Oil, Natural Vanilla Bean",
    skinType: "Dry / Dehydrated",
    howToUse: "Massage all over body post-shower while skin is slightly damp.",
    stock: 95,
    isBestSeller: false,
    isOffer: false
  },
  {
    id: 18,
    name: "GlowNest Himalayan Pink Salt Body Scrub",
    category: "Body Care",
    subCategory: "Body Scrub",
    originalPrice: 549,
    discountPercent: 18,
    discountedPrice: 450,
    rating: 4.8,
    reviewsCount: 125,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80",
    description: "An invigorating botanical body polish packed with mineral-rich Himalayan Salt crystals and sweet Orange Oil to buff away dead cells.",
    benefits: "Smooths strawberry legs, stimulates skin renewal, leaves silky oil sheen",
    ingredients: "Himalayan Pink Salt, Sweet Orange Peel Oil, Jojoba Seed Oil, Vitamin E",
    skinType: "All Skin Types",
    howToUse: "Gently buff onto damp skin in circular motions 2 times a week. Rinse well.",
    stock: 60,
    isBestSeller: false,
    isOffer: true
  },
  {
    id: 19,
    name: "GlowNest 3-Step Daily Skincare Kit",
    category: "Combos",
    subCategory: "Daily Skincare Kit",
    originalPrice: 1499,
    discountPercent: 25,
    discountedPrice: 1124,
    rating: 4.9,
    reviewsCount: 420,
    image: "https://images.unsplash.com/photo-1608248597359-216956272db9?auto=format&fit=crop&w=600&q=80",
    description: "The complete everyday holy grail trifecta: Gentle Face Wash (100ml) + Vitamin C Serum (30ml) + Invisible SPF 50 Gel (50g) in a luxury pouch.",
    benefits: "Complete daily defense, saves ₹375 compared to individual items, great gift",
    ingredients: "Colloidal Oat, 10% Vitamin C, Broad Spectrum UV Filters",
    skinType: "All Skin Types",
    howToUse: "Step 1: Cleanse with Face Wash. Step 2: Brighten with Serum. Step 3: Protect with SPF 50.",
    stock: 40,
    isBestSeller: true,
    isOffer: true
  },
  {
    id: 20,
    name: "GlowNest Barrier Repair Night Care Kit",
    category: "Combos",
    subCategory: "Night Care Kit",
    originalPrice: 1699,
    discountPercent: 30,
    discountedPrice: 1189,
    rating: 4.9,
    reviewsCount: 340,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
    description: "Restorative night regimen comprising Multi-Molecular Hyaluronic Acid Serum (30ml) + Ceramide Barrier Cream (50g) + Peptide Lip Balm.",
    benefits: "Wakes up to supple glass skin, heals damaged moisture barrier, saves ₹510",
    ingredients: "4D Hyaluronic Acid, 5 Essential Ceramides, Shea Butter, Peptides",
    skinType: "Dry / Dehydrated",
    howToUse: "Apply serum onto damp skin, lock in with Ceramide cream, and seal lips with balm before bed.",
    stock: 35,
    isBestSeller: true,
    isOffer: true
  }
];

// Content Marketing Articles Data (Requirement 16)
const BEAUTY_ARTICLES = [
  {
    id: 1,
    title: "5 Steps for a Simple Skincare Routine",
    category: "Routine 101",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
    content: `
      <p>Skincare shouldn't feel like a chemistry exam. With hundreds of viral trends circulating daily, it's easy to assume you need a 10-step routine. The truth? Your skin thrives on consistency, balance, and basic physiological support.</p>
      
      <h4>Step 1: Gentle Cleansing</h4>
      <p>Use a sulfate-free, pH-balanced cleanser (like our Oat & Honey Face Wash) to remove dirt, oil, and sweat without disturbing your skin's protective acid mantle.</p>

      <h4>Step 2: Active Treatment (Serum)</h4>
      <p>Target your primary skin priority. In the morning, an antioxidant serum like Vitamin C shields against environmental pollution. At night, opt for Niacinamide or Hyaluronic Acid.</p>

      <h4>Step 3: Moisture Seal</h4>
      <p>Even oily skin requires hydration! A lightweight gel or ceramide cream prevents transepidermal water loss and maintains elasticity.</p>

      <h4>Step 4: Broad Spectrum Sunscreen</h4>
      <p>Never skip SPF! UV rays are responsible for up to 80% of premature fine lines and pigmentation. Apply two finger lengths every morning.</p>

      <h4>Step 5: Mindful Consistency</h4>
      <p>Give products at least 4 to 6 weeks to show measurable cellular renewal before switching.</p>
    `
  },
  {
    id: 2,
    title: "Why Sunscreen is Non-Negotiable Every Day",
    category: "Sun Protection",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1567928815104-b631d86d52ee?auto=format&fit=crop&w=800&q=80",
    content: `
      <p>If you only invest in one skincare product for the rest of your life, make it sunscreen. UVA and UVB rays penetrate clouds, windows, and car windshields all 365 days of the year.</p>

      <h4>UVA vs UVB: The Difference</h4>
      <p><strong>UVA rays</strong> cause Aging and deep collagen degradation. <strong>UVB rays</strong> cause surface Burning and sunburns. Broad-spectrum protection shields against both.</p>

      <h4>How to Choose the Right Texture</h4>
      <p>If you have acne-prone skin, look for water-gel formulations that don't clog pores. For sensitive or reactive skin, non-nano mineral zinc formulas provide physical reflection without sting.</p>

      <h4>The 2-Finger Rule</h4>
      <p>Dispense two full lines of sunscreen along the length of your index and middle fingers. This provides the exact recommended 2mg/cm² coverage for your face and neck.</p>
    `
  },
  {
    id: 3,
    title: "How to Choose the Right Serum for Your Skin",
    category: "Actives Guide",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
    content: `
      <p>Serums are the powerhouses of any routine because their small molecular weight allows them to deliver concentrated active ingredients straight into deeper layers of the epidermis.</p>

      <h4>Vitamin C: For Dullness & Pigmentation</h4>
      <p>Vitamin C is a gold-standard antioxidant that suppresses melanin overproduction and boosts skin luminosity. Best used during morning hours under SPF.</p>

      <h4>Niacinamide (Vitamin B3): For Pores & Blemishes</h4>
      <p>Niacinamide regulates sebum production, soothes active redness, and rebuilds healthy lipid proteins. Suitable for all skin types, especially oily/combination.</p>

      <h4>Hyaluronic Acid: For Dryness & Dehydration</h4>
      <p>A humectant capable of holding 1000x its weight in water. Always apply Hyaluronic Acid on slightly damp skin to draw moisture inward.</p>
    `
  },
  {
    id: 4,
    title: "Morning vs. Night Skincare: What Your Skin Needs",
    category: "Daily Timing",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80",
    content: `
      <p>Your skin follows a natural circadian rhythm. During daytime, it remains in <strong>defense mode</strong> against UV, blue light, and urban smog. At night, it shifts into <strong>repair and cellular renewal mode</strong>.</p>

      <h4>Morning Routine: Protect</h4>
      <ul>
        <li>Gentle water rinse or mild cleanse</li>
        <li>Antioxidant serum (Vitamin C)</li>
        <li>Lightweight moisturizer</li>
        <li>SPF 50 Sunscreen</li>
      </ul>

      <h4>Night Routine: Repair</h4>
      <ul>
        <li>Double cleanse if wearing makeup or heavy SPF</li>
        <li>Hydrating or barrier-repairing active (Niacinamide, Peptides, Ceramides)</li>
        <li>Nourishing barrier recovery cream</li>
        <li>Overnight lip conditioning treatment</li>
      </ul>
    `
  },
  {
    id: 5,
    title: "Top 7 Skincare Mistakes You Might Be Making",
    category: "Expert Advice",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1512290900672-1f5be50702d7?auto=format&fit=crop&w=800&q=80",
    content: `
      <p>Even with the best products, common routine mistakes can compromise your skin barrier and lead to persistent breakouts or sensitivity. Here are the top errors to eliminate today:</p>

      <ol>
        <li><strong>Over-exfoliating:</strong> Using acids or physical scrubs every day strips essential lipids. Limit exfoliation to 1-2 times weekly.</li>
        <li><strong>Skipping moisturizer if you're oily:</strong> Depriving oily skin of hydration causes it to overcompensate by producing more grease.</li>
        <li><strong>Applying Hyaluronic Acid on dry skin:</strong> Without moisture in the air or skin, HA can pull water out of deeper layers.</li>
        <li><strong>Not reapplying sunscreen:</strong> Chemical and physical filters degrade with sweat, sebum, and sun exposure after 2-3 hours.</li>
        <li><strong>Testing multiple new products simultaneously:</strong> Introduce one formula at a time over 2 weeks to identify reactions.</li>
        <li><strong>Using hot water on the face:</strong> Lukewarm water prevents dilated capillaries and barrier drying.</li>
        <li><strong>Touching your face throughout the day:</strong> Transferring bacteria from phones and hands frequently triggers jawline breakouts.</li>
      </ol>
    `
  }
];

// Coupon Codes Directory (Requirement 23)
const VALID_COUPONS = {
  "GLOW10": { discountPercent: 10, label: "10% OFF Special" },
  "WELCOME15": { discountPercent: 15, label: "15% OFF Student Welcome" }
};

// ==========================================================================
// GlowNest Application Controller & State
// ==========================================================================

const GlowNestApp = {
  // Application State
  state: {
    products: [],
    cart: [],       // Array of { id, qty }
    wishlist: [],   // Array of product IDs
    activeCategory: "All",
    subCategory: "All",
    skinType: "All",
    maxPrice: 2500,
    sortBy: "popular",
    searchQuery: "",
    appliedCoupon: null, // { code, discountPercent }
    productToDeleteId: null,
    orders: []
  },

  // Initialize App
  init() {
    this.loadStateFromStorage();
    this.bindEvents();
    this.populateSubCategoriesDropdown();
    this.renderBestSellers();
    this.renderProducts();
    this.updateCartUI();
    this.updateWishlistUI();
    this.setupAutoDiscountCalculator();
  },

  // 1. LocalStorage Management (Requirement 25)
  loadStateFromStorage() {
    // Products
    const savedProducts = localStorage.getItem("glownest_products");
    if (savedProducts) {
      try {
        this.state.products = JSON.parse(savedProducts);
      } catch (e) {
        this.state.products = [...DEFAULT_PRODUCTS];
      }
    } else {
      this.state.products = [...DEFAULT_PRODUCTS];
      this.saveProductsToStorage();
    }

    // Cart
    const savedCart = localStorage.getItem("glownest_cart");
    if (savedCart) {
      try {
        this.state.cart = JSON.parse(savedCart);
      } catch (e) {
        this.state.cart = [];
      }
    }

    // Wishlist
    const savedWishlist = localStorage.getItem("glownest_wishlist");
    if (savedWishlist) {
      try {
        this.state.wishlist = JSON.parse(savedWishlist);
      } catch (e) {
        this.state.wishlist = [];
      }
    }

    // Orders
    const savedOrders = localStorage.getItem("glownest_orders");
    if (savedOrders) {
      try {
        this.state.orders = JSON.parse(savedOrders);
      } catch (e) {
        this.state.orders = [];
      }
    }
  },

  saveProductsToStorage() {
    localStorage.setItem("glownest_products", JSON.stringify(this.state.products));
  },

  saveCartToStorage() {
    localStorage.setItem("glownest_cart", JSON.stringify(this.state.cart));
  },

  saveWishlistToStorage() {
    localStorage.setItem("glownest_wishlist", JSON.stringify(this.state.wishlist));
  },

  saveOrdersToStorage() {
    localStorage.setItem("glownest_orders", JSON.stringify(this.state.orders));
  },

  resetDemoData() {
    if (confirm("Are you sure you want to reset all products back to the default 20 sample items?")) {
      this.state.products = JSON.parse(JSON.stringify(DEFAULT_PRODUCTS));
      this.saveProductsToStorage();
      this.populateSubCategoriesDropdown();
      this.renderBestSellers();
      this.renderProducts();
      this.showToast("Catalog reset to default 20 demo products!", "success");
    }
  },

  // 2. DOM Event Binding
  bindEvents() {
    // Sticky header shadow
    window.addEventListener("scroll", () => {
      const navbar = document.getElementById("navbar");
      if (window.scrollY > 20) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });

    // Mobile Hamburger
    const mobileBtn = document.getElementById("mobileMenuBtn");
    const navMenu = document.getElementById("navMenu");
    if (mobileBtn && navMenu) {
      mobileBtn.addEventListener("click", () => {
        navMenu.classList.toggle("mobile-active");
      });
      // Close menu when clicking nav links
      document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => navMenu.classList.remove("mobile-active"));
      });
    }

    // Featured Categories Click Handlers (Requirement 3)
    document.querySelectorAll(".category-card").forEach(card => {
      card.addEventListener("click", (e) => {
        const catName = card.getAttribute("data-category");
        this.filterByFeaturedCategory(catName);
      });
    });

    // Main Category Pills Filter (Requirement 11)
    document.querySelectorAll(".filter-pill").forEach(pill => {
      pill.addEventListener("click", (e) => {
        document.querySelectorAll(".filter-pill").forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        this.state.activeCategory = pill.getAttribute("data-filter");
        this.state.subCategory = "All";
        document.getElementById("subCategoryFilter").value = "All";
        this.renderProducts();
      });
    });

    // Sub-Category Filter
    const subCatSelect = document.getElementById("subCategoryFilter");
    if (subCatSelect) {
      subCatSelect.addEventListener("change", (e) => {
        this.state.subCategory = e.target.value;
        this.renderProducts();
      });
    }

    // Skin Type Filter
    const skinTypeSelect = document.getElementById("skinTypeFilter");
    if (skinTypeSelect) {
      skinTypeSelect.addEventListener("change", (e) => {
        this.state.skinType = e.target.value;
        this.renderProducts();
      });
    }

    // Price Slider Filter
    const priceSlider = document.getElementById("priceRange");
    const priceLabel = document.getElementById("priceRangeLabel");
    if (priceSlider && priceLabel) {
      priceSlider.addEventListener("input", (e) => {
        this.state.maxPrice = Number(e.target.value);
        priceLabel.textContent = `₹${this.state.maxPrice}`;
        this.renderProducts();
      });
    }

    // Sort By Selector
    const sortSelect = document.getElementById("sortBySelect");
    if (sortSelect) {
      sortSelect.addEventListener("change", (e) => {
        this.state.sortBy = e.target.value;
        this.renderProducts();
      });
    }

    // Live Search Bar (Requirement 10)
    const searchInput = document.getElementById("productSearchInput");
    const clearSearchBtn = document.getElementById("clearSearchBtn");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        this.state.searchQuery = e.target.value.trim().toLowerCase();
        if (clearSearchBtn) {
          clearSearchBtn.style.display = this.state.searchQuery ? "block" : "none";
        }
        this.renderProducts();
      });
    }
    if (clearSearchBtn) {
      clearSearchBtn.addEventListener("click", () => {
        searchInput.value = "";
        this.state.searchQuery = "";
        clearSearchBtn.style.display = "none";
        this.renderProducts();
      });
    }

    // Reset Filters Button
    const resetFiltersBtn = document.getElementById("resetFiltersBtn");
    const emptyResetBtn = document.getElementById("emptyStateResetBtn");
    const handleResetFilters = () => {
      this.state.activeCategory = "All";
      this.state.subCategory = "All";
      this.state.skinType = "All";
      this.state.maxPrice = 2500;
      this.state.sortBy = "popular";
      this.state.searchQuery = "";

      if (searchInput) searchInput.value = "";
      if (clearSearchBtn) clearSearchBtn.style.display = "none";
      if (priceSlider) priceSlider.value = 2500;
      if (priceLabel) priceLabel.textContent = "₹2500";
      if (subCatSelect) subCatSelect.value = "All";
      if (skinTypeSelect) skinTypeSelect.value = "All";
      if (sortSelect) sortSelect.value = "popular";
      document.querySelectorAll(".filter-pill").forEach(p => p.classList.remove("active"));
      document.querySelector(".filter-pill[data-filter='All']")?.classList.add("active");

      this.renderProducts();
    };
    if (resetFiltersBtn) resetFiltersBtn.addEventListener("click", handleResetFilters);
    if (emptyResetBtn) emptyResetBtn.addEventListener("click", handleResetFilters);

    // Reset Demo Data Button
    const resetDemoBtn = document.getElementById("resetSampleDataBtn");
    if (resetDemoBtn) {
      resetDemoBtn.addEventListener("click", () => this.resetDemoData());
    }

    // Quick Search Trigger from Navbar
    const searchTriggerBtn = document.getElementById("searchTriggerBtn");
    if (searchTriggerBtn) {
      searchTriggerBtn.addEventListener("click", () => {
        document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => searchInput?.focus(), 500);
      });
    }

    // Drawer triggers: Cart
    const cartTriggerBtn = document.getElementById("cartTriggerBtn");
    const cartOverlay = document.getElementById("cartOverlay");
    const closeCartBtn = document.getElementById("closeCartBtn");
    const startShopCartBtn = document.getElementById("startShoppingCartBtn");
    if (cartTriggerBtn && cartOverlay) {
      cartTriggerBtn.addEventListener("click", () => this.openCartDrawer());
    }
    if (closeCartBtn) {
      closeCartBtn.addEventListener("click", () => this.closeCartDrawer());
    }
    if (startShopCartBtn) {
      startShopCartBtn.addEventListener("click", () => {
        this.closeCartDrawer();
        document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });
      });
    }
    if (cartOverlay) {
      cartOverlay.addEventListener("click", (e) => {
        if (e.target === cartOverlay) this.closeCartDrawer();
      });
    }

    // Drawer triggers: Wishlist
    const wishlistTriggerBtn = document.getElementById("wishlistTriggerBtn");
    const wishlistOverlay = document.getElementById("wishlistOverlay");
    const closeWishlistBtn = document.getElementById("closeWishlistBtn");
    const startShopWishBtn = document.getElementById("startShoppingWishlistBtn");
    if (wishlistTriggerBtn && wishlistOverlay) {
      wishlistTriggerBtn.addEventListener("click", () => this.openWishlistDrawer());
    }
    if (closeWishlistBtn) {
      closeWishlistBtn.addEventListener("click", () => this.closeWishlistDrawer());
    }
    if (startShopWishBtn) {
      startShopWishBtn.addEventListener("click", () => {
        this.closeWishlistDrawer();
        document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });
      });
    }
    if (wishlistOverlay) {
      wishlistOverlay.addEventListener("click", (e) => {
        if (e.target === wishlistOverlay) this.closeWishlistDrawer();
      });
    }

    // Modals Close handlers
    const setupModalClose = (modalOverlayId, closeBtnId) => {
      const overlay = document.getElementById(modalOverlayId);
      const closeBtn = document.getElementById(closeBtnId);
      if (closeBtn && overlay) {
        closeBtn.addEventListener("click", () => overlay.classList.remove("active"));
      }
      if (overlay) {
        overlay.addEventListener("click", (e) => {
          if (e.target === overlay) overlay.classList.remove("active");
        });
      }
    };
    setupModalClose("productDetailsModalOverlay", "closeProductDetailsBtn");
    setupModalClose("productFormModalOverlay", "closeProductFormBtn");
    setupModalClose("deleteConfirmModalOverlay", "cancelDeleteBtn");
    setupModalClose("checkoutModalOverlay", "closeCheckoutBtn");
    setupModalClose("articleModalOverlay", "closeArticleModalBtn");

    // Add Product Modal Triggers
    const openAddProductBtn = document.getElementById("openAddProductModalBtn");
    const shopAddProductBtn = document.getElementById("shopAddProductBtn");
    if (openAddProductBtn) openAddProductBtn.addEventListener("click", () => this.openProductFormModal());
    if (shopAddProductBtn) shopAddProductBtn.addEventListener("click", () => this.openProductFormModal());
    document.getElementById("cancelProductCrudBtn")?.addEventListener("click", () => {
      document.getElementById("productFormModalOverlay")?.classList.remove("active");
    });

    // Product CRUD Form Submit (Requirements 6, 7, 8)
    const crudForm = document.getElementById("productCrudForm");
    if (crudForm) {
      crudForm.addEventListener("submit", (e) => this.handleProductCrudSubmit(e));
    }

    // Image Upload & Preview in Form (Requirement 8)
    const imageInput = document.getElementById("crudImageFile");
    const dropzone = document.getElementById("imageUploadDropzone");
    const removePreviewBtn = document.getElementById("removeImagePreviewBtn");
    if (dropzone && imageInput) {
      dropzone.addEventListener("click", () => imageInput.click());
    }
    if (imageInput) {
      imageInput.addEventListener("change", (e) => this.handleImageUpload(e));
    }
    if (removePreviewBtn) {
      removePreviewBtn.addEventListener("click", () => this.clearImagePreview());
    }

    // Delete Confirmation Button
    const confirmDeleteBtn = document.getElementById("confirmDeleteBtn");
    if (confirmDeleteBtn) {
      confirmDeleteBtn.addEventListener("click", () => this.handleConfirmDeleteProduct());
    }

    // Coupon Apply Button in Cart (Requirement 23)
    const applyCouponBtn = document.getElementById("applyCouponBtn");
    if (applyCouponBtn) {
      applyCouponBtn.addEventListener("click", () => this.handleApplyCoupon());
    }

    // Checkout Flow Trigger
    const openCheckoutBtn = document.getElementById("openCheckoutModalBtn");
    if (openCheckoutBtn) {
      openCheckoutBtn.addEventListener("click", () => this.openCheckoutModal());
    }

    // Checkout Form Submit (Requirement 13)
    const checkoutForm = document.getElementById("checkoutForm");
    if (checkoutForm) {
      checkoutForm.addEventListener("submit", (e) => this.handleCheckoutSubmit(e));
    }

    // Continue Shopping after Success Modal
    const continueBtn = document.getElementById("continueShoppingBtn");
    if (continueBtn) {
      continueBtn.addEventListener("click", () => {
        document.getElementById("orderSuccessModalOverlay")?.classList.remove("active");
        document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });
      });
    }

    // Newsletter Subscription Form (Requirement 18)
    const newsletterForm = document.getElementById("newsletterForm");
    if (newsletterForm) {
      newsletterForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const emailInput = document.getElementById("newsletterEmailInput");
        const feedback = document.getElementById("newsletterFeedback");
        if (emailInput && emailInput.value) {
          feedback.textContent = `✨ Thank you for subscribing to GlowNest! Your 10% coupon code: GLOW10 has been activated.`;
          feedback.className = "form-feedback success";
          feedback.style.display = "block";
          this.showToast("Subscribed successfully! Use code GLOW10 for 10% off.", "success");
          emailInput.value = "";
          setTimeout(() => { feedback.style.display = "none"; }, 8000);
        }
      });
    }

    // Contact Form Submit (Requirement 21)
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const feedback = document.getElementById("contactFeedback");
        feedback.textContent = "✨ Thank you! Your message has been sent to our skincare experts. We'll reply within 24 hours.";
        feedback.className = "form-feedback success";
        feedback.style.display = "block";
        this.showToast("Message sent successfully!", "success");
        contactForm.reset();
        setTimeout(() => { feedback.style.display = "none"; }, 8000);
      });
    }
  },

  // 3. Subcategories Dynamic Population
  populateSubCategoriesDropdown() {
    const subCatSelect = document.getElementById("subCategoryFilter");
    if (!subCatSelect) return;
    
    // Get unique subcategories
    const subCats = Array.from(new Set(this.state.products.map(p => p.subCategory))).filter(Boolean);
    subCatSelect.innerHTML = `<option value="All">All Sub-Categories</option>` + 
      subCats.map(sc => `<option value="${sc}">${sc}</option>`).join("");
  },

  // 4. Featured Category Trigger (Requirement 3)
  filterByFeaturedCategory(categoryName) {
    // Check if categoryName matches main category or subcategory
    const catPill = document.querySelector(`.filter-pill[data-filter='${categoryName}']`);
    if (catPill) {
      document.querySelectorAll(".filter-pill").forEach(p => p.classList.remove("active"));
      catPill.classList.add("active");
      this.state.activeCategory = categoryName;
      this.state.subCategory = "All";
    } else {
      // It's a subcategory like "Sunscreen" or "Cleansers & Face Wash"
      document.querySelectorAll(".filter-pill").forEach(p => p.classList.remove("active"));
      document.querySelector(".filter-pill[data-filter='All']")?.classList.add("active");
      this.state.activeCategory = "All";
      
      if (categoryName === "Cleansers & Face Wash") {
        this.state.searchQuery = "cleanse";
        const searchInput = document.getElementById("productSearchInput");
        if (searchInput) searchInput.value = "Cleanser";
      } else if (categoryName === "Sunscreen") {
        this.state.subCategory = "Sunscreen";
        const subCatSelect = document.getElementById("subCategoryFilter");
        if (subCatSelect) subCatSelect.value = "Sunscreen";
      } else if (categoryName === "Serums") {
        this.state.subCategory = "Serums";
        const subCatSelect = document.getElementById("subCategoryFilter");
        if (subCatSelect) subCatSelect.value = "Serums";
      } else if (categoryName === "Moisturizers") {
        this.state.subCategory = "Moisturizers";
        const subCatSelect = document.getElementById("subCategoryFilter");
        if (subCatSelect) subCatSelect.value = "Moisturizers";
      } else if (categoryName === "Combos") {
        this.state.activeCategory = "Combos";
        document.querySelectorAll(".filter-pill").forEach(p => p.classList.remove("active"));
        document.querySelector(".filter-pill[data-filter='Combos']")?.classList.add("active");
      }
    }

    this.renderProducts();
    document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });
  },

  // 5. Render Best Sellers Section (Requirement 14)
  renderBestSellers() {
    const grid = document.getElementById("bestSellersGrid");
    if (!grid) return;

    const bestSellers = this.state.products.filter(p => p.isBestSeller || p.rating >= 4.8).slice(0, 4);
    grid.innerHTML = bestSellers.map(product => this.generateProductCardHTML(product)).join("");
  },

  // 6. Dynamic Filtering, Search & Sorting (Requirements 4, 10, 11)
  getFilteredProducts() {
    return this.state.products.filter(product => {
      // Main Category Filter
      if (this.state.activeCategory !== "All" && product.category !== this.state.activeCategory) {
        return false;
      }
      // Sub-category Filter
      if (this.state.subCategory !== "All" && product.subCategory !== this.state.subCategory) {
        return false;
      }
      // Skin Type Filter
      if (this.state.skinType !== "All" && product.skinType !== this.state.skinType && product.skinType !== "All Skin Types") {
        return false;
      }
      // Price Filter
      if (product.discountedPrice > this.state.maxPrice) {
        return false;
      }
      // Search Query
      if (this.state.searchQuery) {
        const q = this.state.searchQuery;
        const matchName = product.name.toLowerCase().includes(q);
        const matchCat = product.category.toLowerCase().includes(q);
        const matchSub = product.subCategory.toLowerCase().includes(q);
        const matchDesc = product.description.toLowerCase().includes(q);
        const matchIng = product.ingredients.toLowerCase().includes(q);
        const matchBenefits = product.benefits.toLowerCase().includes(q);
        if (!matchName && !matchCat && !matchSub && !matchDesc && !matchIng && !matchBenefits) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      // Sorting
      switch (this.state.sortBy) {
        case "price-low":
          return a.discountedPrice - b.discountedPrice;
        case "price-high":
          return b.discountedPrice - a.discountedPrice;
        case "rating":
          return b.rating - a.rating;
        case "discount":
          return b.discountPercent - a.discountPercent;
        case "newest":
          return b.id - a.id;
        case "popular":
        default:
          return (b.reviewsCount || 0) - (a.reviewsCount || 0);
      }
    });
  },

  renderProducts() {
    const grid = document.getElementById("productsGrid");
    const emptyState = document.getElementById("emptyProductsState");
    const resultsCount = document.getElementById("resultsCount");
    const activeIndicator = document.getElementById("activeFilterIndicator");
    if (!grid) return;

    const filtered = this.getFilteredProducts();

    if (resultsCount) {
      resultsCount.textContent = `Showing ${filtered.length} of ${this.state.products.length} products`;
    }

    if (activeIndicator) {
      const filters = [];
      if (this.state.activeCategory !== "All") filters.push(`Category: ${this.state.activeCategory}`);
      if (this.state.subCategory !== "All") filters.push(`Type: ${this.state.subCategory}`);
      if (this.state.searchQuery) filters.push(`Search: "${this.state.searchQuery}"`);
      activeIndicator.textContent = filters.length ? `(${filters.join(" • ")})` : "";
    }

    if (filtered.length === 0) {
      grid.innerHTML = "";
      if (emptyState) emptyState.style.display = "block";
    } else {
      if (emptyState) emptyState.style.display = "none";
      grid.innerHTML = filtered.map(product => this.generateProductCardHTML(product)).join("");
    }
  },

  // 7. Product Card Component HTML (Requirement 4)
  generateProductCardHTML(product) {
    const isWishlisted = this.state.wishlist.includes(product.id);
    const badgeMarkup = product.isBestSeller 
      ? `<span class="badge-tag badge-bestseller"><i class="fa-solid fa-crown"></i> Best Seller</span>`
      : product.discountPercent >= 15 
        ? `<span class="badge-tag badge-discount">${product.discountPercent}% OFF</span>`
        : `<span class="badge-tag tag-new">Clean Glow</span>`;

    return `
      <div class="product-card" data-product-id="${product.id}">
        <div class="product-card-top" onclick="GlowNestApp.viewProductDetails(${product.id})">
          <div class="badge-stack">
            ${badgeMarkup}
          </div>
          <button type="button" class="btn-wishlist ${isWishlisted ? 'active' : ''}" 
            onclick="event.stopPropagation(); GlowNestApp.toggleWishlist(${product.id})" 
            title="${isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}">
            <i class="${isWishlisted ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}"></i>
          </button>
          <img src="${product.image}" alt="${product.name}" class="product-card-img" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80'">
        </div>

        <div class="product-card-body">
          <div class="product-meta-row">
            <span class="product-category-name">${product.subCategory || product.category}</span>
            <div class="product-rating">
              <i class="fa-solid fa-star"></i>
              <span>${product.rating} (${product.reviewsCount || 48})</span>
            </div>
          </div>

          <h3 class="product-title" onclick="GlowNestApp.viewProductDetails(${product.id})">${product.name}</h3>
          <p class="product-desc">${product.description}</p>

          <div class="product-price-row">
            <span class="price-current">₹${product.discountedPrice}</span>
            ${product.originalPrice > product.discountedPrice ? `<span class="price-original">₹${product.originalPrice}</span>` : ''}
            ${product.discountPercent > 0 ? `<span class="price-discount-percent">${product.discountPercent}% OFF</span>` : ''}
          </div>

          <div class="product-card-actions">
            <button type="button" class="btn-card-details" onclick="GlowNestApp.viewProductDetails(${product.id})">
              View Details
            </button>
            <button type="button" class="btn-card-cart" onclick="GlowNestApp.addToCart(${product.id}, 1)">
              <i class="fa-solid fa-bag-shopping"></i> Add to Cart
            </button>
          </div>

          <!-- Admin Quick Actions (Requirement 7) -->
          <div class="product-admin-row">
            <button type="button" class="btn-admin-edit" onclick="GlowNestApp.editProduct(${product.id})" title="Edit product information">
              <i class="fa-solid fa-pen-to-square"></i> Edit
            </button>
            <button type="button" class="btn-admin-delete" onclick="GlowNestApp.promptDeleteProduct(${product.id})" title="Delete product">
              <i class="fa-regular fa-trash-can"></i> Delete
            </button>
          </div>
        </div>
      </div>
    `;
  },

  // 8. Product Details Modal (Requirement 9)
  viewProductDetails(productId) {
    const product = this.state.products.find(p => p.id === productId);
    if (!product) return;

    const modalBody = document.getElementById("productDetailsBody");
    const modalOverlay = document.getElementById("productDetailsModalOverlay");
    if (!modalBody || !modalOverlay) return;

    const isWishlisted = this.state.wishlist.includes(product.id);

    // Find 3 related products in same category
    const related = this.state.products
      .filter(p => p.id !== product.id && p.category === product.category)
      .slice(0, 3);

    modalBody.innerHTML = `
      <div class="product-details-grid">
        <div class="details-visual-col">
          <img src="${product.image}" alt="${product.name}" class="details-large-img" onerror="this.src='https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80'">
        </div>

        <div class="details-info-col">
          <div class="details-badge-row">
            <span class="badge-tag badge-discount">${product.subCategory || product.category}</span>
            ${product.isBestSeller ? `<span class="badge-tag badge-bestseller"><i class="fa-solid fa-crown"></i> Best Seller</span>` : ''}
          </div>

          <h2 class="details-title">${product.name}</h2>

          <div class="details-rating-row">
            <div class="product-rating">
              <i class="fa-solid fa-star"></i>
              <strong style="color:var(--text-main); margin-left:4px;">${product.rating}</strong>
              <span>(${product.reviewsCount || 52} verified customer reviews)</span>
            </div>
            <span style="color:var(--text-muted);">•</span>
            <span style="color:var(--success); font-weight:600; font-size:0.85rem;"><i class="fa-solid fa-check-circle"></i> In Stock (${product.stock} units)</span>
          </div>

          <div class="details-price-box">
            <span class="price-current" style="font-size: 1.8rem; color: var(--primary);">₹${product.discountedPrice}</span>
            ${product.originalPrice > product.discountedPrice ? `<span class="price-original" style="font-size: 1.1rem;">₹${product.originalPrice}</span>` : ''}
            ${product.discountPercent > 0 ? `<span class="discount-badge-preview">${product.discountPercent}% OFF</span>` : ''}
          </div>

          <p class="details-desc">${product.description}</p>

          <div class="details-spec-list">
            <div class="details-spec-item">
              <strong>Key Benefits:</strong>
              <span>${product.benefits || "Brightens, nourishes, and hydrates skin"}</span>
            </div>
            <div class="details-spec-item">
              <strong>Key Actives:</strong>
              <span>${product.ingredients || "Gentle Botanical extracts & Actives"}</span>
            </div>
            <div class="details-spec-item">
              <strong>Skin Type:</strong>
              <span>${product.skinType || "All Skin Types"}</span>
            </div>
            <div class="details-spec-item">
              <strong>How to Use:</strong>
              <span>${product.howToUse || "Apply evenly on clean skin daily."}</span>
            </div>
          </div>

          <div class="details-actions-row">
            <div class="details-qty-wrapper">
              <div class="qty-control-box" style="padding: 4px;">
                <button type="button" class="btn-qty" onclick="GlowNestApp.changeDetailsQty(-1)">-</button>
                <span class="qty-number" id="detailsQtyCount" style="padding: 0 10px;">1</span>
                <button type="button" class="btn-qty" onclick="GlowNestApp.changeDetailsQty(1)">+</button>
              </div>
            </div>

            <button type="button" class="btn btn-primary" style="flex: 1;" onclick="GlowNestApp.addDetailsToCart(${product.id})">
              <i class="fa-solid fa-bag-shopping"></i> Add to Cart
            </button>

            <button type="button" class="btn btn-outline" style="flex: 1;" onclick="GlowNestApp.buyNowProduct(${product.id})">
              <i class="fa-solid fa-bolt"></i> Buy Now
            </button>

            <button type="button" class="icon-btn" onclick="GlowNestApp.toggleWishlist(${product.id})" title="Save to Wishlist" style="width:48px; height:48px;">
              <i class="${isWishlisted ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}" style="color:${isWishlisted ? 'var(--primary)' : 'inherit'}; font-size:1.2rem;"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- Related Products inside Modal -->
      ${related.length > 0 ? `
        <div class="details-related-section">
          <h4>Related Skincare Essentials</h4>
          <div class="related-products-row">
            ${related.map(r => `
              <div class="category-card" onclick="GlowNestApp.viewProductDetails(${r.id})" style="padding: 12px;">
                <div class="category-img-box" style="width: 70px; height: 70px;">
                  <img src="${r.image}" alt="${r.name}">
                </div>
                <div class="category-details">
                  <h3 style="font-size: 0.85rem;">${r.name}</h3>
                  <span style="font-weight: 700; color: var(--primary);">₹${r.discountedPrice}</span>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      ` : ''}
    `;

    modalOverlay.classList.add("active");
  },

  changeDetailsQty(change) {
    const qtyElem = document.getElementById("detailsQtyCount");
    if (!qtyElem) return;
    let qty = parseInt(qtyElem.textContent) + change;
    if (qty < 1) qty = 1;
    if (qty > 10) qty = 10;
    qtyElem.textContent = qty;
  },

  addDetailsToCart(productId) {
    const qtyElem = document.getElementById("detailsQtyCount");
    const qty = qtyElem ? parseInt(qtyElem.textContent) : 1;
    this.addToCart(productId, qty);
    document.getElementById("productDetailsModalOverlay")?.classList.remove("active");
  },

  buyNowProduct(productId) {
    const qtyElem = document.getElementById("detailsQtyCount");
    const qty = qtyElem ? parseInt(qtyElem.textContent) : 1;
    this.addToCart(productId, qty);
    document.getElementById("productDetailsModalOverlay")?.classList.remove("active");
    this.openCheckoutModal();
  },

  // 9. Auto-Discount Calculator Setup (Requirement 6)
  setupAutoDiscountCalculator() {
    const originalPriceInput = document.getElementById("crudOriginalPrice");
    const discountPercentInput = document.getElementById("crudDiscountPercent");
    const finalPricePreview = document.getElementById("crudDiscountedPricePreview");
    const discountBadgePreview = document.getElementById("crudDiscountBadgePreview");

    const calculate = () => {
      const original = parseFloat(originalPriceInput.value) || 0;
      const discount = parseFloat(discountPercentInput.value) || 0;
      
      const discounted = Math.max(0, Math.round(original * (1 - (discount / 100))));
      
      if (finalPricePreview) {
        finalPricePreview.textContent = `₹${discounted}`;
      }
      if (discountBadgePreview) {
        discountBadgePreview.textContent = `${discount}% OFF`;
      }
    };

    if (originalPriceInput && discountPercentInput) {
      originalPriceInput.addEventListener("input", calculate);
      discountPercentInput.addEventListener("input", calculate);
    }
  },

  // 10. Product Image Upload Handling (Requirement 8)
  handleImageUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      alert("Please upload an image smaller than 5MB.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (uploadEvent) => {
      const base64Data = uploadEvent.target.result;
      document.getElementById("crudImageUrl").value = base64Data;
      
      const previewImg = document.getElementById("imageUploadPreview");
      const previewContainer = document.getElementById("imagePreviewContainer");
      const dropzone = document.getElementById("imageUploadDropzone");

      if (previewImg && previewContainer && dropzone) {
        previewImg.src = base64Data;
        previewContainer.style.display = "inline-block";
        dropzone.style.display = "none";
      }
    };
    reader.readAsDataURL(file);
  },

  clearImagePreview() {
    document.getElementById("crudImageUrl").value = "";
    document.getElementById("crudImageFile").value = "";
    const previewContainer = document.getElementById("imagePreviewContainer");
    const dropzone = document.getElementById("imageUploadDropzone");
    if (previewContainer) previewContainer.style.display = "none";
    if (dropzone) dropzone.style.display = "block";
  },

  // 11. Add & Edit Product Modal / Submit (Requirements 6, 7)
  openProductFormModal(productToEdit = null) {
    const modal = document.getElementById("productFormModalOverlay");
    const title = document.getElementById("productFormModalTitle");
    const form = document.getElementById("productCrudForm");
    if (!modal || !form) return;

    form.reset();
    this.clearImagePreview();

    if (productToEdit) {
      // Edit mode
      title.innerHTML = `<i class="fa-solid fa-pen-to-square"></i> Edit Product: ${productToEdit.name}`;
      document.getElementById("crudProductId").value = productToEdit.id;
      document.getElementById("crudProductName").value = productToEdit.name;
      document.getElementById("crudCategory").value = productToEdit.category;
      document.getElementById("crudSubCategory").value = productToEdit.subCategory;
      document.getElementById("crudOriginalPrice").value = productToEdit.originalPrice;
      document.getElementById("crudDiscountPercent").value = productToEdit.discountPercent;
      document.getElementById("crudDescription").value = productToEdit.description;
      document.getElementById("crudBenefits").value = productToEdit.benefits;
      document.getElementById("crudIngredients").value = productToEdit.ingredients;
      document.getElementById("crudSkinType").value = productToEdit.skinType;
      document.getElementById("crudRating").value = productToEdit.rating;
      document.getElementById("crudStock").value = productToEdit.stock;
      document.getElementById("crudIsBestSeller").checked = productToEdit.isBestSeller || false;

      // Set image preview
      if (productToEdit.image) {
        document.getElementById("crudImageUrl").value = productToEdit.image;
        const previewImg = document.getElementById("imageUploadPreview");
        const previewContainer = document.getElementById("imagePreviewContainer");
        const dropzone = document.getElementById("imageUploadDropzone");
        if (previewImg && previewContainer && dropzone) {
          previewImg.src = productToEdit.image;
          previewContainer.style.display = "inline-block";
          dropzone.style.display = "none";
        }
      }
    } else {
      // Add mode
      title.innerHTML = `<i class="fa-solid fa-plus-circle"></i> Add New Product`;
      document.getElementById("crudProductId").value = "";
      document.getElementById("crudDiscountPercent").value = 10;
      document.getElementById("crudRating").value = 4.8;
      document.getElementById("crudStock").value = 50;
    }

    // Trigger auto calc preview update
    document.getElementById("crudOriginalPrice").dispatchEvent(new Event("input"));
    modal.classList.add("active");
  },

  editProduct(productId) {
    const product = this.state.products.find(p => p.id === productId);
    if (product) {
      this.openProductFormModal(product);
    }
  },

  handleProductCrudSubmit(e) {
    e.preventDefault();

    const idInput = document.getElementById("crudProductId").value;
    const name = document.getElementById("crudProductName").value.trim();
    const category = document.getElementById("crudCategory").value;
    const subCategory = document.getElementById("crudSubCategory").value.trim() || category;
    const originalPrice = parseFloat(document.getElementById("crudOriginalPrice").value);
    const discountPercent = parseFloat(document.getElementById("crudDiscountPercent").value) || 0;
    const discountedPrice = Math.max(0, Math.round(originalPrice * (1 - (discountPercent / 100))));
    
    let imageUrl = document.getElementById("crudImageUrl").value;
    if (!imageUrl) {
      // Default placeholder if none uploaded
      imageUrl = "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80";
    }

    const description = document.getElementById("crudDescription").value.trim();
    const benefits = document.getElementById("crudBenefits").value.trim();
    const ingredients = document.getElementById("crudIngredients").value.trim();
    const skinType = document.getElementById("crudSkinType").value;
    const rating = parseFloat(document.getElementById("crudRating").value) || 4.8;
    const stock = parseInt(document.getElementById("crudStock").value) || 50;
    const isBestSeller = document.getElementById("crudIsBestSeller").checked;

    if (idInput) {
      // Update existing
      const existingId = parseInt(idInput);
      const index = this.state.products.findIndex(p => p.id === existingId);
      if (index !== -1) {
        this.state.products[index] = {
          ...this.state.products[index],
          name, category, subCategory, originalPrice, discountPercent, discountedPrice,
          image: imageUrl, description, benefits, ingredients, skinType, rating, stock, isBestSeller
        };
        this.showToast(`Updated product "${name}" successfully!`, "success");
      }
    } else {
      // Add new
      const newProduct = {
        id: Date.now(),
        name,
        category,
        subCategory,
        originalPrice,
        discountPercent,
        discountedPrice,
        rating,
        reviewsCount: 12,
        image: imageUrl,
        description,
        benefits,
        ingredients,
        skinType,
        howToUse: "Apply onto clean skin as directed.",
        stock,
        isBestSeller,
        isOffer: discountPercent >= 15
      };
      this.state.products.unshift(newProduct);
      this.showToast(`Added new product "${name}" to catalog!`, "success");
    }

    this.saveProductsToStorage();
    this.populateSubCategoriesDropdown();
    this.renderBestSellers();
    this.renderProducts();
    document.getElementById("productFormModalOverlay")?.classList.remove("active");
  },

  // 12. Delete Product with Confirmation (Requirement 7)
  promptDeleteProduct(productId) {
    const product = this.state.products.find(p => p.id === productId);
    if (!product) return;

    this.state.productToDeleteId = productId;
    const confirmModal = document.getElementById("deleteConfirmModalOverlay");
    const nameText = document.getElementById("deleteProductNameText");

    if (nameText) {
      nameText.innerHTML = `Are you sure you want to permanently delete <strong>"${product.name}"</strong>? This will remove it from the catalog.`;
    }
    if (confirmModal) confirmModal.classList.add("active");
  },

  handleConfirmDeleteProduct() {
    if (!this.state.productToDeleteId) return;

    const id = this.state.productToDeleteId;
    const product = this.state.products.find(p => p.id === id);
    const prodName = product ? product.name : "Product";

    this.state.products = this.state.products.filter(p => p.id !== id);
    this.removeFromCart(id);
    this.state.wishlist = this.state.wishlist.filter(wId => wId !== id);

    this.saveProductsToStorage();
    this.saveCartToStorage();
    this.saveWishlistToStorage();
    this.populateSubCategoriesDropdown();
    this.renderBestSellers();
    this.renderProducts();
    this.updateCartUI();
    this.updateWishlistUI();

    document.getElementById("deleteConfirmModalOverlay")?.classList.remove("active");
    this.state.productToDeleteId = null;
    this.showToast(`Deleted "${prodName}" from catalog.`, "error");
  },

  // 13. Shopping Cart Drawer & Logic (Requirements 12 & 23)
  openCartDrawer() {
    this.updateCartUI();
    document.getElementById("cartOverlay")?.classList.add("active");
  },

  closeCartDrawer() {
    document.getElementById("cartOverlay")?.classList.remove("active");
  },

  addToCart(productId, quantity = 1) {
    const product = this.state.products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = this.state.cart.find(item => item.id === productId);
    if (existingItem) {
      existingItem.qty += quantity;
    } else {
      this.state.cart.push({ id: productId, qty: quantity });
    }

    this.saveCartToStorage();
    this.updateCartUI();
    this.showToast(`Added ${quantity} × "${product.name}" to cart!`, "success");

    // Animate cart badge
    const badge = document.getElementById("cartCount");
    if (badge) {
      badge.style.transform = "scale(1.4)";
      setTimeout(() => badge.style.transform = "scale(1)", 200);
    }
  },

  changeCartQty(productId, delta) {
    const item = this.state.cart.find(i => i.id === productId);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
      this.removeFromCart(productId);
    } else {
      this.saveCartToStorage();
      this.updateCartUI();
    }
  },

  removeFromCart(productId) {
    this.state.cart = this.state.cart.filter(i => i.id !== productId);
    this.saveCartToStorage();
    this.updateCartUI();
    this.showToast("Item removed from cart.", "error");
  },

  updateCartUI() {
    const container = document.getElementById("cartItemsContainer");
    const footer = document.getElementById("cartFooter");
    const emptyState = document.getElementById("emptyCartState");
    const badge = document.getElementById("cartCount");
    const drawerBadge = document.getElementById("cartDrawerCount");

    // Calculate total count
    const totalCount = this.state.cart.reduce((sum, item) => sum + item.qty, 0);
    if (badge) badge.textContent = totalCount;
    if (drawerBadge) drawerBadge.textContent = totalCount;

    if (!container) return;

    if (this.state.cart.length === 0) {
      container.innerHTML = "";
      if (footer) footer.style.display = "none";
      if (emptyState) emptyState.style.display = "flex";
      return;
    }

    if (footer) footer.style.display = "block";
    if (emptyState) emptyState.style.display = "none";

    let subtotal = 0;

    container.innerHTML = this.state.cart.map(cartItem => {
      const product = this.state.products.find(p => p.id === cartItem.id);
      if (!product) return "";

      const itemTotal = product.discountedPrice * cartItem.qty;
      subtotal += itemTotal;

      return `
        <div class="drawer-item-card">
          <img src="${product.image}" alt="${product.name}" class="drawer-item-img" onerror="this.src='https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80'">
          <div class="drawer-item-info">
            <h4 class="drawer-item-title">${product.name}</h4>
            <div class="drawer-item-price">₹${product.discountedPrice} × ${cartItem.qty} = <strong>₹${itemTotal}</strong></div>
            <div class="qty-control-box">
              <button type="button" class="btn-qty" onclick="GlowNestApp.changeCartQty(${product.id}, -1)">-</button>
              <span class="qty-number">${cartItem.qty}</span>
              <button type="button" class="btn-qty" onclick="GlowNestApp.changeCartQty(${product.id}, 1)">+</button>
            </div>
          </div>
          <button type="button" class="btn-item-remove" onclick="GlowNestApp.removeFromCart(${product.id})" title="Remove item">
            <i class="fa-regular fa-trash-can"></i>
          </button>
        </div>
      `;
    }).join("");

    // Calculate Discount & Total
    let couponDiscount = 0;
    if (this.state.appliedCoupon) {
      couponDiscount = Math.round(subtotal * (this.state.appliedCoupon.discountPercent / 100));
    }
    const grandTotal = Math.max(0, subtotal - couponDiscount);

    const subtotalElem = document.getElementById("billSubtotal");
    const discountRow = document.getElementById("billDiscountRow");
    const discountElem = document.getElementById("billDiscount");
    const grandTotalElem = document.getElementById("billGrandTotal");

    if (subtotalElem) subtotalElem.textContent = `₹${subtotal}`;
    if (grandTotalElem) grandTotalElem.textContent = `₹${grandTotal}`;

    if (couponDiscount > 0 && discountRow && discountElem) {
      discountRow.style.display = "flex";
      discountElem.textContent = `-₹${couponDiscount} (${this.state.appliedCoupon.discountPercent}% OFF)`;
    } else if (discountRow) {
      discountRow.style.display = "none";
    }
  },

  // 14. Coupon Code Engine (Requirement 23)
  handleApplyCoupon() {
    const input = document.getElementById("couponCodeInput");
    const statusMsg = document.getElementById("couponStatusMsg");
    if (!input || !statusMsg) return;

    const code = input.value.trim().toUpperCase();
    if (!code) return;

    if (VALID_COUPONS[code]) {
      this.state.appliedCoupon = {
        code,
        discountPercent: VALID_COUPONS[code].discountPercent
      };
      statusMsg.style.display = "block";
      statusMsg.style.color = "var(--success)";
      statusMsg.innerHTML = `✨ Coupon applied successfully! <strong>${VALID_COUPONS[code].discountPercent}% OFF</strong>`;
      this.updateCartUI();
      this.showToast(`Coupon "${code}" applied successfully!`, "success");
    } else {
      this.state.appliedCoupon = null;
      statusMsg.style.display = "block";
      statusMsg.style.color = "var(--danger)";
      statusMsg.textContent = "Invalid coupon code. Try GLOW10 or WELCOME15.";
      this.updateCartUI();
    }
  },

  fillCoupon(code) {
    const input = document.getElementById("couponCodeInput");
    if (input) {
      input.value = code;
      this.handleApplyCoupon();
    }
  },

  copyCoupon(code) {
    navigator.clipboard?.writeText(code);
    this.showToast(`Coupon code "${code}" copied to clipboard! Paste it in the cart.`, "success");
    this.openCartDrawer();
    this.fillCoupon(code);
  },

  // 15. Wishlist Management (Requirement 24)
  openWishlistDrawer() {
    this.updateWishlistUI();
    document.getElementById("wishlistOverlay")?.classList.add("active");
  },

  closeWishlistDrawer() {
    document.getElementById("wishlistOverlay")?.classList.remove("active");
  },

  toggleWishlist(productId) {
    const index = this.state.wishlist.indexOf(productId);
    const product = this.state.products.find(p => p.id === productId);

    if (index === -1) {
      this.state.wishlist.push(productId);
      this.showToast(`Saved "${product?.name || 'Product'}" to Wishlist! ❤️`, "success");
    } else {
      this.state.wishlist.splice(index, 1);
      this.showToast(`Removed from Wishlist.`, "error");
    }

    this.saveWishlistToStorage();
    this.updateWishlistUI();
    this.renderProducts();
    this.renderBestSellers();
  },

  updateWishlistUI() {
    const container = document.getElementById("wishlistItemsContainer");
    const emptyState = document.getElementById("emptyWishlistState");
    const badge = document.getElementById("wishlistCount");
    const drawerBadge = document.getElementById("wishlistDrawerCount");

    const count = this.state.wishlist.length;
    if (badge) badge.textContent = count;
    if (drawerBadge) drawerBadge.textContent = count;

    if (!container) return;

    if (count === 0) {
      container.innerHTML = "";
      if (emptyState) emptyState.style.display = "flex";
      return;
    }

    if (emptyState) emptyState.style.display = "none";

    container.innerHTML = this.state.wishlist.map(wId => {
      const product = this.state.products.find(p => p.id === wId);
      if (!product) return "";

      return `
        <div class="drawer-item-card">
          <img src="${product.image}" alt="${product.name}" class="drawer-item-img" onerror="this.src='https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80'">
          <div class="drawer-item-info">
            <h4 class="drawer-item-title">${product.name}</h4>
            <div class="drawer-item-price">₹${product.discountedPrice}</div>
            <button type="button" class="btn btn-sm btn-primary" onclick="GlowNestApp.moveWishlistToCart(${product.id})" style="padding: 4px 12px; font-size: 0.78rem;">
              <i class="fa-solid fa-bag-shopping"></i> Move to Cart
            </button>
          </div>
          <button type="button" class="btn-item-remove" onclick="GlowNestApp.toggleWishlist(${product.id})" title="Remove from wishlist">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      `;
    }).join("");
  },

  moveWishlistToCart(productId) {
    this.addToCart(productId, 1);
    this.toggleWishlist(productId);
    this.closeWishlistDrawer();
    this.openCartDrawer();
  },

  // 16. Checkout & Order Placement (Requirement 13)
  openCheckoutModal() {
    if (this.state.cart.length === 0) {
      this.showToast("Your cart is empty! Add products first.", "error");
      return;
    }

    this.closeCartDrawer();
    const modal = document.getElementById("checkoutModalOverlay");
    const itemsList = document.getElementById("checkoutItemsList");
    const subtotalElem = document.getElementById("checkoutSubtotal");
    const discountRow = document.getElementById("checkoutDiscountRow");
    const discountElem = document.getElementById("checkoutDiscount");
    const grandTotalElem = document.getElementById("checkoutGrandTotal");
    const totalPayableElem = document.getElementById("checkoutTotalPayable");

    let subtotal = 0;

    if (itemsList) {
      itemsList.innerHTML = this.state.cart.map(cartItem => {
        const product = this.state.products.find(p => p.id === cartItem.id);
        if (!product) return "";
        const itemTotal = product.discountedPrice * cartItem.qty;
        subtotal += itemTotal;
        return `
          <div class="checkout-item-small">
            <span>${product.name} × ${cartItem.qty}</span>
            <strong>₹${itemTotal}</strong>
          </div>
        `;
      }).join("");
    }

    let couponDiscount = 0;
    if (this.state.appliedCoupon) {
      couponDiscount = Math.round(subtotal * (this.state.appliedCoupon.discountPercent / 100));
    }
    const grandTotal = Math.max(0, subtotal - couponDiscount);

    if (subtotalElem) subtotalElem.textContent = `₹${subtotal}`;
    if (grandTotalElem) grandTotalElem.textContent = `₹${grandTotal}`;
    if (totalPayableElem) totalPayableElem.textContent = `₹${grandTotal}`;

    if (couponDiscount > 0 && discountRow && discountElem) {
      discountRow.style.display = "flex";
      discountElem.textContent = `-₹${couponDiscount}`;
    } else if (discountRow) {
      discountRow.style.display = "none";
    }

    if (modal) modal.classList.add("active");
  },

  handleCheckoutSubmit(e) {
    e.preventDefault();

    const name = document.getElementById("checkoutName").value.trim();
    const email = document.getElementById("checkoutEmail").value.trim();
    const mobile = document.getElementById("checkoutMobile").value.trim();
    const address = document.getElementById("checkoutAddress").value.trim();
    const city = document.getElementById("checkoutCity").value.trim();
    const state = document.getElementById("checkoutState").value.trim();
    const pincode = document.getElementById("checkoutPincode").value.trim();
    const paymentMethod = document.querySelector("input[name='paymentMethod']:checked")?.value || "UPI";

    let subtotal = 0;
    const items = this.state.cart.map(cartItem => {
      const product = this.state.products.find(p => p.id === cartItem.id);
      const itemTotal = product ? product.discountedPrice * cartItem.qty : 0;
      subtotal += itemTotal;
      return {
        id: cartItem.id,
        name: product ? product.name : "Product",
        qty: cartItem.qty,
        price: product ? product.discountedPrice : 0
      };
    });

    let couponDiscount = 0;
    if (this.state.appliedCoupon) {
      couponDiscount = Math.round(subtotal * (this.state.appliedCoupon.discountPercent / 100));
    }
    const totalAmount = Math.max(0, subtotal - couponDiscount);

    const orderId = `GN-${Math.floor(100000 + Math.random() * 900000)}`;
    const newOrder = {
      orderId,
      date: new Date().toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }),
      customer: { name, email, mobile, address, city, state, pincode },
      paymentMethod,
      items,
      subtotal,
      discount: couponDiscount,
      totalAmount
    };

    this.state.orders.push(newOrder);
    this.saveOrdersToStorage();

    // Clear Cart
    this.state.cart = [];
    this.state.appliedCoupon = null;
    this.saveCartToStorage();
    this.updateCartUI();

    // Close Checkout Modal
    document.getElementById("checkoutModalOverlay")?.classList.remove("active");
    document.getElementById("checkoutForm")?.reset();

    // Show Success Modal
    this.showOrderSuccessModal(newOrder);
  },

  showOrderSuccessModal(order) {
    const modal = document.getElementById("orderSuccessModalOverlay");
    const detailsContainer = document.getElementById("orderSuccessDetails");
    if (!modal || !detailsContainer) return;

    detailsContainer.innerHTML = `
      <div style="margin-bottom: 12px; border-bottom: 1px dashed var(--border-color); padding-bottom: 10px;">
        <div>Order Reference: <span class="order-id-badge">${order.orderId}</span></div>
        <div>Estimated Delivery: <strong>Within 2-4 business days (Free Express)</strong></div>
        <div>Payment Method: <strong>${order.paymentMethod === 'COD' ? 'Cash on Delivery' : order.paymentMethod}</strong></div>
      </div>

      <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 10px;">
        <strong>Delivering to:</strong> ${order.customer.name}, ${order.customer.address}, ${order.customer.city} - ${order.customer.pincode}
      </div>

      <div style="font-size: 0.88rem; margin-top: 8px;">
        <strong>Total Paid: ₹${order.totalAmount}</strong> for ${order.items.length} item(s).
      </div>
    `;

    modal.classList.add("active");
    this.showToast(`Order ${order.orderId} placed successfully! 🎉`, "success");
  },

  // 17. Beauty Article Modal Reader (Requirement 16)
  openArticleModal(articleId) {
    const article = BEAUTY_ARTICLES.find(a => a.id === articleId);
    if (!article) return;

    const modal = document.getElementById("articleModalOverlay");
    const content = document.getElementById("articleReaderContent");
    if (!modal || !content) return;

    content.innerHTML = `
      <span class="section-tag" style="margin-bottom: 8px;">${article.category}</span>
      <h2>${article.title}</h2>
      <div class="article-reader-meta">
        <span><i class="fa-regular fa-clock"></i> ${article.readTime}</span>
        <span>• By Dr. Radhika Sen (GlowNest Chief Dermatologist)</span>
      </div>
      <img src="${article.image}" alt="${article.title}" class="article-reader-img">
      <div class="article-reader-body">
        ${article.content}
      </div>
    `;

    modal.classList.add("active");
  },

  // 18. Toast Notifications
  showToast(message, type = "info") {
    const container = document.getElementById("toastContainer");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `toast ${type === "success" ? "toast-success" : type === "error" ? "toast-error" : ""}`;
    toast.innerHTML = `
      <i class="${type === 'success' ? 'fa-solid fa-circle-check' : type === 'error' ? 'fa-solid fa-circle-exclamation' : 'fa-solid fa-bell'}"></i>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(20px)";
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }
};

// Initialize GlowNest App on DOM Content Loaded
document.addEventListener("DOMContentLoaded", () => {
  GlowNestApp.init();
});
