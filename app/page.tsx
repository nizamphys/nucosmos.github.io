import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, FileText } from "lucide-react";
import Hero from "@/components/Hero";

export default function PersonalWebsite() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Your Name</h1>
          <nav className="space-x-6 text-sm">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="#publications" className="hover:text-blue-600">Publications</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

       {/* Hero is now isolated in client component */}
      <Hero />

      {/* About Section */}
      <section id="about" className="max-w-5xl mx-auto px-4 py-16">
        <h3 className="text-2xl font-semibold mb-6">About Me</h3>
        <p className="leading-relaxed text-gray-700">
          Write a short biography here. Include your academic background, current
          position, and research interests. This section helps visitors quickly
          understand who you are and what you work on.
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
                  <h4 className="text-lg font-bold mb-2">Project Title</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Short description of the project. Explain what problem you
                    solved and what technologies or physics topics were involved.
                  </p>
                  <Button variant="outline">View Details</Button>
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
            <strong>Paper Title</strong> — Journal Name, Year
          </li>
          <li>
            <strong>Another Paper</strong> — Journal Name, Year
          </li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-semibold mb-6">Contact</h3>
          <p className="mb-6">Feel free to reach out for collaboration or academic inquiries.</p>
          <div className="flex justify-center gap-6">
            <a href="mailto:youremail@example.com" className="flex items-center gap-2 hover:text-blue-600">
              <Mail size={18} /> Email
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-blue-600">
              <Github size={18} /> GitHub
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-blue-600">
              <FileText size={18} /> CV
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </div>
  );
}
