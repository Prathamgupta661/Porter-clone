import React, { useState, useEffect } from 'react';

export default function AddressSearch() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const handler = setTimeout(() => {
      if (query.length > 2) {
        // fetch suggestions from a placeholder API or static list
        setSuggestions(['Koramangala', 'Indiranagar', 'MG Road'].filter(addr => addr.toLowerCase().includes(query.toLowerCase())));
        localStorage.setItem('lastSearch', query);
      }
    }, 300);
    return () => clearTimeout(handler);
  }, [query]);
  return (
    <div>
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Enter pickup or drop address"
        required
      />
      <ul>
        {suggestions.map((s, i) => <li key={i}>{s}</li>)}
      </ul>
    </div>
  );
}