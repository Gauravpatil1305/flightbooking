import React from "react";

interface SearchHistoryProps {
  storedSearchHistory: string[];
  handleHistoryClick: (query: string) => void;
  formatSearchQuery: (query: string) => JSX.Element;
}

const SearchHistory: React.FC<SearchHistoryProps> = ({
  storedSearchHistory,
  handleHistoryClick,
  formatSearchQuery,
}) => {
  return (
    <div className="search-history">
      <span className="search-history-title">Recently Searched</span>
      <ul className="search-history-list">
        {storedSearchHistory.map((query, index) => (
          <li className="search-history-item" key={index} onClick={() => handleHistoryClick(query)}>
            {formatSearchQuery(query)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchHistory;
