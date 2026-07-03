"use client";

import {
  Bug,
  Lightbulb,
  ShieldCheck,
  Star,
} from "lucide-react";

import FeedbackForm from '@/components/feedback/FeedbackForm'
import FeatureCard from '@/components/ui/FeatureCard';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-12">

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12">

        {/* LEFT */}

        <div className="flex flex-col justify-center">

          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full w-fit font-semibold">
            🚀 Feedback Management Platform
          </span>

          <h1 className="mt-6 text-5xl font-bold text-slate-800 leading-tight">
            Your Voice
            <br />
            Helps Us Build
            <span className="text-blue-600">
              {" "}Better Products
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-600 leading-8">
            Share bugs, request features or simply tell us
            how we can improve your experience.
          </p>

          <div className="grid sm:grid-cols-2 gap-5 mt-10">

            <FeatureCard
              icon={<Bug />}
              title="Report Bugs"
              text="Help us identify issues faster."
            />

            <FeatureCard
              icon={<Lightbulb />}
              title="Request Features"
              text="Suggest new ideas."
            />

            <FeatureCard
              icon={<ShieldCheck />}
              title="Private"
              text="Email is completely optional."
            />

            <FeatureCard
              icon={<Star />}
              title="Fast Response"
              text="Every feedback matters."
            />

          </div>

        </div>

        {/* RIGHT */}

        <FeedbackForm />

      </div>

    </section>
  );
}