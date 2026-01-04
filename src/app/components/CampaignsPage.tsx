import svgPaths from "../../imports/svg-lfxnmi0o8i";
import { useState } from "react";
import { ShoppingCart, CreditCard, Clock, MessageSquare, Phone, Mail, Edit2, XCircle } from 'lucide-react';

// Reusable components from the Dashboard
function Logo() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Logo">
          <path d={svgPaths.p3a654500} fill="white" id="Logo_2" />
        </g>
      </svg>
    </div>
  );
}

function Wrapper1({
  children,
  additionalClassNames = "",
  viewBox = "0 0 16 16",
}: React.PropsWithChildren<{ additionalClassNames?: string; viewBox?: string }>) {
  return (
    <div className={`size-[16px] ${additionalClassNames}`}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={viewBox}>
        {children}
      </svg>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center size-full">
      <div className="content-stretch flex gap-[8px] items-center px-[8px] py-0 relative size-full">{children}</div>
    </div>
  );
}

type GlowToggleProps = {
  enabled: boolean;
  label: string;
  onToggle: () => void;
};

function GlowToggle({ enabled, label, onToggle }: GlowToggleProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={enabled}
      aria-label={label}
      onClick={onToggle}
      className={`inline-flex h-6 w-11 items-center rounded-full border p-[2px] transition-all duration-200 ${
        enabled
          ? "justify-end bg-[#0f1a12] border-[#d8fe91]/60 shadow-[0_0_12px_rgba(216,254,145,0.35)]"
          : "justify-start bg-[#121212] border-[#2a2a2a] shadow-[0_0_8px_rgba(82,82,82,0.2)]"
      }`}
    >
      <span
        className={`h-4 w-4 rounded-full transition-all duration-200 ${
          enabled
            ? "bg-[#d8fe91] shadow-[0_0_8px_rgba(216,254,145,0.7)]"
            : "bg-[#737373] shadow-[0_0_6px_rgba(115,115,115,0.35)]"
        }`}
      />
    </button>
  );
}

function SidebarSidebarMenuSubItem10({ children, additionalClassNames = "" }: React.PropsWithChildren<{ additionalClassNames?: string }>) {
  return (
    <div className={`h-[28px] relative shrink-0 w-full ${additionalClassNames}`}>
      <Wrapper>{children}</Wrapper>
    </div>
  );
}

function IconLayoutDashboard() {
  return (
    <Wrapper1 additionalClassNames="relative shrink-0" viewBox="0 0 24 24">
      <g clipPath="url(#clip0_1_6912)" id="Icon / LayoutDashboard">
        <g id="Vector">
          <path d={svgPaths.p13b4cd00} stroke="#FAFAFA" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" />
          <path d={svgPaths.p32939e80} stroke="#FAFAFA" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" />
          <path d={svgPaths.pdc9c900} stroke="#FAFAFA" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" />
          <path d={svgPaths.p20de0972} stroke="#FAFAFA" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1_6912">
          <rect fill="white" height="24" width="24" />
        </clipPath>
      </defs>
    </Wrapper1>
  );
}

function IconMegaphone() {
  return (
    <Wrapper1 additionalClassNames="relative shrink-0">
      <g id="Icon / Megaphone">
        <path d={svgPaths.p33d7bf00} id="Vector" stroke="#d8fe91" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </Wrapper1>
  );
}

function IconDatabaseZap() {
  return (
    <Wrapper1 additionalClassNames="relative shrink-0" viewBox="0 0 24 24">
      <g clipPath="url(#clip0_1_6909)" id="Icon / DatabaseZap">
        <path d={svgPaths.p39d46e80} id="Vector" stroke="#FAFAFA" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" />
      </g>
      <defs>
        <clipPath id="clip0_1_6909">
          <rect fill="white" height="24" width="24" />
        </clipPath>
      </defs>
    </Wrapper1>
  );
}

function IconBarChart() {
  return (
    <Wrapper1 additionalClassNames="relative shrink-0" viewBox="0 0 24 24">
      <g clipPath="url(#clip0_1_6900)" id="Icon / BarChart">
        <path d="M12 20V10M18 20V4M6 20V16" id="Vector" stroke="#FAFAFA" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" />
      </g>
      <defs>
        <clipPath id="clip0_1_6900">
          <rect fill="white" height="24" width="24" />
        </clipPath>
      </defs>
    </Wrapper1>
  );
}

