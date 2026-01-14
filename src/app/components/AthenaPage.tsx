import { useEffect, useMemo, useState } from "react";
import {
  Activity,
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  Bot,
  Brain,
  CalendarClock,
  CheckCircle2,
  ChevronRight,
  Filter,
  Globe,
  Inbox,
  Mail,
  MessageSquare,
  Phone,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Timer,
  TrendingUp,
  User,
  Zap,
} from "lucide-react";

type AbandonmentType = "cart_abandonment" | "checkout_abandonment" | "browse_abandonment";

type Recommendation = {
  id: string;
  name: string;
  price: number;
  reason: string;
};

type AthenaEvent = {
  id: string;
  userName: string;
  email?: string;
  phone?: string;
  sessionId: string;
  location: string;
  type: AbandonmentType;
  total: number;
  items: number;
  lastQuery: string;
  usedAthena: boolean;
  timestamp: string;
  capture: {
    email: boolean;
    phone: boolean;
  };
  primaryReason: string;
  reasonConfidence: number;
  objections: string[];
  preferences: { label: string; value: string }[];
  compared: string[];
  recommendations: Recommendation[];
  conversation: { role: "user" | "assistant"; message: string }[];
};

const initialEvents: AthenaEvent[] = [
  {
    id: "evt-001",
    userName: "Anonymous visitor",
    sessionId: "sess_92f4",
    location: "Austin, TX",
    type: "cart_abandonment",
    total: 128,
    items: 2,
    lastQuery: "hydrating moisturizer oily skin under $50",
    usedAthena: true,
    timestamp: "2 hours ago",
    capture: { email: false, phone: false },
    primaryReason: "Price sensitivity",
    reasonConfidence: 0.72,
    objections: ["Price too high", "Unsure about texture"],
    preferences: [
      { label: "Skin type", value: "Oily" },
      { label: "Budget", value: "Under $50" },
      { label: "Texture", value: "Gel" },
    ],
    compared: ["GlowRx Aqua Shield", "HydraLite Gel"],
    recommendations: [
      { id: "rec-1", name: "HydraLite Gel", price: 39, reason: "Matte finish, lightweight" },
      { id: "rec-2", name: "ClearWave Moisture", price: 42, reason: "Oil-control + niacinamide" },
    ],
    conversation: [
      { role: "user", message: "Need a hydrating moisturizer for oily skin under $50." },
      { role: "assistant", message: "Got it. Do you prefer gel or cream texture?" },
      { role: "user", message: "Gel texture, something light." },
      { role: "assistant", message: "Here are two picks that stay matte and hydrate." },
    ],
  },
  {
    id: "evt-002",
    userName: "Priya Singh",
    email: "priya@northlane.com",
    phone: "+1 (415) 882-4172",
    sessionId: "sess_a713",
    location: "San Jose, CA",
    type: "checkout_abandonment",
    total: 214,
    items: 3,
    lastQuery: "black running shoes size 8",
    usedAthena: true,
    timestamp: "3 hours ago",
    capture: { email: true, phone: true },
    primaryReason: "Shipping time concern",
    reasonConfidence: 0.81,
    objections: ["Shipping ETA too long"],
    preferences: [
      { label: "Size", value: "8" },
      { label: "Color", value: "Black" },
      { label: "Use case", value: "Marathon training" },
    ],
    compared: ["StridePro X9", "Velocity Cloud"],
    recommendations: [
      { id: "rec-3", name: "StridePro X9", price: 89, reason: "Cushioned, 2-day shipping" },
      { id: "rec-4", name: "Velocity Cloud", price: 94, reason: "Lightweight, wide toe box" },
    ],
    conversation: [
      { role: "user", message: "Need black running shoes, size 8. Training for a marathon." },
      { role: "assistant", message: "Prioritize speed or cushioning?" },
      { role: "user", message: "Cushioning, but I need them fast." },
    ],
  },
  {
    id: "evt-003",
    userName: "Anonymous visitor",
    sessionId: "sess_77b1",
    location: "Toronto, CA",
    type: "browse_abandonment",
    total: 0,
    items: 0,
    lastQuery: "wireless noise cancelling headphones",
    usedAthena: false,
    timestamp: "5 hours ago",
    capture: { email: false, phone: false },
    primaryReason: "Decision paralysis",
    reasonConfidence: 0.48,
    objections: ["Too many choices"],
    preferences: [
      { label: "Budget", value: "Under $200" },
      { label: "Feature", value: "Noise cancelling" },
    ],
    compared: [],
    recommendations: [
      { id: "rec-5", name: "Auralux Quiet", price: 179, reason: "Top-rated ANC under $200" },
    ],
    conversation: [{ role: "assistant", message: "Athena was not opened in this session." }],
  },
  {
    id: "evt-004",
    userName: "Mateo Alvarez",
    email: "mateo@solara.io",
    sessionId: "sess_51d2",
    location: "Miami, FL",
    type: "cart_abandonment",
    total: 76,
    items: 1,
    lastQuery: "linen shirt breathable",
    usedAthena: true,
    timestamp: "6 hours ago",
    capture: { email: true, phone: false },
    primaryReason: "Sizing uncertainty",
    reasonConfidence: 0.67,
    objections: ["Not sure about fit"],
    preferences: [
      { label: "Fit", value: "Relaxed" },
      { label: "Fabric", value: "Linen" },
      { label: "Color", value: "Sand" },
    ],
    compared: ["Breeze Linen Shirt", "Coastal Linen Tee"],
    recommendations: [
      { id: "rec-6", name: "Breeze Linen Shirt", price: 68, reason: "Relaxed fit with size guide" },
    ],
    conversation: [
      { role: "user", message: "I want a breathable linen shirt but not sure on sizing." },
      { role: "assistant", message: "Do you prefer relaxed or tailored fit?" },
      { role: "user", message: "Relaxed." },
    ],
  },
  {
    id: "evt-005",
    userName: "Hana Yu",
    email: "hana@brightlab.co",
    sessionId: "sess_108c",
    location: "Seattle, WA",
    type: "checkout_abandonment",
    total: 162,
    items: 2,
    lastQuery: "vitamin c serum sensitive skin",
    usedAthena: true,
    timestamp: "8 hours ago",
    capture: { email: true, phone: false },
    primaryReason: "Ingredient concern",
    reasonConfidence: 0.74,
    objections: ["Sensitive skin reaction"],
    preferences: [
      { label: "Skin type", value: "Sensitive" },
      { label: "Ingredient", value: "Vitamin C" },
    ],
    compared: ["C+ Calm Serum", "BrightEase 10%"],
    recommendations: [
      { id: "rec-7", name: "C+ Calm Serum", price: 58, reason: "Low irritation, ceramides" },
    ],
    conversation: [
      { role: "user", message: "Need vitamin C but my skin is sensitive." },
      { role: "assistant", message: "Look for a low % formula. Here is a gentle pick." },
    ],
  },
];

