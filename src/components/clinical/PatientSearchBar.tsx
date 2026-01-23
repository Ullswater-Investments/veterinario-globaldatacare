import { useState } from 'react';
import { Search, Dog, User, Cpu } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

interface PatientSearchBarProps {
  onSearch: (query: string, searchType: 'name' | 'microchip' | 'guardian') => void;
  loading?: boolean;
}

export function PatientSearchBar({ onSearch, loading }: PatientSearchBarProps) {
  const [query, setQuery] = useState('');
  const [searchType, setSearchType] = useState<'name' | 'microchip' | 'guardian'>('name');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query, searchType);
  };

  const placeholders = {
    name: 'Buscar mascota por nombre...',
    microchip: 'Buscar por número de microchip...',
    guardian: 'Buscar por nombre del tutor...',
  };

  const icons = {
    name: Dog,
    microchip: Cpu,
    guardian: User,
  };

  const SearchIcon = icons[searchType];

  return (
    <form onSubmit={handleSearch} className="space-y-3">
      {/* Tipo de búsqueda */}
      <ToggleGroup 
        type="single" 
        value={searchType} 
        onValueChange={(value) => value && setSearchType(value as typeof searchType)}
        className="justify-start"
      >
        <ToggleGroupItem value="name" aria-label="Buscar por nombre" className="gap-2">
          <Dog className="h-4 w-4" />
          <span className="hidden sm:inline">Mascota</span>
        </ToggleGroupItem>
        <ToggleGroupItem value="microchip" aria-label="Buscar por microchip" className="gap-2">
          <Cpu className="h-4 w-4" />
          <span className="hidden sm:inline">Microchip</span>
        </ToggleGroupItem>
        <ToggleGroupItem value="guardian" aria-label="Buscar por tutor" className="gap-2">
          <User className="h-4 w-4" />
          <span className="hidden sm:inline">Tutor</span>
        </ToggleGroupItem>
      </ToggleGroup>

      {/* Campo de búsqueda */}
      <div className="flex gap-2">
        <div className="relative flex-1">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder={placeholders[searchType]}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button type="submit" disabled={loading}>
          {loading ? 'Buscando...' : 'Buscar'}
        </Button>
      </div>
    </form>
  );
}
