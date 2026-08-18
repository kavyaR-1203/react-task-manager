import React from 'react';

function SummaryCards({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter((t) => t.status === 'Completed').length;
  const pending = tasks.filter((t) => t.status === 'Pending').length;
  const highPriority = tasks.filter((t) => t.priority === 'High').length;

  const cards = [
    { label: 'Total Tasks', value: total, className: 'card-total' },
    { label: 'Completed Tasks', value: completed, className: 'card-completed' },
    { label: 'Pending Tasks', value: pending, className: 'card-pending' },
    { label: 'High Priority Tasks', value: highPriority, className: 'card-high' },
  ];

  return (
    <div className="summary-cards">
      {cards.map((card) => (
        <div className={`summary-card ${card.className}`} key={card.label}>
          <span className="summary-value">{card.value}</span>
          <span className="summary-label">{card.label}</span>
        </div>
      ))}
    </div>
  );
}

export default SummaryCards;
