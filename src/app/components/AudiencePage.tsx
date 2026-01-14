import { useEffect, useMemo, useState } from "react";
import svgPaths from "../../imports/svg-lfxnmi0o8i";
import {
  BarChart3,
  Calendar,
  Database,
  Eye,
  Fingerprint,
  LayoutDashboard,
  Mail,
  MapPin,
  Megaphone,
  Phone,
  RefreshCcw,
  Search,
  Settings,
  ShieldCheck,
  UserCheck,
  UserPlus,
  Users,
  UserRound,
  PlugZap,
  LifeBuoy,
  CreditCard,
  X,
} from "lucide-react";

type AudienceMember = {
  id: string;
  name: string;
  email: string;
  location: string;
  phone: string;
  sessions: number;
  minutes: number;
  lastSeen: string;
  isAnonymous: boolean;
  anonymousId?: string;
  firstSeen?: string;
  confidence?: number;
};

type JourneyEvent = {
  id: string;
  time: string;
  status: "Sent" | "Opened" | "Viewed" | "Identified";
  title: string;
  description: string;
  channel?: "email" | "web" | "identity";
};

const initialAudienceMembers: AudienceMember[] = [
  {
    id: "imtiaz",
    name: "Imtiaz",
    email: "imtiaz@markopolo.ai",
    location: "BD",
    phone: "+8801784064103",
    sessions: 0,
    minutes: 0,
    lastSeen: "18 hours ago",
    isAnonymous: false,
  },
  {
    id: "imtiaz-2",
    name: "Imtiaz",
    email: "imtiaz@markopolo.ai",
    location: "Unknown",
    phone: "+8801784064103",
    sessions: 0,
    minutes: 0,
    lastSeen: "1 day ago",
    isAnonymous: false,
  },
  {
    id: "imtiaz-3",
    name: "Imtiaz",
    email: "imtiaz+001@markopolo.ai",
    location: "Unknown",
    phone: "",
    sessions: 0,
    minutes: 0,
    lastSeen: "3 days ago",
    isAnonymous: false,
  },
  {
    id: "jasmin",
    name: "Jasmin",
    email: "jasmin@markopolo.ai",
    location: "US",
    phone: "+12025550124",
    sessions: 2,
    minutes: 14,
    lastSeen: "5 days ago",
    isAnonymous: false,
  },
  {
    id: "anon-14f2a",
    name: "Anonymous visitor",
    email: "",
    location: "Unknown",
    phone: "",
    sessions: 3,
    minutes: 7,
    lastSeen: "2 hours ago",
    isAnonymous: true,
    anonymousId: "anon-14f2a",
    firstSeen: "Nov 19",
    confidence: 0.62,
  },
  {
    id: "anon-7b9c0",
    name: "Anonymous visitor",
    email: "",
    location: "SG",
    phone: "",
    sessions: 1,
    minutes: 2,
    lastSeen: "5 hours ago",
    isAnonymous: true,
    anonymousId: "anon-7b9c0",
    firstSeen: "Nov 19",
    confidence: 0.48,
  },
];

