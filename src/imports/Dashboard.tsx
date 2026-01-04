import svgPaths from "./svg-lfxnmi0o8i";
import clsx from "clsx";
import imgRectangle4 from "figma:asset/2d04fde6c4e6137f038caa42dee6f3de5841cf96.png";
import imgRectangle5 from "figma:asset/2e580f079191d58be5a22618ec60238e859a0a42.png";
import imgRectangle6 from "figma:asset/df412ed62a6b5326501d65da2cb41d0e89ab5fa4.png";

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[281px] relative rounded-[4px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[4px]">
        {children}
      </div>
    </div>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}
type Wrapper1Props = {
  additionalClassNames?: string;
  viewBox?: string;
};

function Wrapper1({
  children,
  additionalClassNames = "",
  viewBox = "0 0 16 16",
}: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div className={clsx("size-[16px]", additionalClassNames)}>
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
type SidebarSidebarMenuSubItem10Props = {
  additionalClassNames?: string;
};

function SidebarSidebarMenuSubItem10({ children, additionalClassNames = "" }: React.PropsWithChildren<SidebarSidebarMenuSubItem10Props>) {
  return (
    <div className={clsx("h-[28px] relative shrink-0 w-full", additionalClassNames)}>
      <Wrapper>{children}</Wrapper>
    </div>
  );
}

function SidebarSidebarMenuSub4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start pl-[6px] pr-0 py-[2px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function SidebarHeader2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#171717] relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[8px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function SidebarSidebarMenuButton2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">{children}</div>
      </div>
    </div>
  );
}
type HelperProps = {
  text: string;
  text1: string;
};

function Helper({ text, text1 }: HelperProps) {
  return (
    <div className="content-stretch flex flex-col font-['Overused_Grotesk:Regular',sans-serif] gap-[4px] items-start not-italic relative shrink-0 w-full">
      <p className="leading-[24px] relative shrink-0 text-[#fafafa] text-[16px] w-full">{text}</p>
      <p className="leading-[20px] relative shrink-0 text-[#a3a3a3] text-[14px] w-full">{text1}</p>
    </div>
  );
}

function IconChevronRight() {
  return (
    <Wrapper1 additionalClassNames="relative shrink-0">
      <g clipPath="url(#clip0_1_6731)" id="Icon / ChevronRight">
        <path d="M9 18L15 12L9 6" id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
      </g>
      <defs>
        <clipPath id="clip0_1_6731">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </Wrapper1>
  );
}
type SidebarSidebarMenuButtonTextProps = {
  text: string;
};

function SidebarSidebarMenuButtonText({ text }: SidebarSidebarMenuButtonTextProps) {
  return (
    <div className="h-[32px] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative size-full">
          <p className="basis-0 font-['Overused_Grotesk:Regular',sans-serif] grow leading-none min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#727272] text-[14px] text-nowrap">{text}</p>
        </div>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Logo">
          <path d={svgPaths.p3a654500} fill="var(--fill-0, white)" id="Logo_2" />
        </g>
      </svg>
    </div>
  );
}

function SidebarSidebarMenuButton() {
  return (
    <SidebarSidebarMenuButton2>
      <Logo />
    </SidebarSidebarMenuButton2>
  );
}

function SidebarHeader() {
  return (
    <SidebarHeader2>
      <SidebarSidebarMenuButton />
    </SidebarHeader2>
  );
}

