import { Metadata } from 'next';

const baseUrl = 'https://www.luffitech.com';

export type BlogPost = {
  slug: string;
  title: string;
  summary: string;
  content: string;
  date: string;
  readTime: string;
  author: string;
  tags: string[];
  featured: boolean;
  image?: string;
  metadata: Metadata;
};

function readingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'mpesa-daraja-api-integration-kenya-complete-guide',
    title: 'M-Pesa Daraja API Integration in Kenya: Complete 2026 Guide',
    summary:
      'Learn how to integrate M-Pesa Daraja API (STK Push, C2B, B2C) into your Kenyan website or web application. Step-by-step tutorial with code examples, sandbox credentials, and production checklist.',
    content: `
<p>If you're building a website or web application for the Kenyan market, integrating M-Pesa isn't optional — it's expected. Over 30 million Kenyans use M-Pesa, and Safaricom's Daraja API makes it possible to accept payments directly on your platform.</p>

<p>In this guide, we'll walk through the complete M-Pesa Daraja API integration process: from registering your developer account to going live in production. We'll cover STK Push (customer-initiated payments), C2B (business-to-business), and B2C (business-to-customer) flows.</p>

<h2>What You'll Need Before Starting</h2>
<ul>
  <li>A Safaricom M-Pesa business account</li>
  <li>A Daraja Developer Portal account (<code>developer.safaricom.co.ke</code>)</li>
  <li>A registered application with API credentials (Consumer Key & Consumer Secret)</li>
  <li>A public HTTPS endpoint (Safaricom callbacks don't work on localhost)</li>
</ul>

<h2>Step 1: Register on the Daraja Developer Portal</h2>
<p>Head to <a href="https://developer.safaricom.co.ke" target="_blank" rel="noopener noreferrer">developer.safaricom.co.ke</a> and create an account. Once verified, log in and navigate to <strong>My Apps</strong> to create a new application.</p>

<p>Choose the APIs you need:</p>
<ul>
  <li><strong>M-Pesa Express (STK Push)</strong> — for customer-initiated payments</li>
  <li><strong>C2B (Business to Business)</strong> — for paybills and till numbers</li>
  <li><strong>B2C (Business to Customer)</strong> — for sending money to customers</li>
</ul>

<p>After creating the app, Safaricom will provide your <strong>Consumer Key</strong> and <strong>Consumer Secret</strong>. Keep these secure — never commit them to version control.</p>

<h2>Step 2: Get Your Access Token</h2>
<p>Before making any API request, you need an OAuth access token. Here's a Node.js example:</p>
<pre><code class="language-javascript">const auth = Buffer.from(
  process.env.MPESA_CONSUMER_KEY + ':' + process.env.MPESA_CONSUMER_SECRET
).toString('base64');

const response = await fetch('https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials', {
  headers: { Authorization: 'Basic ' + auth },
});

const data = await response.json();
const accessToken = data.access_token;</code></pre>

<h2>Step 3: STK Push (Customer-Initiated Payment)</h2>
<p>STK Push is the most common M-Pesa integration. The customer enters their phone number on your site, receives an M-Pesa prompt on their phone, and enters their PIN to complete the payment.</p>

<pre><code class="language-javascript">const timestamp = new Date().toISOString().replace(/[-T:.Z]/g, '').slice(0, 14);
const password = Buffer.from(
  process.env.MPESA_SHORTCODE + process.env.MPESA_PASSKEY + timestamp
).toString('base64');

const response = await fetch('https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest', {
  method: 'POST',
  headers: {
    Authorization: 'Bearer ' + accessToken,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    BusinessShortCode: process.env.MPESA_SHORTCODE,
    Password: password,
    Timestamp: timestamp,
    TransactionType: 'CustomerPayBillOnline',
    Amount: 1000,
    PartyA: '2547XXXXXXXX',
    PartyB: process.env.MPESA_SHORTCODE,
    PhoneNumber: '2547XXXXXXXX',
    CallBackURL: 'https://yourdomain.com/api/mpesa/callback',
    AccountReference: 'LuffiTech',
    TransactionDesc: 'Payment for services',
  }),
});</code></pre>

<h2>Step 4: Handle the Callback</h2>
<p>Safaricom will send a POST request to your <code>CallBackURL</code> with the payment result. You must:</p>
<ul>
  <li>Return HTTP 200 quickly</li>
  <li>Verify the <code>ResultCode</code> (0 = success)</li>
  <li>Update your database with the transaction status</li>
  <li>Send a confirmation to the customer (SMS or email)</li>
</ul>

<h2>Step 5: Going Live</h2>
<p>Before production, you must:</p>
<ol>
  <li>Test all flows in the sandbox</li>
  <li>Apply for production API access on the Daraja portal</li>
  <li>Provide your production URLs and shortcode</li>
  <li>Wait for Safaricom approval (typically 3–7 business days)</li>
</ol>

<h2>Common Errors & How to Fix Them</h2>
<table>
  <thead>
    <tr><th>Error</th><th>Cause</th><th>Fix</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><code>401 Invalid Credentials</code></td>
      <td>Wrong Consumer Key/Secret</td>
      <td>Double-check your app credentials in the Daraja portal</td>
    </tr>
    <tr>
      <td><code>408 Request Timeout</code></td>
      <td>Customer didn't enter PIN in time</td>
      <td>Prompt the customer to retry the payment</td>
    </tr>
    <tr>
      <td><code>Insufficient Funds</code></td>
      <td>Customer wallet balance too low</td>
      <td>Ask customer to top up and retry</td>
    </tr>
    <tr>
      <td><code>Duplicate Initiation</code></td>
      <td>Same transaction initiated twice</td>
      <td>Implement idempotency keys on your end</td>
    </tr>
  </tbody>
</table>

<h2>How Luffi Tech Can Help</h2>
<p>At <strong>Luffi Tech</strong>, we've helped Kenyan businesses integrate M-Pesa Daraja API into custom websites, e-commerce platforms, and USSD systems. Whether you need a simple paybill integration or a full payment gateway with reconciliation dashboards, our team in Nairobi can deliver it.</p>

<p><a href="/contact">Contact us</a> or <a href="https://wa.me/254702104690?text=Hi Luffi Tech, I need help with M-Pesa Daraja API integration." target="_blank" rel="noopener noreferrer">message us on WhatsApp</a> to discuss your project.</p>
    `,
    date: '2026-01-15',
    readTime: readingTime('placeholder'),
    author: 'Luffi Tech Engineering Team',
    tags: ['M-Pesa', 'Daraja API', 'Payments', 'Kenya', 'Web Development'],
    featured: true,
    metadata: {
      title: 'M-Pesa Daraja API Integration in Kenya: Complete 2026 Guide | Luffi Tech',
      description:
        'Step-by-step guide to integrating M-Pesa Daraja API (STK Push, C2B, B2C) into your Kenyan website. Code examples, sandbox credentials, and production checklist from Luffi Tech, Nairobi.',
      alternates: { canonical: '/blog/mpesa-daraja-api-integration-kenya-complete-guide' },
      openGraph: {
        title: 'M-Pesa Daraja API Integration in Kenya: Complete 2026 Guide',
        description:
          'Learn how to integrate M-Pesa Daraja API into your Kenyan website or web application. Step-by-step tutorial from Luffi Tech, Nairobi.',
        url: `${baseUrl}/blog/mpesa-daraja-api-integration-kenya-complete-guide`,
        siteName: 'Luffi Tech',
        type: 'article',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'M-Pesa Daraja API Integration in Kenya: Complete 2026 Guide',
        description:
          'Step-by-step M-Pesa Daraja API integration tutorial for Kenyan developers.',
      },
      other: {
        'geo.region': 'KE-30',
        'geo.placename': 'Nairobi, Kenya',
      },
    },
  },
  {
    slug: 'ussd-kenya-africas-talking-beginners-guide',
    title: "USSD Kenya: Build a USSD Application with Africa's Talking (Beginner Guide)",
    summary:
      'Build USSD applications for Kenya using Africa\'s Talking API. Complete beginner guide with code examples for menu-based services, USSD gates, and mobile banking workflows.',
    content: `
<p>USSD (Unstructured Supplementary Service Data) is one of the most accessible ways to reach Kenyan mobile users. No smartphone, no internet, no app download required — just a simple *code# on any feature phone.</p>

<p>In Kenya, USSD powers everything from mobile banking (M-Pesa *234#) to agricultural information services and SACCO loan applications. With <strong>Africa's Talking</strong>, you can build and deploy USSD applications quickly.</p>

<h2>What You'll Learn</h2>
<ul>
  <li>How USSD sessions work in Kenya</li>
  <li>Setting up Africa's Talking USSD gateway</li>
  <li>Building a multi-level menu (demo: SACCO loan application)</li>
  <li>Handling user input and session state</li>
  <li>Deploying to production</li>
</ul>

<h2>How USSD Works</h2>
<p>When a user dials your USSD code (e.g., <code>*384*1234#</code>):</p>
<ol>
  <li>The request goes to their mobile network operator</li>
  <li>The operator forwards it to Africa's Talking</li>
  <li>Africa's Talking sends a POST request to your webhook URL</li>
  <li>Your server responds with the next menu screen or final response</li>
  <li>The user sees the response on their phone</li>
</ol>

<h2>Step 1: Set Up Africa's Talking</h2>
<ul>
  <li>Create an account at <a href="https://africastalking.com" target="_blank" rel="noopener noreferrer">africastalking.com</a></li>
  <li>Navigate to the USSD section in your dashboard</li>
  <li>Create a new USSD application with your USSD code</li>
  <li>Set your webhook URL (your public HTTPS endpoint)</li>
</ul>

<h2>Step 2: Build the USSD Menu (Node.js Example)</h2>
<pre><code class="language-javascript">import { createServer } from 'http';

const server = createServer(async (req, res) => {
  if (req.method === 'POST' && req.url === '/ussd') {
    let body = '';
    for await (const chunk of req) body += chunk;
    const params = new URLSearchParams(body);

    const sessionId = params.get('sessionId');
    const serviceCode = params.get('serviceCode');
    const phoneNumber = params.get('phoneNumber');
    const text = params.get('text') || '';

    let response = '';

    if (text === '') {
      response = \`CON Welcome to Luffi Tech Services
1. Apply for Loan
2. Check Balance
3. Contact Support\`;
    }
    else if (text === '1') {
      response = \`CON Enter your ID number:\`;
    }
    else if (text.startsWith('1*')) {
      const idNumber = text.split('*')[1];
      response = \`END Thank you! Your loan application with ID \${idNumber} has been received.\`;
    }
    else {
      response = \`END Invalid selection. Please try again.\`;
    }

    res.setHeader('Content-Type', 'text/plain');
    res.end(response);
  }
});

server.listen(3000);</code></pre>

<p><strong>CON</strong> means the session continues (shows more menus). <strong>END</strong> means the session ends.</p>

<h2>Step 3: Handling Session State</h2>
<p>USSD is stateless — each request is independent. To build multi-step menus, you need to store session state in a database (Redis, PostgreSQL, or MongoDB) keyed by <code>sessionId</code> and <code>phoneNumber</code>.</p>

<h2>Production Checklist</h2>
<ul>
  <li>Use HTTPS for your webhook (Africa's Talking requires it)</li>
  <li>Validate phone numbers (Kenya format: <code>2547XXXXXXXX</code>)</li>
  <li>Implement rate limiting to prevent abuse</li>
  <li>Log all USSD interactions for debugging</li>
  <li>Test with multiple networks (Safaricom, Airtel, Telkom)</li>
</ul>

<h2>Need Help Building Your USSD App?</h2>
<p>Luffi Tech builds USSD gateways, mobile banking platforms, and SMS notification systems for businesses across Kenya. From SACCO loan systems to agricultural info services, we deliver production-ready USSD solutions.</p>

<p><a href="/contact">Contact us</a> or <a href="https://wa.me/254702104690?text=Hi Luffi Tech, I need help building a USSD application for Kenya." target="_blank" rel="noopener noreferrer">WhatsApp us</a> today.</p>
    `,
    date: '2026-02-01',
    readTime: readingTime('placeholder'),
    author: 'Luffi Tech Engineering Team',
    tags: ['USSD', "Africa's Talking", 'Mobile', 'Kenya', 'Fintech'],
    featured: false,
    metadata: {
      title: "USSD Kenya: Build a USSD Application with Africa's Talking | Luffi Tech",
      description:
        'Beginner guide to building USSD applications for Kenya with Africa\'s Talking API. Multi-level menus, session handling, and production deployment.',
      alternates: { canonical: '/blog/ussd-kenya-africas-talking-beginners-guide' },
      openGraph: {
        title: "USSD Kenya: Build a USSD Application with Africa's Talking",
        description:
          'Build USSD applications for Kenya using Africa\'s Talking API. Complete beginner guide from Luffi Tech, Nairobi.',
        url: `${baseUrl}/blog/ussd-kenya-africas-talking-beginners-guide`,
        siteName: 'Luffi Tech',
        type: 'article',
      },
      twitter: {
        card: 'summary_large_image',
        title: "USSD Kenya: Build a USSD Application with Africa's Talking",
        description:
          'Beginner guide to building USSD applications for Kenya with Africa\'s Talking API.',
      },
      other: {
        'geo.region': 'KE-30',
        'geo.placename': 'Nairobi, Kenya',
      },
    },
  },
  {
    slug: 'ai-automation-nairobi-small-businesses-2026',
    title: 'AI Automation for Nairobi Small Businesses: 2026 Guide',
    summary:
      'How Nairobi small businesses can use AI automation to save time and reduce costs. Practical use cases: chatbots, invoice processing, lead qualification, and appointment scheduling.',
    content: `
<p>AI automation isn't just for large corporations anymore. Nairobi small businesses — from law firms and clinics to e-commerce stores and restaurants — are using AI to handle repetitive tasks, respond to customers faster, and cut operational costs.</p>

<p>In this guide, we cover practical AI automation use cases for Kenyan SMEs in 2026, with examples you can implement this month.</p>

<h2>Use Case 1: AI Customer Support Chatbot</h2>
<p>Instead of answering the same questions on WhatsApp and Facebook Messenger, deploy an AI chatbot trained on your business information:</p>
<ul>
  <li>Business hours and location</li>
  <li>Pricing and service packages</li>
  <li>FAQs (delivery, returns, booking)</li>
  <li>Escalation to human agent when needed</li>
</ul>

<p><strong>Tools:</strong> Custom GPT, Voiceflow, or Luffi Tech's AI agent platform.</p>

<h2>Use Case 2: Invoice & Receipt Processing</h2>
<p>Manual data entry from M-Pesa statements, supplier invoices, and receipts wastes hours every week. AI-powered OCR can extract:</p>
<ul>
  <li>Transaction amounts and dates</li>
  <li>Vendor names and phone numbers</li>
  <li>Tax amounts (VAT)</li>
  <li>Invoice numbers</li>
</ul>

<p>Export directly to Excel or your accounting software.</p>

<h2>Use Case 3: Lead Qualification</h2>
<p>When leads come in via your website or WhatsApp, an AI agent can:</p>
<ul>
  <li>Ask qualifying questions (budget, timeline, location)</li>
  <li>Score leads (hot, warm, cold)</li>
  <li>Book appointments on your calendar</li>
  <li>Send follow-up messages automatically</li>
</ul>

<h2>Use Case 4: Appointment Scheduling</h2>
<p>For clinics, salons, and consultants, AI can handle the full booking flow:</p>
<ul>
  <li>Check availability</li>
  <li>Book time slots</li>
  <li>Send reminders via SMS</li>
  <li>Handle cancellations and rescheduling</li>
</ul>

<h2>Getting Started: A 4-Week Plan</h2>
<table>
  <thead>
    <tr><th>Week</th><th>Focus</th><th>Outcome</th></tr>
  </thead>
  <tbody>
    <tr><td>1</td><td>Identify one repetitive task to automate</td><td>Process documented</td></tr>
    <tr><td>2</td><td>Choose AI tool and set up integration</td><td>Prototype working</td></tr>
    <tr><td>3</td><td>Train AI on your business data</td><td>Accurate responses</td></tr>
    <tr><td>4</td><td>Go live and measure time saved</td><td>ROI calculated</td></tr>
  </tbody>
</table>

<h2>How Luffi Tech Can Help</h2>
<p>We build custom AI agents, LLM RAG systems, and business automation workflows for Nairobi companies. Whether you need a WhatsApp chatbot, invoice processing automation, or lead qualification AI, our engineering team delivers it.</p>

<p><a href="/contact">Contact us</a> for a free automation consultation.</p>
    `,
    date: '2026-02-15',
    readTime: readingTime('placeholder'),
    author: 'Luffi Tech Engineering Team',
    tags: ['AI', 'Automation', 'Nairobi', 'Small Business', 'LLM'],
    featured: false,
    metadata: {
      title: 'AI Automation for Nairobi Small Businesses: 2026 Guide | Luffi Tech',
      description:
        'Practical AI automation use cases for Nairobi small businesses: chatbots, invoice processing, lead qualification, and appointment scheduling. From Luffi Tech.',
      alternates: { canonical: '/blog/ai-automation-nairobi-small-businesses-2026' },
      openGraph: {
        title: 'AI Automation for Nairobi Small Businesses: 2026 Guide',
        description:
          'How Nairobi SMEs can use AI automation to save time and cut costs. Guide from Luffi Tech, Nairobi.',
        url: `${baseUrl}/blog/ai-automation-nairobi-small-businesses-2026`,
        siteName: 'Luffi Tech',
        type: 'article',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'AI Automation for Nairobi Small Businesses: 2026 Guide',
        description:
          'Practical AI automation for Kenyan SMEs from Luffi Tech.',
      },
      other: {
        'geo.region': 'KE-30',
        'geo.placename': 'Nairobi, Kenya',
      },
    },
  },
];

export function getAllBlogPosts(): BlogPost[] {
  return BLOG_POSTS.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getFeaturedPosts(): BlogPost[] {
  return getAllBlogPosts().filter((post) => post.featured);
}

export function getAllBlogSlugs(): string[] {
  return BLOG_POSTS.map((post) => post.slug);
}

export function getBlogMetadata(slug: string): Metadata {
  const post = getBlogPost(slug);
  if (!post) {
    return {
      title: 'Blog | Luffi Tech',
      description: 'Read the latest articles from Luffi Tech on software development, AI automation, and Kenyan business technology.',
    };
  }
  return post.metadata;
}