const initialJourneysByMember: Record<string, JourneyEvent[]> = {
  imtiaz: [
    {
      id: "event-1",
      time: "Nov 19 - 6:12 PM",
      status: "Sent",
      title: "Email Sent",
      description: "Sent Email via Autosend to imtiaz@markopolo.ai (Campaign 2612ad71, Step 2)",
      channel: "email",
    },
    {
      id: "event-2",
      time: "Nov 19 - 6:12 PM",
      status: "Opened",
      title: "Email Opened",
      description: "Opened Email via Autosend to imtiaz@markopolo.ai (Campaign 75b4be2e, Step 2)",
      channel: "email",
    },
    {
      id: "event-3",
      time: "Nov 19 - 3:34 PM",
      status: "Sent",
      title: "Email Sent",
      description: "Sent Email via Autosend to imtiaz@markopolo.ai (Campaign 75b4be2e, Step 1)",
      channel: "email",
    },
    {
      id: "event-4",
      time: "Nov 19 - 3:10 PM",
      status: "Sent",
      title: "Email Sent",
      description: "Sent Email via Autosend to imtiaz@markopolo.ai (Campaign 2612ad71, Step 1)",
      channel: "email",
    },
    {
      id: "event-5",
      time: "Nov 19 - 12:09 PM",
      status: "Sent",
      title: "Email Sent",
      description: "Sent Email via Autosend to imtiaz@markopolo.ai (Campaign 1a2c9f31, Step 1)",
      channel: "email",
    },
  ],
  "imtiaz-2": [
    {
      id: "event-1",
      time: "Nov 18 - 9:42 PM",
      status: "Sent",
      title: "Email Sent",
      description: "Sent Email via Autosend to imtiaz@markopolo.ai (Campaign 32f9b45a, Step 1)",
      channel: "email",
    },
    {
      id: "event-2",
      time: "Nov 18 - 9:45 PM",
      status: "Opened",
      title: "Email Opened",
      description: "Opened Email via Autosend to imtiaz@markopolo.ai (Campaign 32f9b45a, Step 1)",
      channel: "email",
    },
  ],
  "imtiaz-3": [
    {
      id: "event-1",
      time: "Nov 17 - 8:20 PM",
      status: "Sent",
      title: "Email Sent",
      description: "Sent Email via Autosend to imtiaz+001@markopolo.ai (Campaign 75b4be2e, Step 1)",
      channel: "email",
    },
  ],
  jasmin: [
    {
      id: "event-1",
      time: "Nov 15 - 4:52 PM",
      status: "Opened",
      title: "Email Opened",
      description: "Opened Email via Autosend to jasmin@markopolo.ai (Campaign 4e9a1c7d, Step 2)",
      channel: "email",
    },
    {
      id: "event-2",
      time: "Nov 14 - 2:03 PM",
      status: "Sent",
      title: "Email Sent",
      description: "Sent Email via Autosend to jasmin@markopolo.ai (Campaign 4e9a1c7d, Step 1)",
      channel: "email",
    },
  ],
  "anon-14f2a": [
    {
      id: "event-1",
      time: "Nov 19 - 10:24 AM",
      status: "Viewed",
      title: "Visited Landing Page",
      description: "Viewed /pricing from a Chrome browser on macOS",
      channel: "web",
    },
    {
      id: "event-2",
      time: "Nov 19 - 10:31 AM",
      status: "Viewed",
      title: "Viewed Feature Guide",
      description: "Scrolled through /features and spent 3 minutes",
      channel: "web",
    },
  ],
  "anon-7b9c0": [
    {
      id: "event-1",
      time: "Nov 19 - 8:55 AM",
      status: "Viewed",
      title: "Visited Landing Page",
      description: "Viewed /home from a mobile device",
      channel: "web",
    },
  ],
};

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="size-[36px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
          <path d={svgPaths.p3a654500} fill="white" />
        </svg>
      </div>
      <span className="text-[18px] font-['Overused_Grotesk:Medium',sans-serif] tracking-[0.2px]">markopolo</span>
    </div>
  );
}

function SidebarItem({
  label,
  icon: Icon,
  active = false,
}: {
  label: string;
  icon: typeof LayoutDashboard;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      className={`flex w-full items-center gap-3 rounded-[10px] px-3 py-2 text-left text-[13px] transition ${
        active
          ? "bg-[#2a331c] text-[#d8fe91] shadow-[0_0_14px_rgba(216,254,145,0.2)]"
          : "text-[#bdbdbd] hover:text-[#f5f5f5] hover:bg-[#1b1b1b]"
      }`}
    >
      <Icon className={`size-4 ${active ? "text-[#d8fe91]" : "text-[#8f8f8f]"}`} />
      <span className="font-['Overused_Grotesk:Regular',sans-serif]">{label}</span>
    </button>
  );
}

