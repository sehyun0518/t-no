"use client"

import { ArrowUpRight, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThesisCard } from "@/components/thesis/thesis-card"

interface RecentThesisSectionProps {
  hasRecentPapers: boolean;
}

export function RecentThesisSection({ hasRecentPapers }: RecentThesisSectionProps) {
  return (
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
  )
}
