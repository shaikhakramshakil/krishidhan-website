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
  
  return productPages.map(page => {
    const category = page.title.split('|')[0].trim();
    // Parse paragraphs to get individual product details
    // Example paragraph: "Duration: Late | Adaptability: ... | Yield: ..."
    const items = page.paragraphs.filter(p => p.includes('|')).map(p => {
      const details = p.split('|').reduce((acc, curr) => {
        const [key, value] = curr.split(':').map(s => s.trim());
        if (key && value) {
          acc[key] = value;
        } else {
           // Handle cases where split might not work perfectly or it's just text
           acc['Description'] = (acc['Description'] ? acc['Description'] + ' ' : '') + curr.trim();
        }
        return acc;
      }, {} as Record<string, string>);
      return details;
    });

    return {
      category,
      items
    };
  });
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
