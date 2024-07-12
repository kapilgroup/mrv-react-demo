// App.jsx (or any other parent component)

import React from 'react';
import ArticleList from './ArticleList';

const App = () => {
  
  const articles = [
    {
      id: 1,
      title: 'maybeline lipsticks',
      date: '2023-01-01',
      
    },
    {
      id: 2,
      title: 'eyeliner',
      date: '2023-02-15',
      
    },
    {id: 3,
      title: 'perfumes',
      date: '2023-03-17',
    },
    {id: 4,
      title: 'mascara',
      date: '2023-03-20',
    },
    {id: 5,
      title: 'sunscreen',
      date: '2023-03-25',
    },
    
  ];

  return (
    <div className="app">
      <h1>Article</h1>
      <ArticleList articles={articles} />
    </div>
  );
};

export default App;

