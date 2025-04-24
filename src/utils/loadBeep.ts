import alertBeep from '../assets/sounds/alert.mp3';

export function loadBeep() {
  const audio = new Audio(alertBeep);

  audio.load();

  return () => {
    audio.currentTime = 0;
    audio.play().catch(error => console.log(error));
  };
}
