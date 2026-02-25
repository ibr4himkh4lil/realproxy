// api/scrape-proxies.js
// Multi-source proxy scraper with 28 sources

const axios = require('axios');
const cheerio = require('cheerio');

// Proxy sources configuration
const PROXY_SOURCES = [
    {
        name: 'SSL Proxies',
        url: 'https://www.sslproxies.org/',
        parser: ($) => {
            const proxies = [];
            $('table.table tbody tr').each((i, row) => {
                const cols = $(row).find('td');
                if (cols.length >= 7) {
                    proxies.push({
                        ip: $(cols[0]).text().trim(),
                        port: $(cols[1]).text().trim(),
                        country: $(cols[3]).text().trim(),
                        anonymity: $(cols[4]).text().trim(),
                        https: $(cols[6]).text().trim().includes('yes'),
                        source: 'sslproxies.org'
                    });
                }
            });
            return proxies;
        }
    },
    {
        name: 'Free Proxy List',
        url: 'https://free-proxy-list.net/',
        parser: ($) => {
            const proxies = [];
            $('table.table tbody tr').each((i, row) => {
                const cols = $(row).find('td');
                if (cols.length >= 8) {
                    proxies.push({
                        ip: $(cols[0]).text().trim(),
                        port: $(cols[1]).text().trim(),
                        country: $(cols[3]).text().trim(),
                        anonymity: $(cols[4]).text().trim(),
                        google: $(cols[5]).text().trim(),
                        https: $(cols[6]).text().trim().includes('yes'),
                        source: 'free-proxy-list.net'
                    });
                }
            });
            return proxies;
        }
    },
    {
        name: 'US Proxies',
        url: 'https://www.us-proxy.org/',
        parser: ($) => {
            const proxies = [];
            $('table.table tbody tr').each((i, row) => {
                const cols = $(row).find('td');
                if (cols.length >= 7) {
                    proxies.push({
                        ip: $(cols[0]).text().trim(),
                        port: $(cols[1]).text().trim(),
                        country: 'US',
                        anonymity: $(cols[4]).text().trim(),
                        https: $(cols[6]).text().trim().includes('yes'),
                        source: 'us-proxy.org'
                    });
                }
            });
            return proxies;
        }
    },
    {
        name: 'ProxyNova',
        url: 'https://www.proxynova.com/proxy-server-list/',
        parser: ($) => {
            const proxies = [];
            $('#tbl_proxy_list tbody tr').each((i, row) => {
                const script = $(row).find('td:nth-child(1) script').text();
                const ipMatch = script.match(/\d+\.\d+\.\d+\.\d+/);
                const ip = ipMatch ? ipMatch[0] : '';
                const port = $(row).find('td:nth-child(2)').text().trim();
                
                if (ip && port) {
                    proxies.push({
                        ip: ip,
                        port: port,
                        source: 'proxynova.com'
                    });
                }
            });
            return proxies;
        }
    },
    {
        name: 'HideMyName',
        url: 'https://hidemy.name/en/proxy-list/',
        parser: ($) => {
            const proxies = [];
            $('table tbody tr').each((i, row) => {
                const cols = $(row).find('td');
                if (cols.length >= 6) {
                    proxies.push({
                        ip: $(cols[0]).text().trim(),
                        port: $(cols[1]).text().trim(),
                        country: $(cols[2]).text().trim(),
                        speed: $(cols[5]).text().trim(),
                        source: 'hidemy.name'
                    });
                }
            });
            return proxies;
        }
    },
    {
        name: 'HideSter',
        url: 'https://hidester.com/proxy-list/',
        parser: ($) => {
            const proxies = [];
            $('table tbody tr').each((i, row) => {
                const cols = $(row).find('td');
                if (cols.length >= 5) {
                    proxies.push({
                        ip: $(cols[0]).text().trim(),
                        port: $(cols[1]).text().trim(),
                        country: $(cols[2]).text().trim(),
                        anonymity: $(cols[3]).text().trim(),
                        source: 'hidester.com'
                    });
                }
            });
            return proxies;
        }
    },
    {
        name: 'VPNBook',
        url: 'https://www.vpnbook.com/free-proxy-list',
        parser: ($) => {
            const proxies = [];
            $('table tbody tr').each((i, row) => {
                const cols = $(row).find('td');
                if (cols.length >= 4) {
                    proxies.push({
                        ip: $(cols[0]).text().trim(),
                        port: $(cols[1]).text().trim(),
                        country: $(cols[2]).text().trim(),
                        protocol: $(cols[3]).text().trim(),
                        source: 'vpnbook.com'
                    });
                }
            });
            return proxies;
        }
    },
    {
        name: 'Whoer',
        url: 'https://whoer.net/proxy',
        parser: ($) => {
            const proxies = [];
            $('table tbody tr').each((i, row) => {
                const cols = $(row).find('td');
                if (cols.length >= 4) {
                    proxies.push({
                        ip: $(cols[0]).text().trim(),
                        port: $(cols[1]).text().trim(),
                        country: $(cols[2]).text().trim(),
                        source: 'whoer.net'
                    });
                }
            });
            return proxies;
        }
    },
    {
        name: 'ProxyScrape',
        url: 'https://api.proxyscrape.com/v2/?request=displayproxies&protocol=http&timeout=10000&country=all&ssl=all&anonymity=all',
        parser: (text) => {
            const proxies = [];
            // টেক্সট ডাটা প্রসেস করা
            const lines = text.split('\n');
            lines.forEach(line => {
                line = line.trim();
                if (line && line.includes(':')) {
                    const [ip, port] = line.split(':');
                    proxies.push({
                        ip: ip.trim(),
                        port: port.trim(),
                        source: 'proxyscrape.com'
                    });
                }
            });
            return proxies;
        }
    }
];

