import { EyebrowLabel } from '../EyebrowLabel';

export function InterestsTags() {
  const interests = [
    'AI Content Creation',
    'Canva Pro Design',
    'Meta Ads Strategy',
    'Cinematic Videography',
    'High-End Branding',
    'Minimalist Aesthetics',
    'Social Media Management',
    'Ultra-Realistic Concepts',
    'Lifestyle Marketing',
    'Product Mockups',
    'UGC Direction',
    'Visual Storytelling',
  ];

  return (
    <section className="bg-accent-pale section-py">
      <div className="container-max">
        <div className="text-center mb-12">
          <EyebrowLabel text="Areas of Expertise" className="justify-center" />
        </div>

        {/* Tags Cloud */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {interests.map((interest, index) => (
            <button
              key={index}
              className="px-4 md:px-6 py-2 md:py-3 border-2 border-body-text text-body-text font-dm-sans font-semibold rounded-full hover:bg-body-text hover:text-accent-pale hover:border-body-text transition-all duration-300 text-sm md:text-base"
            >
              {interest}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}