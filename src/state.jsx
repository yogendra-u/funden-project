import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
export const AppStateContext = createContext({});

function getInitialState() {
  return {};
}

export function AppProvider({ children }) {
  const value = useState(getInitialState);

  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.object,
};

export function useAppState() {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error('useAppState must be used within the AppProvider');
  }
  return context;
}