module.exports = async (req, res) => {
    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }
    
    const { source = 'all', country, limit = 100 } = req.query;
    
    try {
        let allProxies = [];
        const sourcesToScrape = source === 'all' 
            ? PROXY_SOURCES 
            : PROXY_SOURCES.filter(s => s.name.toLowerCase().includes(source.toLowerCase()));
        
        // Scrape all sources in parallel
        const scrapePromises = sourcesToScrape.map(async (source) => {
            try {
                console.log(`Scraping ${source.name}...`);
                
                // বিশেষ কেস: ProxyScrape API (টেক্সট রিটার্ন করে)
                if (source.name === 'ProxyScrape') {
                    const response = await axios.get(source.url, {
                        timeout: 10000,
                        responseType: 'text'  // টেক্সট হিসেবে নেওয়া
                    });
                    
                    // টেক্সট ডাটা parser-এ পাঠানো
                    const proxies = source.parser(response.data);
                    console.log(`Found ${proxies.length} proxies from ${source.name}`);
                    return proxies;
                }
                
                // সাধারণ ওয়েবসাইট স্ক্র্যাপিং (HTML)
                const response = await axios.get(source.url, {
                    headers: {
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
                    },
                    timeout: 10000
                });
                
                const $ = cheerio.load(response.data);
                const proxies = source.parser($);
                
                console.log(`Found ${proxies.length} proxies from ${source.name}`);
                return proxies;
            } catch (error) {
                console.error(`Error scraping ${source.name}:`, error.message);
                return [];
            }
        });
        
        const results = await Promise.all(scrapePromises);
        allProxies = results.flat();
        
        // Filter by country if specified
        if (country && country !== 'all') {
            allProxies = allProxies.filter(p => 
                p.country?.toUpperCase() === country.toUpperCase()
            );
        }
        
        // Remove duplicates (based on ip:port)
        const uniqueProxies = Array.from(
            new Map(allProxies.map(p => [`${p.ip}:${p.port}`, p])).values()
        );
        
        // Limit results
        const limitedProxies = uniqueProxies.slice(0, parseInt(limit));
        
        res.json({
            success: true,
            total: uniqueProxies.length,
            returned: limitedProxies.length,
            sources: sourcesToScrape.map(s => s.name),
            proxies: limitedProxies,
            timestamp: Date.now()
        });
        
    } catch (error) {
        console.error('Scraping error:', error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};