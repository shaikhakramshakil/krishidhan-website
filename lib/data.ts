import data from '@/data/krishidhan_data.json';

export type PageData = {
  url: string;
  title: string;
  headings: string[];
  paragraphs: string[];
  list_items: string[];
  table_data: any[];
};

export const getAllData = (): PageData[] => {
  return data as PageData[];
};

export const getPageData = (pageName: string): PageData | undefined => {
  return data.find((page) => page.url.includes(pageName) || page.title.toLowerCase().includes(pageName.toLowerCase())) as PageData | undefined;
};

// Hardcoded product names where JSON list_items is incomplete
const productNameOverrides: Record<string, string[]> = {
  'Cotton': [
    'KDCHB 407 (Super Fibre)',
    'KDCHH 9632 (Pratik)',
    'KDCHH 541 (Pancham)',
    'KDCHH 641 (Trinetra)',
    'KDCHB 407 (Talam 4072)',
    'KDCHH 507 (Border)',
    'KDCHH 516 (Pradhan)',
    'KDCHH 202 (Parivartan)',
    'KDCHH 02 (Praja)',
    'KDCHH 541 (KSL 1031)',
    'KDCHH 14006 (KSL 14006)',
    'KDCHH 9810 (Astha)',
    'KDCHH 621 (Ayush)',
    'KDCAA 504 (Adbhud)'
  ],
  'Paddy': [
    'KOMAL 101',
    'SILKY 277',
    'PRASANNA',
    'BUMPY GOLD',
    'ANUPAM',
    'HY RIZE - 360',
    'GAURAV',
    'KSLRV 99 (Mohar 2164)',
    'KSLRV 126 (Bhavana)',
    'KSLRV 143 (Sativa 360)',
    'KSLRV 142 (Rasika 27)',
    'PADMA 07',
    'KSLRV 199 (Vision 199)',
    'MATHURA 1010',
    'CHANDAN 21',
    'KSL 810',
    'PREM 9999'
  ],
  'Sorghum': [
    'KDSFH 727 HY.FODDER SORGHUM AMUL',
    'KDSFH 712 HY.FODDER SORGHUM SHUBHRA',
    'KDSFH 2712 HY.FODDER SORGHUM NEW RED'
  ],
  'Bajra': [
    'SUJLAM 68',
    'SOLID 78',
    'BAJRA 12 KM 11'
  ],
  'Maize': [
    'NARENDRA M909',
    'KDMH-017(Indra)',
    'Super Maharaja 999'
  ],
  'Wheat': [
    'BALRAM 011',
    'AMBER 28',
    'SHRIKRISHNA',
    'SARDAR 97',
    'SONAKSHI 45',
    'VASUNDHARA 65',
    'KDW 2010'
  ],
  'Mustard': [
    'SONALI',
    'AISHWARYA GOLD',
    'BENGAL SONA'
  ]
};

// Hardcoded mustard data with full characteristics
const mustardData = {
  category: 'Mustard',
  items: [
    {
      'Variety': 'SONALI',
      'Plant Height in CMS': '170-180',
      'Days to Maturity': 'Medium 82-90',
      'No siliqua on Main shoot': '35-40',
      'Siliqua Length in CMS': '4.5',
      'Seed Shape': 'Round',
      'Features': 'Siliqua having more than 20 bold seed',
      'Days to 50% Flowering': 'Early',
      'Main Shoot length in CMS': '51-60',
      'Siliqua angle with Main shoot': 'Semi Appressed',
      'Seed per Siliqua': 'More than 20',
      'Seed Colour': 'Yellow',
      'Recommanded Area': 'UP, Uttaranchal, Bihar, WB & Jharkand'
    },
    {
      'Variety': 'AISHWARYA GOLD',
      'Plant Height in CMS': '180-190',
      'Days to Maturity': '115-120',
      'No siliqua on Main shoot': '45-50',
      'Siliqua Length in CMS': '5-6',
      'Seed Shape': 'Round',
      'Features': 'Long Main Shoot with long Appressed to semi appressed Medium Bold seeded siliqua',
      'Days to 50% Flowering': '43-46',
      'Main Shoot length in CMS': '70-75',
      'Siliqua angle with Main shoot': '20-30',
      'Seed per Siliqua': '14-16',
      'Seed Colour': 'Brown & Shiny',
      'Recommanded Area': 'Rajasthan, Gujrat, MP, UP, Uttaranchal, Haryana, Bihar, WB & Punjab'
    },
    {
      'Variety': 'BENGAL SONA',
      'Plant Height in CMS': '110-115',
      'Days to Maturity': '110-105',
      'No siliqua on Main shoot': '45-50',
      'Siliqua Length in CMS': '4.5-5.0',
      'Seed Shape': 'Round',
      'Days to 50% Flowering': '38-42',
      'Main Shoot length in CMS': '40-45',
      'Siliqua angle with Main shoot': '45-40',
      'Seed per Siliqua': '25-35',
      'Seed Colour': 'Yellow & Shiny'
    }
  ]
};

