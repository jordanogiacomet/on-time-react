import { SettingsModel } from '../../models/Settings/SettingsModel';
import { SettingsActionModel, SettingsActionTypes } from './settingsActions';

export function settingsReducer(
  state: SettingsModel,
  action: SettingsActionModel,
): SettingsModel {
  switch (action.type) {
    case SettingsActionTypes.TOGGLE_AUDIO: {
      return { ...state, audioEnabled: !state.audioEnabled };
    }
    case SettingsActionTypes.TOGGLE_NOTIFICATION_BAR: {
      return { ...state, notificationBar: !state.notificationBar };
    }
    case SettingsActionTypes.TOGGLE_THEME: {
      return {
        ...state,
        theme: state.theme === 'dark' ? 'light' : 'dark',
      };
    }
  }
  return state;
}
