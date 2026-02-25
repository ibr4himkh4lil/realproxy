# 🔴 LiveProxy

<div align="center">

![Version](https://img.shields.io/badge/version-3.0-brightgreen)
![Status](https://img.shields.io/badge/status-stable-success)
![License](https://img.shields.io/badge/license-MIT-blue)
![PRs](https://img.shields.io/badge/PRs-welcome-orange)

### 🕷️ Multi-Source Proxy Scraper & Real TCP Tester

[👉 Live Demo](https://liveproxy.vercel.app) • 
[📝 Report Bug](https://github.com/ibr4himkh4lil/liveproxy/issues) • 
[⭐ Request Feature](https://github.com/ibr4himkh4lil/liveproxy/issues)

</div>

---

## 📋 **প্রজেক্ট ওভারভিউ**

**LiveProxy** একটি শক্তিশালী ওয়েব-ভিত্তিক প্রোক্সি স্ক্র্যাপার এবং টেস্টার টুল। এটি **২৮টিরও বেশি ফ্রি প্রোক্সি ওয়েবসাইট** থেকে স্বয়ংক্রিয়ভাবে প্রোক্সি কালেক্ট করে এবং **রিয়েল TCP CONNECT টেস্টিং** এর মাধ্যমে লাইভ প্রোক্সি ডিটেক্ট করে।

---

## ✨ **মূল ফিচারসমূহ**

| ফিচার | বিবরণ |
|--------|--------|
| 🕷️ **২৮+ প্রোক্সি সোর্স** | SSL Proxies, Free Proxy List, US Proxies, ProxyNova, HideMyName, HideSter, VPNBook, Whoer, ProxyScrape সহ আরও অনেক সাইট |
| ⚡ **রিয়েল TCP টেস্টিং** | HTTP CONNECT মেথড ব্যবহার করে প্রকৃত প্রোক্সি ভেরিফিকেশন (শুধু সিমুলেশন না) |
| 🌍 **কান্ট্রি ফিল্টার** | নির্দিষ্ট দেশের প্রোক্সি দেখার অপশন (USA, UK, Canada, Bangladesh, India, Germany, France, Japan, Korea, Singapore) |
| 💾 **ক্লিন এক্সপোর্ট** | শুধু `ip:port` ফরম্যাটে টেক্সট ফাইল ডাউনলোড, কোনো extra text নেই |
| 🔄 **অটো-সিঙ্ক** | প্রতি ৬০ মিনিট পর স্বয়ংক্রিয় রিফ্রেশ |
| 🎨 **টার্মিনাল স্টাইল UI** | হ্যাকার-স্টাইল ইন্টারফেস, গ্রিন গ্লো ইফেক্ট |
| 📱 **মোবাইল রেসপনসিভ** | যেকোনো ডিভাইস থেকে ইউজ করা যাবে |

---

## 🚀 **লাইভ ডেমো**

### 👉 **[https://liveproxy.vercel.app](https://liveproxy.vercel.app)**

---

## 🛠️ **টেকনোলজি স্ট্যাক**

```

Frontend:     HTML5, CSS3, JavaScript (Vanilla)
Backend:      Node.js, Vercel Serverless Functions
Libraries:    Axios, Cheerio (Web Scraping)
Network:      Net (TCP Socket) for real proxy testing
Hosting:      Vercel (Serverless)
Version:      Git/GitHub

```

---

## 📂 **প্রজেক্ট স্ট্রাকচার**

```

liveproxy/
├── 📄 index.html              # Main frontend interface
├── 📄 vercel.json              # Vercel configuration
├── 📄 package.json             # Dependencies
├── 📄 README.md                # Documentation
├── 📁 api/
│   ├── 📄 test-proxy.js        # Real TCP testing endpoint
│   └── 📄 scrape-proxies.js    # Multi-source scraper
└── 📁 .vercel/                 # Vercel deployment files

```

---

## 🎯 **কিভাবে ইউজ করবেন**

### **স্টেপ বাই স্টেপ গাইড**

#### 1️⃣ **সোর্স সিলেক্ট করুন**
```

SCRAPE: [🌐 ALL SOURCES (28) ▼]

```
- "ALL SOURCES" সব ২৮টি সোর্স থেকে সংগ্রহ করবে
- অথবা নির্দিষ্ট সোর্স সিলেক্ট করতে পারেন

#### 2️⃣ **কান্ট্রি ফিল্টার (ঐচ্ছিক)**
```

COUNTRY: [🌍 ALL ▼]

```
- নির্দিষ্ট দেশের প্রোক্সি চাইলে সিলেক্ট করুন

#### 3️⃣ **লিমিট সেট করুন**
```

LIMIT: [50]

```
- কতগুলো প্রোক্সি দেখতে চান তা দিন (১০-৫০০)

#### 4️⃣ **স্ক্র্যাপিং শুরু করুন**
```

[🕷️ SCRAPE NOW] ক্লিক করুন

```
- সিস্টেম ২৮টি সোর্স থেকে প্রোক্সি সংগ্রহ করবে

#### 5️⃣ **টেস্টিং করুন**
```

[⚡ TEST ALL] ক্লিক করুন

```
- রিয়েল TCP CONNECT টেস্টিং শুরু হবে
- **LIVE** প্রোক্সি সবুজ ট্যাগ দিয়ে দেখাবে
- **DEAD** প্রোক্সি লাল ট্যাগ দিয়ে দেখাবে

#### 6️⃣ **এক্সপোর্ট করুন**
```

[💾 EXPORT] ক্লিক করুন

```
- শুধু লাইভ প্রোক্সিগুলো `proxies_timestamp.txt` ফাইলে সেভ হবে

---

## 📊 **ইউআই প্রিভিউ**

### **টার্মিনাল উইন্ডো**
```

┌─────────────────────────────────────┐
│ > [SYSTEM] PROXY SCRAPER READY      │
│ > [SOURCES] 28 PROXY CONFIGURED     │
│ 🕷️ Starting multi-source scrape...  │
│ ✅ Scraped 150 proxies from 28 sources│
│ ⚡ Testing with real TCP CONNECT...   │
│ [LIVE] [US] 125.128.12.134:3128 ⚡245ms│
│ [DEAD] 14.56.118.34:3128 - Timeout   │
│ ✅ Testing complete. 25 live found    │
└─────────────────────────────────────┘

```

### **স্ট্যাটাস প্যানেল**
```

┌──────────────┬──────────┬──────────┬──────────┬──────────┐
│ STATUS: READY│SOURCES: 28│SCRAPED:150│LIVE: 25  │AUTO:58:46│
└──────────────┴──────────┴──────────┴──────────┴──────────┘

```

---

## 🌐 **প্রোক্সি সোর্স লিস্ট (২৮টি)**

| # | নাম | URL | টাইপ |
|---|------|-----|------|
| 1 | **SSL Proxies** | sslproxies.org | HTTP/HTTPS |
| 2 | **Free Proxy List** | free-proxy-list.net | HTTP/HTTPS |
| 3 | **US Proxies** | us-proxy.org | HTTP/HTTPS |
| 4 | **ProxyNova** | proxynova.com | HTTP/SOCKS |
| 5 | **HideMyName** | hidemy.name | HTTP/SOCKS |
| 6 | **HideSter** | hidester.com | HTTP/HTTPS |
| 7 | **VPNBook** | vpnbook.com | HTTP/SOCKS |
| 8 | **Whoer** | whoer.net | HTTP/HTTPS |
| 9 | **ProxyScrape** | proxyscrape.com | HTTP/HTTPS |
| 10 | **ProxySite** | proxysite.com | Web Proxy |
| 11 | **CroxyProxy** | croxyproxy.com | Web Proxy |
| 12 | **BlockAway** | blockaway.net | Web Proxy |
| 13 | **Hide.me** | hide.me | Web Proxy |
| 14 | **KProxy** | kproxy.com | Web Proxy |
| 15 | **4EverProxy** | 4everproxy.com | Web Proxy |
| 16 | **MegaProxy** | megaproxy.com | Web Proxy |
| 17 | **Zend2** | zend2.com | Web Proxy |
| 18 | **FilterBypass** | filterbypass.me | Web Proxy |
| 19 | **GenMirror** | genmirror.com | Web Proxy |
| 20 | **AtoZProxy** | atozproxy.com | Web Proxy |
| 21 | **SiteEnable** | sitenable.com | Web Proxy |
| 22 | **Proxify** | proxify.com | Web Proxy |
| 23 | **Anonymouse** | anonymouse.org | Web Proxy |
| 24 | **WebProxy** | webproxy.net | Web Proxy |
| 25 | **Proxyium** | proxyium.com | Web Proxy |
| 26 | **Geonode** | geonode.com | HTTP/SOCKS |
| 27 | **ProxyList** | proxy-list.download | HTTP/HTTPS |
| 28 | **HideIP** | hideip.me | HTTP/HTTPS |

---

## ⚙️ **টেকনিক্যাল ডিটেলস**

### **রিয়েল টেস্টিং কিভাবে কাজ করে**

```javascript
1. TCP socket connection to proxy_ip:proxy_port
2. Send: "CONNECT httpbin.org:80 HTTP/1.1\r\n\r\n"
3. Wait for: "HTTP/1.1 200 Connection established"
4. Measure response time in milliseconds
5. Mark as LIVE if successful, DEAD if timeout/fail
```

স্ক্র্যাপিং প্রসেস

```javascript
1. Parallel requests to all 28 sources
2. HTML parsing with Cheerio
3. Extract IP, Port, Country, Anonymity
4. Remove duplicates (based on ip:port)
5. Apply country filter if selected
6. Limit results based on user input
```

---

🔧 লোকাল ডেভেলপমেন্ট

প্রয়োজনীয় টুলস

· Node.js (v14 or higher)
· Git
· Vercel CLI (optional)

স্টেপ বাই স্টেপ

```bash
# 1. রিপোজিটরি ক্লোন করুন
git clone https://github.com/ibr4himkh4lil/liveproxy.git

# 2. ফোল্ডারে যান
cd liveproxy

# 3. ডিপেন্ডেন্সি ইন্সটল করুন
npm install

# 4. লোকাল সার্ভার রান করুন (Vercel CLI দিয়ে)
vercel dev

# 5. ব্রাউজারে খুলুন
http://localhost:3000
```

Vercel ডেপ্লয়মেন্ট

```bash
# 1. Vercel CLI ইন্সটল করুন
npm install -g vercel

# 2. ডেপ্লয় করুন
vercel --prod
```

---

📝 API এন্ডপয়েন্ট

1. Scrape Proxies

```
GET /api/scrape-proxies?source=all&country=all&limit=50

Response:
{
  success: true,
  total: 150,
  returned: 50,
  sources: ["SSL Proxies", "Free Proxy List", ...],
  proxies: [{ip, port, country, source}],
  timestamp: 1732525252525
}
```

2. Test Proxy

```
POST /api/test-proxy
Body: { ip: "125.128.12.134", port: "3128", type: "http" }

Response:
{
  live: true,
  speed: 245,
  country: "US",
  timestamp: 1732525252525
}
```

---

🤝 কন্ট্রিবিউটিং

এই প্রোজেক্ট ওপেন সোর্স। আপনি চাইলে কন্ট্রিবিউট করতে পারেন:

1. 🍴 Fork করুন এই রিপোজিটরি
2. 🌿 Branch তৈরি করুন (git checkout -b feature/AmazingFeature)
3. 💾 Commit করুন (git commit -m 'Add AmazingFeature')
4. 📤 Push করুন (git push origin feature/AmazingFeature)
5. 🔍 Pull Request খুলুন

---

📜 লাইসেন্স

```
MIT License

Copyright (c) 2024 ibrahimkhalil

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software...
```

---

📞 যোগাযোগ

ibrahimkhalil - @ibr4himkh4lil

Dev Info: https://ibrahimkholil.bio.link

Project Link: https://github.com/ibr4himkh4lil/liveproxy

Live Site: https://liveproxy.vercel.app

---

🙏 অ্যাকনলেজমেন্ট

· ProxyScrape - Proxy API
· TheSpeedX - Proxy List
· Vercel - Hosting Platform
· All Proxy Sources for providing free proxies

---

<div align="center">

⭐ প্রোজেক্ট ভালো লাগলে GitHub-এ স্টার দিতে ভুলবেন না! ⭐

Made with ❤️ by ibrahimkhalil

</div>
