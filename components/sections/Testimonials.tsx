'use client';

import { useState } from 'react';
import { EyebrowLabel } from '../EyebrowLabel';
import { Quote } from 'lucide-react';

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: 'Roberta completely transformed how I see my personal brand. Her coaching gave me the clarity and confidence I needed to step into my authority.',
      author: 'Sarah B.',
      role: 'Marketing Director',
      initials: 'SB',
    },
    {
      quote: 'Working with Roberta on my LinkedIn profile and personal brand strategy was one of the best investments I made for my career.',
      author: 'James M.',
      role: 'Executive Coach',
      initials: 'JM',
    },
    {
      quote: 'The insights and strategies Roberta shared transformed my online presence. I&apos;ve attracted more opportunities than ever before.',
      author: 'Maya P.',
      role: 'Entrepreneur',
      initials: 'MP',
    },
  ];

  return (
    <section className="bg-white section-py">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <EyebrowLabel text="Testimonials" className="justify-center" />
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-body-text mb-6">
            What My Clients Are Saying
          </h2>
          <p className="text-lg text-muted-text font-dm-sans max-w-2xl mx-auto">
            Real feedback from people who&apos;ve transformed their personal brands.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`card-base p-8 cursor-pointer transition-all duration-300 ${
                index === activeIndex ? 'border-primary-accent border-2 shadow-lg' : ''
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <Quote className="w-8 h-8 text-primary-accent mb-4" />
              <p className="text-lg font-dm-sans text-body-text leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-accent flex items-center justify-center text-black font-serif font-bold">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-serif font-bold text-body-text">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-text font-dm-sans">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                index === activeIndex
                  ? 'bg-primary-accent h-3 w-10'
                  : 'bg-border h-3 w-3 hover:bg-muted-text'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
