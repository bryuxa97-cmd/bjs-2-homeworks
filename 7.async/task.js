class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(ringTime, ringCallback) {
    const timeIsMissing =
      ringTime === undefined || ringTime === null || ringTime === '';
    if (timeIsMissing) {
      throw new Error('Отсутствуют обязательные аргументы');
    }

    const ringCallbackIsNotAFunction = typeof ringCallback !== 'function';
    if (ringCallbackIsNotAFunction) {
      throw new Error('Отсутствуют обязательные аргументы');
    }

    const alarmWithSameTimeAlreadyAdded = this.alarmCollection.some(function (
      alarm,
    ) {
      return alarm.time === ringTime;
    });
    if (alarmWithSameTimeAlreadyAdded) {
      console.warn('Уже присутствует звонок на это же время');
    }

    this.alarmCollection.push({
      callback: ringCallback,
      time: ringTime,
      canCall: true,
    });
  }

  removeClock(timeOfAlarmToRemove) {
    this.alarmCollection = this.alarmCollection.filter(function (alarm) {
      return alarm.time !== timeOfAlarmToRemove;
    });
  }

  getCurrentFormattedTime() {
    return new Date().toLocaleTimeString('ru-Ru', {
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  start() {
    const timerIsAlreadyRunning = this.intervalId !== null;
    if (timerIsAlreadyRunning) {
      return;
    }

    const clock = this;

    this.intervalId = setInterval(function () {
      const currentTime = clock.getCurrentFormattedTime();

      clock.alarmCollection.forEach(function (alarm) {
        const timeMatchesAndAlarmMayStillRing =
          alarm.time === currentTime && alarm.canCall === true;

        if (timeMatchesAndAlarmMayStillRing) {
          alarm.canCall = false;
          alarm.callback();
        }
      });
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach(function (alarm) {
      alarm.canCall = true;
    });
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}
