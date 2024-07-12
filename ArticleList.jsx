

import React, { useState } from 'react';
import SortOptions from './SortOptions'; 

const ArticleList = ({ articles }) => {
  const [sortedBy, setSortedBy] = useState('title'); 

  const handleSortChange = (criteria) => {
    setSortedBy(criteria);
  };

  
  const sortArticles = (criteria) => {
    return [...articles].sort((a, b) => {
      if (criteria === 'title') {
        return a.title.localeCompare(b.title);
      } else if (criteria === 'date') {
        return new Date(b.date) - new Date(a.date);
      }
      return 0;
    });
  };

  const sortedArticles = sortArticles(sortedBy);

  return (
    <div className="article">
      <SortOptions onSort={handleSortChange} />
      <ul>
        {sortedArticles.map((article) => (
          <li key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.date}</p>
            <p>{article.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;
