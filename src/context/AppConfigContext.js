import React, { createContext, useContext, useReducer } from 'react';

const AppConfigContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  theme: 'light',
  sidebarCollapsed: false,
};

const appConfigReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: !!action.payload,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      };
    case 'SET_THEME':
      return {
        ...state,
        theme: action.payload,
      };
    case 'TOGGLE_SIDEBAR':
      return {
        ...state,
        sidebarCollapsed: !state.sidebarCollapsed,
      };
    case 'LOGOUT':
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export const AppConfigProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appConfigReducer, initialState);

  const setUser = (user) => {
    dispatch({ type: 'SET_USER', payload: user });
  };

  const setLoading = (loading) => {
    dispatch({ type: 'SET_LOADING', payload: loading });
  };

  const setTheme = (theme) => {
    dispatch({ type: 'SET_THEME', payload: theme });
  };

  const toggleSidebar = () => {
    dispatch({ type: 'TOGGLE_SIDEBAR' });
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  const value = {
    ...state,
    setUser,
    setLoading,
    setTheme,
    toggleSidebar,
    logout,
  };

  return (
    <AppConfigContext.Provider value={value}>
      {children}
    </AppConfigContext.Provider>
  );
};

export const useAppConfig = () => {
  const context = useContext(AppConfigContext);
  if (!context) {
    throw new Error('useAppConfig must be used within an AppConfigProvider');
  }
  return context;
};