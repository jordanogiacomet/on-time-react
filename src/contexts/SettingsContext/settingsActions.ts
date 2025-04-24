export enum SettingsActionTypes {
  TOGGLE_AUDIO = 'TOGGLE_AUDIO',
  TOGGLE_NOTIFICATION_BAR = 'TOGGLE_NOTIFICATION_BAR',
}

export type SettingsAction =
  | {
      type: SettingsActionTypes.TOGGLE_AUDIO;
    }
  | {
      type: SettingsActionTypes.TOGGLE_NOTIFICATION_BAR;
    };

export type SettingsActionModel = SettingsAction;
