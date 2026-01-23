import React, { useState } from 'react';
import {
  Calendar,
  Syringe,
  Shield,
  Heart,
  Dog,
  Cat,
  Phone,
} from 'lucide-react';
import { NavigationControls } from '../components/ui/NavigationControls';
import { GlobalFooter } from '../components/ui/GlobalFooter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PatientWalletPage = () => {
  const [activeTab, setActiveTab] = useState('mascotas');

  const mascotas = [
    { name: 'Luna', species: 'dog', breed: 'Golden Retriever', weight: '28kg', nextVaccine: '15 Nov - Rabia' },
    { name: 'Michi', species: 'cat', breed: 'Siamés', weight: '4.2kg', nextVaccine: '22 Dic - Trivalente' },
  ];

  return (
    <div className="min-h-screen bg-secondary/30 flex flex-col">
      {/* Controles de Navegación */}
      <div className="p-4">
        <NavigationControls />
      </div>

      {/* Header */}
      <div className="bg-primary p-6 rounded-b-3xl text-primary-foreground shadow-lg mx-4">
        <h1 className="text-2xl font-bold">Hola, María García</h1>
        <p className="text-primary-foreground/80">La salud de tus mascotas en tu bolsillo</p>

        {/* Tabs */}
        <div className="flex mt-6 bg-black/20 p-1 rounded-xl">
          {[
            { key: 'mascotas', label: 'Mis Mascotas' },
            { key: 'vacunas', label: 'Vacunas' },
            { key: 'privacidad', label: 'Privacidad' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 py-2 rounded-lg text-sm ${
                activeTab === tab.key ? 'bg-white text-primary' : 'text-primary-foreground'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Contenido */}
      <div className="flex-1 p-6 space-y-4">
        {activeTab === 'mascotas' && (
          <>
            <h2 className="font-bold text-lg flex items-center gap-2 text-foreground">
              <Heart className="w-5 h-5 text-accent" /> Mis Mascotas
            </h2>
            {mascotas.map((mascota, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-3">
                    {mascota.species === 'dog' ? (
                      <Dog className="w-8 h-8 text-primary" />
                    ) : (
                      <Cat className="w-8 h-8 text-accent" />
                    )}
                    <div>
                      <span className="text-lg">{mascota.name}</span>
                      <p className="text-sm font-normal text-muted-foreground">{mascota.breed}</p>
                    </div>
                    <span className="ml-auto text-xl font-bold text-primary">{mascota.weight}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Syringe className="w-4 h-4" />
                    <span>Próxima vacuna: {mascota.nextVaccine}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </>
        )}

        {activeTab === 'vacunas' && (
          <div className="space-y-4">
            <h2 className="font-bold text-lg flex items-center gap-2 text-foreground">
              <Calendar className="w-5 h-5" /> Calendario de Vacunación
            </h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-primary/5 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Dog className="w-6 h-6 text-primary" />
                      <div>
                        <p className="font-medium">Luna - Rabia</p>
                        <p className="text-sm text-muted-foreground">15 Noviembre 2024</p>
                      </div>
                    </div>
                    <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded">Pendiente</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-primary/5 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Cat className="w-6 h-6 text-accent" />
                      <div>
                        <p className="font-medium">Michi - Trivalente</p>
                        <p className="text-sm text-muted-foreground">22 Diciembre 2024</p>
                      </div>
                    </div>
                    <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded">Pendiente</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'privacidad' && (
          <div className="space-y-4">
            <h2 className="font-bold text-lg flex items-center gap-2 text-foreground">
              <Shield className="w-5 h-5" /> Consentimientos y Privacidad
            </h2>
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">Clínica Veterinaria Central</p>
                    <p className="text-sm text-muted-foreground">Acceso a historial completo</p>
                  </div>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Activo</span>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">Hospital Veterinario de Referencia</p>
                    <p className="text-sm text-muted-foreground">Solo emergencias</p>
                  </div>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Activo</span>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">Investigación One Health</p>
                    <p className="text-sm text-muted-foreground">Datos anonimizados</p>
                  </div>
                  <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">Revisar</span>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      <GlobalFooter />
    </div>
  );
};

export default PatientWalletPage;
