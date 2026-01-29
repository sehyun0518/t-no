"use client"

import { ArrowUpRight, FileText, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ThesisCard } from "@/components/thesis/thesis-card"

export default function HomePage() {
  // Mock state to demonstrate both "Empty" and "Recent" states if needed
  const hasRecentPapers = true;

  return (
    <div className="flex flex-col min-h-full relative bg-gray-500">
      {/* Hero Section: Search Area */}
      <div className="flex-1 flex flex-col items-center justify-start pt-[6rem] pb-[12rem] px-4 relative z-0">
        <div className="flex flex-col gap-2 items-center text-center mb-10">
          <h1 className="text-white font-bold text-4xl leading-[1.6]">
            어떤 논문을 정리해볼까요?
          </h1>
          <p className="text-gray-300 font-medium text-base leading-[1.6]">
            논문에서 글로 변환하고 싶은 DOI 또는 검색어를 입력해주세요
          </p>
        </div>

        {/* Input Area Wrapper */}
        <div className="relative w-full max-w-[56.75rem]">
            {/* Input Box */}
            <div className="w-full bg-white rounded-[0.75rem] p-4 flex items-center gap-5 box-border shadow-lg border border-transparent focus-within:border-gray-200 transition-all">
                <div className="flex items-center gap-5 flex-1 pl-1">
                    <div className="relative w-9 h-9 flex items-center justify-center shrink-0 bg-gray-100 rounded-lg">
                        <FileText className="w-6 h-6 text-gray-400" />
                    </div>
                    <Input 
                        placeholder="논문 제목, 키워드, 또는 DOI를 입력하세요..." 
                        className="flex-1 border-none px-0 h-auto focus:border-none shadow-none"
                    />
                </div>
                <div className="flex items-center gap-3">
                    <Button className="bg-gray-100 hover:bg-gray-200 text-gray-300 hover:text-gray-400 font-bold text-base h-10 px-6 rounded-[0.5rem] shadow-none w-[6.25rem] transition-colors">
                        start
                    </Button>
                </div>
            </div>
        </div>
      </div>

      {/* Main Content Area: Rounded Top Container */}
      <div className="bg-white rounded-t-[3.75rem] -mt-[6.25rem] min-h-[50rem] relative z-10 w-full shadow-[0_-10px_40px_rgba(0,0,0,0.02)]">
         <div className="max-w-[60rem] mx-auto px-8 py-[6.25rem] flex flex-col gap-[10rem]">
            
            {/* Section 1: Recent Papers or Empty State */}
            <div className="flex flex-col gap-10">
                <div className="flex items-center justify-between">
                    <h2 className="text-gray-500 font-bold text-[1.75rem] leading-[1.6]">
                        최근 읽은 논문
                    </h2>
                    <Button 
                        size="icon"
                        className="w-[3rem] h-[3rem] rounded-full bg-green-400 hover:bg-green-500 text-gray-500 shadow-none border-none group transition-all"
                    >
                        <ArrowUpRight className="w-7 h-7 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Button>
                </div>

                {!hasRecentPapers ? (
                    <div className="flex flex-col items-center justify-center py-20 gap-10">
                        <div className="flex flex-col items-center gap-5">
                            <div className="relative w-40 h-40 opacity-20">
                                <FileText className="w-full h-full text-gray-400" />
                            </div>
                            <div className="text-center">
                                <p className="text-gray-400 font-medium text-xl leading-[1.6]">처음 방문하셨나요?</p>
                                <p className="text-gray-400 font-medium text-xl leading-[1.6]">아직 정리해본 논문이 없어요!</p>
                            </div>
                        </div>
                        <Button className="bg-gray-500 hover:bg-gray-600 text-white font-bold text-lg px-8 py-6 rounded-full shadow-none transition-all">
                            Sign up / Login
                        </Button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
                        <ThesisCard 
                            id="1"
                            variant="recent"
                            title="Attention Is All You Need"
                            description="The dominant sequence transduction models are based on complex recurrent or convolutional neural networks..."
                            tags={["AI", "NLP", "Transformer"]}
                        />
                        <ThesisCard 
                            id="2"
                            variant="recent"
                            title="Deep Residual Learning for Image Recognition"
                            description="We present a residual learning framework to ease the training of networks that are substantially deeper..."
                            tags={["CV", "Deep Learning"]}
                        />
                        <ThesisCard 
                            id="3"
                            variant="recent"
                            title="BERT: Pre-training of Deep Bidirectional Transformers"
                            description="We introduce a new language representation model called BERT, which stands for Bidirectional Encoder..."
                            tags={["NLP", "Google"]}
                        />
                    </div>
                )}
            </div>

            {/* Section 2: Recommended/More Content */}
            <div className="flex flex-col gap-10">
                <div className="flex items-center justify-between">
                    <h2 className="text-gray-500 font-bold text-[1.75rem] leading-[1.6]">
                        추천 논문
                    </h2>
                </div>

                <div className="flex flex-col gap-10">
                    <div className="flex items-center gap-2.5 flex-wrap">
                        <span className="text-gray-400 font-medium text-xl leading-[1.6]">
                            연구자님이 많이 찾은
                        </span>
                        <div className="flex gap-2.5">
                            {["인공지능", "딥러닝", "NLP"].map((tag) => (
                                <div key={tag} className="border border-gray-200 rounded-[0.5rem] px-2.5 py-1.5 flex items-center justify-center bg-white">
                                    <span className="text-gray-400 text-xs font-medium"># {tag}</span>
                                </div>
                            ))}
                        </div>
                        <span className="text-gray-400 font-medium text-xl leading-[1.6]">
                            관련 콘텐츠에요!
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
                        <ThesisCard 
                            id="4"
                            variant="home"
                            title="Generative Adversarial Nets"
                            description="We propose a new framework for estimating generative models via an adversarial process..."
                            tags={["GAN", "Generative AI"]}
                        />
                        <ThesisCard 
                            id="5"
                            variant="home"
                            title="Playing Atari with Deep Reinforcement Learning"
                            description="We present the first deep learning model to successfully learn control policies directly from..."
                            tags={["RL", "DeepMind"]}
                        />
                        <ThesisCard 
                            id="6"
                            variant="home"
                            title="ImageNet Classification with Deep Convolutional Neural Networks"
                            description="We trained a large, deep convolutional neural network to classify the 1.2 million high-resolution..."
                            tags={["CV", "CNN"]}
                        />
                    </div>
                </div>

                <div className="flex justify-center mt-10">
                    <button className="text-gray-400 font-medium text-xl hover:text-gray-500 transition-colors">
                        더보기
                    </button>
                </div>
            </div>
         </div>
      </div>
    </div>
  )
}