function IconUsersRound() {
  return (
    <Wrapper1 additionalClassNames="relative shrink-0" viewBox="0 0 24 24">
      <g clipPath="url(#clip0_1_6897)" id="Icon / UsersRound">
        <path d={svgPaths.p197a0a00} id="Vector" stroke="#FAFAFA" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" />
      </g>
      <defs>
        <clipPath id="clip0_1_6897">
          <rect fill="white" height="24" width="24" />
        </clipPath>
      </defs>
    </Wrapper1>
  );
}

function IconMagnet() {
  return (
    <Wrapper1 additionalClassNames="relative shrink-0" viewBox="0 0 24 24">
      <g clipPath="url(#clip0_1_6888)" id="Icon / Magnet">
        <path d={svgPaths.p2c24930} id="Vector" stroke="#FAFAFA" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" />
      </g>
      <defs>
        <clipPath id="clip0_1_6888">
          <rect fill="white" height="24" width="24" />
        </clipPath>
      </defs>
    </Wrapper1>
  );
}

function IconPlugZap() {
  return (
    <Wrapper1 additionalClassNames="relative shrink-0">
      <g id="Icon / PlugZap">
        <path d={svgPaths.p1fc7c950} id="Vector" stroke="#FAFAFA" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" />
      </g>
    </Wrapper1>
  );
}

function IconCreditCard() {
  return (
    <Wrapper1 additionalClassNames="relative shrink-0" viewBox="0 0 24 24">
      <g clipPath="url(#clip0_1_6924)" id="Icon / CreditCard">
        <path d={svgPaths.p234f7800} id="Vector" stroke="#FAFAFA" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" />
      </g>
      <defs>
        <clipPath id="clip0_1_6924">
          <rect fill="white" height="24" width="24" />
        </clipPath>
      </defs>
    </Wrapper1>
  );
}

function IconSettings() {
  return (
    <Wrapper1 additionalClassNames="relative shrink-0" viewBox="0 0 24 24">
      <g clipPath="url(#clip0_1_6885)" id="Icon / Settings2">
        <path d={svgPaths.p3b0a8c00} id="Vector" stroke="#FAFAFA" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" />
      </g>
      <defs>
        <clipPath id="clip0_1_6885">
          <rect fill="white" height="24" width="24" />
        </clipPath>
      </defs>
    </Wrapper1>
  );
}

function IconLifeBuoy() {
  return (
    <Wrapper1 additionalClassNames="relative shrink-0" viewBox="0 0 24 24">
      <g clipPath="url(#clip0_1_6918)" id="Icon / LifeBuoy">
        <path d={svgPaths.pb0c6100} id="Vector" stroke="#FAFAFA" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" />
      </g>
      <defs>
        <clipPath id="clip0_1_6918">
          <rect fill="white" height="24" width="24" />
        </clipPath>
      </defs>
    </Wrapper1>
  );
}

function IconChevronsUpDown() {
  return (
    <Wrapper1 additionalClassNames="absolute left-0 top-0">
      <g id="Icon / ChevronsUpDown">
        <path d={svgPaths.p15233480} id="Vector" stroke="#FAFAFA" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </Wrapper1>
  );
}

function IconPlus() {
  return (
    <Wrapper1 additionalClassNames="relative shrink-0">
      <g clipPath="url(#clip0_1_6927)" id="Icon / Plus">
        <path d="M3 8H13M8 3V13" id="Vector" stroke="#171717" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
      </g>
      <defs>
        <clipPath id="clip0_1_6927">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </Wrapper1>
  );
}

