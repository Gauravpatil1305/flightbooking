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
    <div>
      <h2>Search History</h2>
      <ul>
        {storedSearchHistory.map((query, index) => (
          <li key={index} onClick={() => handleHistoryClick(query)}>
            {formatSearchQuery(query)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchHistory;
