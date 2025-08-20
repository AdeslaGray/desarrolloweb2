import React from 'react';

interface ListaTemasProps {
  soloInteresantes?: boolean;
}

const ListaTemas: React.FC<ListaTemasProps> = ({ soloInteresantes }) => {
  // Placeholder content
  return (
    <div>
      <p>
        {soloInteresantes
          ? 'Mostrando solo temas interesantes.'
          : 'Mostrando todos los temas.'}
      </p>
      {/* Aquí iría la lógica para mostrar la lista de temas */}
    </div>
  );
};

export default ListaTemas;