// Hardcoded soyabean data with full characteristics
const soyabeanData = {
  category: 'Soyabean',
  items: [
    {
      'Variety': 'KSL-441',
      'Duration': 'Medium maturity(95-100 )days',
      'Height': 'Medium(40-45)cm',
      'Productive Features': 'Pod setting ability,12-14gm test weight.',
      'Disease Resistant': 'Highly Tolerant to Downy Mildew',
      'Yield': '(30-35)qtls/ha.'
    },
    {
      'Variety': 'KSL-20',
      'Duration': 'Early 85-90 days',
      'Height': 'Dwarf(35-40)cm',
      'Productive Features': 'Big pod size, Test Weight 12 gms.',
      'Disease Resistant': 'Tolerant to Major Disease',
      'Yield': '25-30 qtls/ha.',
      'Other': '18-19% oil.'
    }
  ]
};

export const getProducts = () => {
  // Extract products from the "Products" page or specific crop pages
  // Based on the JSON, there are pages like cotton.php, paddy.php etc.
  const productPages = data.filter(page => 
    page.url.includes('cotton.php') || 
    page.url.includes('paddy.php') || 
    page.url.includes('soyabean.php') || 
    page.url.includes('wheat.php') || 
    page.url.includes('maize.php') || 
    page.url.includes('bajra.php') || 
    page.url.includes('sorghum.php') || 
    page.url.includes('mustard.php')
  );
  
  const allProducts = productPages.map(page => {
    const category = page.title.split('|')[0].trim();
    
    // Return hardcoded mustard data if it's the mustard category
    if (category === 'Mustard') {
      return mustardData;
    }
    
    // Return hardcoded soyabean data if it's the soyabean category
    if (category === 'Soyabean') {
      return soyabeanData;
    }
    
    // Check if we have a hardcoded override for this category
    let varietyNames: string[];
    
    if (productNameOverrides[category]) {
      varietyNames = productNameOverrides[category];
    } else {
      // Extract variety names from list_items
      // Filter out common navigation items and get actual product names
      const navigationItems = [
        'Products', 
        'Featured Services', 
        'About', 
        'Research', 
        'Career', 
        'Contact', 
        'ShubhangiWebSolutions',
        'COTTON',
        'JOWAR',
        'BAJRA',
        'MAIZE',
        'SOYBEAN',
        'PADDY',
        'Sorghum',
        'Wheat',
        'Bajra',
        'Maize',
        'Mustard',
        'Soyabean',
        'Paddy',
        'Cotton'
      ];
      
      varietyNames = page.list_items.filter(item => 
        !navigationItems.includes(item) && 
        item.trim() !== '' &&
        // Keep items that look like product codes or names (contain parentheses or numbers)
        (item.match(/[A-Z]{2,}/) || item.match(/\d/) || item.match(/\(/))
      );
    }
    
    // Parse paragraphs to get individual product details
    // Example paragraph: "Duration: Late | Adaptability: ... | Yield: ..."
    const productParagraphs = page.paragraphs.filter(p => 
      p.includes('|') && 
      p.includes(':') &&
      (p.includes('Duration') || p.includes('Yield') || p.includes('Plant height'))
    );
    
    const items = productParagraphs.map((p, index) => {
      const details = p.split('|').reduce((acc, curr) => {
        // Handle both ":" and ":\t" as separators
        const colonIndex = curr.indexOf(':');
        if (colonIndex !== -1) {
          const key = curr.substring(0, colonIndex).trim();
          const value = curr.substring(colonIndex + 1).trim();
          if (key && value) {
            acc[key] = value;
          }
        }
        return acc;
      }, {} as Record<string, string>);
      
      // Add variety name if available
      if (varietyNames[index]) {
        details['Variety'] = varietyNames[index];
        
        // Add specific variety images
        if (category === 'Cotton' && varietyNames[index] === 'KDCHB 407 (Super Fibre)') {
          details['image'] = '/KDCHB 407 (Super Fibre).jpg';
        }
        if (category === 'Cotton' && varietyNames[index] === 'KDCHH 9632 (Pratik)') {
          details['image'] = '/KDCHH 9632 (Pratik).jpg';
        }
        if (category === 'Cotton' && varietyNames[index] === 'KDCHH 541 (Pancham)') {
          details['image'] = '/KDCHH 541 (Pancham).jpg';
        }
        if (category === 'Cotton' && varietyNames[index] === 'KDCHH 641 (Trinetra)') {
          details['image'] = '/trinetra.jpg';
        }
        if (category === 'Cotton' && varietyNames[index] === 'KDCHB 407 (Talam 4072)') {
          details['image'] = '/talam.jpg';
        }
      }
      
      return details;
    });

    return {
      category,
      items
    };
  });
  
  return allProducts;
};

export const getCompanyInfo = () => {
  const homePage = getPageData('index.php') || getPageData('HOME');
  const aboutPage = getPageData('about.php');
  const contactPage = getPageData('contact.php');
  
  return {
    home: homePage,
    about: aboutPage,
    contact: contactPage
  };
};
