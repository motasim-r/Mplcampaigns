import { useMemo, useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  Bot,
  CheckCircle2,
  ChevronRight,
  Heart,
  Mail,
  Menu,
  MessageSquare,
  Phone,
  RotateCcw,
  Search,
  ShieldCheck,
  ShoppingBag,
  SlidersHorizontal,
  Sparkles,
  Star,
  Ticket,
  Truck,
  User,
  Zap,
} from "lucide-react";

type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  tags: string[];
  highlight: string;
  tone: string;
  badge?: string;
};

type ChatMessage = {
  id: string;
  role: "assistant" | "user";
  message: string;
};

type Prompt = {
  label: string;
  message: string;
  tags: string[];
  followUp: string;
};

type Category = {
  label: string;
  description: string;
  tag: string;
  tone: string;
};

const products: Product[] = [
  {
    id: "hydralite",
    name: "HydraLite Gel Moisturizer",
    category: "Skincare",
    price: 39,
    rating: 4.7,
    reviews: 312,
    tags: ["skincare", "oily", "gel", "under-50", "sensitive"],
    highlight: "Weightless gel hydration with niacinamide.",
    badge: "Best for oily skin",
    tone: "radial-gradient(circle at top, #fbead2 0%, #f3d6b7 55%, #f7f2ea 100%)",
  },
  {
    id: "glowrx",
    name: "GlowRx Aqua Shield",
    category: "Skincare",
    price: 46,
    rating: 4.6,
    reviews: 210,
    tags: ["skincare", "oily", "under-50", "fast-ship"],
    highlight: "Matte finish, absorbs fast.",
    tone: "radial-gradient(circle at top, #f7e4c7 0%, #f2d6b8 50%, #f9f3ea 100%)",
  },
  {
    id: "c-calm",
    name: "C+ Calm Serum",
    category: "Skincare",
    price: 58,
    rating: 4.8,
    reviews: 421,
    tags: ["skincare", "sensitive", "serum", "vitamin-c"],
    highlight: "Low-irritation vitamin C blend.",
    badge: "Sensitive-safe",
    tone: "radial-gradient(circle at top, #f9eadc 0%, #f4dcc6 50%, #f7f1e8 100%)",
  },
  {
    id: "stridepro",
    name: "StridePro X9",
    category: "Running",
    price: 89,
    rating: 4.5,
    reviews: 188,
    tags: ["running", "cushioning", "fast-ship", "black"],
    highlight: "Plush cushioning for long runs.",
    badge: "2-day shipping",
    tone: "radial-gradient(circle at top, #dbe7f5 0%, #c7d7ea 55%, #f2f5f9 100%)",
  },
  {
    id: "velocity",
    name: "Velocity Cloud",
    category: "Running",
    price: 94,
    rating: 4.4,
    reviews: 154,
    tags: ["running", "lightweight", "black"],
    highlight: "Lightweight stride with spring return.",
    tone: "radial-gradient(circle at top, #d9e3f0 0%, #c3d1e4 55%, #eef2f7 100%)",
  },
  {
    id: "breeze",
    name: "Breeze Linen Shirt",
    category: "Apparel",
    price: 68,
    rating: 4.6,
    reviews: 96,
    tags: ["apparel", "linen", "breathable", "relaxed"],
    highlight: "Relaxed fit, breathable weave.",
    tone: "radial-gradient(circle at top, #efe4d6 0%, #e3d6c5 55%, #f5efe6 100%)",
  },
  {
    id: "auralux",
    name: "Auralux Quiet ANC",
    category: "Audio",
    price: 179,
    rating: 4.7,
    reviews: 502,
    tags: ["audio", "noise", "wireless", "under-200"],
    highlight: "Deep noise cancelling with 40h battery.",
    badge: "Editors pick",
    tone: "radial-gradient(circle at top, #dbe4db 0%, #c7d3c6 55%, #eff4ef 100%)",
  },
  {
    id: "echopods",
    name: "EchoPods Air",
    category: "Audio",
    price: 129,
    rating: 4.3,
    reviews: 288,
    tags: ["audio", "wireless", "noise", "under-200", "fast-ship"],
    highlight: "Compact ANC earbuds with clear calls.",
    tone: "radial-gradient(circle at top, #dae2dc 0%, #c1cec5 55%, #eff3f0 100%)",
  },
];

