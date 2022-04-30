const today = new Date();

interface OptionsDate {
  day: string;
  era: string;
  formatMatcher: string;
  hour: string;
  hour12: boolean;
  localeMatcher: string;
  minute: string;
  month: string;
  second: string;
  timeZone: string;
  timeZoneName: string;
  weekday: string;
  year: string;
}

const options: Intl.DateTimeFormatOptions = {
  day: "numeric",
  month: "long",
  weekday: "long",
  year: "numeric",
};
// options.timeZone = "Europe/Paris";
// example output : lundi 28 février 2022
export const nowDateLongFormat = today.toLocaleString("fr-FR", options);
// example output : 11:44
export const nowTimeHMFormat = today.toLocaleTimeString("fr-FR", {
  timeStyle: "short",
});

export const toDateObject = (date: Date | null) => {
  if (date) {
    return new Date(date);
  } else return null;
};

export const toDateLongFormat = (date: Date | null) => {
  if (date) {
    return date.toLocaleString("fr-FR", options);
  } else return null;
};

export const toTimeFormat = (date: Date | null) => {
  if (date) {
    return date.toLocaleTimeString("fr-FR", { timeStyle: "short" });
  } else return nowTimeHMFormat;
};
