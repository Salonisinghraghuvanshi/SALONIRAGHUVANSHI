import { EyebrowLabel } from '../EyebrowLabel';
import { PrimaryButton } from '../PrimaryButton';
import { ArrowRight } from 'lucide-react';

export function Portfolio() {
  const portfolioItems = [
    {
      title: 'LinkedIn Profile Transformation',
      category: 'Brand Makeover',
      description: 'Helped Sarah increase her LinkedIn engagement by 300% with a complete profile overhaul and content strategy.',
      image: 'bg-gradient-to-br from-blue-500 to-blue-700',
    },
    {
      title: 'Executive Brand Launch',
      category: 'Strategy & Launch',
      description: 'Guided James through a complete personal brand repositioning that led to a C-suite opportunity.',
      image: 'bg-gradient-to-br from-purple-500 to-purple-700',
    },
    {
      title: 'Influencer Authority Building',
      category: 'Content Strategy',
      description: 'Created a content system for Maya that established her as a thought leader in her industry.',
      image: 'bg-gradient-to-br from-pink-500 to-pink-700',
    },
  ];

  return (
    <section id="portfolio" className="bg-white section-py">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <EyebrowLabel text="My Work" className="justify-center" />
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-body-text mb-6">
            Insights & Strategies for Building Your Personal Brand
          </h2>
          <p className="text-lg text-muted-text font-dm-sans max-w-2xl mx-auto">
            Explore real case studies and strategic insights from my coaching work.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="card-base overflow-hidden card-hover group"
            >
              {/* Image */}
              <div className={`w-full aspect-video ${item.image} flex items-center justify-center overflow-hidden`}>
                <div className="text-white text-center p-6 group-hover:scale-110 transition-transform duration-300">
                  <p className="text-sm font-dm-sans opacity-80">Portfolio Image</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="inline-block bg-primary-accent/10 text-primary-accent text-xs font-dm-sans font-semibold px-3 py-1 rounded-full mb-3">
                  {item.category}
                </div>
                <h3 className="text-xl font-serif font-bold text-body-text mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-text font-dm-sans text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <button className="flex items-center gap-2 text-primary-accent font-dm-sans font-semibold hover:gap-3 transition-all duration-300">
                  Read Story
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <PrimaryButton>See All Work</PrimaryButton>
        </div>
      </div>
    </section>
  );
}
