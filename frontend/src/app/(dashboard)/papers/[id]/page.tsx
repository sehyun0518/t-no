"use client"

import Image from "next/image"
import { ScrollArea } from "@/components/ui/scroll-area"
import { 
  FileText, 
  MessageSquare, 
  ChevronRight, 
  FolderPlus, 
  Highlighter, 
  Edit3, 
  Type, 
  Trash2,
  Check
} from "lucide-react"

// Asset Constants (Reusing existing)
const img7 = "https://www.figma.com/api/mcp/asset/f97895aa-aeff-46da-9b2a-eb78ff4a839e";
const img10 = "https://www.figma.com/api/mcp/asset/4e74bd64-5f65-40c3-ab42-a4c6dbb6012d";
const img14 = "https://www.figma.com/api/mcp/asset/3f8def7e-094a-4c77-9102-608c4f29de05";
const img15 = "https://www.figma.com/api/mcp/asset/3bb7e43c-f7be-4a8c-b740-ccde5b146f8c";

function ContentInput({ className }: { className?: string }) {
  return (
    <div className={`flex gap-3 items-start relative w-full group ${className}`}>
      <div className="flex flex-1 items-start relative bg-white/50 p-3 rounded-lg border border-gray-100 group-hover:border-green-200 transition-colors">
        <p className="flex-1 font-medium leading-[1.6] text-gray-500 text-sm whitespace-pre-wrap">
          이 논문의 주요 기여점은 생성형 AI가 디지털 광고 시장에 미치는 영향을 정량적으로 분석했다는 점입니다.
        </p>
        <button className="opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-100 rounded text-gray-400 transition-all">
            <Edit3 className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

export default function PaperDetailPage() {
  return (
    <div className="flex flex-row h-full w-full overflow-hidden bg-white">
        {/* CENTER: Main Paper Content */}
        <ScrollArea className="flex-1 h-full border-r border-gray-100">
            <div className="flex flex-col gap-0 max-w-[60rem] mx-auto pb-20">
                {/* 1. Paper Header Section */}
                <div className="p-10 pb-6 flex flex-col gap-6 items-center text-center">
                     <span className="text-gray-400 text-sm font-medium">2024년 1월 1일 출판</span>
                     <h1 className="font-bold text-gray-800 text-3xl leading-tight">
                        메조미디어가 본 미디어 트렌드는…생성AI·광고없는 구독
                     </h1>
                     <div className="flex gap-2.5">
                        {["# 인공지능", "# 마케팅", "# 트렌드"].map((tag, i) => (
                            <div key={i} className="bg-gray-100 px-2.5 py-1.5 rounded-lg flex items-center justify-center">
                                <span className="text-gray-400 text-xs font-medium leading-[1.6]">
                                    {tag}
                                </span>
                            </div>
                        ))}
                     </div>
                </div>

                {/* Category & Actions (Figma Node 1:3706) */}
                <div className="flex gap-2 items-start w-full px-10 mb-10">
                    <div className="border border-gray-200 flex-1 h-[38px] flex items-center justify-between px-4 py-1.5 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                        <p className="font-medium text-gray-400 text-sm">
                            어떤 카테고리에 넣을까요?
                        </p>
                        <div className="w-[18px] h-[18px] relative flex items-center justify-center">
                            <Image src={img15} alt="down" fill className="object-contain" />
                        </div>
                    </div>
                    <div className="bg-gray-200 h-[38px] w-10 flex items-center justify-center rounded-lg cursor-pointer hover:bg-gray-300 transition-colors">
                         <FolderPlus className="w-5 h-5 text-gray-500" />
                    </div>
                </div>

                {/* 2. PDF Viewer / Paper Body */}
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
            </div>
        </ScrollArea>

        {/* RIGHT: Summary & AI Analysis */}
        <div className="w-[28rem] bg-white border-l border-gray-100 flex flex-col h-full overflow-hidden z-20">
             {/* 1. Header Actions */}
             <div className="flex items-center justify-between p-6 border-b border-gray-50">
                 <h2 className="font-bold text-lg text-gray-800 flex items-center gap-2">
                     <MessageSquare className="w-5 h-5 text-gray-500" />
                     분석 & 요약
                 </h2>
                 
                 {/* Right Icons */}
                 <div className="flex items-center gap-2">
                    <div className="bg-gray-50 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors border border-gray-100">
                         <div className="relative w-4 h-4">
                             <Image src={img7} alt="search" fill className="object-contain" />
                         </div>
                    </div>
                    <div className="bg-gray-50 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors border border-gray-100">
                        <div className="relative w-4 h-4 text-gray-500">
                            <Image src={img10} alt="profile" fill className="object-contain" />
                        </div>
                    </div>
                 </div>
             </div>

             <ScrollArea className="flex-1">
                 <div className="flex flex-col gap-10 p-6">
                    
                    {/* 2. Key Takeaways Section */}
                    <div className="flex flex-col gap-6">
                        <div className="flex gap-2 items-center">
                            <div className="relative w-9 h-9 shrink-0 flex items-center justify-center">
                                <Image src={img14} alt="icon" fill className="object-contain p-1" />
                            </div>
                            <h3 className="font-bold text-gray-800 text-[20px] leading-[1.6]">핵심 요약 (Key Takeaways)</h3>
                        </div>
                        
                        <div className="flex flex-col gap-4">
                            {[
                                { id: 1, title: "생성형 AI의 검색 시장 침투", desc: "검색 정보 소비 여정의 단축 및 광고 효율성 변화" },
                                { id: 2, title: "구독형 모델의 광고 도입 확대", desc: "주요 빅테크 기업의 AI 전용 광고 베타 테스트 진행" },
                                { id: 3, title: "숏폼 콘텐츠의 비즈니스화", desc: "연간 매출 전망 100억 달러 규모의 성장세 분석" },
                                { id: 4, title: "쿠키리스 시대의 맞춤형 광고", desc: "퍼스트파티 데이터를 활용한 새로운 타겟팅 전략" }
                            ].map((item) => (
                                <div key={item.id} className="flex gap-4 items-start group relative">
                                    <div className="bg-[#dfff00] w-6 h-6 flex items-center justify-center rounded-md text-xs font-bold shrink-0 mt-1">
                                        {item.id}
                                    </div>
                                    <div className="flex flex-1 flex-col gap-1">
                                        <p className="font-bold text-gray-800 text-base leading-tight">
                                            {item.title}
                                        </p>
                                        <p className="text-sm text-gray-500 leading-relaxed pr-12">
                                            {item.desc}
                                        </p>
                                    </div>
                                    
                                    {/* Edit/Delete Actions on Hover */}
                                    <div className="absolute right-0 top-0 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button className="p-1.5 hover:bg-gray-100 rounded text-gray-400 hover:text-gray-600">
                                            <Edit3 className="w-3.5 h-3.5" />
                                        </button>
                                        <button className="p-1.5 hover:bg-red-50 rounded text-gray-400 hover:text-red-500">
                                            <Trash2 className="w-3.5 h-3.5" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="h-px bg-gray-50 w-full"></div>

                    {/* 3. AI Notes Section */}
                    <div className="flex flex-col gap-6">
                        <div className="flex gap-2 items-center justify-between">
                            <div className="flex gap-2 items-center">
                                <div className="relative w-9 h-9 shrink-0 flex items-center justify-center">
                                    <Image src={img14} alt="icon" fill className="object-contain p-1" />
                                </div>
                                <h3 className="font-bold text-gray-800 text-[20px] leading-[1.6]">AI 노트 (AI Notes)</h3>
                            </div>
                            <span className="text-[10px] font-bold text-green-500 flex items-center gap-1">
                                <Check className="w-3 h-3" /> 저장됨
                            </span>
                        </div>

                        <div className="flex flex-col gap-4">
                             <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 relative group">
                                 <p className="text-sm text-gray-600 leading-relaxed">
                                     🤖 이 논문은 디지털 광고 생태계의 근본적인 변화를 다룹니다. 특히 <span className="font-bold text-gray-800">퍼스트파티 데이터</span>의 중요성을 강조하고 있어요.
                                 </p>
                                 <button className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 p-1.5 hover:bg-white rounded shadow-sm transition-all">
                                     <Edit3 className="w-3 h-3 text-gray-400" />
                                 </button>
                             </div>
                             
                             <div className="flex flex-col gap-3">
                                <ContentInput />
                                <ContentInput />
                             </div>

                             <div className="relative mt-2">
                                 <input 
                                    type="text" 
                                    placeholder="질문을 입력하세요..." 
                                    className="w-full h-12 pl-4 pr-12 rounded-xl bg-white border border-gray-200 text-sm outline-none transition-all shadow-sm"
                                 />
                                 <button className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                                     <ChevronRight className="w-4 h-4 text-gray-500" />
                                 </button>
                             </div>
                        </div>
                    </div>

                    {/* 4. Related Papers */}
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center justify-between">
                            <h3 className="font-bold text-gray-500 text-sm uppercase tracking-wider">관련 논문</h3>
                            <span className="text-xs text-gray-400 hover:text-gray-600 cursor-pointer">모두 보기</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            {[1, 2].map((i) => (
                                <div key={i} className="group flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all cursor-pointer border border-transparent hover:border-gray-100">
                                    <div className="bg-gray-100 p-2 rounded-lg text-gray-400 group-hover:bg-white group-hover:text-green-600 transition-colors border border-transparent group-hover:border-gray-100">
                                        <FileText className="w-5 h-5" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <h4 className="font-bold text-gray-700 text-sm leading-tight group-hover:text-gray-900">
                                            {i === 1 ? "생성형 AI 검색과 광고 시장" : "숏폼 콘텐츠와 커머스 결합"}
                                        </h4>
                                        <span className="text-xs text-gray-400">{i === 1 ? "김철수 외 • 2023" : "이영희 • 2023"}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                 </div>
             </ScrollArea>
        </div>
    </div>
  )
}