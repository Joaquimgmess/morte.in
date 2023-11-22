import React, { useState } from 'react';
import ShowCard from '../../components/ShowCard';

// ... (importações)

const PreviousShows = () => {
  const [selectedYear, setSelectedYear] = useState('');

  const previousShowsData = [
    { date: '11/02/2018', event: 'CarnaRock', venue: 'Juiz de Fora MG' },
    { date: '12/05/2018', event: 'Tuka’s Fest', venue: 'Juiz de Fora MG' },
    { date: '01/09/2018', event: 'Festival de Bandas Novas', venue: 'Juiz de Fora MG' },
    { date: '18/09/2018', event: 'Wackah', venue: 'Ubá MG' },
    { date: '06/10/2018', event: 'Rock Factory', venue: 'Juiz de Fora MG' },
    { date: '11/10/2018', event: 'La Cucaracha', venue: 'Juiz de Fora MG' },
    { date: '03/03/2019', event: 'Carnarock', venue: 'Juiz de Fora MG' },
    { date: '07/04/2019', event: 'La Cucaracha', venue: 'Juiz de Fora MG' },
    { date: '15/04/2023', event: 'Metal in Bar', venue: 'Juiz de Fora MG' },
    { date: '30/06/2023', event: 'Metal Nightmare', venue: 'Juiz de Fora MG' },
    { date: '12/08/2023', event: 'Festival de Bandas Novas', venue: 'Juiz de Fora MG' },
    { date: '16/09/2023', event: 'Metal in Bar Edição Especial', venue: 'Juiz de Fora MG' },
    { date: '07/10/2023', event: 'Halloween', venue: 'Juiz de Fora MG' },
    { date: '16/12/2023', event: 'La Cucaracha', venue: 'Juiz de Fora MG' },
  ];

  const filteredShows = selectedYear
    ? previousShowsData.filter(show => show.date.endsWith(selectedYear))
    : previousShowsData;

  const uniqueYears = [...new Set(previousShowsData.map(show => show.date.split('/')[2]))];

  const currentDate = new Date();

  // Ordenar os shows por data de forma descendente (do mais recente para o mais antigo)
  const sortedShows = filteredShows.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="container mx-auto py-16">
      <h1 className="text-3xl font-semibold mb-8">Nossa agenda</h1>
      <div className="mb-4">
        <label htmlFor="yearFilter" className="mr-2 text-white">Selecione o ano</label>
        <select
          id="yearFilter"
          onChange={(e) => setSelectedYear(e.target.value)}
          value={selectedYear}
          className="p-2 border border-gray-300 rounded-md bg-black bg-opacity-75 text-white"
        >
          <option value="">Todos</option>
          {uniqueYears.map((year, index) => (
            <option key={index} value={year}>{year}</option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedShows.map((show, index) => {
          const showDate = new Date(show.date);
          const isPastEvent = showDate < currentDate;

          return (
            <ShowCard key={index} {...show} showButton={!isPastEvent} />
          );
        })}
      </div>
    </div>
  );
};

export default PreviousShows;