function Sidebar() {
  return (
    <div className="fixed bg-[#171717] h-screen left-0 top-0 w-[184px]">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        {/* Header with Logo */}
        <div className="bg-[#171717] relative shrink-0 w-full">
          <div className="size-full">
            <div className="content-stretch flex flex-col items-start p-[8px] relative w-full">
              <div className="relative rounded-[8px] shrink-0 w-full">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
                    <Logo />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Content */}
        <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full">
          <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
            <div className="size-full">
              <div className="content-stretch flex flex-col items-start pl-[8px] pr-0 py-[8px] relative size-full">
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                  
                  {/* Dashboard */}
                  <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                    <div className="relative shrink-0 w-full">
                      <div className="size-full">
                        <div className="content-stretch flex flex-col gap-[4px] items-start pl-[6px] pr-0 py-[2px] relative w-full">
                          <div className="h-[28px] relative shrink-0 w-full">
                            <Wrapper>
                              <IconLayoutDashboard />
                              <p className="basis-0 font-['Overused_Grotesk:Regular',sans-serif] grow leading-none min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#fafafa] text-[14px] text-nowrap opacity-40">Dashboard</p>
                            </Wrapper>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Marktag Section */}
                  <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                    <div className="h-[32px] relative rounded-[8px] shrink-0 w-full">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative size-full">
                          <p className="basis-0 font-['Overused_Grotesk:Regular',sans-serif] grow leading-none min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#727272] text-[14px] text-nowrap">Marktag</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0 w-full">
                      <div className="size-full">
                        <div className="content-stretch flex flex-col gap-[4px] items-start pl-[6px] pr-0 py-[2px] relative w-full">
                          <SidebarSidebarMenuSubItem10 additionalClassNames="rounded-[8px]">
                            <IconDatabaseZap />
                            <p className="basis-0 font-['Overused_Grotesk:Regular',sans-serif] grow leading-none min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#fafafa] text-[14px] text-nowrap opacity-40">Data room</p>
                          </SidebarSidebarMenuSubItem10>
                          <SidebarSidebarMenuSubItem10 additionalClassNames="rounded-[8px]">
                            <IconBarChart />
                            <p className="basis-0 font-['Overused_Grotesk:Regular',sans-serif] grow leading-none min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#fafafa] text-[14px] text-nowrap opacity-40">Analytics</p>
                          </SidebarSidebarMenuSubItem10>
                          <SidebarSidebarMenuSubItem10 additionalClassNames="rounded-[8px]">
                            <IconUsersRound />
                            <p className="basis-0 font-['Overused_Grotesk:Regular',sans-serif] grow leading-none min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#fafafa] text-[14px] text-nowrap opacity-40">Audience Studio</p>
                          </SidebarSidebarMenuSubItem10>
                          <SidebarSidebarMenuSubItem10 additionalClassNames="rounded-[8px]">
                            <IconMagnet />
                            <p className="basis-0 font-['Overused_Grotesk:Regular',sans-serif] grow leading-none min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#fafafa] text-[14px] text-nowrap opacity-40">Leads</p>
                          </SidebarSidebarMenuSubItem10>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Campaign Agent Section - Active */}
                  <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                    <div className="h-[32px] relative rounded-[8px] shrink-0 w-full">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative size-full">
                          <p className="basis-0 font-['Overused_Grotesk:Regular',sans-serif] grow leading-none min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#727272] text-[14px] text-nowrap">Campaign agent</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0 w-full">
                      <div className="size-full">
                        <div className="content-stretch flex flex-col gap-[4px] items-start px-[6px] py-[2px] relative w-full">
                          <div className="bg-[#2b331d] h-[28px] relative shrink-0 w-full">
                            <div aria-hidden="true" className="absolute border-[#d8fe91] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
                            <Wrapper>
                              <IconMegaphone />
                              <p className="basis-0 font-['Overused_Grotesk:Regular',sans-serif] grow leading-none min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#d8fe91] text-[14px] text-nowrap">Campaigns</p>
                            </Wrapper>
                          </div>
                          <SidebarSidebarMenuSubItem10>
                            <IconPlugZap />
                            <p className="basis-0 font-['Overused_Grotesk:Regular',sans-serif] grow leading-none min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#fafafa] text-[14px] text-nowrap opacity-40">Integrations</p>
                          </SidebarSidebarMenuSubItem10>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Others Section */}
                  <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                    <div className="h-[32px] relative rounded-[8px] shrink-0 w-full">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative size-full">
                          <p className="basis-0 font-['Overused_Grotesk:Regular',sans-serif] grow leading-none min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#727272] text-[14px] text-nowrap">Others</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0 w-full">
                      <div className="size-full">
                        <div className="content-stretch flex flex-col gap-[4px] items-start pl-[6px] pr-0 py-[2px] relative w-full">
                          <SidebarSidebarMenuSubItem10>
                            <IconCreditCard />
                            <p className="basis-0 font-['Overused_Grotesk:Regular',sans-serif] grow leading-none min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#fafafa] text-[14px] text-nowrap opacity-40">Plan and Billing</p>
                          </SidebarSidebarMenuSubItem10>
                          <SidebarSidebarMenuSubItem10 additionalClassNames="rounded-[8px]">
                            <IconSettings />
                            <p className="basis-0 font-['Overused_Grotesk:Regular',sans-serif] grow leading-none min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#fafafa] text-[14px] text-nowrap opacity-40">Settings</p>
                          </SidebarSidebarMenuSubItem10>
                          <SidebarSidebarMenuSubItem10 additionalClassNames="rounded-[8px]">
                            <IconLifeBuoy />
                            <p className="basis-0 font-['Overused_Grotesk:Regular',sans-serif] grow leading-none min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#fafafa] text-[14px] text-nowrap opacity-40">Support</p>
                          </SidebarSidebarMenuSubItem10>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer with Avatar */}
        <div className="bg-[#171717] relative shrink-0 w-full">
          <div className="size-full">
            <div className="content-stretch flex flex-col items-start p-[8px] relative w-full">
              <div className="relative rounded-[8px] shrink-0 w-full">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
                    <div className="content-stretch flex items-center relative rounded-[10px] shrink-0">
                      <div className="bg-[#262626] overflow-clip relative rounded-[4px] shrink-0 size-[32px]">
                        <div className="absolute flex flex-col font-['Overused_Grotesk:Regular',sans-serif] inset-0 justify-center leading-[0] not-italic text-[#fafafa] text-[14px] text-center">
                          <p className="leading-[20px]">JD</p>
                        </div>
                      </div>
                    </div>
                    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center leading-none min-h-px min-w-px not-italic relative shrink-0 text-[#fafafa] text-nowrap">
                      <p className="font-['Overused_Grotesk:SemiBold',sans-serif] overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] w-full">John Doe</p>
                      <p className="font-['Overused_Grotesk:Regular',sans-serif] overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] w-full">johndoe12@gmail.com</p>
                    </div>
                    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]">
                      <IconChevronsUpDown />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