const typeLabels: Record<AbandonmentType, string> = {
  cart_abandonment: "Cart",
  checkout_abandonment: "Checkout",
  browse_abandonment: "Browse",
};

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const rangeOptions = ["24h", "7d", "30d", "90d"];
const channelOptions = ["email", "sms", "whatsapp"] as const;

function MetricCard({
  title,
  value,
  delta,
  icon: Icon,
  delay = 0,
}: {
  title: string;
  value: string;
  delta: string;
  icon: typeof Activity;
  delay?: number;
}) {
  return (
    <div
      className="group rounded-[18px] border border-white/5 bg-white/5 p-4 shadow-[0_16px_50px_rgba(0,0,0,0.35)] backdrop-blur"
      style={{ animation: "athena-rise 700ms ease-out both", animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-between">
        <p className="text-[12px] uppercase tracking-[0.28px] text-[#9aa0a6]">{title}</p>
        <div className="flex size-9 items-center justify-center rounded-full bg-white/10 text-[#d8fe91]">
          <Icon className="size-4" />
        </div>
      </div>
      <div className="mt-4 flex items-end justify-between">
        <p className="text-[26px] font-['Instrument_Serif:Regular',sans-serif] text-[#f5f5f5]">{value}</p>
        <span className="rounded-full border border-[#294227] bg-[#0f1a12] px-2 py-1 text-[11px] text-[#8bdc9b]">
          {delta}
        </span>
      </div>
    </div>
  );
}

function Pill({ label, active }: { label: string; active?: boolean }) {
  return (
    <span
      className={`rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.3px] ${
        active ? "border-[#3a4a20] bg-[#141b0c] text-[#d8fe91]" : "border-[#2a2a2a] bg-[#111111] text-[#9aa0a6]"
      }`}
    >
      {label}
    </span>
  );
}

export default function AthenaPage() {
  const [events] = useState(initialEvents);
  const [query, setQuery] = useState("");
  const [activeType, setActiveType] = useState<AbandonmentType | "all">("all");
  const [athenaOnly, setAthenaOnly] = useState(false);
  const [activeRange, setActiveRange] = useState(rangeOptions[0]);
  const [selectedId, setSelectedId] = useState(initialEvents[0]?.id ?? "");
  const [activeChannel, setActiveChannel] = useState<(typeof channelOptions)[number]>("email");
  const [showTranscript, setShowTranscript] = useState(true);

  const filteredEvents = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return events.filter((event) => {
      if (athenaOnly && !event.usedAthena) {
        return false;
      }
      if (activeType !== "all" && event.type !== activeType) {
        return false;
      }
      if (!normalizedQuery) {
        return true;
      }
      const haystack = [event.userName, event.email, event.sessionId, event.lastQuery]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return haystack.includes(normalizedQuery);
    });
  }, [activeType, athenaOnly, events, query]);

  const selectedEvent = useMemo(
    () => filteredEvents.find((event) => event.id === selectedId) ?? null,
    [filteredEvents, selectedId],
  );

  useEffect(() => {
    if (!selectedEvent) {
      setSelectedId(filteredEvents[0]?.id ?? "");
    }
  }, [filteredEvents, selectedEvent]);

  const totalSessions = events.length;
  const athenaSessions = events.filter((event) => event.usedAthena).length;
  const captureRate = Math.round(
    (events.filter((event) => event.capture.email || event.capture.phone).length / Math.max(events.length, 1)) * 100,
  );

  const reasonBreakdown = useMemo(() => {
    const counts = events.reduce<Record<string, number>>((acc, event) => {
      acc[event.primaryReason] = (acc[event.primaryReason] ?? 0) + 1;
      return acc;
    }, {});
    return Object.entries(counts).map(([reason, count]) => ({
      reason,
      count,
      percent: Math.round((count / Math.max(events.length, 1)) * 100),
    }));
  }, [events]);

  const preferenceSummary = selectedEvent?.preferences.length
    ? selectedEvent.preferences.map((pref) => pref.value).join(", ")
    : "your preferences";

  const messagePreview = selectedEvent
    ? {
        email: `Hi ${selectedEvent.userName.split(" ")[0] || "there"}, saw you were checking out ${selectedEvent.compared[0] ?? "some items"}.\nWe saved your picks and found options that match ${preferenceSummary}. Want me to reserve them for you?`,
        sms: `Quick note: we saved your picks from your last visit. Want us to hold ${selectedEvent.compared[0] ?? "them"}? Reply YES.`,
        whatsapp: `Hey! Your Athena picks are ready. We matched ${preferenceSummary}. Want a quick checkout link?`,
      }
    : { email: "", sms: "", whatsapp: "" };

  return (
    <div className="min-h-screen bg-[#0a0b0d] text-[#f5f5f5] font-['Space_Grotesk',sans-serif]">
      <style>{`
        @keyframes athena-rise {
          from { opacity: 0; transform: translateY(16px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes athena-fade {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute -left-40 top-[-120px] size-[360px] rounded-full bg-[#2f5a3b] opacity-60 blur-[140px]" />
        <div className="pointer-events-none absolute right-[-160px] top-[40px] size-[360px] rounded-full bg-[#2e3f74] opacity-50 blur-[140px]" />
        <div className="pointer-events-none absolute bottom-[-180px] left-[20%] size-[360px] rounded-full bg-[#4e2f5a] opacity-40 blur-[180px]" />
        <div className="relative px-6 py-8 md:px-10 lg:px-12">
          <header className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#2a2a2a] bg-[#111111] px-3 py-1 text-[11px] text-[#a7a7a7]">
                <Sparkles className="size-3.5 text-[#d8fe91]" />
                Athena admin console
              </div>
              <h1 className="mt-4 text-[34px] font-['Instrument_Serif:Regular',sans-serif] text-[#f5f5f5]">
                Search, chat, and recovery intelligence.
              </h1>
              <p className="mt-2 max-w-[520px] text-[14px] text-[#a0a0a0]">
                Monitor Athena-assisted sessions, capture identities, and push enriched context into Markopolo recovery
                flows.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 rounded-full border border-[#2a2a2a] bg-[#111111] px-3 py-2 text-[12px] text-[#bdbdbd]">
                <CalendarClock className="size-4 text-[#d8fe91]" />
                <span>Range</span>
                <div className="flex items-center gap-1">
                  {rangeOptions.map((range) => (
                    <button
                      key={range}
                      type="button"
                      onClick={() => setActiveRange(range)}
                      className={`rounded-full px-3 py-1 text-[11px] transition ${
                        activeRange === range ? "bg-[#d8fe91] text-[#101010]" : "text-[#bdbdbd] hover:text-[#f5f5f5]"
                      }`}
                    >
                      {range}
                    </button>
                  ))}
                </div>
              </div>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full border border-[#3a4a20] bg-[#141b0c] px-4 py-2 text-[12px] text-[#d8fe91]"
              >
                <Zap className="size-4" />
                Live sync active
              </button>
            </div>
          </header>

          <section className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <MetricCard
              title="Athena sessions"
              value={`${athenaSessions}/${totalSessions}`}
              delta="+14% WoW"
              icon={Bot}
              delay={0}
            />
            <MetricCard title="Identity capture" value={`${captureRate}%`} delta="+9% uplift" icon={BadgeCheck} delay={80} />
            <MetricCard title="Recovery uplift" value="1.8x" delta="+0.4x" icon={TrendingUp} delay={160} />
            <MetricCard title="Signals captured" value="312" delta="+22%" icon={Brain} delay={240} />
          </section>

          <section className="mt-8 rounded-[20px] border border-white/5 bg-[#0f0f12] p-4 shadow-[0_18px_40px_rgba(0,0,0,0.45)] backdrop-blur">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[#808080]" />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search sessions, emails, queries, or session IDs"
                  className="w-full rounded-[14px] border border-[#2a2a2a] bg-[#111111] px-11 py-3 text-[13px] text-[#f5f5f5] placeholder:text-[#6f6f6f] focus:outline-none focus:ring-1 focus:ring-[#d8fe91]/60"
                />
              </div>
              <div className="flex flex-wrap items-center gap-2 text-[12px]">
                <button
                  type="button"
                  onClick={() => setAthenaOnly((prev) => !prev)}
                  className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 transition ${
                    athenaOnly
                      ? "border-[#3a4a20] bg-[#141b0c] text-[#d8fe91]"
                      : "border-[#2a2a2a] bg-[#111111] text-[#bdbdbd]"
                  }`}
                >
                  <Filter className="size-4" />
                  Athena only
                </button>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full border border-[#2a2a2a] bg-[#111111] px-3 py-2 text-[#bdbdbd]"
                >
                  <ShieldCheck className="size-4 text-[#d8fe91]" />
                  GDPR compliant
                </button>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <button type="button" onClick={() => setActiveType("all")}>
                <Pill label="All" active={activeType === "all"} />
              </button>
              {Object.entries(typeLabels).map(([type, label]) => (
                <button key={type} type="button" onClick={() => setActiveType(type as AbandonmentType)}>
                  <Pill label={label} active={activeType === type} />
                </button>
              ))}
            </div>
          </section>

          <section className="mt-8 grid gap-6 xl:grid-cols-[360px_1fr]">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-[12px] text-[#8f8f8f]">
                <span>{filteredEvents.length} abandonment events</span>
                <span className="inline-flex items-center gap-2">
                  <Activity className="size-4 text-[#d8fe91]" />
                  {activeRange} window
                </span>
              </div>
              {filteredEvents.length === 0 ? (
                <div className="rounded-[16px] border border-dashed border-[#2a2a2a] bg-[#111111] p-6 text-center text-[13px] text-[#8c8c8c]">
                  No events match this filter.
                </div>
              ) : (
                filteredEvents.map((event, index) => (
                  <button
                    key={event.id}
                    type="button"
                    onClick={() => setSelectedId(event.id)}
                    className={`w-full rounded-[18px] border px-4 py-4 text-left transition ${
                      selectedId === event.id
                        ? "border-[#d8fe91]/60 bg-[#141b0c] shadow-[0_0_18px_rgba(216,254,145,0.15)]"
                        : "border-[#1f1f1f] bg-[#101010] hover:border-[#2a2a2a]"
                    }`}
                    style={{ animation: "athena-fade 550ms ease-out both", animationDelay: `${index * 60}ms` }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[14px] text-[#f5f5f5]">{event.userName}</p>
                        <p className="text-[12px] text-[#7f7f7f]">{event.email || event.sessionId}</p>
                      </div>
                      <span
                        className={`rounded-full border px-2 py-1 text-[10px] uppercase tracking-[0.3px] ${
                          event.usedAthena
                            ? "border-[#3a4a20] bg-[#141b0c] text-[#d8fe91]"
                            : "border-[#2a2a2a] bg-[#111111] text-[#9aa0a6]"
                        }`}
                      >
                        {event.usedAthena ? "Athena" : "Standard"}
                      </span>
                    </div>
                    <div className="mt-3 flex flex-wrap items-center gap-2 text-[12px] text-[#9c9c9c]">
                      <span className="flex items-center gap-2">
                        <ShoppingBag className="size-3.5 text-[#7b7b7b]" />
                        {typeLabels[event.type]}
                      </span>
                      <span className="flex items-center gap-2">
                        <Timer className="size-3.5 text-[#7b7b7b]" />
                        {event.timestamp}
                      </span>
                    </div>
                    <div className="mt-3 flex items-center justify-between text-[12px] text-[#bdbdbd]">
                      <span>{event.primaryReason}</span>
                      <span>{currencyFormatter.format(event.total)}</span>
                    </div>
                  </button>
                ))
              )}
            </div>

            <div className="space-y-6">
              <div className="rounded-[20px] border border-white/5 bg-[#0f0f12] p-6 shadow-[0_20px_45px_rgba(0,0,0,0.45)]">
                {!selectedEvent ? (
                  <div className="rounded-[16px] border border-dashed border-[#2a2a2a] bg-[#111111] p-6 text-center text-[13px] text-[#8c8c8c]">
                    Select an event to view details.
                  </div>
                ) : (
                  <>
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                      <div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-[#2a2a2a] bg-[#111111] px-3 py-1 text-[11px] text-[#bdbdbd]">
                          <Globe className="size-3.5 text-[#d8fe91]" />
                          {selectedEvent.location}
                        </div>
                        <h2 className="mt-3 text-[20px] font-['Overused_Grotesk:Medium',sans-serif] text-[#f5f5f5]">
                          {selectedEvent.userName}
                        </h2>
                        <p className="text-[13px] text-[#8f8f8f]">{selectedEvent.lastQuery}</p>
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full border border-[#2a2a2a] bg-[#111111] px-3 py-1 text-[11px] text-[#bdbdbd]">
                          {typeLabels[selectedEvent.type]}
                        </span>
                        <span className="rounded-full border border-[#294227] bg-[#0f1a12] px-3 py-1 text-[11px] text-[#8bdc9b]">
                          {Math.round(selectedEvent.reasonConfidence * 100)}% confidence
                        </span>
                        <span className="rounded-full border border-[#2a2a2a] bg-[#111111] px-3 py-1 text-[11px] text-[#bdbdbd]">
                          {selectedEvent.timestamp}
                        </span>
                      </div>
                    </div>

                    <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                      <div className="space-y-6">
                        <div className="rounded-[16px] border border-[#1f1f1f] bg-[#111111] p-4">
                          <div className="flex items-center justify-between">
                            <p className="text-[13px] text-[#a7a7a7]">Session snapshot</p>
                            <span className="text-[12px] text-[#bdbdbd]">{selectedEvent.sessionId}</span>
                          </div>
                          <div className="mt-4 grid gap-3 md:grid-cols-3">
                            <div className="rounded-[12px] border border-[#222222] bg-[#0f0f0f] p-3">
                              <p className="text-[11px] uppercase text-[#6f6f6f]">Cart value</p>
                              <p className="mt-1 text-[16px] text-[#f5f5f5]">
                                {currencyFormatter.format(selectedEvent.total)}
                              </p>
                            </div>
                            <div className="rounded-[12px] border border-[#222222] bg-[#0f0f0f] p-3">
                              <p className="text-[11px] uppercase text-[#6f6f6f]">Items</p>
                              <p className="mt-1 text-[16px] text-[#f5f5f5]">{selectedEvent.items}</p>
                            </div>
                            <div className="rounded-[12px] border border-[#222222] bg-[#0f0f0f] p-3">
                              <p className="text-[11px] uppercase text-[#6f6f6f]">Identity captured</p>
                              <p className="mt-1 flex items-center gap-2 text-[12px] text-[#f5f5f5]">
                                {selectedEvent.capture.email ? <Mail className="size-4 text-[#d8fe91]" /> : null}
                                {selectedEvent.capture.phone ? <Phone className="size-4 text-[#d8fe91]" /> : null}
                                {!selectedEvent.capture.email && !selectedEvent.capture.phone
                                  ? "Not yet"
                                  : "Ready"}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="rounded-[16px] border border-[#1f1f1f] bg-[#111111] p-4">
                          <p className="text-[13px] text-[#a7a7a7]">Athena context</p>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {selectedEvent.preferences.map((pref) => (
                              <span
                                key={`${pref.label}-${pref.value}`}
                                className="rounded-full border border-[#2a2a2a] bg-[#0f0f0f] px-3 py-1 text-[12px] text-[#d1d1d1]"
                              >
                                {pref.label}: {pref.value}
                              </span>
                            ))}
                          </div>
                          <div className="mt-4">
                            <p className="text-[12px] uppercase text-[#6f6f6f]">Primary objections</p>
                            <div className="mt-2 flex flex-wrap gap-2">
                              {selectedEvent.objections.map((objection) => (
                                <span
                                  key={objection}
                                  className="rounded-full border border-[#2a2a2a] bg-[#161616] px-3 py-1 text-[12px] text-[#f5f5f5]"
                                >
                                  {objection}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="mt-4">
                            <p className="text-[12px] uppercase text-[#6f6f6f]">Compared products</p>
                            <div className="mt-2 space-y-2">
                              {selectedEvent.compared.length === 0 ? (
                                <div className="rounded-[12px] border border-dashed border-[#2a2a2a] bg-[#0f0f0f] px-3 py-2 text-[12px] text-[#7f7f7f]">
                                  No comparisons captured yet.
                                </div>
                              ) : (
                                selectedEvent.compared.map((product) => (
                                  <div
                                    key={product}
                                    className="flex items-center justify-between rounded-[12px] border border-[#1f1f1f] bg-[#0f0f0f] px-3 py-2 text-[12px]"
                                  >
                                    <span>{product}</span>
                                    <ChevronRight className="size-4 text-[#6f6f6f]" />
                                  </div>
                                ))
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div className="rounded-[16px] border border-[#1f1f1f] bg-[#111111] p-4">
                          <div className="flex items-center justify-between">
                            <p className="text-[13px] text-[#a7a7a7]">Recovery preview</p>
                            <div className="flex items-center gap-2">
                              {channelOptions.map((channel) => (
                                <button
                                  key={channel}
                                  type="button"
                                  onClick={() => setActiveChannel(channel)}
                                  className={`rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.3px] ${
                                    activeChannel === channel
                                      ? "bg-[#d8fe91] text-[#101010]"
                                      : "border border-[#2a2a2a] bg-[#0f0f0f] text-[#bdbdbd]"
                                  }`}
                                >
                                  {channel}
                                </button>
                              ))}
                            </div>
                          </div>
                          <div className="mt-4 rounded-[12px] border border-[#2a2a2a] bg-[#0c0c0c] p-4 text-[12px] text-[#d9d9d9] whitespace-pre-line">
                            {messagePreview[activeChannel]}
                          </div>
                          <button
                            type="button"
                            className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#3a4a20] bg-[#141b0c] px-4 py-2 text-[12px] text-[#d8fe91]"
                          >
                            <ArrowUpRight className="size-4" />
                            Push to campaign
                          </button>
                        </div>

                        <div className="rounded-[16px] border border-[#1f1f1f] bg-[#111111] p-4">
                          <p className="text-[13px] text-[#a7a7a7]">Recommendations surfaced</p>
                          <div className="mt-3 space-y-3">
                            {selectedEvent.recommendations.length === 0 ? (
                              <div className="rounded-[12px] border border-dashed border-[#2a2a2a] bg-[#0f0f0f] px-3 py-2 text-[12px] text-[#7f7f7f]">
                                No recommendations surfaced.
                              </div>
                            ) : (
                              selectedEvent.recommendations.map((rec) => (
                                <div
                                  key={rec.id}
                                  className="flex items-start justify-between gap-4 rounded-[12px] border border-[#222222] bg-[#0f0f0f] p-3"
                                >
                                  <div>
                                    <p className="text-[13px] text-[#f5f5f5]">{rec.name}</p>
                                    <p className="text-[12px] text-[#7f7f7f]">{rec.reason}</p>
                                  </div>
                                  <span className="text-[12px] text-[#d8fe91]">{currencyFormatter.format(rec.price)}</span>
                                </div>
                              ))
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
                <div className="rounded-[20px] border border-white/5 bg-[#0f0f12] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.45)]">
                  <div className="flex items-center justify-between">
                    <p className="text-[13px] text-[#a7a7a7]">Athena conversation</p>
                    <button
                      type="button"
                      onClick={() => setShowTranscript((prev) => !prev)}
                      className="text-[12px] text-[#d8fe91]"
                    >
                      {showTranscript ? "Hide" : "Show"}
                    </button>
                  </div>
                  {selectedEvent && showTranscript ? (
                    <div className="mt-4 space-y-3 text-[12px] text-[#d1d1d1]">
                      {selectedEvent.conversation.map((entry, index) => (
                        <div
                          key={`${entry.role}-${index}`}
                          className={`rounded-[14px] border px-4 py-3 ${
                            entry.role === "assistant"
                              ? "border-[#2a2a2a] bg-[#111111]"
                              : "border-[#3a4a20] bg-[#141b0c]"
                          }`}
                        >
                          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2px] text-[#8f8f8f]">
                            {entry.role === "assistant" ? <Bot className="size-3.5" /> : <User className="size-3.5" />}
                            {entry.role}
                          </div>
                          <p className="mt-2 text-[12px] text-[#f5f5f5]">{entry.message}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="mt-4 rounded-[14px] border border-dashed border-[#2a2a2a] bg-[#111111] p-6 text-center text-[12px] text-[#8c8c8c]">
                      Conversation hidden or not available.
                    </div>
                  )}
                </div>

                <div className="rounded-[20px] border border-white/5 bg-[#0f0f12] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.45)]">
                  <p className="text-[13px] text-[#a7a7a7]">Top abandonment reasons</p>
                  <div className="mt-4 space-y-3">
                    {reasonBreakdown.map((reason) => (
                      <div key={reason.reason} className="rounded-[12px] border border-[#1f1f1f] bg-[#111111] p-3">
                        <div className="flex items-center justify-between text-[12px] text-[#d1d1d1]">
                          <span>{reason.reason}</span>
                          <span>{reason.percent}%</span>
                        </div>
                        <div className="mt-2 h-2 w-full rounded-full bg-[#1b1b1b]">
                          <div
                            className="h-2 rounded-full bg-[#d8fe91]"
                            style={{ width: `${reason.percent}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 flex items-center justify-between rounded-[14px] border border-[#2a2a2a] bg-[#111111] px-4 py-3 text-[12px] text-[#bdbdbd]">
                    <div className="flex items-center gap-2">
                      <Inbox className="size-4 text-[#d8fe91]" />
                      Athena influence rate
                    </div>
                    <span className="text-[#f5f5f5]">{Math.round((athenaSessions / Math.max(totalSessions, 1)) * 100)}%</span>
                  </div>
                </div>
              </div>

              <div className="rounded-[20px] border border-white/5 bg-[#0f0f12] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.45)]">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-[13px] text-[#a7a7a7]">Athena performance signals</p>
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-full border border-[#2a2a2a] bg-[#111111] px-3 py-2 text-[12px] text-[#bdbdbd]"
                  >
                    <BarChart3 className="size-4 text-[#d8fe91]" />
                    Export report
                  </button>
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                  {[
                    { label: "Athena CTR", value: "22%", icon: Sparkles },
                    { label: "Avg. chat depth", value: "4.3 turns", icon: MessageSquare },
                    { label: "Saved carts", value: "118", icon: ShoppingBag },
                    { label: "Resolved objections", value: "64", icon: CheckCircle2 },
                  ].map((metric) => (
                    <div
                      key={metric.label}
                      className="flex items-center gap-3 rounded-[14px] border border-[#1f1f1f] bg-[#111111] p-3"
                    >
                      <div className="flex size-9 items-center justify-center rounded-full bg-[#141b0c] text-[#d8fe91]">
                        <metric.icon className="size-4" />
                      </div>
                      <div>
                        <p className="text-[11px] uppercase text-[#6f6f6f]">{metric.label}</p>
                        <p className="text-[14px] text-[#f5f5f5]">{metric.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-4 text-[12px] text-[#8f8f8f]">
                  <span className="inline-flex items-center gap-2">
                    <TrendingUp className="size-4 text-[#d8fe91]" />
                    Athena sessions convert 1.8x higher
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <ShieldCheck className="size-4 text-[#d8fe91]" />
                    Consent prompt shown in 94% of captures
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
