import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://www.astralvisionestudio.com';
const OUTPUT_FILE = path.resolve(__dirname, '../public/sitemap.xml');

const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'monthly' },
  { path: '/services', priority: '0.8', changefreq: 'monthly' },
  { path: '/projects', priority: '0.8', changefreq: 'monthly' },
  { path: '/contact', priority: '0.5', changefreq: 'monthly' },
];

const generateSitemap = () => {
  const currentDate = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

  const urls = staticRoutes.map(route => {
    return `
  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  }).join('');

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  fs.writeFileSync(OUTPUT_FILE, sitemapContent);
  console.log(`✅ Sitemap generated at ${OUTPUT_FILE}`);
};

generateSitemap();
