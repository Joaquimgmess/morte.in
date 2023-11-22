import React from 'react';

const ShowCard = ({ date, event, venue, isPastEvent, showButton }) => {
  const formatDate = (dateString) => {
    const [day, month, year] = dateString.split('/');
    return `${day} ${getMonthName(month)}`;
  };

  const getMonthName = (month) => {
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    return months[parseInt(month, 10) - 1];
  };

  return (
    <div className="bg-black bg-opacity-75 text-white rounded-lg shadow-lg p-6 mb-4">
      <h2 className="text-xl font-semibold mb-2">{formatDate(date)}</h2>
      <p className="text-gray-400 mb-2">{event}</p>
      <p className="text-gray-400 mb-4">{`Local: ${venue}`}</p>
      {isPastEvent ? (
        <p className="text-gray-400">Este show já foi realizado</p>
      ) : (
        showButton && <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Contato no WhatsApp</button>
      )}
    </div>
  );
};

export default ShowCard;
