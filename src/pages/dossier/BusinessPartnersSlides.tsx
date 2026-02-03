import { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { partnerProfiles } from '@/data/dossier/partnerProfiles';
import { cn } from '@/lib/utils';
import {
  ChevronLeft,
  ChevronRight,
  Home,
  FileText,
  Shield,
  Database,
  Lock,
  Globe,
  CheckCircle2,
  Target,
  Briefcase,
  Users,
  ArrowRight,
  Zap,
  BarChart3,
  Network,
  FileCheck,
  Calendar,
  Phone,
  Mail
} from 'lucide-react';

import servidoresAislados from '@/assets/servidores-aislados.png';
import redFederadaActiva from '@/assets/red-federada-activa.png';

interface Slide {
  id: string;
  title: string;
  content: React.ReactNode;
}

export default function BusinessPartnersSlides() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    // Slide 1: Cover
    {
      id: 'cover',
      title: 'Portada',
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center px-8">
          <Badge variant="outline" className="mb-8 text-sm px-4 py-1">
            Documento Confidencial — Q1 2025
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight mb-6">
            Dossier de<br />
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              Business Partners
            </span>
          </h1>
          
          <p className="text-2xl text-muted-foreground mb-12">
            Espacio de Datos Federados de Salud Animal
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-emerald-100 text-emerald-800 px-4 py-2">
              <Shield className="h-4 w-4 mr-2" />
              Soberanía
            </Badge>
            <Badge className="bg-blue-100 text-blue-800 px-4 py-2">
              <Database className="h-4 w-4 mr-2" />
              Federación
            </Badge>
            <Badge className="bg-purple-100 text-purple-800 px-4 py-2">
              <Lock className="h-4 w-4 mr-2" />
              Privacy
            </Badge>
            <Badge className="bg-amber-100 text-amber-800 px-4 py-2">
              <Globe className="h-4 w-4 mr-2" />
              GAIA-X
            </Badge>
          </div>
        </div>
      )
    },

    // Slide 2: Executive Summary
    {
      id: 'executive',
      title: 'Resumen Ejecutivo',
      content: (
        <div className="h-full px-8 py-12">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Resumen Ejecutivo</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-l-4 border-l-emerald-500">
              <CardContent className="p-6">
                <Target className="h-10 w-10 text-emerald-600 mb-4" />
                <h3 className="font-bold text-xl mb-2">Visión</h3>
                <p className="text-muted-foreground">
                  Primer espacio de datos federado de salud animal en Europa
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <Briefcase className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="font-bold text-xl mb-2">Oportunidad</h3>
                <p className="text-muted-foreground">
                  €4.5B mercado fragmentado + financiación Kit Espacio Datos
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500">
              <CardContent className="p-6">
                <Users className="h-10 w-10 text-purple-600 mb-4" />
                <h3 className="font-bold text-xl mb-2">Propuesta</h3>
                <p className="text-muted-foreground">
                  8 perfiles de Business Partners estratégicos
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-4 gap-6 text-center bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-8">
            <div>
              <p className="text-4xl font-bold text-emerald-700">6,200+</p>
              <p className="text-sm text-muted-foreground">Clínicas</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-emerald-700">€4.5B</p>
              <p className="text-sm text-muted-foreground">Mercado</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-emerald-700">12%</p>
              <p className="text-sm text-muted-foreground">CAGR</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-emerald-700">29M</p>
              <p className="text-sm text-muted-foreground">Mascotas</p>
            </div>
          </div>
        </div>
      )
    },

    // Slide 3: Problem
    {
      id: 'problem',
      title: 'El Problema',
      content: (
        <div className="h-full px-8 py-12">
          <h2 className="text-4xl font-bold text-foreground mb-8 text-center">
            El Problema: Datos Fragmentados
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-xl text-muted-foreground">
                El sector veterinario opera en <strong>silos desconectados</strong>
              </p>

              <ul className="space-y-4">
                {[
                  'Software legacy sin interoperabilidad',
                  'Resultados por email o PDF',
                  'Sin trazabilidad de medicamentos',
                  'Investigación sin datos',
                  'Tutores sin acceso'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg">
                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                      <span className="text-red-600 font-bold">✕</span>
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <img 
                src={servidoresAislados} 
                alt="Servidores aislados"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg">
                <p className="font-bold">Fragmentación Actual</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 4: Solution
    {
      id: 'solution',
      title: 'La Solución',
      content: (
        <div className="h-full px-8 py-12">
          <h2 className="text-4xl font-bold text-foreground mb-8 text-center">
            La Solución: Arquitectura Federada
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <img 
                src={redFederadaActiva} 
                alt="Red federada"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -left-4 bg-emerald-500 text-white px-6 py-3 rounded-lg shadow-lg">
                <p className="font-bold">Nuevo Modelo</p>
              </div>
            </div>

            <div className="space-y-6 order-1 md:order-2">
              <p className="text-xl text-muted-foreground">
                <strong>Datos en origen</strong> + colaboración inteligente
              </p>

              <ul className="space-y-4">
                {[
                  'Soberanía de datos garantizada',
                  'Interoperabilidad FHIR',
                  'Consentimiento granular',
                  'Federated Learning',
                  'Trazabilidad DPP'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg">
                    <CheckCircle2 className="h-8 w-8 text-emerald-500" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-4">
                <Badge variant="outline" className="text-sm">GAIA-X</Badge>
                <Badge variant="outline" className="text-sm">FHIR R4</Badge>
                <Badge variant="outline" className="text-sm">GDPR</Badge>
                <Badge variant="outline" className="text-sm">W3C DID</Badge>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 5: Partners Overview
    {
      id: 'partners',
      title: 'Business Partners',
      content: (
        <div className="h-full px-8 py-12">
          <h2 className="text-4xl font-bold text-foreground mb-8 text-center">
            8 Perfiles de Business Partners
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partnerProfiles.map((partner) => {
              const Icon = partner.icon;
              return (
                <Card key={partner.id} className="overflow-hidden hover:shadow-lg transition-all">
                  <div className={cn("h-2 bg-gradient-to-r", partner.gradient)} />
                  <CardContent className="p-6 text-center">
                    <div className={cn(
                      "w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4",
                      "bg-gradient-to-br", partner.bgGradient
                    )}>
                      <Icon className="h-8 w-8 text-slate-700" />
                    </div>
                    <h3 className="font-semibold text-foreground">{partner.shortName}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{partner.role.split(' ')[0]}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      )
    },

    // Slide 6: Business Models
    {
      id: 'business',
      title: 'Modelos de Negocio',
      content: (
        <div className="h-full px-8 py-12">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
            Modelos de Negocio
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Zap, title: 'SaaS', revenue: '€49-299/mes' },
              { icon: BarChart3, title: 'Data Licensing', revenue: 'Revenue share 30%' },
              { icon: Network, title: 'Transaction Fees', revenue: '2-5% por tx' },
              { icon: FileCheck, title: 'Compliance', revenue: 'Por proyecto' },
            ].map((model, i) => (
              <Card key={i} className="text-center">
                <CardContent className="p-8">
                  <model.icon className="h-12 w-12 mx-auto mb-4 text-emerald-600" />
                  <h3 className="font-bold text-xl mb-2">{model.title}</h3>
                  <Badge variant="outline" className="text-sm">{model.revenue}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-2">Revenue Share</h3>
                <p className="text-slate-300">Partners participan en ingresos del ecosistema</p>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-4xl font-bold">70%</p>
                  <p className="text-sm text-slate-300">Data Provider</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-4xl font-bold">30%</p>
                  <p className="text-sm text-slate-300">Plataforma</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 7: Funding
    {
      id: 'funding',
      title: 'Financiación',
      content: (
        <div className="h-full px-8 py-12 flex items-center">
          <div className="w-full">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
              Kit Espacio de Datos
            </h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-12 border border-blue-200">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <Badge className="bg-blue-600 text-lg px-4 py-2">Next Generation EU</Badge>
                  <h3 className="text-3xl font-bold text-foreground">
                    Subvención hasta €120,000
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'Sin coste para clínicas elegibles',
                      'Formación incluida',
                      'Soporte 12 meses',
                      'Compliance garantizado'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-lg text-muted-foreground">
                        <CheckCircle2 className="h-5 w-5 text-blue-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-center p-12 bg-white rounded-xl shadow-xl">
                  <p className="text-7xl font-bold text-blue-600">€0</p>
                  <p className="text-xl text-muted-foreground mt-4">Coste implementación</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 8: Roadmap
    {
      id: 'roadmap',
      title: 'Roadmap',
      content: (
        <div className="h-full px-8 py-12">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
            Roadmap 2025-2027
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { phase: 'F1', period: 'H1 2026', title: 'MVP', items: ['50 clínicas', '5 labs', 'Core platform'], active: true },
              { phase: 'F2', period: 'H2 2025', title: 'Expansion', items: ['500 clínicas', 'Pharma', 'Research'] },
              { phase: 'F3', period: '2026', title: 'Consolidación', items: ['2K clínicas', 'Insurance', 'IoT'] },
              { phase: 'F4', period: '2027+', title: 'EU', items: ['PT & FR', 'EU Spaces', 'Series B'] },
            ].map((phase, i) => (
              <Card key={i} className={cn(phase.active && "border-emerald-300 bg-emerald-50/50")}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center text-white font-bold",
                      phase.active ? "bg-emerald-500" : "bg-slate-300"
                    )}>
                      {phase.phase}
                    </div>
                    <div>
                      <p className="font-bold">{phase.title}</p>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {phase.period}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {phase.items.map((item, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex items-center gap-2">
                        <ArrowRight className="h-3 w-3" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )
    },

    // Slide 9: CTA
    {
      id: 'cta',
      title: 'Siguiente Paso',
      content: (
        <div className="h-full flex items-center justify-center px-8">
          <div className="text-center max-w-3xl">
            <h2 className="text-5xl font-bold text-foreground mb-6">
              ¿Listo para ser<br />
              <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                Business Partner?
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-12">
              Únete al primer espacio de datos federado de salud animal en Europa
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-6">
                <Phone className="mr-2 h-5 w-5" />
                Agendar Llamada
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                <Mail className="mr-2 h-5 w-5" />
                Enviar Propuesta
              </Button>
            </div>

            <div className="text-muted-foreground">
              <p>partners@oralspace-x.com | +34 900 123 456</p>
            </div>
          </div>
        </div>
      )
    }
  ];

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index);
    }
  }, [slides.length]);

  const nextSlide = useCallback(() => {
    goToSlide(currentSlide + 1);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentSlide - 1);
  }, [currentSlide, goToSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="icon">
                <Home className="h-5 w-5" />
              </Button>
            </Link>
            <span className="font-semibold text-foreground">
              Dossier Business Partners
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              {currentSlide + 1} / {slides.length}
            </span>
            <Link to="/dossier">
              <Button variant="outline" size="sm">
                <FileText className="h-4 w-4 mr-1" />
                Ver Portal
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Slide Content */}
      <main className="flex-1 pt-14 pb-20">
        <div className="h-[calc(100vh-8rem)] overflow-hidden">
          {slides[currentSlide].content}
        </div>
      </main>

      {/* Navigation Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur border-t border-slate-200 py-4 px-4">
        <div className="flex items-center justify-between max-w-5xl mx-auto">
          <Button
            variant="outline"
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="gap-2"
          >
            <ChevronLeft className="h-4 w-4" />
            Anterior
          </Button>

          {/* Slide indicators */}
          <div className="flex gap-2">
            {slides.map((slide, i) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(i)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all",
                  i === currentSlide 
                    ? "bg-emerald-500 w-8" 
                    : "bg-slate-300 hover:bg-slate-400"
                )}
                title={slide.title}
              />
            ))}
          </div>

          <Button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="gap-2 bg-emerald-600 hover:bg-emerald-700"
          >
            Siguiente
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </footer>
    </div>
  );
}
