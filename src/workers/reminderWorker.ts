self.onmessage = function (event) {
  const schedules = event.data as {
    id: number;
    startTimestamp: number;
    offsetMs: number;
  }[];

  schedules.forEach(item => {
    const reminderTime = item.startTimestamp - item.offsetMs;
    const now = Date.now();
    const delay = reminderTime - now;

    if (delay <= 0) {
      self.postMessage({ id: item.id });
    } else {
      setTimeout(() => self.postMessage({ id: item.id }), delay);
    }
  });
};