function IconLayoutDashboard() {
  return (
    <Wrapper1 additionalClassNames="relative shrink-0" viewBox="0 0 24 24">
      <g clipPath="url(#clip0_1_6912)" id="Icon / LayoutDashboard">
        <g id="Vector">
          <path d={svgPaths.p13b4cd00} stroke="var(--stroke-0, #D8FE91)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p32939e80} stroke="var(--stroke-0, #D8FE91)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.pdc9c900} stroke="var(--stroke-0, #D8FE91)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p20de0972} stroke="var(--stroke-0, #D8FE91)" strokeLinecap="round" strokeLinejoin="round" />
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

function SidebarSidebarMenuSubItem() {
  return (
    <div className="bg-[#2b331d] h-[28px] relative shrink-0 w-full" data-name="Sidebar / SidebarMenuSubItem">
      <div aria-hidden="true" className="absolute border-[#d8fe91] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Wrapper>
        <IconLayoutDashboard />
        <p className="basis-0 font-['Overused_Grotesk:Regular',sans-serif] grow leading-none min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#d8fe91] text-[14px] text-nowrap">Dashboard</p>
      </Wrapper>
    </div>
  );
}

function SidebarSidebarMenuSub() {
  return (
    <SidebarSidebarMenuSub4>
      <SidebarSidebarMenuSubItem />
    </SidebarSidebarMenuSub4>
  );
}

function SidebarSidebarMenuItem() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Sidebar / SidebarMenuItem">
      <SidebarSidebarMenuSub />
    </div>
  );
}

function IconDatabaseZap() {
  return (
    <Wrapper1 additionalClassNames="relative shrink-0" viewBox="0 0 24 24">
      <g clipPath="url(#clip0_1_6909)" id="Icon / DatabaseZap">
        <path d={svgPaths.p39d46e80} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" />
      </g>
      <defs>
        <clipPath id="clip0_1_6909">
          <rect fill="white" height="24" width="24" />
        </clipPath>
      </defs>
    </Wrapper1>
  );
}

function SidebarSidebarMenuSubItem1() {
  return (
    <SidebarSidebarMenuSubItem10 additionalClassNames="rounded-[8px]">
      <IconDatabaseZap />
      <p className="basis-0 font-['Overused_Grotesk:Regular',sans-serif] grow leading-none min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#fafafa] text-[14px] text-nowrap">Data room</p>
    </SidebarSidebarMenuSubItem10>
  );
}

function IconBarChart() {
  return (
    <Wrapper1 additionalClassNames="relative shrink-0" viewBox="0 0 24 24">
      <g clipPath="url(#clip0_1_6900)" id="Icon / BarChart">
        <path d="M12 20V10M18 20V4M6 20V16" id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" />
      </g>
      <defs>
        <clipPath id="clip0_1_6900">
          <rect fill="white" height="24" width="24" />
        </clipPath>
      </defs>
    </Wrapper1>
  );
}

function SidebarSidebarMenuSubItem2() {
  return (
    <SidebarSidebarMenuSubItem10 additionalClassNames="rounded-[8px]">
      <IconBarChart />
      <p className="basis-0 font-['Overused_Grotesk:Regular',sans-serif] grow leading-none min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#fafafa] text-[14px] text-nowrap">Analytics</p>
    </SidebarSidebarMenuSubItem10>
  );
}

function IconUsersRound() {
  return (
    <Wrapper1 additionalClassNames="relative shrink-0" viewBox="0 0 24 24">
      <g clipPath="url(#clip0_1_6897)" id="Icon / UsersRound">
        <path d={svgPaths.p197a0a00} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" />
      </g>
      <defs>
        <clipPath id="clip0_1_6897">
          <rect fill="white" height="24" width="24" />
        </clipPath>
      </defs>
    </Wrapper1>
  );
}

function SidebarSidebarMenuSubItem3() {
  return (
    <SidebarSidebarMenuSubItem10 additionalClassNames="rounded-[8px]">
      <IconUsersRound />
      <p className="basis-0 font-['Overused_Grotesk:Regular',sans-serif] grow leading-none min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#fafafa] text-[14px] text-nowrap">Audience Studio</p>
    </SidebarSidebarMenuSubItem10>
  );
}

function IconMagnet() {
  return (
    <Wrapper1 additionalClassNames="relative shrink-0" viewBox="0 0 24 24">
      <g clipPath="url(#clip0_1_6888)" id="Icon / Magnet">
        <path d={svgPaths.p2c24930} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" />
      </g>
      <defs>
        <clipPath id="clip0_1_6888">
          <rect fill="white" height="24" width="24" />
        </clipPath>
      </defs>
    </Wrapper1>
  );
}

function SidebarSidebarMenuSubItem4() {
  return (
    <SidebarSidebarMenuSubItem10 additionalClassNames="rounded-[8px]">
      <IconMagnet />
      <p className="basis-0 font-['Overused_Grotesk:Regular',sans-serif] grow leading-none min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#fafafa] text-[14px] text-nowrap">Leads</p>
    </SidebarSidebarMenuSubItem10>
  );
}

function SidebarSidebarMenuSub1() {
  return (
    <SidebarSidebarMenuSub4>
      <SidebarSidebarMenuSubItem1 />
      <SidebarSidebarMenuSubItem2 />
      <SidebarSidebarMenuSubItem3 />
      <SidebarSidebarMenuSubItem4 />
    </SidebarSidebarMenuSub4>
  );
}

function SidebarSidebarMenuItem1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Sidebar / SidebarMenuItem">
      <SidebarSidebarMenuButtonText text="Marktag" />
      <SidebarSidebarMenuSub1 />
    </div>
  );
}

function IconMegaphone() {
  return (
    <Wrapper1 additionalClassNames="relative shrink-0">
      <g id="Icon / Megaphone">
        <path d={svgPaths.p33d7bf00} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" />
      </g>
    </Wrapper1>
  );
}

function SidebarSidebarMenuSubItem5() {
  return (
    <SidebarSidebarMenuSubItem10 additionalClassNames="rounded-[8px]">
      <IconMegaphone />
      <p className="basis-0 font-['Overused_Grotesk:Regular',sans-serif] grow leading-none min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#fafafa] text-[14px] text-nowrap">Campaigns</p>
    </SidebarSidebarMenuSubItem10>
  );
}

function IconPlugZap() {
  return (
    <Wrapper1 additionalClassNames="relative shrink-0">
      <g id="Icon / PlugZap">
        <path d={svgPaths.p1fc7c950} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" />
      </g>
    </Wrapper1>
  );
}

function SidebarSidebarMenuSubItem6() {
  return (
    <SidebarSidebarMenuSubItem10>
      <IconPlugZap />
      <p className="basis-0 font-['Overused_Grotesk:Regular',sans-serif] grow leading-none min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#fafafa] text-[14px] text-nowrap">Integrations</p>
    </SidebarSidebarMenuSubItem10>
  );
}

function SidebarSidebarMenuSub2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Sidebar / SidebarMenuSub">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start px-[6px] py-[2px] relative w-full">
          <SidebarSidebarMenuSubItem5 />
          <SidebarSidebarMenuSubItem6 />
        </div>
      </div>
    </div>
  );
}

function SidebarSidebarMenuItem2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Sidebar / SidebarMenuItem">
      <SidebarSidebarMenuButtonText text="Campaign agent" />
      <SidebarSidebarMenuSub2 />
    </div>
  );
}

function IconCreditCard() {
  return (
    <Wrapper1 additionalClassNames="relative shrink-0" viewBox="0 0 24 24">
      <g clipPath="url(#clip0_1_6924)" id="Icon / CreditCard">
        <path d={svgPaths.p234f7800} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" />
      </g>
      <defs>
        <clipPath id="clip0_1_6924">
          <rect fill="white" height="24" width="24" />
        </clipPath>
      </defs>
    </Wrapper1>
  );
}

