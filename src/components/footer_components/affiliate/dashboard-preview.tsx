"use client"

import { BarChart3, Calendar, Target, TrendingUp, DollarSign, Users } from "lucide-react"

interface StatsCardProps {
  title: string;
  value: string;
  change?: string;
  icon: 'target' | 'trending' | 'dollar' | 'users';
  trend?: 'up' | 'down';
}

function StatsCard({ title, value, change, icon, trend }: StatsCardProps) {
  const Icon = {
    target: Target,
    trending: TrendingUp,
    dollar: DollarSign,
    users: Users
  }[icon]

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <Icon className="w-8 h-8 text-[#0085CC]" />
        {change && (
          <span className={`text-sm font-medium px-2 py-1 rounded-full ${
            trend === 'up' ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'
          }`}>
            +{change}
          </span>
        )}
      </div>
      <div className="text-2xl font-bold text-gray-800 mb-1">{value}</div>
      <div className="text-sm text-gray-600">{title}</div>
    </div>
  )
}

export default function DashboardPreview() {
  const stats: StatsCardProps[] = [
    { title: "Total Clicks", value: "12,847", change: "12%", icon: "target", trend: "up" },
    { title: "Conversions", value: "342", change: "8%", icon: "trending", trend: "up" },
    { title: "Earnings", value: "$2,847", change: "15%", icon: "dollar", trend: "up" },
    { title: "Commission Rate", value: "7.5%", icon: "users" },
  ]

  // Sample data for the chart
  const chartData = [
    { day: "Mon", clicks: 1850, conversions: 45, target: 2000 },
    { day: "Tue", clicks: 1200, conversions: 32, target: 2000 },
    { day: "Wed", clicks: 2100, conversions: 58, target: 2000 },
    { day: "Thu", clicks: 1650, conversions: 41, target: 2000 },
    { day: "Fri", clicks: 2400, conversions: 67, target: 2000 },
    { day: "Sat", clicks: 1900, conversions: 52, target: 2000 },
    { day: "Sun", clicks: 2200, conversions: 61, target: 2000 },
  ]

  const maxClicks = Math.max(...chartData.map((d) => d.clicks), 2500)
  const maxConversions = Math.max(...chartData.map((d) => d.conversions))

  return (
    <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-bold text-gray-800">Dashboard Preview</h3>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Calendar className="w-4 h-4" />
          <span>Last 30 days</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Enhanced Chart Area with Real Sample Data */}
      <div className="bg-gradient-to-br from-[#005380]/5 to-[#0085CC]/10 rounded-2xl p-6 border border-[#0085CC]/20">
        <div className="flex items-center justify-between mb-6">
          <h4 className="text-lg font-semibold text-gray-800">Performance Overview</h4>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-3 h-3 bg-gradient-to-r from-[#005380] to-[#0085CC] rounded-full"></div>
              <span className="text-gray-600">Clicks</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-3 h-3 bg-[#10B981] rounded-full"></div>
              <span className="text-gray-600">Conversions</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-3 h-3 border-2 border-dashed border-gray-400 rounded-full"></div>
              <span className="text-gray-600">Target</span>
            </div>
            <BarChart3 className="w-5 h-5 text-[#0085CC]" />
          </div>
        </div>

        {/* Interactive Chart with Dual Y-Axes */}
        <div className="h-64 bg-white rounded-xl p-6 relative overflow-hidden">
          {/* Left Y-axis labels (Clicks) */}
          <div className="absolute left-2 top-6 bottom-12 flex flex-col justify-between text-xs text-gray-500">
            <span>{Math.round(maxClicks * 1.0).toLocaleString()}</span>
            <span>{Math.round(maxClicks * 0.75).toLocaleString()}</span>
            <span>{Math.round(maxClicks * 0.5).toLocaleString()}</span>
            <span>{Math.round(maxClicks * 0.25).toLocaleString()}</span>
            <span>0</span>
          </div>

          {/* Right Y-axis labels (Conversions) */}
          <div className="absolute right-2 top-6 bottom-12 flex flex-col justify-between text-xs text-green-600">
            <span>{maxConversions}</span>
            <span>{Math.round(maxConversions * 0.75)}</span>
            <span>{Math.round(maxConversions * 0.5)}</span>
            <span>{Math.round(maxConversions * 0.25)}</span>
            <span>0</span>
          </div>

          {/* Chart Grid Lines */}
          <div className="absolute left-12 right-12 top-6 bottom-12">
            <div className="h-full grid grid-rows-4 border-l border-r border-gray-200">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="border-t border-gray-100 last:border-t-0"></div>
              ))}
            </div>
          </div>

          {/* Chart Data */}
          <div className="absolute left-12 right-12 top-6 bottom-12">
            <div className="flex items-end justify-between h-full gap-1">
              {chartData.map((data, index) => {
                const clicksHeight = Math.max((data.clicks / maxClicks) * 100, 3);
                const conversionsHeight = Math.max((data.conversions / maxConversions) * 100, 3);
                const targetPosition = (data.target / maxClicks) * 100;
                
                return (
                  <div key={index} className="flex flex-col items-center relative group flex-1">
                    {/* Tooltip on hover */}
                    <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded-lg px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-30">
                      <div className="text-center">
                        <div className="font-semibold">{data.day}</div>
                        <div className="text-[#60A5FA]">Clicks: {data.clicks.toLocaleString()}</div>
                        <div className="text-[#34D399]">Conversions: {data.conversions}</div>
                        <div className="text-gray-300">Target: {data.target.toLocaleString()}</div>
                      </div>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                    </div>

                    {/* Bar Container */}
                    <div className="relative w-full h-full flex items-end justify-center">
                      {/* Target Goal Line */}
                      <div
                        className="absolute w-full border-t-2 border-dashed border-gray-400 opacity-60 z-10"
                        style={{
                          bottom: `${targetPosition}%`,
                        }}
                      ></div>

                      {/* Clicks Bar */}
                      <div
                        className="bg-gradient-to-t from-[#005380] to-[#0085CC] rounded-t-sm transition-all duration-500 hover:opacity-80 cursor-pointer relative z-20 mr-0.5"
                        style={{
                          height: `${clicksHeight}%`,
                          width: "20px",
                        }}
                      ></div>

                      {/* Conversions Bar (scaled to its own axis) */}
                      <div
                        className="bg-[#10B981] rounded-t-sm transition-all duration-500 hover:opacity-80 cursor-pointer relative z-20 ml-0.5"
                        style={{
                          height: `${conversionsHeight}%`,
                          width: "12px",
                        }}
                      ></div>
                    </div>

                    {/* Day label */}
                    <div className="mt-2 text-xs text-gray-500 font-medium">{data.day}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Performance Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-white rounded-lg p-4 border border-gray-100">
            <div className="text-sm text-gray-600 mb-1">Weekly Clicks</div>
            <div className="text-xl font-bold text-[#005380]">
              {chartData.reduce((sum, d) => sum + d.clicks, 0).toLocaleString()}
            </div>
            <div className="text-xs text-green-600">↗ +12% vs last week</div>
          </div>

          <div className="bg-white rounded-lg p-4 border border-gray-100">
            <div className="text-sm text-gray-600 mb-1">Weekly Conversions</div>
            <div className="text-xl font-bold text-[#10B981]">
              {chartData.reduce((sum, d) => sum + d.conversions, 0)}
            </div>
            <div className="text-xs text-green-600">↗ +8% vs last week</div>
          </div>

          <div className="bg-white rounded-lg p-4 border border-gray-100">
            <div className="text-sm text-gray-600 mb-1">Target Achievement</div>
            <div className="text-xl font-bold text-gray-800">
              {Math.round((chartData.reduce((sum, d) => sum + d.clicks, 0) / (chartData.length * 2000)) * 100)}%
            </div>
            <div className="text-xs text-blue-600">Above target this week</div>
          </div>
        </div>
      </div>
    </div>
  )
}