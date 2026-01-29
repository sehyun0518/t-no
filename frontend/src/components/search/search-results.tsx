"use client"

import Image from "next/image"
import Link from "next/link"

const imgSearchResult = "https://www.figma.com/api/mcp/asset/283ae20a-5548-47f1-916e-104ad97ded1f";

export function SearchResults() {
  return (
    /* Search Results View (Figma Node 1:11102) */
    <div className="w-full flex flex-col gap-5 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
        <div className="w-full flex justify-start">
            <p className="text-gray-300 font-medium text-sm leading-[1.6]">
                총 12개의 영상이 발견되었어요!
            </p>
        </div>

        {/* Result Cards List */}
        <div className="flex flex-col gap-5">
            {[1, 2, 3].map((i) => (
                <Link key={i} href={`/thesis/${i}`}>
                    <div className="bg-white flex items-stretch overflow-hidden rounded-[1rem] shadow-[0px_4px_40px_rgba(0,0,0,0.05)] hover:shadow-[4px_4px_30px_rgba(0,0,0,0.1)] transition-all cursor-pointer group">
                        {/* Left Content */}
                        <div className="flex-1 flex flex-col gap-6 p-6">
                            {/* Metadata */}
                            <div className="flex items-center gap-2 text-[12px] font-medium text-gray-300">
                                <span>여울</span>
                                <div className="w-px h-3 bg-gray-200" />
                                <span>2024년 1월 1일</span>
                            </div>

                            {/* Title & Desc */}
                            <div className="flex flex-col gap-2">
                                <h3 className="font-bold text-base text-gray-500 leading-[1.6]">
                                    메조미디어가 본 내년 미디어 <span className="text-[#9bb700]">트렌드</span>는…생성AI·광고없는 구독
                                </h3>
                                <p className="text-gray-400 text-sm font-medium leading-[1.6]">
                                    2024 광고 시장의 현황
                                </p>
                                <p className="text-gray-300 text-sm leading-[1.6] line-clamp-2">
                                    올해 IT업계의 가장 큰 화제는 단연코 생성형 AI라고 할 수 있겠습니다. 2022년 11월, OpenAI가 출시한 ChatGPT는 멀게만 느껴졌던 AI 기술을 우리의 실생활에 밀접한 서비스로 바꾸었죠. 그리고 이제는 디지털 광고 영역에서도 본격...
                                </p>
                            </div>

                            {/* Tags */}
                            <div className="flex gap-2">
                                {["디자인", "인공지능", "마케팅"].map((tag) => (
                                    <div key={tag} className="bg-gray-100 px-2.5 py-1.5 rounded-lg">
                                        <span className="text-gray-400 text-[12px] font-medium leading-[1.6]"># {tag}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="relative w-[13.3rem] shrink-0 bg-gray-100 overflow-hidden">
                            <Image 
                                src={imgSearchResult} 
                                alt="Result Thumbnail" 
                                fill 
                                className="object-cover group-hover:scale-105 transition-transform duration-500" 
                            />
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    </div>
  )
}