function SidebarSidebarMenuSubItem7() {
  return (
    <SidebarSidebarMenuSubItem10>
      <IconCreditCard />
      <p className="basis-0 font-['Overused_Grotesk:Regular',sans-serif] grow leading-none min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#fafafa] text-[14px] text-nowrap">Plan and Billing</p>
    </SidebarSidebarMenuSubItem10>
  );
}

function IconSettings() {
  return (
    <Wrapper1 additionalClassNames="relative shrink-0" viewBox="0 0 24 24">
      <g clipPath="url(#clip0_1_6885)" id="Icon / Settings2">
        <path d={svgPaths.p3b0a8c00} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" />
      </g>
      <defs>
        <clipPath id="clip0_1_6885">
          <rect fill="white" height="24" width="24" />
        </clipPath>
      </defs>
    </Wrapper1>
  );
}

function SidebarSidebarMenuSubItem8() {
  return (
    <SidebarSidebarMenuSubItem10 additionalClassNames="rounded-[8px]">
      <IconSettings />
      <p className="basis-0 font-['Overused_Grotesk:Regular',sans-serif] grow leading-none min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#fafafa] text-[14px] text-nowrap">Settings</p>
    </SidebarSidebarMenuSubItem10>
  );
}

function IconLifeBuoy() {
  return (
    <Wrapper1 additionalClassNames="relative shrink-0" viewBox="0 0 24 24">
      <g clipPath="url(#clip0_1_6918)" id="Icon / LifeBuoy">
        <path d={svgPaths.pb0c6100} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" />
      </g>
      <defs>
        <clipPath id="clip0_1_6918">
          <rect fill="white" height="24" width="24" />
        </clipPath>
      </defs>
    </Wrapper1>
  );
}

function SidebarSidebarMenuSubItem9() {
  return (
    <SidebarSidebarMenuSubItem10 additionalClassNames="rounded-[8px]">
      <IconLifeBuoy />
      <p className="basis-0 font-['Overused_Grotesk:Regular',sans-serif] grow leading-none min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#fafafa] text-[14px] text-nowrap">Support</p>
    </SidebarSidebarMenuSubItem10>
  );
}

function SidebarSidebarMenuSub3() {
  return (
    <SidebarSidebarMenuSub4>
      <SidebarSidebarMenuSubItem7 />
      <SidebarSidebarMenuSubItem8 />
      <SidebarSidebarMenuSubItem9 />
    </SidebarSidebarMenuSub4>
  );
}

function SidebarSidebarMenuItem3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Sidebar / SidebarMenuItem">
      <SidebarSidebarMenuButtonText text="Others" />
      <SidebarSidebarMenuSub3 />
    </div>
  );
}

function SidebarMenu() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="SidebarMenu">
      <SidebarSidebarMenuItem />
      <SidebarSidebarMenuItem1 />
      <SidebarSidebarMenuItem2 />
      <SidebarSidebarMenuItem3 />
    </div>
  );
}

function SidebarSidebarGroup() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Sidebar / SidebarGroup">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pl-[8px] pr-0 py-[8px] relative size-full">
          <SidebarMenu />
        </div>
      </div>
    </div>
  );
}

function SidebarContent() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="SidebarContent">
      <SidebarSidebarGroup />
    </div>
  );
}

function Avatar() {
  return (
    <div className="bg-[#262626] overflow-clip relative rounded-[4px] shrink-0 size-[32px]" data-name="Avatar">
      <div className="absolute flex flex-col font-['Overused_Grotesk:Regular',sans-serif] inset-0 justify-center leading-[0] not-italic text-[#fafafa] text-[14px] text-center">
        <p className="leading-[20px]">JD</p>
      </div>
    </div>
  );
}

function SidebarMediaAsset() {
  return (
    <div className="content-stretch flex items-center relative rounded-[10px] shrink-0" data-name="Sidebar / MediaAsset">
      <Avatar />
    </div>
  );
}

function FlexVertical() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center leading-none min-h-px min-w-px not-italic relative shrink-0 text-[#fafafa] text-nowrap" data-name="Flex Vertical">
      <p className="font-['Overused_Grotesk:SemiBold',sans-serif] overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] w-full">John Doe</p>
      <p className="font-['Overused_Grotesk:Regular',sans-serif] overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] w-full">johndoe12@gmail.com</p>
    </div>
  );
}

function IconChevronsUpDown() {
  return (
    <Wrapper1 additionalClassNames="absolute left-0 top-0">
      <g id="Icon / ChevronsUpDown">
        <path d={svgPaths.p15233480} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </Wrapper1>
  );
}

function SidebarCollapseIcon() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="Sidebar / CollapseIcon">
      <IconChevronsUpDown />
    </div>
  );
}

function SidebarSidebarMenuButton1() {
  return (
    <SidebarSidebarMenuButton2>
      <SidebarMediaAsset />
      <FlexVertical />
      <SidebarCollapseIcon />
    </SidebarSidebarMenuButton2>
  );
}

function SidebarHeader1() {
  return (
    <SidebarHeader2>
      <SidebarSidebarMenuButton1 />
    </SidebarHeader2>
  );
}

function Sidebar() {
  return (
    <div className="absolute bg-[#171717] h-[900px] left-0 top-0 w-[184px]" data-name="Sidebar 04.">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <SidebarHeader />
        <SidebarContent />
        <SidebarHeader1 />
      </div>
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Div() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px not-italic relative shrink-0" data-name="Div">
      <p className="font-['Instrument_Serif:Regular',sans-serif] leading-[40px] relative shrink-0 text-[#fafafa] text-[32px] w-full">Welcome back, John</p>
      <p className="font-['Overused_Grotesk:Regular',sans-serif] leading-[24px] relative shrink-0 text-[#a3a3a3] text-[16px] w-full">Let’s recover your lost revenue, automatically.</p>
    </div>
  );
}

