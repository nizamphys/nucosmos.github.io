// app/page.tsx (Server Component)
import Hero from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";

export default function PersonalWebsite() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Mohammad Nizam</h1>
          <nav className="space-x-6 text-sm">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="#publications" className="hover:text-blue-600">Publications</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section id="about" className="max-w-5xl mx-auto px-4 py-16">
        <h3 className="text-2xl font-semibold mb-6">About Me</h3>
        <p className="leading-relaxed text-gray-700">
          I am a particle physicist specializing in neutrino physics, detector development, and data acquisition systems. My research focuses on neutrino oscillations, simulation of high‑energy physics experiments, and the development of advanced detector technologies including MRPC and semiconductor sensors. I am particularly interested in bridging theoretical models with practical detector design and real‑time data processing architectures.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h3 className="text-2xl font-semibold mb-8">Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((project) => (
              <Card key={project} className="rounded-2xl shadow-md">
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold mb-2">Neutrino Oscillation Simulation Framework</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Developed a simulation framework to study neutrino oscillation probabilities in vacuum and matter, including CP violation effects and detector response modeling. The project integrates numerical solvers, statistical analysis, and visualization tools for parameter sensitivity studies.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="max-w-5xl mx-auto px-4 py-16">
        <h3 className="text-2xl font-semibold mb-6">Publications</h3>
        <ul className="space-y-4 text-gray-700">
          <li>
            <strong>Study of Matter Effects in Long‑Baseline Neutrino Oscillations</strong> — Journal Name, Year
          </li>
          <li>
            <strong>Simulation and Optimization of Time Resolution in MRPC Detectors</strong> — Journal Name, Year
          </li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-semibold mb-6">Contact</h3>
          <p className="mb-6">Feel free to reach out for collaboration or academic inquiries.</p>
          <div className="flex justify-center gap-6">
            <a href="mailto:mohammad.nizam@example.com" className="hover:text-blue-600">Email</a>
            <a href="#" className="hover:text-blue-600">GitHub</a>
            <a href="#" className="hover:text-blue-600">CV</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Mohammad Nizam. All rights reserved.
      </footer>
    </div>
  );
}