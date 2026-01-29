"use client"

import { ArrowUpRight, Upload, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PaperCard } from "@/components/paper/paper-card"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-full relative bg-gray-500">
      {/* Hero Section */}
      <div className="flex-1 flex flex-col items-center justify-start pt-[6rem] pb-[12rem] px-4 relative z-0">
        <div className="flex flex-col gap-2 items-center text-center mb-10">
          <h1 className="text-white font-bold text-4xl leading-[1.6]">
            어떤 논문을 분석해볼까요?
          </h1>
          <p className="text-gray-300 font-medium text-base leading-[1.6]">
            번역하고 싶은 논문을 검색하거나 PDF를 직접 업로드해주세요
          </p>
        </div>

        {/* Input Area Wrapper */}
        <div className="relative w-full max-w-[56.75rem]">
            {/* Input Box */}
            <div className="w-full bg-white rounded-[0.75rem] p-4 flex items-center gap-5 box-border shadow-lg">
                <div className="flex items-center gap-5 flex-1 pl-1">
                    <div className="relative w-9 h-9 flex items-center justify-center shrink-0">
                        <Search className="w-7 h-7 text-gray-500" />
                    </div>
                    <input 
                        type="text" 
                        placeholder="논문 제목, 키워드, 또는 DOI를 입력하세요..." 
                        className="flex-1 text-base font-medium text-gray-500 placeholder:text-gray-300 outline-none border-none bg-transparent h-full leading-[1.6]"
                    />
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="ghost" className="text-gray-400 hover:text-gray-500 font-medium text-sm hidden sm:flex">
                        <Upload className="w-4 h-4 mr-2" />
                        PDF 업로드
                    </Button>
                    <Button className="bg-gray-100 hover:bg-gray-200 text-gray-300 hover:text-gray-400 font-medium text-base h-10 px-6 rounded-[0.5rem] shadow-none w-[6.25rem]">
                        검색
                    </Button>
                </div>
            </div>
        </div>
      </div>

      {/* Recent Papers Section */}
      <div className="bg-white rounded-t-[3.75rem] -mt-[6.25rem] min-h-[50rem] relative z-10 w-full">
         <div className="max-w-[82.5rem] mx-auto px-8 py-[3.75rem] flex flex-col gap-10">
            {/* Section Header */}
            <div className="flex flex-col gap-2.5 max-w-[56.875rem] mx-auto w-full">
                <div className="flex items-center justify-between">
                    <h2 className="text-gray-500 font-bold text-[1.75rem] leading-[1.6]">
                        최근 읽은 논문
                    </h2>
                    <Button 
                        size="icon"
                        className="w-[3rem] h-[3rem] rounded-full bg-green-400 hover:bg-green-500 text-gray-500 shadow-none border-none"
                    >
                        <ArrowUpRight className="w-7 h-7" />
                    </Button>
                </div>
                
                <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="text-gray-400 font-medium text-xl leading-[1.6]">
                        연구자님이 많이 찾은
                    </span>
                    <div className="flex gap-2.5">
                         <div className="border border-gray-200 rounded-[0.5rem] px-2.5 py-1.5 flex items-center justify-center">
                             <span className="text-gray-400 text-xs font-medium"># 인공지능</span>
                         </div>
                         <div className="border border-gray-200 rounded-[0.5rem] px-2.5 py-1.5 flex items-center justify-center">
                             <span className="text-gray-400 text-xs font-medium"># 딥러닝</span>
                         </div>
                         <div className="border border-gray-200 rounded-[0.5rem] px-2.5 py-1.5 flex items-center justify-center">
                             <span className="text-gray-400 text-xs font-medium"># NLP</span>
                         </div>
                    </div>
                    <span className="text-gray-400 font-medium text-xl leading-[1.6]">
                        주제에요!
                    </span>
                </div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[56.875rem] mx-auto w-full">
                <PaperCard 
                    title="Attention Is All You Need"
                    description="The dominant sequence transduction models are based on complex recurrent or convolutional neural networks..."
                    tags={["AI", "NLP", "Transformer"]}
                />
                <PaperCard 
                    title="Deep Residual Learning for Image Recognition"
                    description="We present a residual learning framework to ease the training of networks that are substantially deeper..."
                    tags={["CV", "Deep Learning"]}
                />
                <PaperCard 
                    title="BERT: Pre-training of Deep Bidirectional Transformers"
                    description="We introduce a new language representation model called BERT, which stands for Bidirectional Encoder..."
                    tags={["NLP", "Google"]}
                />
                <PaperCard 
                    title="Generative Adversarial Nets"
                    description="We propose a new framework for estimating generative models via an adversarial process..."
                    tags={["GAN", "Generative AI"]}
                />
                <PaperCard 
                    title="Playing Atari with Deep Reinforcement Learning"
                    description="We present the first deep learning model to successfully learn control policies directly from..."
                    tags={["RL", "DeepMind"]}
                />
                <PaperCard 
                    title="ImageNet Classification with Deep Convolutional Neural Networks"
                    description="We trained a large, deep convolutional neural network to classify the 1.2 million high-resolution..."
                    tags={["CV", "CNN"]}
                />
            </div>
         </div>
      </div>
    </div>
  )
}