const categories: Category[] = [
  {
    label: "Skincare",
    description: "Hydration, serums, daily care",
    tag: "skincare",
    tone: "linear-gradient(135deg, #f6e6d2, #fdf8f2)",
  },
  {
    label: "Running",
    description: "Cushioning, speed, recovery",
    tag: "running",
    tone: "linear-gradient(135deg, #dfe9f6, #f5f8fb)",
  },
  {
    label: "Audio",
    description: "Wireless, ANC, studio sound",
    tag: "audio",
    tone: "linear-gradient(135deg, #dee6df, #f4f8f4)",
  },
  {
    label: "Apparel",
    description: "Linen, layering, essentials",
    tag: "apparel",
    tone: "linear-gradient(135deg, #ede1d1, #fbf6ef)",
  },
];

const quickPrompts: Prompt[] = [
  {
    label: "Under $50",
    message: "I need options under $50.",
    tags: ["under-50"],
    followUp: "Got it. Do you prefer gel or cream texture?",
  },
  {
    label: "Sensitive skin",
    message: "My skin is sensitive.",
    tags: ["sensitive"],
    followUp: "I will avoid irritation. Do you want fragrance-free?",
  },
  {
    label: "Running shoes",
    message: "Looking for running shoes.",
    tags: ["running"],
    followUp: "Cushioning or speed focused?",
  },
  {
    label: "Noise cancelling",
    message: "Need noise cancelling headphones.",
    tags: ["audio", "noise"],
    followUp: "Over-ear comfort or compact earbuds?",
  },
  {
    label: "Breathable linen",
    message: "I want a breathable linen shirt.",
    tags: ["apparel", "linen", "breathable"],
    followUp: "Relaxed or tailored fit?",
  },
];

const tagLabels: Record<string, string> = {
  "under-50": "Budget under $50",
  oily: "Oily skin",
  gel: "Gel texture",
  sensitive: "Sensitive skin",
  running: "Running shoes",
  noise: "Noise cancelling",
  linen: "Linen fabric",
  breathable: "Breathable",
  "fast-ship": "Fast shipping",
  black: "Black colorway",
  wireless: "Wireless",
  skincare: "Skincare",
  apparel: "Apparel",
  audio: "Audio",
};

const filterChips = ["under-50", "fast-ship", "sensitive", "oily", "wireless", "black", "breathable", "noise"];

const tagMatchers: Array<{ tag: string; keywords: string[] }> = [
  { tag: "under-50", keywords: ["under $50", "under 50", "below 50", "budget"] },
  { tag: "oily", keywords: ["oily", "oil control"] },
  { tag: "gel", keywords: ["gel"] },
  { tag: "sensitive", keywords: ["sensitive", "gentle"] },
  { tag: "running", keywords: ["running", "runner", "marathon"] },
  { tag: "noise", keywords: ["noise", "anc", "cancel", "headphones"] },
  { tag: "linen", keywords: ["linen"] },
  { tag: "breathable", keywords: ["breathable"] },
  { tag: "fast-ship", keywords: ["fast", "quick", "shipping"] },
  { tag: "black", keywords: ["black"] },
  { tag: "wireless", keywords: ["wireless", "bluetooth"] },
  { tag: "skincare", keywords: ["skincare", "moisturizer", "serum", "skin"] },
  { tag: "apparel", keywords: ["apparel", "shirt", "linen"] },
  { tag: "audio", keywords: ["audio", "headphones", "earbuds"] },
];

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
];

const priceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

function deriveTags(text: string) {
  const normalized = text.toLowerCase();
  return tagMatchers
    .filter(({ keywords }) => keywords.some((keyword) => normalized.includes(keyword)))
    .map(({ tag }) => tag);
}

function buildAssistantReply(message: string, tags: string[]) {
  if (tags.includes("skincare") || tags.includes("oily") || tags.includes("gel")) {
    return "I can refine this for skincare. Want a matte finish or extra hydration?";
  }
  if (tags.includes("running")) {
    return "Got it. Do you want more cushioning or lightweight speed?";
  }
  if (tags.includes("noise") || tags.includes("audio")) {
    return "Do you prefer over-ear comfort or pocket-sized earbuds?";
  }
  if (tags.includes("linen") || tags.includes("apparel")) {
    return "Relaxed fit or tailored? I can narrow it down.";
  }
  if (message.trim().length === 0) {
    return "Tell me what you are shopping for, and I will guide you.";
  }
  return "Want me to compare top picks or filter by budget and fit?";
}

