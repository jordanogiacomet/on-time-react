import React, { useEffect, useReducer } from 'react';
import { settingsReducer } from './settingsReducer';
import { initialSettingsState } from './initialSettingsState';
import {
  AvailableThemes,
  SettingsModel,
} from '../../models/Settings/SettingsModel';
import { SettingsContext } from './SettingsContext';

type SettingsContextProviderProps = {
  children: React.ReactNode;
};

export function SettingsContextProvider({
  children,
}: SettingsContextProviderProps) {
  const [state, dispatch] = useReducer(
    settingsReducer,
    initialSettingsState,
    () => {
      const storage = localStorage.getItem('appSettings');
      if (!storage) return initialSettingsState;
      return JSON.parse(storage) as SettingsModel;
    },
  );

  useEffect(() => {
    localStorage.setItem('appSettings', JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', state.theme);
  }, [state.theme]);

  return (
    <SettingsContext.Provider value={{ state, dispatch }}>
      {children}
    </SettingsContext.Provider>
  );
}
