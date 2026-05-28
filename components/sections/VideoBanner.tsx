import { Play } from 'lucide-react';

export function VideoBanner() {
  return (
    <section className="bg-dark-surface section-py">
      <div className="container-max">
        <div className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden group cursor-pointer flex items-center justify-center">
          {/* Video Placeholder Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-dark-surface" />
          
          {/* Play Button */}
          <div className="relative z-10 w-20 h-20 bg-primary-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
            <Play className="w-10 h-10 text-black fill-black ml-1" />
          </div>
        </div>

        {/* Caption */}
        <p className="text-center text-muted-text font-dm-sans text-base md:text-lg mt-8">
          Watch my activities and behind-the-scenes insights
        </p>
      </div>
    </section>
  );
}
