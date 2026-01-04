import { ShoppingCart, CreditCard, Clock, MessageSquare, Phone, Mail } from 'lucide-react';

export default function Campaigns() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* Sidebar would go here - keeping space for it */}
      <div className="ml-[184px] p-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h1 className="text-[#fafafa] text-[32px] font-['Instrument_Serif:Regular',sans-serif] leading-[40px] mb-1">
                Campaigns
              </h1>
              <p className="text-[#a3a3a3] text-[16px] font-['Overused_Grotesk:Regular',sans-serif] leading-[24px]">
                Launch a campaign to connect with your audience in a way that feels personal and real.
              </p>
            </div>
            <button className="bg-[#6366f1] hover:bg-[#5558e3] text-white px-4 py-2 rounded-lg flex items-center gap-2 font-['Overused_Grotesk:Medium',sans-serif] text-[14px] transition-colors">
              <span className="text-lg">+</span>
              Create campaign
            </button>
          </div>
        </div>

        {/* Campaign Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
          {/* Cart Recovery Agent Card */}
          <div className="bg-[#1a1a1a] border border-[rgba(255,255,255,0.1)] rounded-lg p-6 hover:border-[rgba(99,102,241,0.3)] transition-colors">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#6366f1]/10 rounded-lg flex items-center justify-center">
                  <ShoppingCart className="w-6 h-6 text-[#6366f1]" />
                </div>
                <div>
                  <h3 className="text-[#fafafa] font-['Overused_Grotesk:SemiBold',sans-serif] text-[16px] mb-1">
                    Cart Recovery Agent
                  </h3>
                  <p className="text-[#a3a3a3] text-[14px] font-['Overused_Grotesk:Regular',sans-serif]">
                    Recover abandoned carts with AI-powered messaging
                  </p>
                </div>
              </div>
              <span className="bg-[#10b981]/10 text-[#10b981] px-2 py-1 rounded text-[12px] font-['Overused_Grotesk:Medium',sans-serif]">
                Active
              </span>
            </div>
            
            <div className="flex items-center justify-between pt-4 border-t border-[rgba(255,255,255,0.05)]">
              <div>
                <p className="text-[#737373] text-[12px] font-['Overused_Grotesk:Regular',sans-serif] mb-1">
                  Recovered
                </p>
                <p className="text-[#fafafa] text-[20px] font-['Overused_Grotesk:SemiBold',sans-serif]">
                  $12,450
                </p>
              </div>
              <div className="text-right">
                <p className="text-[#737373] text-[12px] font-['Overused_Grotesk:Regular',sans-serif] mb-1">
                  Orders
                </p>
                <p className="text-[#fafafa] text-[20px] font-['Overused_Grotesk:SemiBold',sans-serif]">
                  186
                </p>
              </div>
              <div className="flex gap-2">
                <button className="w-8 h-8 rounded bg-[#262626] hover:bg-[#333] flex items-center justify-center text-[#fafafa] transition-colors">
                  <MessageSquare className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 rounded bg-[#262626] hover:bg-[#333] flex items-center justify-center text-[#fafafa] transition-colors">
                  <Phone className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 rounded bg-[#262626] hover:bg-[#333] flex items-center justify-center text-[#fafafa] transition-colors">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Checkout Recovery Agent Card */}
          <div className="bg-[#1a1a1a] border border-[rgba(255,255,255,0.1)] rounded-lg p-6 hover:border-[rgba(99,102,241,0.3)] transition-colors">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#10b981]/10 rounded-lg flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-[#10b981]" />
                </div>
                <div>
                  <h3 className="text-[#fafafa] font-['Overused_Grotesk:SemiBold',sans-serif] text-[16px] mb-1">
                    Checkout Recovery Agent
                  </h3>
                  <p className="text-[#a3a3a3] text-[14px] font-['Overused_Grotesk:Regular',sans-serif]">
                    Recover checkout dropoffs with urgent outreach
                  </p>
                </div>
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
        <div className="bg-[#1a1a1a] border border-[rgba(255,255,255,0.1)] rounded-lg">
          {/* Header */}
          <div className="p-6 border-b border-[rgba(255,255,255,0.05)]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#6366f1]/10 rounded-lg flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5 text-[#6366f1]" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h2 className="text-[#fafafa] font-['Overused_Grotesk:SemiBold',sans-serif] text-[18px]">
                      Cart Recovery Agent
                    </h2>
                    <span className="bg-[#10b981]/10 text-[#10b981] px-2 py-0.5 rounded text-[12px] font-['Overused_Grotesk:Medium',sans-serif]">
                      Active
                    </span>
                  </div>
                  <p className="text-[#737373] text-[14px] font-['Overused_Grotesk:Regular',sans-serif]">
                    This AI agent monitors your store for abandoned carts and automatically reaches out to customers with personalized, behavior-aware messaging. It detects why customers abandoned (price sensitivity, distraction, or hesitation) and tailors the recovery approach accordingly.
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 border border-[rgba(255,255,255,0.1)] rounded-lg text-[#fafafa] hover:bg-[#262626] font-['Overused_Grotesk:Medium',sans-serif] text-[14px] transition-colors">
                  Edit Agent
                </button>
                <button className="px-4 py-2 border border-[rgba(255,255,255,0.1)] rounded-lg text-[#ef4444] hover:bg-[#ef4444]/10 font-['Overused_Grotesk:Medium',sans-serif] text-[14px] transition-colors">
                  Deactivate
                </button>
              </div>
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-6 p-6 border-b border-[rgba(255,255,255,0.05)]">
            <div className="bg-[#10b981]/5 border border-[#10b981]/20 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-[#10b981] rounded-full"></div>
                <p className="text-[#10b981] text-[12px] font-['Overused_Grotesk:Medium',sans-serif] uppercase tracking-wide">
                  Revenue Recovered
                </p>
              </div>
              <p className="text-[#fafafa] text-[32px] font-['Overused_Grotesk:SemiBold',sans-serif] mb-1">
                $12,450
              </p>
              <p className="text-[#737373] text-[14px] font-['Overused_Grotesk:Regular',sans-serif]">
                Last 30 days
              </p>
            </div>

            <div className="bg-[#6366f1]/5 border border-[#6366f1]/20 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-[#6366f1] rounded-full"></div>
                <p className="text-[#6366f1] text-[12px] font-['Overused_Grotesk:Medium',sans-serif] uppercase tracking-wide">
                  Orders Recovered
                </p>
              </div>
              <p className="text-[#fafafa] text-[32px] font-['Overused_Grotesk:SemiBold',sans-serif] mb-1">
                186
              </p>
              <p className="text-[#737373] text-[14px] font-['Overused_Grotesk:Regular',sans-serif]">
                $67 avg order
              </p>
            </div>

            <div className="bg-[#f59e0b]/5 border border-[#f59e0b]/20 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-[#f59e0b] rounded-full"></div>
                <p className="text-[#f59e0b] text-[12px] font-['Overused_Grotesk:Medium',sans-serif] uppercase tracking-wide">
                  Conversion Rate
                </p>
              </div>
              <p className="text-[#fafafa] text-[32px] font-['Overused_Grotesk:SemiBold',sans-serif] mb-1">
                38%
              </p>
              <p className="text-[#737373] text-[14px] font-['Overused_Grotesk:Regular',sans-serif]">
                24% response rate
              </p>
            </div>
          </div>

          {/* Revenue by Channel */}
          <div className="p-6">
            <h3 className="text-[#fafafa] font-['Overused_Grotesk:SemiBold',sans-serif] text-[16px] mb-4">
              Revenue by Channel
            </h3>
            <div className="space-y-1">
              {/* Table Header */}
              <div className="grid grid-cols-3 gap-4 px-4 py-2 text-[#737373] text-[12px] font-['Overused_Grotesk:Medium',sans-serif] uppercase tracking-wide">
                <div>Channel</div>
                <div className="text-right">Revenue</div>
                <div className="text-right">Share</div>
              </div>
              
              {/* Email Row */}
              <div className="grid grid-cols-3 gap-4 px-4 py-3 bg-[#0f0f0f] rounded-lg items-center hover:bg-[#171717] transition-colors">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#737373]" />
                  <span className="text-[#fafafa] text-[14px] font-['Overused_Grotesk:Regular',sans-serif]">
                    Email
                  </span>
                </div>
                <div className="text-right text-[#fafafa] text-[14px] font-['Overused_Grotesk:Medium',sans-serif]">
                  $5,603
                </div>
                <div className="flex items-center justify-end gap-2">
                  <div className="flex-1 max-w-[100px] bg-[#262626] rounded-full h-2 overflow-hidden">
                    <div className="bg-[#6366f1] h-full" style={{ width: '45%' }}></div>
                  </div>
                  <span className="text-[#737373] text-[14px] font-['Overused_Grotesk:Regular',sans-serif] w-8">
                    45%
                  </span>
                </div>
              </div>

              {/* SMS Row */}
              <div className="grid grid-cols-3 gap-4 px-4 py-3 bg-[#0f0f0f] rounded-lg items-center hover:bg-[#171717] transition-colors">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#737373]" />
                  <span className="text-[#fafafa] text-[14px] font-['Overused_Grotesk:Regular',sans-serif]">
                    SMS
                  </span>
                </div>
                <div className="text-right text-[#fafafa] text-[14px] font-['Overused_Grotesk:Medium',sans-serif]">
                  $3,113
                </div>
                <div className="flex items-center justify-end gap-2">
                  <div className="flex-1 max-w-[100px] bg-[#262626] rounded-full h-2 overflow-hidden">
                    <div className="bg-[#10b981] h-full" style={{ width: '25%' }}></div>
                  </div>
                  <span className="text-[#737373] text-[14px] font-['Overused_Grotesk:Regular',sans-serif] w-8">
                    25%
                  </span>
                </div>
              </div>

              {/* WhatsApp Row */}
              <div className="grid grid-cols-3 gap-4 px-4 py-3 bg-[#0f0f0f] rounded-lg items-center hover:bg-[#171717] transition-colors">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#737373]" />
                  <span className="text-[#fafafa] text-[14px] font-['Overused_Grotesk:Regular',sans-serif]">
                    WhatsApp
                  </span>
                </div>
                <div className="text-right text-[#fafafa] text-[14px] font-['Overused_Grotesk:Medium',sans-serif]">
                  $2,490
                </div>
                <div className="flex items-center justify-end gap-2">
                  <div className="flex-1 max-w-[100px] bg-[#262626] rounded-full h-2 overflow-hidden">
                    <div className="bg-[#f59e0b] h-full" style={{ width: '20%' }}></div>
                  </div>
                  <span className="text-[#737373] text-[14px] font-['Overused_Grotesk:Regular',sans-serif] w-8">
                    20%
                  </span>
                </div>
              </div>

              {/* Voice Call Row */}
              <div className="grid grid-cols-3 gap-4 px-4 py-3 bg-[#0f0f0f] rounded-lg items-center hover:bg-[#171717] transition-colors">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#737373]" />
                  <span className="text-[#fafafa] text-[14px] font-['Overused_Grotesk:Regular',sans-serif]">
                    Voice Call
                  </span>
                </div>
                <div className="text-right text-[#fafafa] text-[14px] font-['Overused_Grotesk:Medium',sans-serif]">
                  $1,245
                </div>
                <div className="flex items-center justify-end gap-2">
                  <div className="flex-1 max-w-[100px] bg-[#262626] rounded-full h-2 overflow-hidden">
                    <div className="bg-[#ef4444] h-full" style={{ width: '10%' }}></div>
                  </div>
                  <span className="text-[#737373] text-[14px] font-['Overused_Grotesk:Regular',sans-serif] w-8">
                    10%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
