export enum SettingsActionTypes {
  TOGGLE_AUDIO = 'TOGGLE_AUDIO',
  TOGGLE_NOTIFICATION_BAR = 'TOGGLE_NOTIFICATION_BAR',
  TOGGLE_THEME = 'TOGGLE_THEME',
}

export type SettingsAction =
  | {
      type: SettingsActionTypes.TOGGLE_AUDIO;
    }
  | {
      type: SettingsActionTypes.TOGGLE_NOTIFICATION_BAR;
    }
  | {
      type: SettingsActionTypes.TOGGLE_THEME;
    };

export type SettingsActionModel = SettingsAction;