function JourneyEventRow({ event, isLast }: { event: JourneyEvent; isLast: boolean }) {
  const statusStyles = {
    Opened: "border-[#2d5c3d] bg-[#102016] text-[#7ee2a8]",
    Sent: "border-[#2a2a2a] bg-[#171717] text-[#c8c8c8]",
    Viewed: "border-[#1f3246] bg-[#0f1823] text-[#8ab4f8]",
    Identified: "border-[#3a4a20] bg-[#141b0c] text-[#d8fe91]",
  }[event.status];
  const iconMap = {
    email: Mail,
    web: Eye,
    identity: UserCheck,
  };
  const Icon = iconMap[event.channel ?? "email"];
  return (
    <div className="flex gap-4 pb-6">
      <div className="relative flex flex-col items-center">
        <div className="flex size-9 items-center justify-center rounded-full border border-[#2a2a2a] bg-[#141414]">
          <Icon className="size-4 text-[#bcbcbc]" />
        </div>
        {!isLast && <div className="mt-2 h-full w-px bg-[#1f1f1f]" />}
      </div>
      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-3 text-[12px] text-[#a8a8a8]">
          <span>{event.time}</span>
          <span className={`rounded-full border px-2 py-0.5 text-[11px] uppercase tracking-[0.3px] ${statusStyles}`}>
            {event.status}
          </span>
        </div>
        <div className="mt-2 space-y-1">
          <p className="text-[14px] text-[#f5f5f5]">{event.title}</p>
          <p className="text-[13px] text-[#a3a3a3]">{event.description}</p>
        </div>
      </div>
    </div>
  );
}

export default function AudiencePage() {
  const [members, setMembers] = useState(initialAudienceMembers);
  const [journeys, setJourneys] = useState(initialJourneysByMember);
  const [activeId, setActiveId] = useState(initialAudienceMembers[0]?.id ?? "");
  const [query, setQuery] = useState("");
  const [includeAnonymous, setIncludeAnonymous] = useState(true);
  const [anonymousOnly, setAnonymousOnly] = useState(false);
  const [identifyOpen, setIdentifyOpen] = useState(false);
  const [identifyName, setIdentifyName] = useState("");
  const [identifyEmail, setIdentifyEmail] = useState("");

  const filteredMembers = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return members.filter((member) => {
      if (anonymousOnly && !member.isAnonymous) {
        return false;
      }
      if (!includeAnonymous && member.isAnonymous) {
        return false;
      }
      if (!normalizedQuery) {
        return true;
      }
      const searchTarget = [member.name, member.email, member.anonymousId]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return searchTarget.includes(normalizedQuery);
    });
  }, [anonymousOnly, includeAnonymous, members, query]);

  const activeMember = useMemo(
    () => members.find((member) => member.id === activeId) ?? null,
    [activeId, members],
  );

  useEffect(() => {
    if (!activeMember || !filteredMembers.some((member) => member.id === activeId)) {
      setActiveId(filteredMembers[0]?.id ?? "");
    }
  }, [activeId, activeMember, filteredMembers]);

  const activeJourney = activeMember ? journeys[activeMember.id] ?? [] : [];

  const handleIdentify = () => {
    if (!activeMember) {
      return;
    }
    const trimmedEmail = identifyEmail.trim();
    if (!trimmedEmail) {
      return;
    }
    const trimmedName = identifyName.trim() || trimmedEmail.split("@")[0] || "Identified visitor";
    setMembers((prev) =>
      prev.map((member) =>
        member.id === activeMember.id
          ? {
              ...member,
              name: trimmedName,
              email: trimmedEmail,
              isAnonymous: false,
              confidence: undefined,
            }
          : member,
      ),
    );
    setJourneys((prev) => {
      const existing = prev[activeMember.id] ?? [];
      const identityEvent: JourneyEvent = {
        id: `identify-${Date.now()}`,
        time: "Just now",
        status: "Identified",
        title: "Identity merged",
        description: `Visitor identified as ${trimmedEmail}`,
        channel: "identity",
      };
      return {
        ...prev,
        [activeMember.id]: [identityEvent, ...existing],
      };
    });
    setIdentifyOpen(false);
    setIdentifyName("");
    setIdentifyEmail("");
  };

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-[#f5f5f5]">
      <div className="flex min-h-screen flex-col md:flex-row">
        <aside className="w-full border-b border-[#1f1f1f] bg-[#141414] md:w-[220px] md:border-b-0 md:border-r">
          <div className="flex h-full flex-col gap-6 px-5 py-6">
            <Logo />
            <div className="flex flex-col gap-6 text-[13px]">
              <div className="space-y-2">
                <SidebarItem label="Dashboard" icon={LayoutDashboard} />
              </div>
              <div>
                <p className="mb-2 text-[12px] uppercase tracking-[0.2px] text-[#676767]">Marktag</p>
                <div className="space-y-1">
                  <SidebarItem label="Data room" icon={Database} />
                  <SidebarItem label="Analytics" icon={BarChart3} />
                  <SidebarItem label="Audience studio" icon={Users} active />
                  <SidebarItem label="Users" icon={UserRound} />
                </div>
              </div>
              <div>
                <p className="mb-2 text-[12px] uppercase tracking-[0.2px] text-[#676767]">Campaign agent</p>
                <div className="space-y-1">
                  <SidebarItem label="Campaigns" icon={Megaphone} />
                  <SidebarItem label="Integrations" icon={PlugZap} />
                </div>
              </div>
              <div>
                <p className="mb-2 text-[12px] uppercase tracking-[0.2px] text-[#676767]">Others</p>
                <div className="space-y-1">
                  <SidebarItem label="Plan and billing" icon={CreditCard} />
                  <SidebarItem label="Settings" icon={Settings} />
                  <SidebarItem label="Support" icon={LifeBuoy} />
                </div>
              </div>
            </div>
            <div className="mt-auto space-y-4">
              <button
                type="button"
                className="flex w-full items-center justify-between rounded-[12px] border border-[#232323] bg-[#171717] px-3 py-2 text-[12px] text-[#bdbdbd]"
              >
                English (English)
                <span className="text-[#7c7c7c]">v</span>
              </button>
              <div className="flex items-center gap-3 rounded-[14px] border border-[#232323] bg-[#171717] px-3 py-2">
                <div className="flex size-9 items-center justify-center rounded-full bg-[#2a331c] text-[#d8fe91]">
                  <ShieldCheck className="size-4" />
                </div>
                <div className="text-[12px]">
                  <p className="text-[#f5f5f5]">Imtiaz</p>
                  <p className="text-[#8c8c8c]">imtiaz@marko...</p>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <main className="relative flex-1 bg-[radial-gradient(80%_70%_at_0%_0%,rgba(120,140,60,0.18),transparent)] px-6 py-8 md:px-10">
          <div className="flex flex-col gap-6">
            <header className="space-y-2">
              <h1 className="text-[28px] font-['Overused_Grotesk:Medium',sans-serif] text-[#f7f7f7]">
                Welcome to audience studio.
              </h1>
              <p className="max-w-[560px] text-[14px] text-[#9c9c9c]">
                Track and analyze individual user journeys to optimize conversations.
              </p>
            </header>

            <div className="space-y-4">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[#8c8c8c]" />
                  <input
                    aria-label="Search audience"
                    placeholder="Users who visited multiple times today"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    className="w-full rounded-[12px] border border-[#2a2a2a] bg-[#111111] px-12 py-3 text-[13px] text-[#f5f5f5] placeholder:text-[#6f6f6f] focus:outline-none focus:ring-1 focus:ring-[#d8fe91]/60"
                  />
                </div>
                <button
                  type="button"
                  className="h-[46px] rounded-[12px] border border-[#4a542e] bg-[#6f7d47] px-6 text-[13px] font-['Overused_Grotesk:Medium',sans-serif] text-[#101010] shadow-[0_0_12px_rgba(216,254,145,0.25)]"
                >
                  Search
                </button>
              </div>

              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <button
                  type="button"
                  className="flex items-center gap-3 rounded-[12px] border border-[#2a2a2a] bg-[#111111] px-4 py-3 text-[13px] text-[#d9d9d9]"
                >
                  <Calendar className="size-4 text-[#d8fe91]" />
                  <div className="text-left">
                    <p className="text-[12px] text-[#a3a3a3]">Date Range</p>
                    <p>Today - Nov 20</p>
                  </div>
                </button>
                <div className="flex flex-wrap items-center gap-4 text-[12px] text-[#8f8f8f]">
                  <span>{filteredMembers.length} Individuals Found</span>
                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      type="button"
                      aria-pressed={includeAnonymous}
                      onClick={() => {
                        if (anonymousOnly) {
                          setIncludeAnonymous(true);
                          return;
                        }
                        setIncludeAnonymous((prev) => !prev);
                      }}
                      className={`flex items-center gap-2 rounded-full border px-3 py-1 text-[12px] transition ${
                        includeAnonymous
                          ? "border-[#3a4a20] bg-[#141b0c] text-[#d8fe91]"
                          : "border-[#2a2a2a] bg-[#111111] text-[#8f8f8f]"
                      }`}
                    >
                      <Fingerprint className="size-3.5" />
                      Include anonymous
                    </button>
                    <button
                      type="button"
                      aria-pressed={anonymousOnly}
                      onClick={() => {
                        setAnonymousOnly((prev) => {
                          const next = !prev;
                          if (next) {
                            setIncludeAnonymous(true);
                          }
                          return next;
                        });
                      }}
                      className={`flex items-center gap-2 rounded-full border px-3 py-1 text-[12px] transition ${
                        anonymousOnly
                          ? "border-[#3a4a20] bg-[#141b0c] text-[#d8fe91]"
                          : "border-[#2a2a2a] bg-[#111111] text-[#8f8f8f]"
                      }`}
                    >
                      Anonymous only
                    </button>
                  </div>
                  <button type="button" className="flex items-center gap-2 text-[#bcbcbc] hover:text-[#f5f5f5]">
                    <RefreshCcw className="size-4" />
                    Refresh
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 xl:grid-cols-[360px_1fr]">
              <section className="space-y-4">
                {filteredMembers.length === 0 ? (
                  <div className="rounded-[16px] border border-dashed border-[#2a2a2a] bg-[#101010] p-6 text-center text-[13px] text-[#8c8c8c]">
                    No audience matches this filter yet.
                  </div>
                ) : (
                  filteredMembers.map((member) => {
                    const isActive = member.id === activeId;
                    const isAnonymous = member.isAnonymous;
                    return (
                      <button
                        key={member.id}
                        type="button"
                        onClick={() => setActiveId(member.id)}
                        className={`w-full rounded-[16px] border px-5 py-4 text-left transition ${
                          isActive
                            ? "border-[#d8fe91]/60 bg-[#13170c] shadow-[0_0_20px_rgba(216,254,145,0.15)]"
                            : "border-[#1f1f1f] bg-[#101010] hover:border-[#2d2d2d]"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <div
                              className={`flex size-10 items-center justify-center rounded-full ${
                                isActive ? "bg-[#d8fe91] text-[#101010]" : "bg-[#1f1f1f] text-[#cfcfcf]"
                              }`}
                            >
                              {isAnonymous ? (
                                <Fingerprint className="size-4" />
                              ) : (
                                member.name.slice(0, 1).toUpperCase()
                              )}
                            </div>
                            <div>
                              <p className="text-[14px] text-[#f5f5f5]">{member.email || "Anonymous visitor"}</p>
                              <p className="text-[12px] text-[#7f7f7f]">
                                {member.email ? member.name : member.anonymousId}
                              </p>
                            </div>
                          </div>
                          {isAnonymous && (
                            <span className="rounded-full border border-[#2a2a2a] bg-[#171717] px-2 py-1 text-[10px] uppercase tracking-[0.3px] text-[#c8c8c8]">
                              Anonymous
                            </span>
                          )}
                        </div>
                        <div className="mt-4 flex flex-wrap gap-3 text-[12px] text-[#9c9c9c]">
                          <span className="flex items-center gap-2">
                            <MapPin className="size-3.5 text-[#7b7b7b]" />
                            {member.location}
                          </span>
                          <span className="flex items-center gap-2">
                            <Phone className="size-3.5 text-[#7b7b7b]" />
                            {member.phone || "No phone"}
                          </span>
                        </div>
                        <div className="mt-3 flex flex-wrap items-center gap-3 text-[12px] text-[#9c9c9c]">
                          <span>
                            {member.sessions} sessions | {member.minutes} min total
                          </span>
                          {member.isAnonymous && typeof member.confidence === "number" && (
                            <span className="rounded-full border border-[#2a2a2a] bg-[#111111] px-2 py-1 text-[11px] text-[#bdbdbd]">
                              Confidence {Math.round(member.confidence * 100)}%
                            </span>
                          )}
                        </div>
                        <div className="mt-1 text-[12px] text-[#6f6f6f]">Last seen: {member.lastSeen}</div>
                        {member.firstSeen && (
                          <div className="mt-1 text-[12px] text-[#6f6f6f]">First seen: {member.firstSeen}</div>
                        )}
                      </button>
                    );
                  })
                )}
              </section>

              <section className="rounded-[18px] border border-[#1f1f1f] bg-[#0f0f0f]/90 px-6 py-5">
                {!activeMember ? (
                  <div className="rounded-[14px] border border-dashed border-[#2a2a2a] bg-[#111111] p-6 text-center text-[13px] text-[#8c8c8c]">
                    Select an audience member to see the journey.
                  </div>
                ) : (
                  <>
                    <div className="mb-6 border-b border-[#1f1f1f] pb-5">
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div>
                          <p className="text-[16px] font-['Overused_Grotesk:Medium',sans-serif] text-[#f5f5f5]">
                            {(activeMember.email || "Anonymous visitor") + "'s Journey"}
                          </p>
                          <div className="mt-2 flex flex-wrap items-center gap-2 text-[12px] text-[#8f8f8f]">
                            <span
                              className={`rounded-full border px-2 py-1 text-[11px] uppercase tracking-[0.3px] ${
                                activeMember.isAnonymous
                                  ? "border-[#2a2a2a] bg-[#171717] text-[#c8c8c8]"
                                  : "border-[#294227] bg-[#0f1a12] text-[#8bdc9b]"
                              }`}
                            >
                              {activeMember.isAnonymous ? "Anonymous" : "Known"}
                            </span>
                            {activeMember.isAnonymous && activeMember.anonymousId && (
                              <span className="flex items-center gap-1 rounded-full border border-[#2a2a2a] bg-[#111111] px-2 py-1 text-[11px] text-[#bdbdbd]">
                                <Fingerprint className="size-3.5" />
                                {activeMember.anonymousId}
                              </span>
                            )}
                            {activeMember.isAnonymous && typeof activeMember.confidence === "number" && (
                              <span className="rounded-full border border-[#2a2a2a] bg-[#111111] px-2 py-1 text-[11px] text-[#bdbdbd]">
                                Confidence {Math.round(activeMember.confidence * 100)}%
                              </span>
                            )}
                          </div>
                          <p className="mt-2 text-[13px] text-[#8f8f8f]">Understanding the individual path.</p>
                        </div>
                        {activeMember.isAnonymous && (
                          <button
                            type="button"
                            onClick={() => {
                              setIdentifyOpen(true);
                              setIdentifyName("");
                              setIdentifyEmail("");
                            }}
                            className="inline-flex items-center gap-2 rounded-full border border-[#3a4a20] bg-[#141b0c] px-4 py-2 text-[12px] text-[#d8fe91] transition hover:border-[#4d5a2a]"
                          >
                            <UserPlus className="size-4" />
                            Identify visitor
                          </button>
                        )}
                      </div>
                      <div className="mt-4 flex flex-wrap gap-4 text-[12px] text-[#8f8f8f]">
                        <span className="flex items-center gap-2">
                          <MapPin className="size-3.5 text-[#7b7b7b]" />
                          {activeMember.location}
                        </span>
                        <span className="flex items-center gap-2">
                          <Calendar className="size-3.5 text-[#7b7b7b]" />
                          Last seen {activeMember.lastSeen}
                        </span>
                      </div>
                    </div>
                    {activeJourney.length === 0 ? (
                      <div className="rounded-[14px] border border-dashed border-[#2a2a2a] bg-[#111111] p-6 text-center text-[13px] text-[#8c8c8c]">
                        No journey data found for this audience member yet.
                      </div>
                    ) : (
                      activeJourney.map((event, index) => (
                        <JourneyEventRow key={event.id} event={event} isLast={index === activeJourney.length - 1} />
                      ))
                    )}
                  </>
                )}
              </section>
            </div>
          </div>
        </main>
      </div>

      {identifyOpen && activeMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setIdentifyOpen(false)}
        >
          <div
            className="w-full max-w-[420px] rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6 text-left"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[16px] font-['Overused_Grotesk:Medium',sans-serif] text-[#f5f5f5]">
                  Identify visitor
                </p>
                <p className="mt-1 text-[12px] text-[#8f8f8f]">
                  Assign a known identity to {activeMember.anonymousId ?? "this visitor"}.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIdentifyOpen(false)}
                className="flex size-8 items-center justify-center rounded-full border border-[#2a2a2a] bg-[#101010] text-[#bdbdbd] transition hover:text-[#f5f5f5]"
                aria-label="Close identify dialog"
              >
                <X className="size-4" />
              </button>
            </div>
            <div className="mt-5 space-y-4">
              <label className="block text-[12px] text-[#bdbdbd]">
                Full name
                <input
                  value={identifyName}
                  onChange={(event) => setIdentifyName(event.target.value)}
                  placeholder="Enter name"
                  className="mt-2 w-full rounded-[12px] border border-[#2a2a2a] bg-[#101010] px-4 py-2 text-[13px] text-[#f5f5f5] placeholder:text-[#6f6f6f] focus:outline-none focus:ring-1 focus:ring-[#d8fe91]/60"
                />
              </label>
              <label className="block text-[12px] text-[#bdbdbd]">
                Email address
                <input
                  value={identifyEmail}
                  onChange={(event) => setIdentifyEmail(event.target.value)}
                  placeholder="name@company.com"
                  className="mt-2 w-full rounded-[12px] border border-[#2a2a2a] bg-[#101010] px-4 py-2 text-[13px] text-[#f5f5f5] placeholder:text-[#6f6f6f] focus:outline-none focus:ring-1 focus:ring-[#d8fe91]/60"
                />
              </label>
            </div>
            <div className="mt-6 flex flex-col gap-3">
              <button
                type="button"
                onClick={handleIdentify}
                disabled={!identifyEmail.trim()}
                className={`flex items-center justify-center gap-2 rounded-[12px] px-4 py-2 text-[13px] font-['Overused_Grotesk:Medium',sans-serif] transition ${
                  identifyEmail.trim()
                    ? "bg-[#d8fe91] text-[#101010] hover:bg-[#c4f36b]"
                    : "cursor-not-allowed bg-[#2a2a2a] text-[#7f7f7f]"
                }`}
              >
                <UserCheck className="size-4" />
                Assign identity
              </button>
              <button
                type="button"
                onClick={() => setIdentifyOpen(false)}
                className="rounded-[12px] border border-[#2a2a2a] bg-transparent px-4 py-2 text-[12px] text-[#bdbdbd] transition hover:text-[#f5f5f5]"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        type="button"
        className="fixed bottom-6 right-6 flex size-12 items-center justify-center rounded-full bg-[#5f86ff] text-white shadow-[0_12px_30px_rgba(67,97,238,0.35)]"
        aria-label="Open assistant"
      >
        <Mail className="size-5" />
      </button>
    </div>
  );
}
