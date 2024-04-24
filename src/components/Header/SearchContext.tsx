import React, { createContext, useState, useContext } from 'react'

interface SearchContextProps {
  searchKeyword: string
  updateSearchKeyword: (keyword: string) => void
  clearSearchKeyword: () => void // Thêm clearSearchKeyword vào interface
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined)

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [searchKeyword, setSearchKeyword] = useState('')
  console.log('searchKeyword', searchKeyword)
  const updateSearchKeyword = (keyword: string) => {
    setSearchKeyword(keyword)
  }

  const clearSearchKeyword = () => {
    setSearchKeyword('')
  }

  return (
    <SearchContext.Provider value={{ searchKeyword, updateSearchKeyword, clearSearchKeyword }}>
      {children}
    </SearchContext.Provider>
  )
}

export const useSearch = (): SearchContextProps => {
  const context = useContext(SearchContext)
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider')
  }
  return context
}
