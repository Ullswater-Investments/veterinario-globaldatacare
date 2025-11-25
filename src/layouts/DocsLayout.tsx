import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FileCode, Layers, GitBranch, Rocket, Handshake, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DocsLayoutProps {
  children: ReactNode;
}

const navigation = [
  { name: 'Executive Summary', href: '#summary', icon: FileCode },
  { name: 'Tech Stack & Architecture', href: '#tech-stack', icon: Layers },
  { name: 'Project Management', href: '#methodology', icon: GitBranch },
  { name: 'Innovation Roadmap', href: '#roadmap', icon: Rocket },
  { name: 'Engagement Models', href: '#engagement', icon: Handshake },
];

export function DocsLayout({ children }: DocsLayoutProps) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2 text-slate-900 hover:text-blue-600 transition-colors">
            <Home className="h-5 w-5" />
            <span className="font-semibold">Back to OralSpace-X</span>
          </Link>
          <div className="text-sm text-slate-600">Technical Whitepaper v1.0</div>
        </div>
      </header>

      <div className="container mx-auto flex gap-8 px-4 py-8">
        {/* Sidebar */}
        <aside className="hidden lg:block w-64 shrink-0">
          <nav className="sticky top-24 space-y-1">
            <div className="mb-4">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                Contents
              </h2>
            </div>
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
                    "hover:bg-slate-100 hover:text-blue-600",
                    "text-slate-700"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.name}
                </a>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 max-w-4xl">
          <article className="prose prose-slate max-w-none">
            {children}
          </article>
        </main>

        {/* Right Sidebar - Table of Contents (optional for now) */}
        <aside className="hidden xl:block w-56 shrink-0">
          <div className="sticky top-24">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4">
              Quick Links
            </div>
            <div className="space-y-2 text-sm">
              <a href="#contact" className="block text-slate-600 hover:text-blue-600 transition-colors">
                Schedule Review
              </a>
              <a href="#nda" className="block text-slate-600 hover:text-blue-600 transition-colors">
                Request Repository Access
              </a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
