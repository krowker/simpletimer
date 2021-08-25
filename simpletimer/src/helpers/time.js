export const getHours = (seconds) => {
  const isHourDecimal = Math.floor(seconds / 3600) >= 10;
  const hour = Math.floor(seconds / 3600);

  return `${isHourDecimal ? "" : 0}${hour}`;
};

export const getMinutes = (seconds) => {
  const isMinDecimal = Math.floor(seconds % 3600 / 60) >= 10;
  const min = Math.floor(seconds % 3600 / 60);

  return `${isMinDecimal ? "" : 0}${min}`;
};

export const getSeconds = (seconds) => {
  const isSecDecimal = Math.floor(seconds % 3600 % 60) >= 10;
  const sec = Math.floor(seconds % 3600 % 60);

  return `${isSecDecimal ? "" : 0}${sec}`;
};
