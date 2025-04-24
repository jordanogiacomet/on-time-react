import React, { useEffect, useReducer } from 'react';
import { settingsReducer } from './settingsReducer';
import { initialSettingsState } from './initialSettingsState';
import { SettingsModel } from '../../models/Settings/SettingsModel';
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
      const storageState = localStorage.getItem('appSettings');
      if (!storageState) return initialSettingsState;

      const parsedStorageState = JSON.parse(storageState) as SettingsModel;

      return {
        ...parsedStorageState,
      };
    },
  );

  useEffect(() => {
    localStorage.setItem('appSettings', JSON.stringify(state));
  }, [state]);

  return (
    <SettingsContext.Provider value={{ state, dispatch }}>
      {children}
    </SettingsContext.Provider>
  );
}
