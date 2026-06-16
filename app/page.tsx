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
      <section className="py-24 bg-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">Balancing Deen and Duniya</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            At Al-Hikmah Academy, we understand the aspirations of modern Bangladeshi parents. You want your child to excel globally in science, technology, and literature, while remaining deeply rooted in Islamic morals and Sunnah.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            Our upcoming campus is designed to provide a world-class educational environment, ensuring our students become the ethical leaders, scientists, and scholars of tomorrow.
          </p>
        </div>
      </section>

      {/* --- NEW SECTION: CAMPUS FACILITIES --- */}
      <section className="relative bg-white py-24 overflow-hidden border-t border-slate-100">
        
        {/* Abstract Light Green Background Shapes */}
        <div className="absolute top-0 left-0 w-full lg:w-1/2 h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute -left-[30%] -top-[10%] w-[80%] h-[120%] rounded-full border-[80px] border-emerald-50/80"></div>
          <div className="absolute -left-[10%] top-[20%] w-[80%] h-[120%] rounded-full border-[80px] border-emerald-50/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left Content Column */}
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

            {/* Right Image Column */}
            <div className="order-1 lg:order-2 relative mt-8 lg:mt-0 pr-6 pb-6">
              {/* The Offset Green Block */}
              <div className="absolute top-6 left-6 w-full h-full bg-emerald-600 z-0 rounded-sm"></div>
              
              {/* The Main Image Container */}
              <div className="relative z-10 w-full aspect-[4/3] shadow-2xl overflow-hidden rounded-sm bg-slate-200">
                {/* Placeholder Image using Unsplash */}
                <img 
                  src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1600&auto=format&fit=crop" 
                  alt="Al-Hikmah Campus Facilities"
                  className="w-full h-full object-cover"
                />
                
                {/* Floating 'Book a Tour' Button */}
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
      {/* --- END NEW SECTION --- */}

      {/* WHY CHOOSE US (USPs) */}
      <section className="py-24 bg-slate-50 px-4 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800">Why Choose Al-Hikmah?</h2>
            <p className="mt-4 text-slate-600">Built for the future, grounded in tradition.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-lg flex items-center justify-center mb-6 text-xl font-bold">01</div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">English Version Curriculum</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Following the National Curriculum (English Version) using smart boards, modern labs, and interactive teaching methods.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-lg flex items-center justify-center mb-6 text-xl font-bold">02</div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">Integrated Hifz Program</h3>
              <p className="text-slate-600 text-sm leading-relaxed">A specialized track allowing students to complete Hifz-ul-Quran without falling behind in their general academic studies.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-lg flex items-center justify-center mb-6 text-xl font-bold">03</div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">Tarbiyah & Akhlaq</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Beyond textbooks, we focus on character building, daily congregational prayers, and practical Islamic manners (Adab).</p>
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