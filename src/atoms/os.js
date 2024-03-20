import { OS, NA } from "../constants";
import { getUserAgent } from "./browser";

export const getOS = () => {
  try {
    const userAgent = getUserAgent();

    if (/Windows/i.test(userAgent)) {
      return OS.windows;
    } else if (/Macintosh|Mac OS X/i.test(userAgent)) {
      return OS.mac;
    } else if (/Android/i.test(userAgent)) {
      return OS.android;
    } else if (/iOS|iPhone|iPad|iPod/i.test(userAgent)) {
      return OS.iOS;
    } else if (/Linux/i.test(userAgent)) {
      return OS.linux;
    } else {
      return OS.unknown;
    }
  } catch (e) {
    return NA;
  }
};

export const osVersion = () => {
  try {
    const userAgent = getUserAgent();

    if (/Windows/.test(userAgent)) {
      return /Windows NT (\d+\.\d+)/.exec(userAgent)[1];
    } else if (/Mac/.test(userAgent)) {
      return /Mac OS X (\d+[\._]\d+(?:[\._]\d+)?)/
        .exec(userAgent)[1]
        .replace(/_/g, ".");
    } else if (/Android/.test(userAgent)) {
      return /Android (\d+\.\d+)/.exec(userAgent)[1];
    } else if (/iOS/.test(userAgent)) {
      return /OS (\d+_\d+(?:_\d+)?)/.exec(userAgent)[1].replace(/_/g, ".");
    } else if (/Linux/.test(userAgent)) {
      return OS.linux;
    } else {
      return NA;
    }
  } catch (e) {
    return NA;
  }
};
