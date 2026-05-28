'use client';

import { EyebrowLabel } from '../EyebrowLabel';
import { OutlineButton } from '../OutlineButton';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Play } from 'lucide-react';

export function Process() {
  const steps = [
    {
      id: 'discovery',
      title: 'Discovery & Strategy',
      description: 'Understand your goals, values, and unique positioning. We&apos;ll create a comprehensive brand strategy that sets the foundation for everything.',
    },
    {
      id: 'craft',
      title: 'Craft Your Message',
      description: 'Develop your brand story, messaging framework, and core differentiators. We&apos;ll ensure consistency across all communication channels.',
    },
    {
      id: 'create',
      title: 'Create & Optimize',
      description: 'Build your personal brand presence across LinkedIn, website, and social platforms. We&apos;ll optimize every element for maximum impact.',
    },
    {
      id: 'launch',
      title: 'Launch & Grow',
      description: 'Execute your brand launch with a strategic rollout plan. Then scale your visibility and impact with ongoing optimization.',
    },
  ];

  return (
    <section id="process" className="bg-white section-py">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Accordion */}
          <div>
            <EyebrowLabel text="How It Works" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-body-text mb-8">
              My Coaching Process, Simplified
            </h2>

            <Accordion type="single" defaultValue="create" collapsible className="space-y-3">
              {steps.map((step) => (
                <AccordionItem key={step.id} value={step.id} className="border border-border rounded-lg">
                  <AccordionTrigger className="px-6 py-4 hover:bg-light-section-bg font-serif text-lg font-semibold text-body-text">
                    {step.title}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-muted-text font-dm-sans leading-relaxed">
                    {step.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <OutlineButton className="mt-8 w-full">
              Learn More
            </OutlineButton>
          </div>

          {/* Right - Image */}
          <div className="relative">
            <div className="w-full aspect-video bg-gradient-to-br from-gray-900 via-black to-dark-surface rounded-2xl flex items-center justify-center group cursor-pointer overflow-hidden">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="relative z-10 w-16 h-16 bg-primary-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Play className="w-8 h-8 text-black fill-black ml-1" />
              </div>
            </div>
            <p className="text-center text-muted-text font-dm-sans text-sm mt-4">
              Watch my coaching process in action
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
