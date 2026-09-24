export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  badge?: string;
  isPopular?: boolean;
  features: {
    title: string;
    included: boolean;
    note?: string;
  }[];
  ctaText: string;
}

export interface FeatureItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  description: string;
  badge?: string;
  category: 'core' | 'ai' | 'analytics' | 'utility';
  isLiveInApp?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface CreditCardItem {
  id: string;
  name: string;
  annualFee: string;
  rewardCategory: string;
  bestFor: string;
  highlightBenefit: string;
  network: string;
  colorGradient: string;
}

export const SITE_CONFIG = {
  // Brand & General
  APP_NAME: 'Expense Tracker',
  TAGLINE: 'Know Where Your Money Goes.',
  SUBTITLE: 'Expense Tracker automatically helps you track expenses, understand your spending and manage your money with an AI-powered financial assistant.',
  SUPPORT_EMAIL: 'support@expensetracker.app',
  LEGAL_BUSINESS_NAME: 'Expense Tracker Technologies',
  REGISTERED_ADDRESS: 'Bengaluru, Karnataka, India',
  DATA_CONTROLLER_EMAIL: 'privacy@expensetracker.app',

  // URLs (Placeholders that can be easily replaced)
  WEBSITE_URL: 'https://expensetracker.app',
  PLAY_STORE_URL: '#', // Replace with Google Play Store URL once published
  INSTAGRAM_URL: '#',
  YOUTUBE_URL: '#',
  X_URL: '#',
  PRIVACY_URL: '/privacy',
  TERMS_URL: '/terms',
  CONTACT_URL: '/contact',

  // Pricing configuration
  PRICING: {
    FREE_PRICE: '₹0',
    SILVER_PRICE: '₹59',
    PREMIUM_PRICE: '₹149',
    CURRENCY_SYMBOL: '₹',
  },

  // Trust Microcopy
  TRUST_POINTS: [
    { title: 'Built for everyday spending', desc: 'Optimized for high-frequency UPI, cards, and daily micro-transactions' },
    { title: 'Designed with privacy in mind', desc: 'Transparent permissions with explicit controls and revocable access' },
    { title: 'Your finances, your control', desc: 'No forced lock-in, no selling personal data to advertising brokers' },
  ],

  // Disclaimers
  FINANCIAL_DISCLAIMER:
    'Expense Tracker provides expense tracking, analysis and financial-product information. It is not a bank, lender, investment adviser or financial adviser. Credit-card information and benefits may change and users should verify current terms with the issuer.',
  
  AFFILIATE_DISCLOSURE:
    'Relevant offers and financial-product recommendations may occasionally earn a referral commission when available. Recommendations are grounded in spending patterns and preference criteria, not advertising auctions.',

  SMART_DETECTION_DISCLAIMER:
    'Designed to reduce false expense entries by analyzing message patterns. Detection accuracy depends on supported notification structures and bank formats.',

  // 8 Core Features (from Specification)
  FEATURES: [
    {
      id: 'auto-tracking',
      number: '01',
      title: 'Automatic Expense Tracking',
      shortDesc: 'Supported SMS & notifications',
      description: 'Detect eligible transactions from supported SMS and notification sources so you spend less time entering expenses manually.',
      badge: 'Core Feature',
      category: 'core',
      isLiveInApp: true,
    },
    {
      id: 'smart-detection',
      number: '02',
      title: 'Smart Transaction Detection',
      shortDesc: 'Filters deals & promotions',
      description: 'Identify genuine payment activity while filtering out common promotional messages, deal alerts and product-price notifications.',
      badge: 'Smart Filter',
      category: 'core',
      isLiveInApp: true,
    },
    {
      id: 'ai-agent',
      number: '03',
      title: 'AI Expense Agent',
      shortDesc: 'Natural language management',
      description: 'Ask your financial assistant to add, find, edit and analyze expenses using natural language through chat or voice prompts.',
      badge: 'AI Powered',
      category: 'ai',
      isLiveInApp: true,
    },
    {
      id: 'interactive-reports',
      number: '04',
      title: 'Interactive Reports',
      shortDesc: 'Daily, weekly & monthly charts',
      description: 'Understand where your money goes with daily, weekly, monthly and category-based spending insights and trend visualization.',
      badge: 'Analytics',
      category: 'analytics',
      isLiveInApp: true,
    },
    {
      id: 'expense-splitting',
      number: '05',
      title: 'Expense Splitting & UPI QR',
      shortDesc: 'Split bills & instant UPI QR',
      description: 'Split expenses with friends and generate a UPI payment QR when needed. Already functional in the Android app.',
      badge: 'Live on Android',
      category: 'utility',
      isLiveInApp: true,
    },
    {
      id: 'credit-card-discovery',
      number: '06',
      title: 'Credit Card Discovery',
      shortDesc: 'Spending-based card matches',
      description: 'Discover cards and benefits that may fit your spending patterns and preferences based on your top transaction categories.',
      badge: 'Smart Matching',
      category: 'analytics',
      isLiveInApp: true,
    },
    {
      id: 'recurring-expenses',
      number: '07',
      title: 'Recurring Expense Detection',
      shortDesc: 'Subscriptions & monthly commitments',
      description: 'Identify subscriptions and recurring payments so you can understand your regular monthly commitments and scheduled debits.',
      badge: 'Subscriptions',
      category: 'analytics',
      isLiveInApp: true,
    },
    {
      id: 'personalized-insights',
      number: '08',
      title: 'Personalized Financial Insights',
      shortDesc: 'Trends & habit optimization',
      description: 'Use your spending history to understand trends, habits and opportunities to manage your money more intentionally.',
      badge: 'More Arriving Soon',
      category: 'ai',
      isLiveInApp: false,
    },
  ] as FeatureItem[],

  // How it works 4-step flow
  HOW_IT_WORKS_STEPS: [
    {
      step: '01',
      title: 'Connect your account',
      description: 'Grant notification and SMS permissions for your active payment apps and bank alert channels with complete privacy isolation.',
    },
    {
      step: '02',
      title: 'Track your expenses',
      description: 'The app automatically recognizes debits, categorizes merchants, and lets you add manual cash or custom spends anytime.',
    },
    {
      step: '03',
      title: 'Ask your AI assistant',
      description: 'Converse in natural language to query past spends, modify categories, log split bills, or generate quick UPI QR codes.',
    },
    {
      step: '04',
      title: 'Understand and improve spending',
      description: 'Review interactive weekly distributions, merchant breakdowns, and discover cards optimized for your personal expenditure.',
    },
  ],

  // Pricing Plans
  PRICING_PLANS: [
    {
      id: 'free',
      name: 'Free',
      price: '₹0',
      period: 'forever',
      description: 'Essential automatic expense tracking and manual logging for daily clarity.',
      ctaText: 'Coming Soon on Android',
      features: [
        { title: 'Basic expense tracking from notifications', included: true },
        { title: 'Manual expense logging & editing', included: true },
        { title: 'Basic weekly & monthly overview reports', included: true },
        { title: 'Expense splitting & UPI QR generation', included: true },
        { title: 'Bank & account allocation grouping', included: true },
        { title: 'Limited AI assistant queries per month', included: true, note: '5 queries / month' },
        { title: 'Smart subscription tracking', included: false },
        { title: 'Card optimization & discovery', included: false },
        { title: 'Advanced multi-month forecasting', included: false },
      ],
    },
    {
      id: 'silver',
      name: 'Silver',
      price: '₹59',
      period: 'per month',
      badge: 'Popular',
      isPopular: true,
      description: 'For active spenders who want smart categorization and expanded AI guidance.',
      ctaText: 'Coming Soon on Android',
      features: [
        { title: 'Everything in Free tier', included: true },
        { title: 'Extended AI expense assistant usage', included: true, note: 'Up to 50 queries / month' },
        { title: 'Advanced category reports & custom tags', included: true },
        { title: 'Smart transaction categorization refinement', included: true },
        { title: 'Recurring expenses & subscription detection', included: true },
        { title: 'Spending trend insights & alerts', included: true },
        { title: 'Basic credit card recommendation insights', included: true },
        { title: 'Priority support assistance', included: true },
        { title: 'Deep AI financial forecasting & goal audits', included: false },
      ],
    },
    {
      id: 'premium',
      name: 'Premium',
      price: '₹149',
      period: 'per month',
      badge: 'Full Power',
      description: 'Maximum financial intelligence with unlimited AI assistant power and card optimization.',
      ctaText: 'Coming Soon on Android',
      features: [
        { title: 'Everything in Silver tier', included: true },
        { title: 'Unlimited AI financial assistant usage', included: true },
        { title: 'Voice & text expense logging & editing', included: true },
        { title: 'Advanced credit card fee & reward optimization', included: true },
        { title: 'Monthly AI-generated financial summary report', included: true },
        { title: 'Future spending forecasting & budget goals', included: true, note: 'Arriving soon' },
        { title: 'Multi-bank deep merchant reconciliation', included: true },
        { title: 'VIP early access to all beta features', included: true },
        { title: 'Dedicated priority product assistance', included: true },
      ],
    },
  ] as PricingPlan[],

  // Example Credit Cards (Demo data as specified)
  SAMPLE_CREDIT_CARDS: [
    {
      id: 'hdfc-swiggy',
      name: 'HDFC Swiggy Card',
      annualFee: '₹500 annual fee',
      rewardCategory: 'Food & Dining',
      bestFor: 'Online food spends',
      highlightBenefit: '10% cashback on Swiggy orders (Food, Instamart, Dineout)',
      network: 'Mastercard',
      colorGradient: 'from-[#e2501a]/30 to-[#121c27]',
    },
    {
      id: 'sbi-cashback',
      name: 'SBI Cashback Card',
      annualFee: '₹999 annual fee',
      rewardCategory: 'Online Shopping',
      bestFor: 'Online spends',
      highlightBenefit: '5% cashback on eligible online merchants with no merchant lock-in',
      network: 'Visa',
      colorGradient: 'from-[#0284c7]/30 to-[#121c27]',
    },
    {
      id: 'airtel-axis',
      name: 'Airtel Axis Bank Card',
      annualFee: '₹500 annual fee',
      rewardCategory: 'Utilities & Bills',
      bestFor: 'Monthly bill payments',
      highlightBenefit: '25% cashback on Airtel mobile, DTH and Wi-Fi recharges',
      network: 'RuPay',
      colorGradient: 'from-[#dc2626]/20 to-[#121c27]',
    },
  ] as CreditCardItem[],

  // 14 FAQs (Exact specifications from user prompt)
  FAQS: [
    {
      id: 'what-is-app',
      question: 'What is Expense Tracker?',
      answer: 'Expense Tracker is an AI-powered personal expense and finance assistant for Android. It helps you track everyday expenditure, understand trends across banks and payment methods, categorize purchases, and converse with an intelligent assistant to keep your financial life organized.',
      category: 'General',
    },
    {
      id: 'how-auto-works',
      question: 'How does automatic expense tracking work?',
      answer: 'The Android application monitors eligible transactional notifications and SMS messages delivered to your device from supported banking apps, UPI providers, and payment gateways. When a genuine debit transaction is detected, the app automatically captures the amount, date, and merchant.',
      category: 'Tracking',
    },
    {
      id: 'sms-permissions',
      question: 'Does the app read SMS or notifications?',
      answer: 'Yes, with your explicit permission. Android requires specific notification listener and SMS permissions to detect payment alerts. The app parses only transactional notifications to identify spend activity. You can inspect, modify, or revoke permissions at any time through your Android system settings.',
      category: 'Privacy',
    },
    {
      id: 'promotional-messages',
      question: 'How does the app handle promotional messages?',
      answer: 'Expense Tracker includes smart transaction detection designed to reduce false expense entries. Messages containing marketing deals, discount coupons (e.g. "Amazon Deal — only ₹1,999!"), or price drops are recognized as promotional and ignored, while genuine debit receipts (e.g. "₹1,999 debited from your account") are recorded.',
      category: 'Technology',
    },
    {
      id: 'manual-add',
      question: 'Can I manually add expenses?',
      answer: 'Yes. In addition to automatic detection, you can manually add cash payments, unlisted offline purchases, or custom expenses anytime using the floating action button or by typing/speaking to the AI assistant.',
      category: 'Usage',
    },
    {
      id: 'talk-to-ai',
      question: 'Can I talk to the AI assistant?',
      answer: 'Yes. The built-in AI Expense Agent accepts natural language queries. You can ask questions such as "How much did I spend on food this month?" or "Find my biggest expenses" to get instant, conversational financial clarity.',
      category: 'AI Assistant',
    },
    {
      id: 'edit-with-ai',
      question: 'Can I edit expenses using AI?',
      answer: 'Yes. You can instruct the assistant using conversational language such as "Add ₹450 spent at Starbucks for coffee" or "Change my last payment purpose to Groceries" and the agent will update your records accordingly.',
      category: 'AI Assistant',
    },
    {
      id: 'split-expense',
      question: 'Can I split an expense?',
      answer: 'Yes. Expense splitting is a fully implemented capability in the Android app. You can divide bill amounts evenly or custom-split them with friends and contacts directly from an expense item.',
      category: 'Splitting',
    },
    {
      id: 'generate-upi-qr',
      question: 'Can I generate a UPI QR?',
      answer: 'Yes. When splitting an expense or requesting reimbursement, the app generates a dynamic UPI QR code containing the exact split amount and payee VPA, allowing your companions to scan and settle immediately with any UPI app.',
      category: 'Splitting',
    },
    {
      id: 'card-recommendations',
      question: 'How are credit cards recommended?',
      answer: 'The app analyzes your aggregate category spending patterns (for example, if high proportions go to dining, groceries, or utilities) and highlights card benefits that may offer relevant reward rates or cashback for those specific categories. These are informational discovery suggestions and not guaranteed approvals.',
      category: 'Cards',
    },
    {
      id: 'bank-direct-access',
      question: 'Does the app access my bank account directly?',
      answer: 'No. Expense Tracker does not require your net-banking passwords, UPI PINs, or direct API access to your bank accounts. It relies on standard device-level notification and SMS debit alerts that banks already broadcast to your phone.',
      category: 'Security',
    },
    {
      id: 'data-sharing-advertisers',
      question: 'Is my financial information shared with advertisers?',
      answer: 'No. We do not sell, rent, or trade your personal financial transaction records to third-party advertising brokers or data aggregators. Data processing is dedicated solely to providing your expense tracking, reports, and AI assistant features.',
      category: 'Privacy',
    },
    {
      id: 'delete-data',
      question: 'Can I delete my data?',
      answer: 'Yes. You have full control over your financial records. You can delete individual transactions, clear categorized accounts, or remove stored application data at any time from within the app settings.',
      category: 'Privacy',
    },
    {
      id: 'android-availability',
      question: 'Will the app be available on Android?',
      answer: 'Expense Tracker is actively developed natively for Android. An early access build is being prepared for Google Play distribution. You can follow updates on this site to join early access when slots open.',
      category: 'General',
    },
  ] as FAQItem[],
};
