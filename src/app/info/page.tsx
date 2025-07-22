'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';

// Dynamic import framer-motion without SSR to avoid export * error
const MotionDiv = dynamic(
  () => import('framer-motion').then(mod => mod.motion.div),
  { ssr: false }
);

export default function InfoPage() {
  const router = useRouter();

  // Contact form state
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/your_form_id', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-zinc-800 to-black text-white px-6 py-12"
    >
      <div className="max-w-4xl mx-auto space-y-10">
        {/* About Me Section */}
        <section>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
            Hi! I'm <span className="text-purple-400 font-semibold">Chinbat</span>, a passionate software developer with experience in web development, UI/UX design, and creative projects. I enjoy building modern, responsive, and user-friendly applications using the latest technologies.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 bg-zinc-900 rounded-xl shadow-lg hover:shadow-purple-500/30 transition-all">
              <h3 className="text-xl font-semibold mb-2 text-purple-300">Skills</h3>
              <ul className="list-disc list-inside text-gray-400">
                <li>React / Next.js / TypeScript</li>
                <li>Tailwind CSS / Figma</li>
                <li>Node.js</li>
                <li>Git / GitHub / Agile</li>
                <li>Functional and Non Functional test</li>
                <li>QA engineer experience</li>
              </ul>
            </div>
            <div className="p-6 bg-zinc-900 rounded-xl shadow-lg hover:shadow-pink-500/30 transition-all">
              <h3 className="text-xl font-semibold mb-2 text-pink-300">Projects</h3>
              <ul className="list-disc list-inside text-gray-400">
                <li>KhanBank KIOSK Digital signature</li>
                <li>KhanBank AML (Anti money laundering)</li>
                <li>E-commerce</li>
                <li>KhanBank Alipay</li>
                <li>Etc...</li>
              </ul>
            </div>
          </div>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 mt-8">
            <span className="text-purple-400 font-bold">Experience</span> <br />
            I'm a passionate and detail-oriented software professional with a background in full-stack development and two years of hands-on experience in Quality Assurance at Khan Bank. During my time there, I gained in-depth knowledge of various testing methodologies, including manual, automated, functional, and non-functional testing.

            I graduated from Indra Institute as a full-stack developer, where I built a solid foundation in both front-end and back-end technologies. I'm always curious about how things work and dedicated to delivering high-quality, reliable software.

            Outside of tech, I’m a highly active and competitive sports enthusiast.

            <br /><br />
            <span className="text-purple-400 font-bold">Free time</span> <br />
            I enjoy basketball, volleyball, eSports, table tennis, and chess. I hold a 2nd-level basketball certification and a black belt in Taekwondo — I believe discipline and teamwork from sports carry over to everything I do.

            I'm constantly learning, growing, and looking for opportunities to contribute to exciting and meaningful projects.
          </p>
        </section>

        {/* Contact Me Section */}
        <section className="bg-gray-900 p-8 rounded-lg shadow-lg">

          <h2 className="text-3xl font-bold mb-6 text-purple-400">Contact Me</h2>
          <div className='flex justify-between'>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-lg w-md">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
              />
              <button
                type="submit"
                disabled={status === 'sending'}
                className="bg-purple-600 hover:bg-purple-700 rounded py-2 font-semibold transition"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
            <MotionDiv
              className=""
              animate={{ rotateY: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              style={{ perspective: 800 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                width={280}
                height={280}
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#7c3aed" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
                <path d="M50 10 L90 50 L50 90 L10 50 Z" />
                <circle cx="50" cy="50" r="30" />
              </svg>
            </MotionDiv>
          </div>



          {status === 'success' && (
            <p className="mt-4 text-green-400">Message sent successfully!</p>
          )}
          {status === 'error' && (
            <p className="mt-4 text-red-500">Oops! Something went wrong.</p>
          )}
        </section>

      </div>
    </MotionDiv>
  );
}