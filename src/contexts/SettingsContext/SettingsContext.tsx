import React, { createContext } from 'react';
import { SettingsModel } from '../../models/Settings/SettingsModel';
import { SettingsActionModel } from './settingsActions';
import { initialSettingsState } from './initialSettingsState';

type SettingsContextProps = {
  state: SettingsModel;
  dispatch: React.Dispatch<SettingsActionModel>;
};

const initialContextValue = {
  state: initialSettingsState,
  dispatch: () => {},
};

export const SettingsContext =
  createContext<SettingsContextProps>(initialContextValue);
