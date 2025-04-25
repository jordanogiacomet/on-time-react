export type AvailableThemes = 'dark' | 'light';

export type SettingsModel = {
  audioEnabled: boolean;
  notificationBar: boolean;
  theme: AvailableThemes;
};
