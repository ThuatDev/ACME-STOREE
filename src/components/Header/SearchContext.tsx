// SearchContext.tsx
import React, { createContext, useState, useContext, useEffect } from 'react'

interface SearchContextProps {
  searchKeyword: string
  updateSearchKeyword: (keyword: string) => void
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined)

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [searchKeyword, setSearchKeyword] = useState('')

  const updateSearchKeyword = (keyword: string) => {
    setSearchKeyword(keyword)
  }

  return <SearchContext.Provider value={{ searchKeyword, updateSearchKeyword }}>{children}</SearchContext.Provider>
}

export const useSearch = (): SearchContextProps => {
  const context = useContext(SearchContext)
  console.log('context>>', context)
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider')
  }
  return context
}
