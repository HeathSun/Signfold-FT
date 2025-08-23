"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { CompanySelector } from "@/components/ui/company-selector";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

export default function RotatingGradientRight() {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital@1&display=swap');
          
          .playfair-display-italic {
            font-family: "Playfair Display", serif;
            font-optical-sizing: auto;
            font-weight: 400;
            font-style: italic;
          }
        `}
      </style>
      <section className="min-h-screen w-full bg-black text-white px-8 py-16 md:px-16">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        {/* LEFT: Text */}
        <div className="relative mx-auto flex h-[40rem] w-full max-w-[60rem] items-center justify-center overflow-hidden rounded-3xl">
          {/* Rotating conic gradient glow */}
          <div className="absolute -inset-10 flex items-center justify-center">
            <div
              className="
                h-[120%] w-[120%] rounded-[36px] blur-3xl opacity-80
                bg-[conic-gradient(from_0deg,theme(colors.emerald.400),theme(colors.cyan.400),theme(colors.blue.500),theme(colors.violet.600),theme(colors.red.500),theme(colors.emerald.400))]
                animate-[spin_8s_linear_infinite]
              "
            />
          </div>

          {/* Black card inside the glow */}
          <Card className="w-[340px] z-10 rounded-2xl border border-white/10 bg-black/85 shadow-2xl backdrop-blur-xl">
            <CardContent className="p-5">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-medium">Activate the Signfold Agent</span>
                <span className="text-xs text-zinc-400">99 / 99</span>
              </div>

              {/* Progress bar */}
              <div className="mb-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[5%] rounded-full
                                bg-[linear-gradient(90deg,theme(colors.cyan.400),theme(colors.sky.400),theme(colors.emerald.400))]" />
              </div>

              <p className="text-xs text-zinc-400">
                Before proceeding, check that you’re signed into your Chrome account.
              </p>

              <InteractiveHoverButton className="mt-4 w-full">
                Follow all with Signfold
              </InteractiveHoverButton>
            </CardContent>
          </Card>
        </div>

        {/* RIGHT: Title with Signfold logo and company selector */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl playfair-display-italic text-white leading-relaxed">
              Signfold
            </h2>
            <img 
              src="https://cslplhzfcfvzsivsgrpc.supabase.co/storage/v1/object/public/img/Signfold.gif" 
              alt="Signfold Logo" 
              className="w-8 h-8 rounded-full"
            />
          </div>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg">
            With a single sign-in, users can instantly follow your company’s social accounts (X, GitHub, and more) and access your websites without repeated authentication.
          </p>
          <Button variant="link" className="px-0 text-white">
            Documentation <ArrowRight />
          </Button>
          
          {/* Company Selector */}
          <div className="mt-8">
            <CompanySelector />
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
