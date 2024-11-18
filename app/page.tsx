import { Button } from "@/components/ui/button"
import { Brain, Workflow, RefreshCw, MessageSquareMore, Sparkles, ChevronRight } from 'lucide-react'
import Image from "next/image"

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      {/* Header with animated text */}
      <div className="absolute top-0 w-full overflow-hidden py-2">
        <div className="animate-scroll-left flex whitespace-nowrap text-xs text-white/30">
          {Array(10).fill("unstructured data labeling • prompt engineering • expert feedback • ").map((text, i) => (
            <span key={i} className="mx-4">{text}</span>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-20">
        <div className="flex min-h-[80vh] flex-col items-center justify-center text-center">
          <h1 className="mb-6 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-6xl font-bold tracking-tight text-transparent sm:text-7xl xl:text-8xl">
            Simplify Data
            <br />
            Labeling with AI
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-purple-200/80">
            A structured framework designed to streamline and semi-automate the prompt engineering process,
            utilizing real-time dynamic labeling and expert feedback.
          </p>
          <Button className="h-12 rounded-full bg-white px-8 text-lg font-semibold text-purple-900 hover:bg-purple-100">
            Get Started
          </Button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Feature 1 */}
          <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm">
            <div className="mb-4 inline-block rounded-lg bg-purple-400/10 p-3">
              <Brain className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-white">Smart Automation</h3>
            <p className="text-purple-200/70">
              Semi-automated prompt engineering that minimizes the need for deep technical knowledge of LLMs.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm">
            <div className="mb-4 inline-block rounded-lg bg-purple-400/10 p-3">
              <RefreshCw className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-white">Real-time Labeling</h3>
            <p className="text-purple-200/70">
              Dynamic labeling system that adapts and improves based on continuous expert feedback.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm">
            <div className="mb-4 inline-block rounded-lg bg-purple-400/10 p-3">
              <Workflow className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-white">Iterative Improvement</h3>
            <p className="text-purple-200/70">
              Continuous prompt refinement based on error feedback from expert users.
            </p>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
          How StructurEase Works
        </h2>
        <div className="relative">
          {/* Process Steps */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Step 1 */}
            <div className="relative">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-400/20 text-purple-400">
                1
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">Input Data</h3>
              <p className="text-purple-200/70">
                Upload your unstructured data for processing
              </p>
              <ChevronRight className="absolute -right-6 top-6 hidden h-6 w-6 text-purple-400/50 md:block" />
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-400/20 text-purple-400">
                2
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">AI Processing</h3>
              <p className="text-purple-200/70">
                Initial automated labeling using LLMs
              </p>
              <ChevronRight className="absolute -right-6 top-6 hidden h-6 w-6 text-purple-400/50 md:block" />
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-400/20 text-purple-400">
                3
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">Expert Review</h3>
              <p className="text-purple-200/70">
                Feedback and corrections from domain experts
              </p>
              <ChevronRight className="absolute -right-6 top-6 hidden h-6 w-6 text-purple-400/50 md:block" />
            </div>

            {/* Step 4 */}
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-400/20 text-purple-400">
                4
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">Optimization</h3>
              <p className="text-purple-200/70">
                Continuous improvement of labeling accuracy
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="rounded-3xl bg-gradient-to-r from-purple-800/50 to-purple-900/50 p-12 text-center backdrop-blur-sm">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Ready to streamline your labeling workflow?
          </h2>
          <p className="mb-8 text-lg text-purple-200/80">
            Join the future of intelligent data labeling today.
          </p>
          <Button className="h-12 rounded-full bg-white px-8 text-lg font-semibold text-purple-900 hover:bg-purple-100">
            Start Free Trial
          </Button>
        </div>
      </div>

      {/* Footer with animated text */}
      <div className="absolute bottom-0 w-full overflow-hidden py-2">
        <div className="animate-scroll-right flex whitespace-nowrap text-xs text-white/30">
          {Array(10).fill("optimize classification • minimize technical debt • improve accuracy • ").map((text, i) => (
            <span key={i} className="mx-4">{text}</span>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        
        .animate-scroll-left {
          animation: scroll-left 20s linear infinite;
        }
        
        .animate-scroll-right {
          animation: scroll-right 20s linear infinite;
        }
      `}</style>
    </div>
  )
}