import { getOS, osVersion } from "./atoms/os";
import { isCookieEnabled, hashDocumentCookie } from "./atoms/cookie";
import {
  getBrowser,
  isIncognito,
  getLanguage,
  getUserAgent,
  browserVersion,
  hashBrowserInfo,
} from "./atoms/browser";
import {
  getGPU,
  getDevice,
  getFonts,
  getPlugins,
  getTimeZone,
  getBatteryLevel,
  hashDeviceInfo,
  timezoneOffset,
  getScreenWidth,
  getScreenHeight,
} from "./atoms/device";

export async function getBrowserData() {
  const [session_id, browser_hash, private_mode, battery_percentage] =
    await Promise.all([
      hashDocumentCookie(),
      hashBrowserInfo(),
      isIncognito(),
      getBatteryLevel(),
    ]);
  let browserInfo = {
    os_name: getOS(), //os name
    os_version: osVersion(), //os version
    device_type: getDevice(), //mobile or desktop
    device_hash: hashDeviceInfo(), //unique identifier for browser
    user_agent: getUserAgent(), //useragent data
    browser_name: getBrowser(), //browser name
    browser_version: browserVersion(), //browser version
    cookie_enabled: isCookieEnabled(), //cookies enabled or not
    screen_width: getScreenWidth(), //screen width
    screen_height: getScreenHeight(), //screen height
    region_timezone: getTimeZone(), //timezone
    region_timezone_offset: timezoneOffset(), //timezone offset
    region_language: getLanguage(), //browser language
    installed_fonts: getFonts(), //fonts
    installed_plugins: getPlugins(), //plugins
    gpu_renderer: getGPU(), //gpu information
  };
  browserInfo = {
    ...browserInfo,
    session_id: session_id, //cookie hash
    browser_hash: browser_hash, //navigator hash
    private_mode: private_mode, //incognito or not
    battery_percentage: battery_percentage, //battery percentage
  };
  return browserInfo;
}

export {
  getOS,
  osVersion,
  isCookieEnabled,
  getBrowser,
  isIncognito,
  getLanguage,
  getUserAgent,
  browserVersion,
  hashBrowserInfo,
  hashDocumentCookie,
  getGPU,
  getDevice,
  getFonts,
  getPlugins,
  getTimeZone,
  getBatteryLevel,
  hashDeviceInfo,
  timezoneOffset,
  getScreenWidth,
  getScreenHeight,
};
