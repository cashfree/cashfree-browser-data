import { getUserAgent } from "./browser";
import { getCookie, setCookie } from "./cookie";
import {
  DESKTOP,
  DEVICE_HASH,
  deviceRegex,
  MOBILE,
  mobileRegex,
  NA,
} from "../constants";

export const getScreen = () => {
  try {
    return window.screen || {};
  } catch (e) {
    return NA;
  }
};

export const getDevice = () => {
  try {
    const userAgent = getUserAgent();
    const isMobile =
      mobileRegex.test(userAgent || navigator.vendor || window.opera) ||
      deviceRegex.test(userAgent.substr(0, 4));
    return isMobile ? MOBILE : DESKTOP;
  } catch (e) {
    return NA;
  }
};

export const getFonts = () => {
  try {
    const fontSet = new Set([...document.fonts].map((font) => font.family));
    return fontSet.size ? [...fontSet].join(", ") : NA;
  } catch (e) {
    return NA;
  }
};

export const getPlugins = () => {
  try {
    const installedPlugins = Array.from(
      navigator.plugins,
      (plugin) => plugin.name,
    );
    return installedPlugins.length ? installedPlugins.join(", ") : NA;
  } catch (e) {
    return NA;
  }
};

export const getBatteryLevel = () => {
  return new Promise(function (resolve, reject) {
    if (navigator && navigator.getBattery) {
      navigator
        .getBattery()
        .then(function (battery) {
          const batteryLevel = `${(battery.level * 100).toFixed(2)} %`;
          resolve(batteryLevel);
        })
        .catch(function (error) {
          resolve(NA);
        });
    } else {
      resolve(NA);
    }
  });
};

export const getGPU = () => {
  try {
    if (window.WebGLRenderingContext) {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

      if (gl) {
        return gl.getParameter(gl.RENDERER);
      }
    }
    return NA;
  } catch (e) {
    return NA;
  }
};

export const hashDeviceInfo = () => {
  try {
    const storedDeviceHash = localStorage && localStorage.getItem(DEVICE_HASH);
    if (storedDeviceHash !== null) {
      setCookie(`cf_${DEVICE_HASH}`, storedDeviceHash, 30);
      localStorage.removeItem(DEVICE_HASH);
    } else if (getCookie(`cf_${DEVICE_HASH}`) === "") {
      const digits = 64;
      const randomValues = crypto.getRandomValues(new Uint8Array(digits));
      const randomNumber = Array.from(randomValues, (value) => value % 10).join(
        "",
      );
      setCookie(`cf_${DEVICE_HASH}`, randomNumber, 30);
    }
    return getCookie(`cf_${DEVICE_HASH}`);
  } catch (e) {
    return NA;
  }
};

export const timezoneOffset = () => {
  try {
    const date = new Date();
    const timezoneOffsetMinutes = date.getTimezoneOffset();
    const offsetHours = Math.floor(Math.abs(timezoneOffsetMinutes) / 60);
    const offsetMinutes = Math.abs(timezoneOffsetMinutes) % 60;
    const sign = timezoneOffsetMinutes < 0 ? "+" : "-";
    return `${sign}${offsetHours.toString().padStart(2, "0")}:${offsetMinutes
      .toString()
      .padStart(2, "0")}`;
  } catch (e) {
    return NA;
  }
};

export const getScreenWidth = () => {
  try {
    return getScreen().width.toString();
  } catch (e) {
    return NA;
  }
};

export const getScreenHeight = () => {
  try {
    return getScreen().height.toString();
  } catch (e) {
    return NA;
  }
};

export const getTimeZone = () => {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch (e) {
    return NA;
  }
};
