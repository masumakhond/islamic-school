import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts";
import type { Metadata } from "next";

// 1. NEXT.JS SEO METADATA (Crucial for Google Ranking)
export const metadata: Metadata = {
  title: "Al-Hikmah International School | Modern Islamic Education in Bangladesh",
  description: "An upcoming modern Islamic school in Bangladesh offering English medium education, Hifz, and Tarbiyah. Pre-register for the 2026-2027 academic year.",
  keywords: ["Islamic school Bangladesh", "English medium madrasah", "Hifz school Dhaka", "Modern Islamic education"],
};

export default async function HomePage() {
  // Fetch latest 2 news/blog posts for the SEO content section
  const latestPosts = getSortedPostsData().slice(0, 2);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans leading-relaxed">
      
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

      {/* HERO SECTION (Lead Generation Focus) */}
      <section className="relative bg-slate-900 text-white py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/90 to-slate-900/90"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-amber-500/20 text-amber-400 font-bold text-sm tracking-widest uppercase mb-6 border border-amber-500/30">
            Opening Insha'Allah 2026
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight mb-6">
            Redefining <span className="text-amber-400">Islamic Education</span><br /> in Bangladesh
          </h1>
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-300 mb-10">
            A state-of-the-art campus blending the National English Version curriculum with rigorous Quranic Hifz and authentic Tarbiyah.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/pre-register" className="bg-amber-500 text-slate-900 px-8 py-3.5 rounded-full font-bold text-lg hover:bg-amber-400 transition shadow-lg">
              Admissions Query
            </Link>
            <Link href="/curriculum" className="bg-transparent border-2 border-slate-500 text-white px-8 py-3.5 rounded-full font-bold text-lg hover:border-emerald-400 hover:text-emerald-400 transition">
              Explore Curriculum
            </Link>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY & SEO TEXT */}
      <section className="py-20 bg-white px-4">
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

      {/* WHY CHOOSE US (USPs) */}
      <section className="py-20 bg-slate-50 px-4 border-t border-slate-100">
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
      <section className="bg-white py-20 px-4 border-t border-slate-100">
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
            <div className="flex space-x-4">
              {/* Social Placeholders */}
              <div className="w-8 h-8 rounded-full bg-slate-800 hover:bg-emerald-600 transition cursor-pointer"></div>
              <div className="w-8 h-8 rounded-full bg-slate-800 hover:bg-emerald-600 transition cursor-pointer"></div>
            </div>
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
        <div className="max-w-7xl mx-auto border-t border-slate-800 mt-12 pt-8 text-sm text-center flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Al-Hikmah Academy Bangladesh. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}