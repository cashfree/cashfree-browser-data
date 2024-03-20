import { NA } from "../constants";

export const isCookieEnabled = () => {
  try {
    return navigator.cookieEnabled.toString();
  } catch (e) {
    return NA;
  }
};

export const setCookie = (cname, cvalue, expiryYears) => {
  const d = new Date();
  d.setTime(d.getTime() + expiryYears * 365 * 24 * 60 * 60 * 1000);
  const expires = `expires=${d.toUTCString()}`;
  document.cookie = `${cname}=${cvalue}; ${expires}; path=/; SameSite=Lax`;
};

export const getCookie = (cname) => {
  const name = cname + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(";");

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.startsWith(name)) {
      return c.substring(name.length);
    }
  }
  return "";
};

export const hashDocumentCookie = async () => {
  try {
    const cookieData = document.cookie;
    const encoder = new TextEncoder();
    const data = encoder.encode(cookieData);

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
