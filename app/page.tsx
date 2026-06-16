import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts";
import type { Metadata } from "next";

// NEXT.JS SEO METADATA
export const metadata: Metadata = {
  title: "Al-Hikmah International School | Modern Islamic Education in Bangladesh",
  description: "An upcoming modern Islamic school in Bangladesh offering English medium education, Hifz, and Tarbiyah. Pre-register for the 2026-2027 academic year.",
  keywords: ["Islamic school Bangladesh", "English medium madrasah", "Hifz school Dhaka", "Modern Islamic education"],
};

export default async function HomePage() {
  const latestPosts = getSortedPostsData().slice(0, 2);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans leading-relaxed">
      
      {/* INLINE ANIMATION STYLES */}
      <style>{`
        @keyframes fadeUpScale {
          0% { opacity: 0; transform: translateY(40px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .animate-fade-up {
          animation: fadeUpScale 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .animate-shimmer {
          background-size: 200% auto;
          animation: shimmer 4s linear infinite;
        }
        .delay-100 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.6s; }
        .delay-500 { animation-delay: 1.0s; }
        .delay-700 { animation-delay: 1.4s; }
      `}</style>

      {/* HEADER */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-extrabold text-emerald-800 tracking-tight">
            Al-Hikmah <span className="text-amber-500">Academy</span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="/about" className="text-slate-600 hover:text-emerald-700 font-medium transition">Our Vision</Link>
            <Link href="/academics" className="text-slate-600 hover:text-emerald-700 font-medium transition">Academics & Hifz</Link>
            <Link href="/campus" className="text-slate-600 hover:text-emerald-700 font-medium transition">Campus</Link>
            <Link href="/blog" className="text-slate-600 hover:text-emerald-700 font-medium transition">Updates</Link>
          </nav>
          <Link href="/pre-register" className="bg-emerald-700 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-emerald-800 transition shadow-md">
            Pre-Register
          </Link>
        </div>
      </header>

      {/* STYLISH VIDEO HERO SECTION */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        
        {/* Background YouTube Video */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden bg-slate-900">
          <iframe
            src="https://www.youtube.com/embed/paWsaaFwpiA?autoplay=1&mute=1&loop=1&playlist=paWsaaFwpiA&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
            className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2"
            allow="autoplay; encrypted-media"
            frameBorder="0"
          ></iframe>
        </div>

        {/* Gradient Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-emerald-950/80 to-slate-950/90 z-10"></div>
        
        {/* Animated Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          
          <span className="animate-fade-up delay-100 inline-block py-1.5 px-4 rounded-full bg-amber-500/20 text-amber-400 font-bold text-sm tracking-widest uppercase mb-6 border border-amber-500/30 backdrop-blur-md">
            Opening Insha'Allah 2026
          </span>
          
          <h1 className="animate-fade-up delay-300 text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight drop-shadow-2xl">
            Redefining{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-100 to-amber-400 animate-shimmer drop-shadow-md">
              Islamic Education
            </span>
            <br /> in Bangladesh
          </h1>
          
          <p className="animate-fade-up delay-500 max-w-2xl mx-auto text-xl sm:text-2xl text-emerald-50 mb-10 font-medium drop-shadow-md">
            Nurturing Faith. Inspiring Excellence. Building Character.
          </p>
          
          <div className="animate-fade-up delay-700 flex flex-col sm:flex-row justify-center gap-5 w-full sm:w-auto">
            <Link href="/pre-register" className="bg-amber-500 text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-400 transition shadow-[0_0_30px_rgba(245,158,11,0.3)]">
              Admissions Query
            </Link>
            <Link href="/campus" className="bg-transparent border-2 border-white/60 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 hover:border-white transition backdrop-blur-sm">
              Explore Campus
            </Link>
          </div>

        </div>
      </section>

      {/* PHILOSOPHY & SEO TEXT */}
      <section className="relative py-24 px-4 bg-white overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/3 w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[500px] h-[500px] bg-amber-100/30 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative max-w-5xl mx-auto">
          <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-8 sm:p-16 text-center transition hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)]">
            
            <div className="mx-auto w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-8 rotate-3 shadow-sm border border-emerald-100">
              <svg className="w-8 h-8 -rotate-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
              </svg>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-8 tracking-tight">
              Balancing <span className="text-emerald-700">Deen</span> and <span className="text-amber-500">Duniya</span>
            </h2>

            <div className="max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-medium mb-8">
                At Al-Hikmah Academy, we understand the aspirations of modern Bangladeshi parents. You want your child to excel globally in science, technology, and literature, while remaining deeply rooted in Islamic morals and Sunnah.
              </p>
              
              <div className="flex items-center justify-center gap-4 mb-8 opacity-70">
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-emerald-300"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-emerald-300"></div>
              </div>

              <p className="text-lg text-slate-500 leading-relaxed">
                Our upcoming campus is designed to provide a world-class educational environment, ensuring our students become the ethical leaders, scientists, and scholars of tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CAMPUS FACILITIES SECTION */}
      <section className="relative bg-white py-24 overflow-hidden border-t border-slate-100">
        
        <div className="absolute top-0 left-0 w-full lg:w-1/2 h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute -left-[30%] -top-[10%] w-[80%] h-[120%] rounded-full border-[80px] border-emerald-50/80"></div>
          <div className="absolute -left-[10%] top-[20%] w-[80%] h-[120%] rounded-full border-[80px] border-emerald-50/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <div className="order-2 lg:order-1">
              <div className="w-12 h-1 bg-red-500 mb-6"></div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-600 mb-2">Come and See</h3>
              <h2 className="text-5xl lg:text-6xl font-extrabold text-emerald-950 leading-none mb-6 tracking-tight">
                OUR CAMPUS<br />FACILITIES
              </h2>
              <h4 className="text-xl font-bold text-emerald-900 mb-4">A World-Class Learning Environment</h4>
              <p className="text-slate-600 leading-relaxed mb-8">
                Purpose-built with learning and play in mind, in stunning natural surroundings, there's plenty to inspire our students, both inside and outside the classroom. We're also so fortunate to have access to over 5.5 acres of land that offer extensive facilities.
              </p>
              <Link href="/campus" className="inline-block bg-emerald-950 text-white px-8 py-3.5 rounded-full font-bold text-sm hover:bg-emerald-800 transition shadow-lg">
                LEARN MORE
              </Link>
            </div>

            <div className="order-1 lg:order-2 relative mt-8 lg:mt-0 pr-6 pb-6">
              <div className="absolute top-6 left-6 w-full h-full bg-emerald-600 z-0 rounded-sm"></div>
              
              <div className="relative z-10 w-full aspect-[4/3] shadow-2xl overflow-hidden rounded-sm bg-slate-200">
                <img 
                  src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1600&auto=format&fit=crop" 
                  alt="Al-Hikmah Campus Facilities"
                  className="w-full h-full object-cover"
                />
                
                <div className="absolute bottom-6 left-6">
                  <Link href="/book-tour" className="inline-flex items-center gap-2 bg-amber-400 text-emerald-950 px-6 py-3.5 rounded-full font-bold text-sm hover:bg-amber-300 transition shadow-lg group">
                    BOOK A TOUR
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- NEW SECTION: IN NUMBERS --- */}
      <section className="relative bg-[#053e30] py-24 overflow-hidden">
        
        {/* Abstract Orange Graphics on Right */}
        <div className="absolute top-0 right-0 h-full w-48 md:w-80 pointer-events-none translate-x-1/4">
          <svg className="w-full h-full text-orange-500 opacity-90" viewBox="0 0 100 400" preserveAspectRatio="none" fill="currentColor">
            <path d="M100 0 C 30 100, 80 200, 30 300 C 10 350, 100 400, 100 400 Z" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-20">
            {/* Small abstract top icon */}
            <div className="flex justify-center mb-4">
              <svg className="w-8 h-8 text-amber-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15 8H9L12 2Z" />
                <path d="M22 12L16 9V15L22 12Z" />
                <path d="M12 22L9 16H15L12 22Z" />
                <path d="M2 12L8 15V9L2 12Z" />
              </svg>
            </div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-emerald-100 mb-2">More About Us</h3>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight uppercase">
              Al-Hikmah In Numbers
            </h2>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            
            {/* Stat 1 */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-black/20 flex items-center justify-center mb-8 border border-white/5">
                <svg className="w-10 h-10 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14v7" />
                </svg>
              </div>
              <div className="text-5xl font-extrabold text-white mb-4">3</div>
              <p className="text-emerald-100 text-sm md:text-base font-medium mb-6 px-4">
                Integrated Core Curriculums<br/>(English, Hifz, Tarbiyah)
              </p>
              <div className="w-12 h-1 bg-red-500 rounded-full"></div>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-black/20 flex items-center justify-center mb-8 border border-white/5">
                <svg className="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div className="text-5xl font-extrabold text-white mb-4">1:15</div>
              <p className="text-emerald-100 text-sm md:text-base font-medium mb-6 px-4">
                Target Teacher-Student Ratio for personalized care
              </p>
              <div className="w-12 h-1 bg-emerald-500 rounded-full"></div>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-black/20 flex items-center justify-center mb-8 border border-white/5">
                <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
              </div>
              <div className="text-5xl font-extrabold text-white mb-4">5.5</div>
              <p className="text-emerald-100 text-sm md:text-base font-medium mb-6 px-4">
                Acres of lush green, purpose-built campus
              </p>
              <div className="w-12 h-1 bg-yellow-400 rounded-full"></div>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-black/20 flex items-center justify-center mb-8 border border-white/5">
                <svg className="w-10 h-10 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <div className="text-5xl font-extrabold text-white mb-4">100%</div>
              <p className="text-emerald-100 text-sm md:text-base font-medium mb-6 px-4">
                Commitment to an authentic Islamic environment
              </p>
              <div className="w-12 h-1 bg-orange-500 rounded-full"></div>
            </div>

          </div>
        </div>
      </section>

      {/* DYNAMIC SEO BLOG SECTION */}
      <section className="bg-white py-24 px-4 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-800">Project Updates & Articles</h2>
              <p className="mt-2 text-slate-600">Follow our journey to opening day.</p>
            </div>
            <Link href="/blog" className="text-emerald-700 font-semibold hover:underline hidden sm:block">
              View all updates &rarr;
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {latestPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} className="group block bg-slate-50 rounded-2xl overflow-hidden hover:bg-emerald-50 transition border border-slate-200">
                <div className="p-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold mt-2 mb-2 group-hover:text-emerald-800 transition">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-sm">{post.excerpt}</p>
                  <p className="mt-4 text-sm font-medium text-slate-400">
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL SEO FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-16 px-4 border-t-4 border-emerald-700">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div>
            <h4 className="text-white text-2xl font-bold mb-4">Al-Hikmah Academy</h4>
            <p className="text-sm leading-relaxed mb-6">
              Preparing the next generation of Muslim professionals and scholars in Bangladesh.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-emerald-400 transition">Our Vision & Mission</Link></li>
              <li><Link href="/hifz" className="hover:text-emerald-400 transition">Hifz Program Details</Link></li>
              <li><Link href="/careers" className="hover:text-emerald-400 transition">Career Opportunities</Link></li>
              <li><Link href="/contact" className="hover:text-emerald-400 transition">Contact & Location</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Upcoming Campus</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <span className="mr-2">📍</span> 
                <span>Sector 10, Uttara Model Town<br/>Dhaka 1230, Bangladesh</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">📞</span> 
                <span>+880 1712-345678 (Admissions)</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✉️</span> 
                <span>admissions@alhikmah.edu.bd</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-slate-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Al-Hikmah Academy Bangladesh. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}