"use client"

import { ThesisCard } from "@/components/thesis/thesis-card"

export function RecommendedThesisSection() {
  return (
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
  )
}