export default function CampaignsPage() {
  const [isCartActive, setIsCartActive] = useState(true);
  const [isCheckoutActive, setIsCheckoutActive] = useState(false);

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <Sidebar />
      
      {/* Main Content Area */}
      <div className="ml-[184px]">
        {/* Header Section */}
        <div className="border-b border-[rgba(255,255,255,0.1)] p-6">
          <div className="flex items-start justify-between max-w-[1280px]">
            <div>
              <h1 className="text-[#fafafa] text-[32px] font-['Instrument_Serif:Regular',sans-serif] leading-[40px] mb-1">
                Campaigns
              </h1>
              <p className="text-[#a3a3a3] text-[16px] font-['Overused_Grotesk:Regular',sans-serif] leading-[24px]">
                Launch a campaign to connect with your audience in a way that feels personal and real.
              </p>
            </div>
            <button className="bg-[#d8fe91] hover:bg-[#c5eb7e] text-[#171717] h-[36px] px-4 rounded-[4px] flex items-center gap-2 font-['Overused_Grotesk:Medium',sans-serif] text-[14px] transition-colors">
              <IconPlus />
              <div className="flex flex-col justify-center leading-[0]">
                <p className="leading-[20px]">Create campaign</p>
              </div>
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6">
          {/* Campaign Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6 max-w-[1280px]">
            {/* Cart Recovery Agent Card */}
            <div className="bg-[#1a1a1a] border border-[rgba(255,255,255,0.1)] rounded-[4px] p-5 hover:border-[#d8fe91]/30 transition-colors cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#d8fe91]/10 rounded-[4px] flex items-center justify-center">
                    <ShoppingCart className="w-5 h-5 text-[#d8fe91]" />
                  </div>
                  <div>
                    <h3 className="text-[#fafafa] font-['Overused_Grotesk:SemiBold',sans-serif] text-[16px] mb-1">
                      Cart Recovery Agent
                    </h3>
                    <p className="text-[#a3a3a3] text-[14px] font-['Overused_Grotesk:Regular',sans-serif] leading-[20px]">
                      Recover abandoned carts with AI-powered messaging
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <div className={`w-1.5 h-1.5 rounded-full ${isCartActive ? "bg-[#10b981]" : "bg-[#525252]"}`}></div>
                    <span
                      className={`text-[12px] font-['Overused_Grotesk:Medium',sans-serif] ${
                        isCartActive ? "text-[#10b981]" : "text-[#737373]"
                      }`}
                    >
                      {isCartActive ? "Active" : "Paused"}
                    </span>
                  </div>
                  <GlowToggle
                    enabled={isCartActive}
                    label="Toggle Cart Recovery Agent"
                    onToggle={() => setIsCartActive(!isCartActive)}
                  />
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-[rgba(255,255,255,0.05)]">
                <div>
                  <p className="text-[#737373] text-[12px] font-['Overused_Grotesk:Regular',sans-serif] leading-[20px] mb-0.5">
                    Recovered
                  </p>
                  <p className="text-[#fafafa] text-[18px] font-['Overused_Grotesk:SemiBold',sans-serif]">
                    $12,450
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[#737373] text-[12px] font-['Overused_Grotesk:Regular',sans-serif] leading-[20px] mb-0.5">
                    Orders
                  </p>
                  <p className="text-[#fafafa] text-[18px] font-['Overused_Grotesk:SemiBold',sans-serif]">
                    186
                  </p>
                </div>
                <div className="flex gap-1.5">
                  <button className="w-7 h-7 rounded-[4px] bg-[#262626] hover:bg-[#333] flex items-center justify-center text-[#fafafa] transition-colors">
                    <MessageSquare className="w-3.5 h-3.5" />
                  </button>
                  <button className="w-7 h-7 rounded-[4px] bg-[#262626] hover:bg-[#333] flex items-center justify-center text-[#fafafa] transition-colors">
                    <Phone className="w-3.5 h-3.5" />
                  </button>
                  <button className="w-7 h-7 rounded-[4px] bg-[#262626] hover:bg-[#333] flex items-center justify-center text-[#fafafa] transition-colors">
                    <Mail className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Checkout Recovery Agent Card */}
            <div className="bg-[#1a1a1a] border border-[rgba(255,255,255,0.1)] rounded-[4px] p-5 hover:border-[#d8fe91]/30 transition-colors cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#10b981]/10 rounded-[4px] flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-[#10b981]" />
                  </div>
                  <div>
                    <h3 className="text-[#fafafa] font-['Overused_Grotesk:SemiBold',sans-serif] text-[16px] mb-1">
                      Checkout Recovery Agent
                    </h3>
                    <p className="text-[#a3a3a3] text-[14px] font-['Overused_Grotesk:Regular',sans-serif] leading-[20px]">
                      Recover checkout dropoffs with urgent outreach
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <div className={`w-1.5 h-1.5 rounded-full ${isCheckoutActive ? "bg-[#10b981]" : "bg-[#525252]"}`}></div>
                    <span
                      className={`text-[12px] font-['Overused_Grotesk:Medium',sans-serif] ${
                        isCheckoutActive ? "text-[#10b981]" : "text-[#737373]"
                      }`}
                    >
                      {isCheckoutActive ? "Active" : "Paused"}
                    </span>
                  </div>
                  <GlowToggle
                    enabled={isCheckoutActive}
                    label="Toggle Checkout Recovery Agent"
                    onToggle={() => setIsCheckoutActive(!isCheckoutActive)}
                  />
                </div>
              </div>
              
              <div className="flex items-center gap-2 pt-4 border-t border-[rgba(255,255,255,0.05)]">
                <Clock className="w-4 h-4 text-[#10b981]" />
                <span className="text-[#10b981] text-[14px] font-['Overused_Grotesk:Medium',sans-serif]">
                  2-5 min response time
                </span>
              </div>
            </div>
          </div>

          {/* Detailed Campaign View */}
          <div className="bg-[#1a1a1a] border border-[rgba(255,255,255,0.1)] rounded-[4px] max-w-[1280px]">
            {/* Header */}
            <div className="p-6 border-b border-[rgba(255,255,255,0.05)]">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3 flex-1">
                  <div className="w-10 h-10 bg-[#d8fe91]/10 rounded-[4px] flex items-center justify-center shrink-0">
                    <ShoppingCart className="w-5 h-5 text-[#d8fe91]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <h2 className="text-[#fafafa] font-['Overused_Grotesk:SemiBold',sans-serif] text-[18px]">
                        Cart Recovery Agent
                      </h2>
                      <div className="flex items-center gap-1.5">
                        <div className={`w-1.5 h-1.5 rounded-full ${isCartActive ? "bg-[#10b981]" : "bg-[#525252]"}`}></div>
                        <span
                          className={`text-[12px] font-['Overused_Grotesk:Medium',sans-serif] ${
                            isCartActive ? "text-[#10b981]" : "text-[#737373]"
                          }`}
                        >
                          {isCartActive ? "Active" : "Paused"}
                        </span>
                      </div>
                    </div>
                    <p className="text-[#737373] text-[14px] font-['Overused_Grotesk:Regular',sans-serif] leading-[20px]">
                      This AI agent monitors your store for abandoned carts and automatically reaches out to customers with personalized, behavior-aware messaging. It detects why customers abandoned (price sensitivity, distraction, or hesitation) and tailors the recovery approach accordingly.
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 ml-4 shrink-0">
                  <button className="h-[36px] px-4 border border-[rgba(255,255,255,0.1)] rounded-[4px] text-[#fafafa] hover:bg-[#262626] font-['Overused_Grotesk:Medium',sans-serif] text-[14px] transition-colors flex items-center gap-2">
                    <Edit2 className="w-4 h-4" />
                    Edit Agent
                  </button>
                  <button className="h-[36px] px-4 border border-[rgba(255,255,255,0.1)] rounded-[4px] text-[#ef4444] hover:bg-[#ef4444]/10 hover:border-[#ef4444]/30 font-['Overused_Grotesk:Medium',sans-serif] text-[14px] transition-colors flex items-center gap-2">
                    <XCircle className="w-4 h-4" />
                    Deactivate
                  </button>
                </div>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 p-6 border-b border-[rgba(255,255,255,0.05)]">
              <div className="bg-[#10b981]/5 border border-[#10b981]/20 rounded-[4px] p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-[#10b981] rounded-full"></div>
                  <p className="text-[#10b981] text-[11px] font-['Overused_Grotesk:Medium',sans-serif] uppercase tracking-wide">
                    Revenue Recovered
                  </p>
                </div>
                <p className="text-[#fafafa] text-[28px] font-['Overused_Grotesk:SemiBold',sans-serif] leading-[32px] mb-1">
                  $12,450
                </p>
                <p className="text-[#737373] text-[14px] font-['Overused_Grotesk:Regular',sans-serif] leading-[20px]">
                  Last 30 days
                </p>
              </div>

              <div className="bg-[#d8fe91]/5 border border-[#d8fe91]/20 rounded-[4px] p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-[#d8fe91] rounded-full"></div>
                  <p className="text-[#d8fe91] text-[11px] font-['Overused_Grotesk:Medium',sans-serif] uppercase tracking-wide">
                    Orders Recovered
                  </p>
                </div>
                <p className="text-[#fafafa] text-[28px] font-['Overused_Grotesk:SemiBold',sans-serif] leading-[32px] mb-1">
                  186
                </p>
                <p className="text-[#737373] text-[14px] font-['Overused_Grotesk:Regular',sans-serif] leading-[20px]">
                  $67 avg order
                </p>
              </div>

              <div className="bg-[#f59e0b]/5 border border-[#f59e0b]/20 rounded-[4px] p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-[#f59e0b] rounded-full"></div>
                  <p className="text-[#f59e0b] text-[11px] font-['Overused_Grotesk:Medium',sans-serif] uppercase tracking-wide">
                    Conversion Rate
                  </p>
                </div>
                <p className="text-[#fafafa] text-[28px] font-['Overused_Grotesk:SemiBold',sans-serif] leading-[32px] mb-1">
                  38%
                </p>
                <p className="text-[#737373] text-[14px] font-['Overused_Grotesk:Regular',sans-serif] leading-[20px]">
                  24% response rate
                </p>
              </div>
            </div>

            {/* Revenue by Channel */}
            <div className="p-6">
              <h3 className="text-[#fafafa] font-['Overused_Grotesk:SemiBold',sans-serif] text-[16px] leading-[24px] mb-4">
                Revenue by Channel
              </h3>
              <div className="space-y-1.5">
                {/* Table Header */}
                <div className="grid grid-cols-[1fr,120px,140px] gap-4 px-4 py-2 text-[#737373] text-[12px] font-['Overused_Grotesk:Medium',sans-serif] uppercase tracking-wide">
                  <div>Channel</div>
                  <div className="text-right">Revenue</div>
                  <div className="text-right">Share</div>
                </div>
                
                {/* Email Row */}
                <div className="grid grid-cols-[1fr,120px,140px] gap-4 px-4 py-3 bg-[#0f0f0f] rounded-[4px] items-center hover:bg-[#151515] transition-colors">
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#737373]" />
                    <span className="text-[#fafafa] text-[14px] font-['Overused_Grotesk:Regular',sans-serif]">
                      Email
                    </span>
                  </div>
                  <div className="text-right text-[#fafafa] text-[14px] font-['Overused_Grotesk:Medium',sans-serif]">
                    $5,603
                  </div>
                  <div className="flex items-center justify-end gap-2.5">
                    <div className="flex-1 max-w-[80px] bg-[#262626] rounded-full h-1.5 overflow-hidden">
                      <div className="bg-[#d8fe91] h-full rounded-full" style={{ width: '45%' }}></div>
                    </div>
                    <span className="text-[#737373] text-[14px] font-['Overused_Grotesk:Regular',sans-serif] w-9 text-right">
                      45%
                    </span>
                  </div>
                </div>

                {/* SMS Row */}
                <div className="grid grid-cols-[1fr,120px,140px] gap-4 px-4 py-3 bg-[#0f0f0f] rounded-[4px] items-center hover:bg-[#151515] transition-colors">
                  <div className="flex items-center gap-2.5">
                    <MessageSquare className="w-4 h-4 text-[#737373]" />
                    <span className="text-[#fafafa] text-[14px] font-['Overused_Grotesk:Regular',sans-serif]">
                      SMS
                    </span>
                  </div>
                  <div className="text-right text-[#fafafa] text-[14px] font-['Overused_Grotesk:Medium',sans-serif]">
                    $3,113
                  </div>
                  <div className="flex items-center justify-end gap-2.5">
                    <div className="flex-1 max-w-[80px] bg-[#262626] rounded-full h-1.5 overflow-hidden">
                      <div className="bg-[#10b981] h-full rounded-full" style={{ width: '25%' }}></div>
                    </div>
                    <span className="text-[#737373] text-[14px] font-['Overused_Grotesk:Regular',sans-serif] w-9 text-right">
                      25%
                    </span>
                  </div>
                </div>

                {/* WhatsApp Row */}
                <div className="grid grid-cols-[1fr,120px,140px] gap-4 px-4 py-3 bg-[#0f0f0f] rounded-[4px] items-center hover:bg-[#151515] transition-colors">
                  <div className="flex items-center gap-2.5">
                    <MessageSquare className="w-4 h-4 text-[#737373]" />
                    <span className="text-[#fafafa] text-[14px] font-['Overused_Grotesk:Regular',sans-serif]">
                      WhatsApp
                    </span>
                  </div>
                  <div className="text-right text-[#fafafa] text-[14px] font-['Overused_Grotesk:Medium',sans-serif]">
                    $2,490
                  </div>
                  <div className="flex items-center justify-end gap-2.5">
                    <div className="flex-1 max-w-[80px] bg-[#262626] rounded-full h-1.5 overflow-hidden">
                      <div className="bg-[#f59e0b] h-full rounded-full" style={{ width: '20%' }}></div>
                    </div>
                    <span className="text-[#737373] text-[14px] font-['Overused_Grotesk:Regular',sans-serif] w-9 text-right">
                      20%
                    </span>
                  </div>
                </div>

                {/* Voice Call Row */}
                <div className="grid grid-cols-[1fr,120px,140px] gap-4 px-4 py-3 bg-[#0f0f0f] rounded-[4px] items-center hover:bg-[#151515] transition-colors">
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#737373]" />
                    <span className="text-[#fafafa] text-[14px] font-['Overused_Grotesk:Regular',sans-serif]">
                      Voice Call
                    </span>
                  </div>
                  <div className="text-right text-[#fafafa] text-[14px] font-['Overused_Grotesk:Medium',sans-serif]">
                    $1,245
                  </div>
                  <div className="flex items-center justify-end gap-2.5">
                    <div className="flex-1 max-w-[80px] bg-[#262626] rounded-full h-1.5 overflow-hidden">
                      <div className="bg-[#ef4444] h-full rounded-full" style={{ width: '10%' }}></div>
                    </div>
                    <span className="text-[#737373] text-[14px] font-['Overused_Grotesk:Regular',sans-serif] w-9 text-right">
                      10%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
