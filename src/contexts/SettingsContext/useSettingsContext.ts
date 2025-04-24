import { useContext } from 'react';
import { SettingsContext } from './SettingsContext';

export function useSettingsContext() {
  return useContext(SettingsContext);
}
