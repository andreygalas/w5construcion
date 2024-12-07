import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div id="home" className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80"
          alt="Construction site"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-white max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Building Oregon's Future, One Project at a Time
          </h1>
          <p className="mt-6 text-xl text-gray-200">
            W5 Contractors delivers excellence in construction with over two decades of experience
            in commercial and residential projects across Oregon.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 border-2 border-orange-600 bg-orange-600 text-white rounded-md hover:bg-orange-700 hover:border-orange-700 transition-colors text-lg font-medium"
            >
              View Our Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-md hover:bg-white hover:text-gray-900 transition-colors text-lg font-medium"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}