function IconPlus() {
  return (
    <Wrapper1 additionalClassNames="relative shrink-0">
      <g clipPath="url(#clip0_1_6927)" id="Icon / Plus">
        <path d="M3 8H13M8 3V13" id="Vector" stroke="var(--stroke-0, #171717)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
      </g>
      <defs>
        <clipPath id="clip0_1_6927">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </Wrapper1>
  );
}

function Button() {
  return (
    <div className="bg-[#d8fe91] content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[16px] py-[8px] relative rounded-[4px] shrink-0" data-name="Button">
      <IconPlus />
      <div className="flex flex-col font-['Overused_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#171717] text-[14px] text-nowrap">
        <p className="leading-[20px]">Create a campaign</p>
      </div>
    </div>
  );
}

function Flex() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center justify-end min-h-px min-w-px relative shrink-0" data-name="Flex">
      <Button />
    </div>
  );
}

function Flex1() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Flex">
      <Div />
      <Flex />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Flex1 />
    </div>
  );
}

function ProBlocksPageHeader() {
  return (
    <div className="absolute left-[184px] top-0 w-[1256px]" data-name="Pro Blocks / Page Header / 2.">
      <div className="content-stretch flex flex-col items-center overflow-clip p-[24px] relative rounded-[inherit] w-full">
        <Container />
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Shopify() {
  return (
    <Wrapper2>
      <g id="shopify">
        <path clipRule="evenodd" d={svgPaths.p2c920000} fill="var(--fill-0, #595961)" fillRule="evenodd" id="Vector" />
        <path clipRule="evenodd" d={svgPaths.pe7fb380} fill="var(--fill-0, #B2B2C2)" fillRule="evenodd" id="Vector_2" opacity="0.46" />
        <path clipRule="evenodd" d={svgPaths.p22ba7700} fill="var(--fill-0, #B2B2C2)" fillRule="evenodd" id="Vector_3" opacity="0.46" />
        <path clipRule="evenodd" d={svgPaths.p35cee800} fill="var(--fill-0, #595961)" fillRule="evenodd" id="Vector_4" opacity="0.62" />
        <path clipRule="evenodd" d={svgPaths.p175c1c80} fill="var(--fill-0, #595961)" fillRule="evenodd" id="Vector_5" opacity="0.62" />
        <path clipRule="evenodd" d={svgPaths.p2f9fe590} fill="var(--fill-0, #595961)" fillRule="evenodd" id="Vector_6" opacity="0.62" />
        <path clipRule="evenodd" d={svgPaths.p518f700} fill="var(--fill-0, #595961)" fillRule="evenodd" id="Vector_7" opacity="0.62" />
        <path clipRule="evenodd" d={svgPaths.p2faa1400} fill="var(--fill-0, #595961)" fillRule="evenodd" id="Vector_8" opacity="0.62" />
        <path clipRule="evenodd" d={svgPaths.p21309700} fill="var(--fill-0, #595961)" fillRule="evenodd" id="Vector_9" opacity="0.62" />
        <path clipRule="evenodd" d={svgPaths.p203d4000} fill="var(--fill-0, #595961)" fillRule="evenodd" id="Vector_10" opacity="0.62" />
        <path clipRule="evenodd" d={svgPaths.p1e257440} fill="var(--fill-0, #595961)" fillRule="evenodd" id="Vector_11" opacity="0.62" />
        <path clipRule="evenodd" d={svgPaths.pe843280} fill="var(--fill-0, #595961)" fillRule="evenodd" id="Vector_12" opacity="0.62" />
        <path clipRule="evenodd" d={svgPaths.p2c7b5a80} fill="url(#paint0_linear_1_6769)" fillRule="evenodd" id="Vector_13" opacity="0.74" />
        <path clipRule="evenodd" d={svgPaths.p2d2c7480} fill="url(#paint1_linear_1_6769)" fillRule="evenodd" id="Vector_14" />
        <path clipRule="evenodd" d={svgPaths.p20fcf000} fill="url(#paint2_linear_1_6769)" fillRule="evenodd" id="Vector_15" />
        <path clipRule="evenodd" d={svgPaths.p3c6f9bf0} fill="url(#paint3_linear_1_6769)" fillRule="evenodd" id="Vector_16" />
        <path clipRule="evenodd" d={svgPaths.pbf2e7c0} fill="url(#paint4_linear_1_6769)" fillRule="evenodd" id="Vector_17" />
        <path clipRule="evenodd" d={svgPaths.p34fa5cc0} fill="url(#paint5_linear_1_6769)" fillRule="evenodd" id="Vector_18" />
        <path clipRule="evenodd" d={svgPaths.p2e079080} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_19" opacity="0.226763" />
        <path clipRule="evenodd" d={svgPaths.p1b062900} fill="url(#paint6_linear_1_6769)" fillRule="evenodd" id="Vector_20" opacity="0.41" />
        <path clipRule="evenodd" d={svgPaths.p34d06b80} fill="url(#paint7_linear_1_6769)" fillRule="evenodd" id="Vector_21" />
        <path clipRule="evenodd" d={svgPaths.p47a9e00} fill="url(#paint8_linear_1_6769)" fillRule="evenodd" id="Vector_22" />
        <path clipRule="evenodd" d={svgPaths.p827cc00} fill="url(#paint9_linear_1_6769)" fillRule="evenodd" id="Vector_23" opacity="0.32" />
        <path clipRule="evenodd" d={svgPaths.p76e7400} fill="url(#paint10_linear_1_6769)" fillRule="evenodd" id="Vector_24" opacity="0.19" />
        <path clipRule="evenodd" d={svgPaths.p76e7400} fill="url(#paint11_linear_1_6769)" fillRule="evenodd" id="Vector_25" opacity="0.19" />
        <path clipRule="evenodd" d={svgPaths.p1112f000} fill="url(#paint12_linear_1_6769)" fillRule="evenodd" id="Vector_26" opacity="0.6" />
        <path clipRule="evenodd" d={svgPaths.p1b79cb00} fill="url(#paint13_linear_1_6769)" fillRule="evenodd" id="Vector_27" />
        <path clipRule="evenodd" d={svgPaths.pae300} fill="url(#paint14_linear_1_6769)" fillRule="evenodd" id="Vector_28" />
        <path clipRule="evenodd" d={svgPaths.p2cab0900} fill="url(#paint15_linear_1_6769)" fillRule="evenodd" id="Vector_29" />
        <path clipRule="evenodd" d={svgPaths.p2ff91f00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_30" opacity="0.3" />
        <path clipRule="evenodd" d={svgPaths.p12b71400} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_31" opacity="0.89" />
        <path clipRule="evenodd" d={svgPaths.p2cb78180} fill="url(#paint16_linear_1_6769)" fillRule="evenodd" id="Vector_32" />
        <path clipRule="evenodd" d={svgPaths.p3abfde80} fill="url(#paint17_linear_1_6769)" fillRule="evenodd" id="Vector_33" />
        <path clipRule="evenodd" d={svgPaths.p8d45600} fill="url(#paint18_linear_1_6769)" fillRule="evenodd" id="Vector_34" />
        <path clipRule="evenodd" d={svgPaths.p3c9bc880} fill="url(#paint19_linear_1_6769)" fillRule="evenodd" id="Vector_35" opacity="0.32" />
        <path clipRule="evenodd" d={svgPaths.p39843b80} fill="url(#paint20_linear_1_6769)" fillRule="evenodd" id="Vector_36" opacity="0.57" />
        <path clipRule="evenodd" d={svgPaths.p3e9af2b0} fill="url(#paint21_linear_1_6769)" fillRule="evenodd" id="Vector_37" opacity="0.46" />
        <path clipRule="evenodd" d={svgPaths.p8258040} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_38" opacity="0.3" />
        <path clipRule="evenodd" d={svgPaths.p32b3bf80} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_39" opacity="0.89" />
        <path clipRule="evenodd" d={svgPaths.p7331780} fill="var(--fill-0, #595961)" fillRule="evenodd" id="Vector_40" />
        <path clipRule="evenodd" d={svgPaths.pf343100} fill="var(--fill-0, #B2B2C2)" fillRule="evenodd" id="Vector_41" opacity="0.46" />
        <path clipRule="evenodd" d={svgPaths.p1fc03700} fill="var(--fill-0, #B2B2C2)" fillRule="evenodd" id="Vector_42" opacity="0.81" />
        <path clipRule="evenodd" d={svgPaths.p37738500} fill="var(--fill-0, #595961)" fillRule="evenodd" id="Vector_43" opacity="0.42" />
        <path clipRule="evenodd" d={svgPaths.p52e7880} fill="var(--fill-0, #595961)" fillRule="evenodd" id="Vector_44" opacity="0.42" />
        <path clipRule="evenodd" d={svgPaths.p3000c100} fill="var(--fill-0, #595961)" fillRule="evenodd" id="Vector_45" opacity="0.42" />
        <path clipRule="evenodd" d={svgPaths.p3a3fbe70} fill="var(--fill-0, #595961)" fillRule="evenodd" id="Vector_46" opacity="0.62" />
        <path clipRule="evenodd" d={svgPaths.p372b5e00} fill="var(--fill-0, #595961)" fillRule="evenodd" id="Vector_47" opacity="0.62" />
        <path clipRule="evenodd" d={svgPaths.pe3e4220} fill="var(--fill-0, #595961)" fillRule="evenodd" id="Vector_48" opacity="0.62" />
        <path clipRule="evenodd" d={svgPaths.p3845c600} fill="var(--fill-0, #595961)" fillRule="evenodd" id="Vector_49" opacity="0.62" />
        <path clipRule="evenodd" d={svgPaths.p405d900} fill="var(--fill-0, #595961)" fillRule="evenodd" id="Vector_50" opacity="0.42" />
        <path clipRule="evenodd" d={svgPaths.p35e921f0} fill="var(--fill-0, #595961)" fillRule="evenodd" id="Vector_51" opacity="0.42" />
        <path clipRule="evenodd" d={svgPaths.p2110ea00} fill="var(--fill-0, #595961)" fillRule="evenodd" id="Vector_52" opacity="0.42" />
        <path clipRule="evenodd" d={svgPaths.p115a2600} fill="var(--fill-0, #595961)" fillRule="evenodd" id="Vector_53" opacity="0.62" />
        <path clipRule="evenodd" d={svgPaths.p3fe6e300} fill="var(--fill-0, #595961)" fillRule="evenodd" id="Vector_54" opacity="0.62" />
        <path clipRule="evenodd" d={svgPaths.p2f7b1400} fill="var(--fill-0, #595961)" fillRule="evenodd" id="Vector_55" opacity="0.62" />
        <path clipRule="evenodd" d={svgPaths.p3653fc0} fill="url(#paint22_linear_1_6769)" fillRule="evenodd" id="Vector_56" />
        <path clipRule="evenodd" d={svgPaths.p3b24e700} fill="url(#paint23_linear_1_6769)" fillRule="evenodd" id="Vector_57" />
        <path clipRule="evenodd" d={svgPaths.p18cab980} fill="url(#paint24_linear_1_6769)" fillRule="evenodd" id="Vector_58" />
      </g>
      <defs>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_6769" x1="10.2081" x2="9.86726" y1="2.95552" y2="7.59665">
          <stop stopColor="white" stopOpacity="0.65" />
          <stop offset="1" stopColor="white" stopOpacity="0.01" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_6769" x1="12.6992" x2="15.0992" y1="5.61212" y2="7.71423">
          <stop stopOpacity="0.01" />
          <stop offset="1" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_6769" x1="11.737" x2="14.2773" y1="8.04388" y2="5.67772">
          <stop stopOpacity="0.01" />
          <stop offset="1" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_6769" x1="8.50351" x2="-1.36336" y1="1.13879" y2="12.5076">
          <stop stopColor="#B8D26E" />
          <stop offset="1" stopColor="#7FB525" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1_6769" x1="22.0007" x2="16.5855" y1="3.98506" y2="4.08562">
          <stop stopColor="#B4E034" />
          <stop offset="1" stopColor="#60A927" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_1_6769" x1="5.89378" x2="1.45408" y1="11.5658" y2="22.3773">
          <stop stopColor="white" />
          <stop offset="1" stopColor="#CECEEB" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_1_6769" x1="12.2593" x2="19.2908" y1="38.1913" y2="38.177">
          <stop stopColor="#1D1D1B" stopOpacity="0.5" />
          <stop offset="0.038033" stopColor="#1D1D1B" stopOpacity="0.4837" />
          <stop offset="0.4243" stopColor="#1D1D1B" stopOpacity="0.3185" />
          <stop offset="1" stopColor="#1D1D1B" stopOpacity="0.01" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_1_6769" x1="13.076" x2="11.9094" y1="4.35047" y2="4.97831">
          <stop stopOpacity="0.01" />
          <stop offset="1" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_1_6769" x1="8.18529" x2="7.36527" y1="6.21254" y2="6.91727">
          <stop stopOpacity="0.01" />
          <stop offset="1" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint9_linear_1_6769" x1="16.1841" x2="16.2672" y1="20.4495" y2="21.5438">
          <stop stopOpacity="0.01" />
          <stop offset="1" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint10_linear_1_6769" x1="14.2458" x2="14.4383" y1="18.8473" y2="21.6926">
          <stop stopColor="white" stopOpacity="0.5" />
          <stop offset="0.0896271" stopColor="white" stopOpacity="0.4552" />
          <stop offset="1" stopColor="white" stopOpacity="0.01" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint11_linear_1_6769" x1="13.8756" x2="14.218" y1="19.2899" y2="22.3293">
          <stop stopOpacity="0.01" />
          <stop offset="1" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint12_linear_1_6769" x1="12.5322" x2="3.7513" y1="1.8029" y2="6.88144">
          <stop stopColor="white" stopOpacity="0.5" />
          <stop offset="1" stopColor="white" stopOpacity="0.01" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint13_linear_1_6769" x1="14.2265" x2="21.9769" y1="28.3451" y2="28.3607">
          <stop stopColor="#1D1D1B" stopOpacity="0.5" />
          <stop offset="0.0896271" stopColor="#1D1D1B" stopOpacity="0.4552" />
          <stop offset="1" stopColor="#1D1D1B" stopOpacity="0.01" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint14_linear_1_6769" x1="19.7768" x2="18.6758" y1="5.3798" y2="5.64957">
          <stop stopColor="white" stopOpacity="0.4" />
          <stop offset="1" stopColor="white" stopOpacity="0.01" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint15_linear_1_6769" x1="9.89884" x2="10.4713" y1="21.864" y2="19.1039">
          <stop stopColor="#1D1D1B" stopOpacity="0.5" />
          <stop offset="0.0896271" stopColor="#1D1D1B" stopOpacity="0.4552" />
          <stop offset="1" stopColor="#1D1D1B" stopOpacity="0.01" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint16_linear_1_6769" x1="13.2088" x2="20.2656" y1="37.8399" y2="37.846">
          <stop stopColor="#1D1D1B" stopOpacity="0.5" />
          <stop offset="1" stopColor="#1D1D1B" stopOpacity="0.01" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint17_linear_1_6769" x1="6.76026" x2="3.33773" y1="3.60582" y2="16.7551">
          <stop stopColor="white" stopOpacity="0.5" />
          <stop offset="1" stopColor="white" stopOpacity="0.01" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint18_linear_1_6769" x1="6.76026" x2="3.33773" y1="3.60582" y2="16.7551">
          <stop stopColor="white" stopOpacity="0.5" />
          <stop offset="1" stopColor="white" stopOpacity="0.01" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint19_linear_1_6769" x1="15.0663" x2="12.3611" y1="17.3896" y2="21.113">
          <stop stopColor="white" stopOpacity="0.5" />
          <stop offset="0.0896271" stopColor="white" stopOpacity="0.4552" />
          <stop offset="1" stopColor="white" stopOpacity="0.01" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint20_linear_1_6769" x1="15.8822" x2="15.6144" y1="18.2457" y2="18.8461">
          <stop stopOpacity="0.01" />
          <stop offset="1" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint21_linear_1_6769" x1="18.5386" x2="18.5254" y1="19.0395" y2="19.2009">
          <stop stopOpacity="0.01" />
          <stop offset="1" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint22_linear_1_6769" x1="8.79717" x2="7.6277" y1="1.96358" y2="6.58356">
          <stop stopColor="white" stopOpacity="0.65" />
          <stop offset="1" stopColor="white" stopOpacity="0.01" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint23_linear_1_6769" x1="11.4143" x2="13.4487" y1="4.62863" y2="6.69691">
          <stop stopOpacity="0.01" />
          <stop offset="1" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint24_linear_1_6769" x1="10.114" x2="12.9248" y1="7.67441" y2="4.78776">
          <stop stopOpacity="0.01" />
          <stop offset="1" stopOpacity="0.4" />
        </linearGradient>
      </defs>
    </Wrapper2>
  );
}

function Salesforce() {
  return (
    <Wrapper2>
      <g id="Salesforce">
        <path d={svgPaths.p790e0c0} fill="var(--fill-0, #039BE5)" id="Vector" />
        <g id="Group">
          <path d={svgPaths.p1d141c80} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p1385ad00} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.pf5a37f0} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p12c8c000} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p331abff0} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p3df6ed80} fill="var(--fill-0, white)" id="Vector_7" />
          <g id="Vector_8"></g>
          <g id="Vector_9"></g>
          <path d={svgPaths.pd684400} fill="var(--fill-0, white)" id="Vector_10" />
          <path d={svgPaths.p1f1d0b00} fill="var(--fill-0, white)" id="Vector_11" />
          <path d={svgPaths.p33e77380} fill="var(--fill-0, white)" id="Vector_12" />
          <path d={svgPaths.p3748d70} fill="var(--fill-0, white)" id="Vector_13" />
        </g>
        <path d={svgPaths.p27c2cf00} fill="var(--fill-0, white)" id="Vector_14" />
        <path d={svgPaths.p1f719400} fill="var(--fill-0, white)" id="Vector_15" />
        <path d={svgPaths.p46fa900} fill="var(--fill-0, white)" id="Vector_16" />
        <path d={svgPaths.p7764300} fill="var(--fill-0, white)" id="Vector_17" />
        <path d={svgPaths.p1ff35a00} fill="var(--fill-0, white)" id="Vector_18" />
        <path d={svgPaths.p107bf880} fill="var(--fill-0, white)" id="Vector_19" />
        <path d={svgPaths.p3fbdf4f0} fill="var(--fill-0, white)" id="Vector_20" />
        <path d={svgPaths.p27ce2100} fill="var(--fill-0, white)" id="Vector_21" />
        <path d={svgPaths.p4d0e280} fill="var(--fill-0, white)" id="Vector_22" />
        <path d={svgPaths.p390b5400} fill="var(--fill-0, white)" id="Vector_23" />
      </g>
    </Wrapper2>
  );
}

