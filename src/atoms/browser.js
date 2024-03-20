import { BROWSERS, NA } from "../constants";

export const getUserAgent = () => {
  try {
    return navigator.userAgent || window.navigator.userAgent;
  } catch (e) {
    return NA;
  }
};

export const getLanguage = () => {
  try {
    return navigator.language || window.navigator.language;
  } catch (e) {
    return NA;
  }
};

export const getBrowser = () => {
  try {
    const userAgent = getUserAgent();

    switch (true) {
      case /edg/i.test(userAgent):
        return BROWSERS.edge;
      case /trident/i.test(userAgent):
        return BROWSERS.explorer;
      case /firefox|fxios/i.test(userAgent):
        return BROWSERS.firefox;
      case /opr\//i.test(userAgent):
        return BROWSERS.opera;
      case /ucbrowser/i.test(userAgent):
        return BROWSERS.ucbrowser;
      case /samsungbrowser/i.test(userAgent):
        return BROWSERS.samsung;
      case /chrome|crios/i.test(userAgent):
        return BROWSERS.chrome;
      case /safari/i.test(userAgent):
        return BROWSERS.safari;
      case /instagram/i.test(userAgent):
        return BROWSERS.instagram;
      case /FB/.test(userAgent):
        return BROWSERS.facebook;
      default:
        return BROWSERS.other;
    }
  } catch (e) {
    return NA;
  }
};

export const browserVersion = () => {
  try {
    const userAgent = getUserAgent();

    if (/Chrome/.test(userAgent)) {
      return /Chrome\/(\d+\.\d+)/.exec(userAgent)[1];
    } else if (/Firefox/.test(userAgent)) {
      return /Firefox\/(\d+\.\d+)/.exec(userAgent)[1];
    } else if (/Safari/.test(userAgent)) {
      return /Version\/(\d+\.\d+)/.exec(userAgent)[1];
    } else if (/MSIE/.test(userAgent)) {
      return /MSIE (\d+\.\d+)/.exec(userAgent)[1];
    } else if (/Trident/.test(userAgent)) {
      return /rv:(\d+\.\d+)/.exec(userAgent)[1];
    } else {
      return NA;
    }
  } catch (e) {
    return NA;
  }
};

export const hashBrowserInfo = async () => {
  try {
    const userAgent = getUserAgent();
    const language = getLanguage();
    const platform = navigator.platform;
    const browserData = userAgent + language + platform;
    const encoder = new TextEncoder();
    const data = encoder.encode(browserData);

    let hashBuffer;
    try {
      hashBuffer = await crypto.subtle.digest("SHA-256", data);
    } catch (e) {
      return NA;
    }

    const hashHex = Array.from(new Uint8Array(hashBuffer))
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");

    return hashHex;
  } catch (e) {
    return NA;
  }
};

export const isIncognito = () => {
  try {
    return new Promise(function (resolve, reject) {
      var browserName = getBrowser();
      if (browserName === BROWSERS.safari) {
        if (navigator.maxTouchPoints !== undefined) {
          var tmp_name = String(Math.random());
          try {
            var db = window.indexedDB.open(tmp_name, 1);
            db.onupgradeneeded = function (i) {
              var res = i.target.result;
              try {
                res
                  .createObjectStore("test", { autoIncrement: true })
                  .put(new Blob());
                resolve("false");
              } catch (e) {
                resolve(NA);
              } finally {
                res.close();
                window.indexedDB.deleteDatabase(tmp_name);
              }
            };
          } catch (e) {
            resolve("false");
          }
        } else {
          var storage = window.localStorage;
          try {
            storage.setItem("test", "1");
            storage.removeItem("test");
            resolve("false");
          } catch (e) {
            resolve("true");
          }
        }
      } else if (browserName === BROWSERS.chrome) {
        if (
          self.Promise !== undefined &&
          self.Promise.allSettled !== undefined
        ) {
          try {
            navigator.webkitTemporaryStorage.queryUsageAndQuota(
              function (_, quota) {
                var quotaInMib = Math.round(quota / (1024 * 1024));
                var quotaLimit =
                  window.performance !== undefined &&
                  window.performance.memory !== undefined &&
                  window.performance.memory.jsHeapSizeLimit !== undefined
                    ? performance.memory.jsHeapSizeLimit
                    : 1073741824;
                var quotaLimitInMib =
                  Math.round(quotaLimit / (1024 * 1024)) * 2;
                resolve(quotaInMib < quotaLimitInMib ? "true" : "false");
              },
              function (e) {
                resolve(NA);
              },
            );
          } catch (e) {
            resolve("false");
          }
        } else {
          try {
            var fs =
              window.webkitRequestFileSystem || window.webkitRequestFileSystem;
            var success = function () {
              resolve("false");
            };
            var error = function () {
              resolve("true");
            };
            fs(0, 1, success, error);
          } catch (e) {
            resolve("false");
          }
        }
      } else if (browserName === BROWSERS.firefox) {
        resolve(navigator.serviceWorker === undefined ? "true" : "false");
      } else if (browserName === BROWSERS.explorer) {
        resolve(window.indexedDB === undefined ? "true" : "false");
      } else {
        resolve(NA);
      }
    });
  } catch (e) {
    return NA;
  }
};
