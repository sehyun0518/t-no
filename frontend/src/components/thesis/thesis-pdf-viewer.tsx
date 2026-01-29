"use client"

import { Highlighter, Type, Edit3 } from "lucide-react"

export function ThesisPdfViewer() {
  return (
    <div className="relative overflow-hidden flex flex-col">
        {/* Toolbar with Editing/Marking Tools */}
        <div className="h-12 border-y border-gray-100 flex items-center justify-between px-10 bg-gray-50/50 sticky top-0 z-10">
            <div className="flex items-center gap-4 text-gray-400 text-sm">
                <span className="font-medium text-gray-500">Page 1 / 12</span>
                <div className="h-4 w-[1px] bg-gray-200"></div>
                <span className="font-medium text-gray-500">100%</span>
            </div>

            {/* Middle: Editing Tools */}
            <div className="flex items-center bg-white border border-gray-200 rounded-lg p-0.5 shadow-sm">
                <button className="p-1.5 px-3 flex items-center gap-2 hover:bg-gray-50 text-gray-600 rounded-md transition-colors border-r border-gray-100">
                    <Highlighter className="w-4 h-4 text-yellow-500 fill-yellow-200" />
                    <span className="text-xs font-bold">마킹</span>
                </button>
                <button className="p-1.5 px-3 flex items-center gap-2 hover:bg-gray-50 text-gray-600 rounded-md transition-colors">
                    <Type className="w-4 h-4" />
                    <span className="text-xs font-bold">텍스트 편집</span>
                </button>
            </div>

            <div className="flex items-center gap-2">
                    {/* Tools area */}
            </div>
        </div>
        
        {/* Content Area with Highlights */}
        <div className="p-10 pt-12">
            <div className="max-w-[40rem] mx-auto flex flex-col gap-8 text-gray-800">
                    {/* Abstract */}
                    <div className="flex flex-col gap-3">
                        <h3 className="font-bold text-lg">초록 (Abstract)</h3>
                        <p className="leading-loose text-justify text-gray-600">
                            본 연구는 2024년 디지털 미디어 및 광고 시장의 주요 트렌드를 <span className="bg-yellow-100 border-b border-yellow-300 px-0.5">생성형 AI, 구독 경제, 숏폼 콘텐츠, 쿠키리스(Cookieless) 환경</span>의 네 가지 핵심 축을 중심으로 분석한다. 생성형 AI의 도입이 검색 광고 효율성에 미치는 긍정적 및 부정적 영향을 실증적으로 검토하고, 이에 따른 마케팅 전략의 변화를 제안한다. 또한, 넷플릭스 등 OTT 플랫폼의 광고형 요금제 도입이 전체 광고 시장 파이에 미치는 영향을 예측 모델링을 통해 제시한다.
                        </p>
                    </div>

                    <div className="h-px bg-gray-100 w-full my-4"></div>

                    {/* Introduction */}
                    <div className="flex flex-col gap-3">
                        <h3 className="font-bold text-lg">1. 서론</h3>
                        <p className="leading-loose text-justify text-gray-600">
                            디지털 전환(Digital Transformation)이 가속화됨에 따라 광고 시장은 전례 없는 변화의 시기를 맞이하고 있다. <span className="bg-green-100 border-b border-green-300 px-0.5 text-green-900">2023년은 생성형 AI의 상용화 원년</span>으로 기록되었으며, 이는 단순한 기술적 진보를 넘어 콘텐츠 제작 방식과 소비 패턴의 근본적인 변화를 야기했다. 본 논문에서는 이러한 기술적 변화가 실제 비즈니스 모델, 특히 광고 수익 모델에 어떠한 구조적 변화를 가져오는지 심층적으로 탐구하고자 한다.
                        </p>
                        <p className="leading-loose text-justify text-gray-600 italic border-l-4 border-gray-100 pl-4 py-2 bg-gray-50/50">
                            &quot;특히 서드파티 쿠키(Third-party Cookie) 지원 종료가 예고된 상황에서, 기업들이 퍼스트파티 데이터(First-party Data)를 어떻게 확보하고 활용해야 하는지에 대한 실질적인 가이드라인을 제시하는 것이 본 연구의 주된 목적 중 하나이다.&quot;
                        </p>
                    </div>

                    {/* Fake Content blocks */}
                    <div className="space-y-4">
                    <div className="h-4 bg-gray-100 rounded w-full"></div>
                    <div className="h-4 bg-gray-100 rounded w-[90%]"></div>
                    <div className="h-4 bg-gray-50 rounded w-[95%]"></div>
                    <div className="h-4 bg-gray-50 rounded w-[85%]"></div>
                    </div>
                    
                    <div className="relative w-full aspect-video bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100 mt-4 group cursor-pointer hover:border-green-200 transition-all">
                        <span className="text-gray-400 font-medium group-hover:text-green-500">Figure 1. 2024년 광고비 지출 전망 (클릭하여 편집)</span>
                        <Edit3 className="absolute top-4 right-4 w-4 h-4 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    <div className="space-y-4">
                    <div className="h-4 bg-gray-50 rounded w-full"></div>
                    <div className="h-4 bg-gray-50 rounded w-full"></div>
                    <div className="h-4 bg-gray-50 rounded w-[80%]"></div>
                    </div>
            </div>
        </div>
    </div>
  )
}