function Hubspot() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Hubspot">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_6740)" id="Hubspot">
          <path d={svgPaths.p206aee40} fill="var(--fill-0, #FF7A59)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_6740">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function WooCommerce() {
  return (
    <Wrapper2>
      <g id="WooCommerce">
        <path clipRule="evenodd" d={svgPaths.p272e0600} fill="var(--fill-0, #7F54B3)" fillRule="evenodd" id="Vector" />
        <path d={svgPaths.p2a55fe00} fill="var(--fill-0, white)" id="Vector_2" />
        <path d={svgPaths.p16e7f900} fill="var(--fill-0, white)" id="Vector_3" />
        <path d={svgPaths.p3aa2c940} fill="var(--fill-0, white)" id="Vector_4" />
      </g>
    </Wrapper2>
  );
}

function LogosZoho() {
  return (
    <div className="absolute inset-[34.38%_0_31.25%_-3.13%]" data-name="logos:zoho">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.75 8.25">
        <g clipPath="url(#clip0_1_6844)" id="logos:zoho">
          <path d={svgPaths.pa42ec00} fill="var(--fill-0, #E79225)" id="Vector" />
          <path d={svgPaths.p160c8ac0} fill="var(--fill-0, #FFF16D)" id="Vector_2" />
          <path d={svgPaths.p63fd80} fill="url(#paint0_linear_1_6844)" id="Vector_3" />
          <path d={svgPaths.pb37e400} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p2b9fc680} fill="var(--fill-0, #009ADA)" id="Vector_5" />
          <path d={svgPaths.p2cbe5900} fill="var(--fill-0, #91C9ED)" id="Vector_6" />
          <path d={svgPaths.p27c49860} fill="url(#paint1_linear_1_6844)" id="Vector_7" />
          <path d={svgPaths.p2fdee600} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.pf06c540} fill="var(--fill-0, #66BF6B)" id="Vector_9" />
          <path d={svgPaths.p16a6f000} fill="var(--fill-0, #98D0A0)" id="Vector_10" />
          <path d={svgPaths.pf84a400} fill="url(#paint2_linear_1_6844)" id="Vector_11" />
          <path d={svgPaths.p91a5580} fill="var(--fill-0, white)" id="Vector_12" />
          <path d={svgPaths.pa81a640} fill="var(--fill-0, #760D16)" id="Vector_13" />
          <path d={svgPaths.p3bbbde30} fill="var(--fill-0, #EF463E)" id="Vector_14" />
          <path d={svgPaths.p32b7bd80} fill="url(#paint3_linear_1_6844)" id="Vector_15" />
          <path d={svgPaths.p2ac0180} fill="var(--fill-0, white)" id="Vector_16" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_6844" x1="286.851" x2="286.851" y1="10.5733" y2="540.107">
            <stop offset="0.00562" stopColor="#FFE513" />
            <stop offset="1" stopColor="#FDB924" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_6844" x1="39.0908" x2="559.871" y1="78.9982" y2="517.038">
            <stop offset="0.00562" stopColor="#008CD2" />
            <stop offset="1" stopColor="#00649D" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_6844" x1="345.566" x2="345.566" y1="186.346" y2="650.272">
            <stop stopColor="#26A146" />
            <stop offset="1" stopColor="#008A52" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_6844" x1="262.148" x2="336.361" y1="49.0289" y2="532.051">
            <stop stopColor="#D92231" />
            <stop offset="1" stopColor="#BA2234" />
          </linearGradient>
          <clipPath id="clip0_1_6844">
            <rect fill="white" height="8.25" width="24.75" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Zoho() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Zoho">
      <LogosZoho />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Shopify />
      <Salesforce />
      <Hubspot />
      <WooCommerce />
      <Zoho />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#262626] content-stretch flex items-center justify-center max-h-[32px] max-w-[32px] min-h-[32px] min-w-[32px] px-[16px] py-[8px] relative rounded-[4px] shrink-0 size-[32px]" data-name="Button">
      <IconChevronRight />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame5 />
      <Button1 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[60px] items-start relative shrink-0 w-full">
      <Frame7 />
      <Helper text="Add data sources" text1="Connect your CRM, customer database, or import more contacts to expand your campaigns" />
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-[#171717] content-stretch flex flex-col h-[192px] items-start p-[16px] relative rounded-[4px] shrink-0 w-[384px]">
      <Frame8 />
    </div>
  );
}