function matchScore(product: Product, tags: string[], query: string) {
  const normalizedQuery = query.toLowerCase();
  const tagScore = tags.reduce((score, tag) => score + (product.tags.includes(tag) ? 1 : 0), 0);
  const queryScore =
    normalizedQuery.length > 0 &&
    (product.name.toLowerCase().includes(normalizedQuery) || product.category.toLowerCase().includes(normalizedQuery))
      ? 1
      : 0;
  return tagScore + queryScore;
}

export default function StorefrontPage() {
  const [query, setQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [sortOption, setSortOption] = useState("featured");
  const [captureOpen, setCaptureOpen] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      message: "Hi, I am Athena. Tell me what you want and I will curate the best picks.",
    },
  ]);
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [consent, setConsent] = useState(false);
  const [identitySaved, setIdentitySaved] = useState(false);

  const filteredProducts = useMemo(() => {
    const hasFilters = submittedQuery.trim().length > 0 || activeTags.length > 0;
    const scored = products.map((product) => ({
      product,
      score: matchScore(product, activeTags, submittedQuery),
    }));
    let filtered = hasFilters ? scored.filter(({ score }) => score > 0) : scored;

    if (sortOption === "price-low") {
      filtered = [...filtered].sort((a, b) => a.product.price - b.product.price);
    } else if (sortOption === "price-high") {
      filtered = [...filtered].sort((a, b) => b.product.price - a.product.price);
    } else if (sortOption === "rating") {
      filtered = [...filtered].sort((a, b) => b.product.rating - a.product.rating);
    } else {
      filtered = [...filtered].sort((a, b) => b.score - a.score || b.product.rating - a.product.rating);
    }

    return filtered.map(({ product }) => product);
  }, [activeTags, submittedQuery, sortOption]);

  const recommendations = useMemo(() => {
    const scored = products.map((product) => ({
      product,
      score: matchScore(product, activeTags, submittedQuery),
    }));
    const ranked = (activeTags.length || submittedQuery)
      ? scored.sort((a, b) => b.score - a.score)
      : scored.sort((a, b) => b.product.rating - a.product.rating);

    return ranked.slice(0, 3).map(({ product }) => product);
  }, [activeTags, submittedQuery]);

  const visibleMessages = useMemo(() => messages.slice(-6), [messages]);

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) {
      return;
    }
    const newTags = deriveTags(trimmed);
    setSubmittedQuery(trimmed);
    setActiveTags((prev) => Array.from(new Set([...prev, ...newTags])));
    setChatOpen(true);
    setMessages((prev) => [
      ...prev,
      { id: `user-${Date.now()}`, role: "user", message: trimmed },
      { id: `assistant-${Date.now()}`, role: "assistant", message: buildAssistantReply(trimmed, newTags) },
    ]);
  };

  const handlePrompt = (prompt: Prompt) => {
    setChatOpen(true);
    setActiveTags((prev) => Array.from(new Set([...prev, ...prompt.tags])));
    setMessages((prev) => [
      ...prev,
      { id: `user-${Date.now()}`, role: "user", message: prompt.message },
      { id: `assistant-${Date.now()}`, role: "assistant", message: prompt.followUp },
    ]);
  };

  const handleChatSend = () => {
    const trimmed = chatInput.trim();
    if (!trimmed) {
      return;
    }
    const newTags = deriveTags(trimmed);
    setChatOpen(true);
    setActiveTags((prev) => Array.from(new Set([...prev, ...newTags])));
    setMessages((prev) => [
      ...prev,
      { id: `user-${Date.now()}`, role: "user", message: trimmed },
      { id: `assistant-${Date.now()}`, role: "assistant", message: buildAssistantReply(trimmed, newTags) },
    ]);
    setChatInput("");
  };

  const handleProductSelect = (product: Product) => {
    setSelectedProductId(product.id);
    setChatOpen(true);
    setMessages((prev) => [
      ...prev,
      {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        message: `Noted. ${product.name} matches your preferences. Want a quick comparison?`,
      },
    ]);
  };

  const handleRemoveTag = (tag: string) => {
    setActiveTags((prev) => prev.filter((item) => item !== tag));
  };

  const toggleTag = (tag: string) => {
    setActiveTags((prev) => (prev.includes(tag) ? prev.filter((item) => item !== tag) : [...prev, tag]));
  };

  const handleCategorySelect = (category: Category) => {
    setQuery(category.label);
    setSubmittedQuery(category.label);
    setActiveTags((prev) => (prev.includes(category.tag) ? prev : [...prev, category.tag]));
  };

  const clearFilters = () => {
    setActiveTags([]);
    setSubmittedQuery("");
    setQuery("");
  };

  const handleIdentitySave = () => {
    if (!consent || (!contactEmail.trim() && !contactPhone.trim())) {
      return;
    }
    setIdentitySaved(true);
    setMessages((prev) => [
      ...prev,
      {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        message: "Great, I saved your shortlist. I can follow up with updates.",
      },
    ]);
  };

  return (
    <div className="athena-storefront min-h-screen bg-[#f6f2ec] text-[#1d1a16] font-['Space_Grotesk',sans-serif]">
      <style>{`
        .athena-storefront {
          --athena-ink: #1d1a16;
          --athena-muted: #6f655c;
          --athena-accent: #1f6b45;
          --athena-glow: #f3b061;
          --athena-border: #e7dfd5;
        }
        @keyframes athena-float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0px); }
        }
        @keyframes athena-rise {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="relative">
        <div className="pointer-events-none absolute -left-32 top-[-120px] size-[300px] rounded-full bg-[#f0d4b2] opacity-60 blur-[140px]" />
        <div className="pointer-events-none absolute right-[-160px] top-[80px] size-[320px] rounded-full bg-[#b9d7c3] opacity-45 blur-[160px]" />
        <div className="pointer-events-none absolute bottom-[-220px] left-[30%] size-[320px] rounded-full bg-[#b7cbe2] opacity-40 blur-[160px]" />

        <div className="bg-[#1d1a16] text-[#fdf7ef]">
          <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 px-6 py-2 text-[12px]">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-2">
                <Truck className="size-3.5 text-[#f3b061]" />
                Free shipping over $60
              </span>
              <span className="hidden items-center gap-2 md:inline-flex">
                <RotateCcw className="size-3.5 text-[#f3b061]" />
                Free returns in 30 days
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Sparkles className="size-3.5 text-[#f3b061]" />
              Athena is live for this store
            </div>
          </div>
        </div>

        <header className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-6 py-6">
          <div className="flex items-center gap-3">
            <button type="button" className="flex size-10 items-center justify-center rounded-full border border-[#e7dfd5] bg-white/80 lg:hidden">
              <Menu className="size-4 text-[#5a5249]" />
            </button>
            <div className="flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-[14px] bg-[#1f6b45] text-white">
                <Sparkles className="size-5" />
              </div>
              <div>
                <p className="text-[12px] uppercase tracking-[0.3px] text-[#6f655c]">Markopolo</p>
                <h1 className="text-[20px] font-['Instrument_Serif:Regular',sans-serif] text-[#1d1a16]">Atelier</h1>
              </div>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-[13px] text-[#5d554d] lg:flex">
            <button type="button" className="hover:text-[#1d1a16]">New</button>
            <button type="button" className="hover:text-[#1d1a16]">Skincare</button>
            <button type="button" className="hover:text-[#1d1a16]">Running</button>
            <button type="button" className="hover:text-[#1d1a16]">Audio</button>
            <button type="button" className="hover:text-[#1d1a16]">Apparel</button>
          </nav>
          <div className="flex items-center gap-3 text-[12px] text-[#5d554d]">
            <button type="button" className="hidden rounded-full border border-[#e7dfd5] bg-white/80 px-4 py-2 lg:inline-flex">
              Sign in
            </button>
            <button type="button" className="flex size-10 items-center justify-center rounded-full border border-[#e7dfd5] bg-white/80">
              <Heart className="size-4" />
            </button>
            <button type="button" className="flex items-center gap-2 rounded-full border border-[#e7dfd5] bg-white/90 px-4 py-2">
              <ShoppingBag className="size-4" />
              Cart (2)
            </button>
          </div>
        </header>

        <main className="mx-auto max-w-[1200px] px-6 pb-16">
          <section className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#e7dfd5] bg-white/80 px-3 py-1 text-[11px] text-[#6f655c]">
                <Zap className="size-3.5 text-[#1f6b45]" />
                Athena search + chat
              </div>
              <h2 className="mt-4 text-[34px] font-['Instrument_Serif:Regular',sans-serif] text-[#1d1a16] md:text-[42px]">
                A real storefront, with Athena quietly ready to help.
              </h2>
              <p className="mt-3 max-w-[520px] text-[15px] text-[#6f655c]">
                Browse like a normal store, then ask Athena to narrow down fit, price, and preferences in seconds.
              </p>

              <form
                onSubmit={handleSearchSubmit}
                className="mt-6 flex flex-col gap-3 rounded-[18px] border border-[#e7dfd5] bg-white/90 p-4 shadow-[0_16px_30px_rgba(0,0,0,0.08)] md:flex-row md:items-center"
              >
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[#8b8278]" />
                  <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search products or ask a question"
                    className="w-full rounded-[14px] border border-transparent bg-[#fdfbf8] px-11 py-3 text-[14px] text-[#1d1a16] placeholder:text-[#9c9084] focus:outline-none focus:ring-1 focus:ring-[#1f6b45]/40"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex h-[46px] items-center justify-center gap-2 rounded-[14px] bg-[#1f6b45] px-6 text-[13px] text-white"
                >
                  <Sparkles className="size-4" />
                  Ask Athena
                </button>
              </form>

              <div className="mt-4 flex flex-wrap gap-2 text-[12px] text-[#7b7167]">
                {quickPrompts.map((prompt) => (
                  <button
                    key={prompt.label}
                    type="button"
                    onClick={() => handlePrompt(prompt)}
                    className="rounded-full border border-[#e7dfd5] bg-white/80 px-3 py-2 text-[#6f655c] hover:border-[#1f6b45]/40 hover:text-[#1d1a16]"
                  >
                    {prompt.label}
                  </button>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-[12px] text-[#6f655c]">
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="size-4 text-[#1f6b45]" />
                  Consent-first identity capture
                </span>
                <span className="inline-flex items-center gap-2">
                  <MessageSquare className="size-4 text-[#1f6b45]" />
                  {messages.length} Athena touchpoints
                </span>
              </div>
            </div>

            <div className="rounded-[28px] border border-[#e7dfd5] bg-white/90 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
              <div
                className="h-[280px] rounded-[24px] border border-[#f0e7dc]"
                style={{
                  background:
                    "radial-gradient(circle at top, #f7e7d5 0%, #f4d2b2 50%, #fdf7f1 100%)",
                }}
              />
              <div className="mt-5 flex items-center justify-between">
                <div>
                  <p className="text-[12px] uppercase tracking-[0.3px] text-[#7b7167]">Featured edit</p>
                  <p className="text-[18px] text-[#1d1a16]">Athena Glow Set</p>
                </div>
                <button type="button" className="rounded-full border border-[#e7dfd5] bg-white px-4 py-2 text-[12px] text-[#1d1a16]">
                  Shop set
                </button>
              </div>
              <div className="mt-4 flex items-center gap-3 text-[12px] text-[#6f655c]">
                <span className="inline-flex items-center gap-1">
                  <Star className="size-3.5 text-[#f3b061]" />
                  4.8 rating
                </span>
                <span className="inline-flex items-center gap-1">
                  <Zap className="size-3.5 text-[#1f6b45]" />
                  Fast shipping
                </span>
                <span className="inline-flex items-center gap-1">
                  <User className="size-3.5 text-[#1f6b45]" />
                  2,410 reviews
                </span>
              </div>
            </div>
          </section>

          <section className="mt-10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[12px] uppercase tracking-[0.3px] text-[#7b7167]">Shop by category</p>
                <h3 className="text-[22px] text-[#1d1a16]">Essentials across every aisle</h3>
              </div>
              <button
                type="button"
                onClick={() => setChatOpen(true)}
                className="inline-flex items-center gap-2 rounded-full border border-[#1f6b45] bg-[#e8f0e8] px-4 py-2 text-[12px] text-[#1f6b45]"
              >
                <Bot className="size-4" />
                Ask Athena
              </button>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {categories.map((category) => (
                <button
                  key={category.label}
                  type="button"
                  onClick={() => handleCategorySelect(category)}
                  className="rounded-[20px] border border-[#e7dfd5] bg-white/90 p-4 text-left shadow-[0_12px_24px_rgba(0,0,0,0.08)] transition hover:-translate-y-1"
                >
                  <div className="h-[120px] rounded-[16px]" style={{ background: category.tone }} />
                  <p className="mt-3 text-[14px] text-[#1d1a16]">{category.label}</p>
                  <p className="mt-1 text-[12px] text-[#7b7167]">{category.description}</p>
                </button>
              ))}
            </div>
          </section>

          <section className="mt-12">
            <div className="flex flex-col gap-8 lg:flex-row">
              <aside className="hidden w-[240px] shrink-0 rounded-[20px] border border-[#e7dfd5] bg-white/90 p-5 shadow-[0_12px_30px_rgba(0,0,0,0.08)] lg:block">
                <div className="flex items-center justify-between">
                  <p className="text-[13px] text-[#1d1a16]">Filters</p>
                  <button type="button" onClick={clearFilters} className="text-[11px] text-[#7b7167]">
                    Clear
                  </button>
                </div>
                <div className="mt-4">
                  <p className="text-[12px] uppercase text-[#7b7167]">Popular</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {filterChips.map((tag) => (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => toggleTag(tag)}
                        className={`rounded-full border px-3 py-1 text-[11px] transition ${
                          activeTags.includes(tag)
                            ? "border-[#1f6b45] bg-[#e8f0e8] text-[#1f6b45]"
                            : "border-[#e7dfd5] bg-white text-[#7b7167]"
                        }`}
                      >
                        {tagLabels[tag] ?? tag}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-[12px] uppercase text-[#7b7167]">Price</p>
                  <div className="mt-2 space-y-2 text-[12px] text-[#6f655c]">
                    {["Under $50", "$50 - $100", "$100 - $200", "$200+"].map((label) => (
                      <div key={label} className="flex items-center justify-between rounded-[12px] border border-[#efe7dd] bg-[#fdfbf8] px-3 py-2">
                        <span>{label}</span>
                        <input type="checkbox" className="size-4 accent-[#1f6b45]" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-[12px] uppercase text-[#7b7167]">Shipping</p>
                  <div className="mt-2 flex items-center gap-2 rounded-[12px] border border-[#efe7dd] bg-[#fdfbf8] px-3 py-2 text-[12px] text-[#6f655c]">
                    <Truck className="size-4 text-[#1f6b45]" />
                    Ships in 2-3 days
                  </div>
                </div>
              </aside>

              <div className="flex-1 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-[12px] uppercase tracking-[0.3px] text-[#7b7167]">Results</p>
                    <h3 className="text-[22px] text-[#1d1a16]">
                      {submittedQuery ? `${filteredProducts.length} matches for “${submittedQuery}”` : "Featured picks"}
                    </h3>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setMobileFiltersOpen((prev) => !prev)}
                      className="inline-flex items-center gap-2 rounded-full border border-[#e7dfd5] bg-white px-4 py-2 text-[12px] text-[#6f655c] lg:hidden"
                    >
                      <SlidersHorizontal className="size-4" />
                      Filters
                    </button>
                    <div className="flex items-center gap-2 rounded-full border border-[#e7dfd5] bg-white px-3 py-2 text-[12px] text-[#6f655c]">
                      <span>Sort by</span>
                      <select
                        value={sortOption}
                        onChange={(event) => setSortOption(event.target.value)}
                        className="bg-transparent text-[#1d1a16] focus:outline-none"
                      >
                        {sortOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {mobileFiltersOpen && (
                  <div className="flex flex-wrap gap-2 lg:hidden">
                    {filterChips.map((tag) => (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => toggleTag(tag)}
                        className={`rounded-full border px-3 py-1 text-[11px] transition ${
                          activeTags.includes(tag)
                            ? "border-[#1f6b45] bg-[#e8f0e8] text-[#1f6b45]"
                            : "border-[#e7dfd5] bg-white text-[#7b7167]"
                        }`}
                      >
                        {tagLabels[tag] ?? tag}
                      </button>
                    ))}
                  </div>
                )}

                {activeTags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {activeTags.map((tag) => (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => handleRemoveTag(tag)}
                        className="inline-flex items-center gap-2 rounded-full border border-[#1f6b45] bg-[#e8f0e8] px-3 py-1 text-[12px] text-[#1f6b45]"
                      >
                        {tagLabels[tag] ?? tag}
                        <span className="text-[#8aa78f]">x</span>
                      </button>
                    ))}
                  </div>
                )}

                <div className="rounded-[20px] border border-[#e7dfd5] bg-[#fffaf3] p-5 shadow-[0_12px_24px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Sparkles className="size-4 text-[#1f6b45]" />
                      <p className="text-[13px] text-[#1d1a16]">Athena picks for your brief</p>
                    </div>
                    <button type="button" className="text-[12px] text-[#6f655c]">
                      Refresh
                    </button>
                  </div>
                  <div className="mt-4 grid gap-3 md:grid-cols-3">
                    {recommendations.map((product) => (
                      <button
                        key={product.id}
                        type="button"
                        onClick={() => handleProductSelect(product)}
                        className="rounded-[16px] border border-[#efe7dd] bg-white p-3 text-left transition hover:-translate-y-1"
                      >
                        <div className="h-[90px] rounded-[12px] border border-[#efe7dd]" style={{ background: product.tone }} />
                        <p className="mt-3 text-[13px] text-[#1d1a16]">{product.name}</p>
                        <p className="mt-1 text-[12px] text-[#7b7167]">{product.highlight}</p>
                        <div className="mt-3 flex items-center justify-between text-[12px] text-[#1f6b45]">
                          {priceFormatter.format(product.price)}
                          <ChevronRight className="size-4 text-[#b7aa9b]" />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {filteredProducts.length === 0 ? (
                    <div className="rounded-[18px] border border-dashed border-[#e7dfd5] bg-white/80 p-6 text-center text-[13px] text-[#8b8278]">
                      No products match this query yet. Try a different ask.
                    </div>
                  ) : (
                    filteredProducts.map((product, index) => {
                      const isSelected = product.id === selectedProductId;
                      return (
                        <div
                          key={product.id}
                          className={`rounded-[20px] border bg-white p-4 shadow-[0_12px_24px_rgba(0,0,0,0.06)] transition ${
                            isSelected ? "border-[#1f6b45]" : "border-[#e7dfd5] hover:-translate-y-1"
                          }`}
                          style={{ animation: "athena-rise 600ms ease-out both", animationDelay: `${index * 40}ms` }}
                        >
                          <button type="button" onClick={() => handleProductSelect(product)} className="w-full text-left">
                            <div className="relative">
                              <div className="h-[180px] rounded-[18px] border border-[#efe7dd]" style={{ background: product.tone }} />
                              {product.badge && (
                                <span className="absolute left-3 top-3 rounded-full border border-[#1f6b45] bg-[#e8f0e8] px-2 py-1 text-[10px] text-[#1f6b45]">
                                  {product.badge}
                                </span>
                              )}
                            </div>
                            <div className="mt-4 flex items-center justify-between">
                              <div>
                                <p className="text-[11px] uppercase text-[#7b7167]">{product.category}</p>
                                <h4 className="text-[15px] text-[#1d1a16]">{product.name}</h4>
                              </div>
                              <span className="text-[14px] text-[#1f6b45]">{priceFormatter.format(product.price)}</span>
                            </div>
                            <p className="mt-2 text-[12px] text-[#7b7167]">{product.highlight}</p>
                            <div className="mt-3 flex items-center justify-between text-[12px] text-[#6f655c]">
                              <span className="inline-flex items-center gap-1">
                                <Star className="size-3.5 text-[#f3b061]" />
                                {product.rating} ({product.reviews})
                              </span>
                              <span className="inline-flex items-center gap-2 text-[#9c9084]">
                                Quick view
                                <ChevronRight className="size-3.5" />
                              </span>
                            </div>
                          </button>
                          <div className="mt-4 flex items-center justify-between">
                            <button
                              type="button"
                              onClick={() => handleProductSelect(product)}
                              className="inline-flex items-center gap-2 rounded-full border border-[#1f6b45] bg-[#e8f0e8] px-3 py-2 text-[12px] text-[#1f6b45]"
                            >
                              <ShoppingBag className="size-4" />
                              Add to bag
                            </button>
                            <button type="button" className="flex size-9 items-center justify-center rounded-full border border-[#e7dfd5] bg-white">
                              <Heart className="size-4 text-[#7b7167]" />
                            </button>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            </div>
          </section>
        </main>

        <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
          {chatOpen && (
            <div className="w-[320px] max-w-[90vw] rounded-[22px] border border-[#e7dfd5] bg-white/95 p-4 shadow-[0_20px_40px_rgba(0,0,0,0.18)]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-full bg-[#1f6b45] text-white">
                    <Bot className="size-4" />
                  </div>
                  <div>
                    <p className="text-[13px] text-[#1d1a16]">Athena</p>
                    <p className="text-[11px] text-[#7b7167]">Your shopping assistant</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setChatOpen(false)}
                  className="rounded-full border border-[#e7dfd5] bg-white px-3 py-1 text-[11px] text-[#6f655c]"
                >
                  Minimize
                </button>
              </div>

              <div className="mt-3 max-h-[220px] space-y-2 overflow-y-auto pr-1">
                {visibleMessages.map((entry) => (
                  <div
                    key={entry.id}
                    className={`rounded-[14px] border px-3 py-2 text-[12px] ${
                      entry.role === "assistant"
                        ? "border-[#e7dfd5] bg-[#fdfbf8]"
                        : "border-[#1f6b45] bg-[#e8f0e8]"
                    }`}
                  >
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3px] text-[#7b7167]">
                      {entry.role === "assistant" ? <Bot className="size-3.5" /> : <User className="size-3.5" />}
                      {entry.role}
                    </div>
                    <p className="mt-2 text-[#1d1a16]">{entry.message}</p>
                  </div>
                ))}
              </div>

              <div className="mt-3 flex items-center gap-2 rounded-[14px] border border-[#e7dfd5] bg-[#fdfbf8] px-3 py-2">
                <input
                  value={chatInput}
                  onChange={(event) => setChatInput(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      event.preventDefault();
                      handleChatSend();
                    }
                  }}
                  placeholder="Ask Athena to compare, filter, or save..."
                  className="w-full bg-transparent text-[12px] text-[#1d1a16] placeholder:text-[#9c9084] focus:outline-none"
                />
                <button
                  type="button"
                  onClick={handleChatSend}
                  className="flex size-8 items-center justify-center rounded-full bg-[#1f6b45] text-white"
                >
                  <ArrowUpRight className="size-4" />
                </button>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {quickPrompts.slice(0, 3).map((prompt) => (
                  <button
                    key={prompt.label}
                    type="button"
                    onClick={() => handlePrompt(prompt)}
                    className="rounded-full border border-[#e7dfd5] bg-white px-3 py-1 text-[11px] text-[#6f655c]"
                  >
                    {prompt.label}
                  </button>
                ))}
              </div>

              <div className="mt-4 rounded-[16px] border border-[#efe7dd] bg-[#fdfbf8] p-3">
                <div className="flex items-center justify-between">
                  <p className="text-[12px] text-[#6f655c]">Save your picks</p>
                  {identitySaved && (
                    <span className="inline-flex items-center gap-1 text-[11px] text-[#1f6b45]">
                      <CheckCircle2 className="size-3.5" />
                      Saved
                    </span>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => setCaptureOpen((prev) => !prev)}
                  className="mt-2 inline-flex items-center gap-2 rounded-full border border-[#e7dfd5] bg-white px-3 py-2 text-[11px] text-[#6f655c]"
                >
                  <Ticket className="size-3.5" />
                  {captureOpen ? "Hide" : "Add email or phone"}
                </button>
                {captureOpen && (
                  <div className="mt-3 space-y-2">
                    <div className="flex items-center gap-2 rounded-[12px] border border-[#e7dfd5] bg-white px-3 py-2">
                      <Mail className="size-4 text-[#9c9084]" />
                      <input
                        value={contactEmail}
                        onChange={(event) => setContactEmail(event.target.value)}
                        placeholder="Email"
                        className="w-full bg-transparent text-[12px] text-[#1d1a16] placeholder:text-[#9c9084] focus:outline-none"
                      />
                    </div>
                    <div className="flex items-center gap-2 rounded-[12px] border border-[#e7dfd5] bg-white px-3 py-2">
                      <Phone className="size-4 text-[#9c9084]" />
                      <input
                        value={contactPhone}
                        onChange={(event) => setContactPhone(event.target.value)}
                        placeholder="Phone"
                        className="w-full bg-transparent text-[12px] text-[#1d1a16] placeholder:text-[#9c9084] focus:outline-none"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => setConsent((prev) => !prev)}
                      className={`flex items-center gap-2 rounded-[12px] border px-3 py-2 text-[11px] ${
                        consent
                          ? "border-[#1f6b45] bg-[#e8f0e8] text-[#1f6b45]"
                          : "border-[#e7dfd5] bg-white text-[#7b7167]"
                      }`}
                    >
                      <ShieldCheck className="size-3.5" />
                      I agree to receive updates.
                    </button>
                    <button
                      type="button"
                      onClick={handleIdentitySave}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-[12px] bg-[#1f6b45] px-3 py-2 text-[12px] text-white"
                    >
                      <Ticket className="size-4" />
                      Save and notify me
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          <button
            type="button"
            onClick={() => setChatOpen((prev) => !prev)}
            className="flex items-center gap-3 rounded-full border border-[#1f6b45] bg-[#1f6b45] px-5 py-3 text-[13px] text-white shadow-[0_12px_30px_rgba(31,107,69,0.3)]"
            style={{ animation: "athena-float 3s ease-in-out infinite" }}
          >
            <Bot className="size-4" />
            Athena
            <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px]">Online</span>
          </button>
        </div>
      </div>
    </div>
  );
}
