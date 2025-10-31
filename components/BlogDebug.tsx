"use client";

import React, { useState, useEffect } from 'react';

const BlogDebug: React.FC = () => {
  const [apiResponse, setApiResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const testAPI = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Test the new Hashnode API structure
      const query = `
        query Publication {
          publication(host: "smartnav.hashnode.dev") {
            posts(first: 3) {
              edges {
                node {
                  id
                  title
                  brief
                  slug
                  coverImage {
                    url
                  }
                  publishedAt
                  tags {
                    name
                  }
                }
              }
            }
          }
        }
      `;

      const response = await fetch('https://gql.hashnode.com/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setApiResponse(data);
      console.log('API Response:', data);
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      console.error('API Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Blog API Debug</h3>
      
      <button 
        onClick={testAPI}
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
      >
        {loading ? 'Testing...' : 'Test Hashnode API'}
      </button>

      {error && (
        <div className="mt-4 p-3 bg-red-100 text-red-700 rounded">
          Error: {error}
        </div>
      )}

      {apiResponse && (
        <div className="mt-4">
          <h4 className="font-semibold mb-2">API Response:</h4>
          <pre className="bg-white p-3 rounded text-xs overflow-auto max-h-96">
            {JSON.stringify(apiResponse, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default BlogDebug;