function IconMegaphone1() {
  return (
    <Wrapper2>
      <g id="Icon / Megaphone">
        <path d={svgPaths.p14dbfa80} id="Vector" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </g>
    </Wrapper2>
  );
}

function Button2() {
  return (
    <div className="bg-[#262626] content-stretch flex items-center justify-center max-h-[32px] max-w-[32px] min-h-[32px] min-w-[32px] px-[16px] py-[8px] relative rounded-[4px] shrink-0 size-[32px]" data-name="Button">
      <IconChevronRight />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <IconMegaphone1 />
      <Button2 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[60px] items-start relative shrink-0 w-full">
      <Frame10 />
      <Helper text="Create another campaign" text1="Set up a new campaign to address different business needs or target another audience" />
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[#171717] content-stretch flex flex-col h-[192px] items-start p-[16px] relative rounded-[4px] shrink-0 w-[384px]">
      <Frame11 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[28px] items-center relative shrink-0 w-full">
      <Frame9 />
      <Frame12 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[208px] top-[140px]">
      <p className="font-['Overused_Grotesk:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a3a3a3] text-[14px] w-full">Get started</p>
      <Frame13 />
    </div>
  );
}

function IconShoppingCart() {
  return (
    <Wrapper2>
      <g id="Icon / ShoppingCart">
        <path d={svgPaths.p1951d000} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </g>
    </Wrapper2>
  );
}

function Frame6() {
  return (
    <div className="absolute backdrop-blur-[50px] backdrop-filter bg-[rgba(255,255,255,0.3)] content-stretch flex items-center left-[117px] p-[12px] rounded-[4px] size-[48px] top-[117px]">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <IconShoppingCart />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[281px]">
      <Wrapper3>
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[4px] size-full" src={imgRectangle4} />
        <div className="absolute bg-[rgba(10,10,10,0.1)] inset-0 rounded-[4px]" />
      </Wrapper3>
      <Helper text="Abandoned Cart Recovery Agent" text1="Automatically re-engage users who abandon carts with timely multi-channel reminders" />
      <Frame6 />
    </div>
  );
}

function IconShoppingBasket() {
  return (
    <Wrapper2>
      <g id="Icon / ShoppingBasket">
        <path d={svgPaths.p27962600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </g>
    </Wrapper2>
  );
}

function Frame15() {
  return (
    <div className="absolute backdrop-blur-[50px] backdrop-filter bg-[rgba(255,255,255,0.3)] content-stretch flex items-center left-[117px] p-[12px] rounded-[4px] size-[48px] top-[117px]">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <IconShoppingBasket />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[281px]">
      <Wrapper3>
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[4px] size-full" src={imgRectangle5} />
        <div className="absolute bg-[rgba(10,10,10,0.1)] inset-0 rounded-[4px]" />
      </Wrapper3>
      <Helper text="Abandoned Checkout Recovery Agent" text1="Save high-intent checkouts with timely, personal reminders" />
      <Frame15 />
    </div>
  );
}

function IconCheckCheck() {
  return (
    <Wrapper2>
      <g id="Icon / CheckCheck">
        <path d={svgPaths.p5072400} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </g>
    </Wrapper2>
  );
}

function Frame16() {
  return (
    <div className="absolute backdrop-blur-[50px] backdrop-filter bg-[rgba(255,255,255,0.3)] content-stretch flex items-center left-[117px] p-[12px] rounded-[4px] size-[48px] top-[117px]">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <IconCheckCheck />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[281px]">
      <Wrapper3>
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[4px] size-full" src={imgRectangle6} />
        <div className="absolute bg-[rgba(10,10,10,0.1)] inset-0 rounded-[4px]" />
      </Wrapper3>
      <Helper text="Order Confirmation Agent" text1="Confirm the order, build trust, and prepare personalized cross-sell" />
      <Frame16 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[28px] items-center relative shrink-0 w-full">
      <Frame />
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[208px] top-[424px]">
      <p className="font-['Overused_Grotesk:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a3a3a3] text-[14px] w-full">Agent templates</p>
      <Frame3 />
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="bg-[#0a0a0a] relative size-full" data-name="Dashboard">
      <Sidebar />
      <ProBlocksPageHeader />
      <Frame14 />
      <Frame4 />
    </div>
  );
}
