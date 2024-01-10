function getOS(){
    try{
        var userAgent = navigator.userAgent;
        var operatingSystem = '';

        if (/Windows/i.test(userAgent)) {
            operatingSystem = "Windows";
        } else if (/Macintosh|Mac OS X/i.test(userAgent)) {
            operatingSystem = "Mac OS";
        } else if (/Android/i.test(userAgent)) {
            operatingSystem = "Android";
        } else if (/iOS|iPhone|iPad|iPod/i.test(userAgent)) {
            operatingSystem = "iOS";
        } else if (/Linux/i.test(userAgent)) {
            operatingSystem = "Linux";
        } else {
            operatingSystem = "Unknown";
        }
        
        return operatingSystem;
    }catch(e){
        return "NA";
    }
}

function getBrowser() {
    try{
        return (function () {
            var test = function (regexp) {
                return regexp.test(window.navigator.userAgent)
            }
            switch (true) {
                case test(/edg/i):
                    return "MicrosoftEdge";
                case test(/trident/i):
                    return "MicrosoftInternetExplorer";
                case test(/firefox|fxios/i):
                    return "MozillaFirefox";
                case test(/opr\//i):
                    return "Opera";
                case test(/ucbrowser/i):
                    return "UCBrowser";
                case test(/samsungbrowser/i):
                    return "SamsungBrowser";
                case test(/chrome|crios/i):
                    return "GoogleChrome";
                case test(/safari/i):
                    return "AppleSafari";
                case test(/instagram/i):
                    return "Instagram";
                case test(/FB/):
                    return "Facebook";
                default:
                    return "Other";
            }
        })();
    }catch(e){
        return "NA";
    }
}

function getDevice() {
    try{
        var check = false;
        (function (a) {
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
        })(navigator.userAgent || navigator.vendor || window.opera);
        if (check) return "Mobile";
        else return "Desktop";
    }catch(e){
        return "NA";
    }
}

function getFonts() {
    try{
        var fontSet = new Set();
        document.fonts.forEach(function (font) {
            fontSet.add(font.family);
        });
        var uniqueFonts = Array.from(fontSet);
        return uniqueFonts.length ? uniqueFonts.toString() : "NA";
    }catch(e){
        return "NA";
    }
}

function getPlugins() {
    try{
        var installedPlugins = Array.from(navigator.plugins).map(function(plugin) {
            return plugin.name;
        });
        return installedPlugins.length ? installedPlugins.toString() : "NA";
    }catch(e){
        return "NA";
    }
}

function getBatteryLevel() {
    try{
        return new Promise(function(resolve, reject) {
            if ('getBattery' in navigator) {
                navigator.getBattery().then(function(battery) {
                    var batteryLevel = ((Math.round(battery.level * 100) / 100) * 100).toFixed(2);
                    resolve(batteryLevel+"%");
                }).catch(function(error) {
                    resolve("NA");
                });
            } else {
                resolve("NA");
            }
        });
    }catch(e){
        return "NA";
    }
}

function getGPU() {
    try{
        if (window.WebGLRenderingContext) {
            var canvas = document.createElement('canvas');
            var gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

            if (gl) {
                var gpuRenderer = gl.getParameter(gl.RENDERER);
                return gpuRenderer;
            } else {
                return "NA";
            }
        } else {
            return "NA";
        }
    }catch(e){
        return "NA";
    }
}

async function hashDocumentCookie() {
    try{
        let cookieData = document.cookie;
        let encoder = new TextEncoder();
        let data = encoder.encode(cookieData);
        let hashBuffer;
        try{
            hashBuffer = await crypto.subtle.digest('SHA-256', data);
        }catch(e){
            return "NA";
        }
        let hashArray = Array.from(new Uint8Array(hashBuffer));
        let hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
        return hashHex;
    }catch(e){
        return "NA";
    }
}

function hashDeviceInfo() {
    try{
        if(localStorage.getItem("deviceHash") === null){
            const digits = 64;
            const randomValues = new Uint8Array(digits);
            crypto.getRandomValues(randomValues);
            let randomNumber = '';
            for (let i = 0; i < digits; i++) {
                randomNumber += randomValues[i] % 10;
            }
            localStorage.setItem("deviceHash", randomNumber)
        }
        return localStorage.getItem("deviceHash");
    }catch(e){
        return "NA";
    }
}

async function hashBrowserInfo() {
    try{
        const userAgent = navigator.userAgent;
        const language = navigator.language;
        const platform = navigator.platform;
        let browserData = userAgent + language + platform;
        let encoder = new TextEncoder();
        let data = encoder.encode(browserData);
        let hashBuffer = await crypto.subtle.digest('SHA-256', data);
        let hashArray = Array.from(new Uint8Array(hashBuffer));
        let hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
        return hashHex;
    }catch(e){
        return "NA";
    }
}

function isIncognito() {
    try{
        return new Promise(function (resolve, reject) {
            var browserName = getBrowser();
            
            if (browserName === "AppleSafari") {
                if (navigator.maxTouchPoints !== undefined) {
                    var tmp_name = String(Math.random());
                    try {
                        var db = window.indexedDB.open(tmp_name, 1);
                        db.onupgradeneeded = function (i) {
                            var _a, _b;
                            var res = (_a = i.target) === null || _a === void 0 ? void 0 : _a.result;
                            try {
                                res.createObjectStore("test", {
                                    autoIncrement: true
                                }).put(new Blob);
                                resolve("false");
                            }
                            catch (e) {
                                var message = e;
                                if (e instanceof Error) {
                                    message = (_b = e.message) !== null && _b !== void 0 ? _b : e;
                                }
                                if (typeof message !== 'string') {
                                    return resolve("false");
                                }
                                return resolve("NA");
                            }
                            finally {
                                res.close();
                                window.indexedDB.deleteDatabase(tmp_name);
                            }
                        };
                    } catch (e) {
                        return resolve("false");
                    }
                } else {
                    var openDB = window.openDatabase;
                    var storage = window.localStorage;
                    try {
                        openDB(null, null, null, null);
                    } catch (e) {
                        return resolve("true");
                    }
                    try {
                        storage.setItem("test", "1");
                        storage.removeItem("test");
                    } catch (e) {
                        return resolve("true");
                    }
                    return resolve("false");
                }
            }else if (browserName === "GoogleChrome") {
                if (self.Promise !== undefined && self.Promise.allSettled !== undefined) {
                    try{
                        navigator.webkitTemporaryStorage.queryUsageAndQuota(function (_, quota) {
                            var quotaInMib = Math.round(quota / (1024 * 1024));
                            var quotaLimit = (window.performance !== undefined && window.performance.memory !== undefined && window.performance.memory.jsHeapSizeLimit !== undefined) ? performance.memory.jsHeapSizeLimit : 1073741824;
                            var quotaLimitInMib = Math.round(quotaLimit / (1024 * 1024)) * 2;
                            quotaInMib < quotaLimitInMib ? resolve("true") : resolve("false");
                        }, function (e) {
                            resolve("NA");
                        });
                    }catch(e){
                        resolve("false");
                    }
                }else {
                    try{    
                        var fs = window.webkitRequestFileSystem || window.webkitRequestFileSystem;
                        var success = function () {
                            resolve("false");
                        };
                        var error = function () {
                            resolve("true");
                        };
                        fs(0, 1, success, error);
                    }catch(e){
                        resolve("false")
                    }
                }
            }else if (browserName === "MozillaFirefox") {
                navigator.serviceWorker === undefined ? resolve("true") : resolve("false");
            }else if (browserName === "MicrosoftInternetExplorer") {
                window.indexedDB === undefined ? resolve("true") : resolve("false");
            }else {
                resolve("NA");
            }
        });
    }catch(e){
        return "NA";
    }
};

function osVersion(){
    try{
        var userAgent = navigator.userAgent;
        let osVersion = "NA"
        if (/Windows/.test(userAgent)) {
            osVersion = /Windows NT (\d+\.\d+)/.exec(userAgent)[1];
        } else if (/Mac/.test(userAgent)) {
            osVersion = /Mac OS X (\d+[\._]\d+(?:[\._]\d+)?)/.exec(userAgent)[1].replace(/_/g, '.');
        } else if (/Android/.test(userAgent)) {
            osVersion = /Android (\d+\.\d+)/.exec(userAgent)[1];
        } else if (/iOS/.test(userAgent)) {
            osVersion = /OS (\d+_\d+(?:_\d+)?)/.exec(userAgent)[1].replace(/_/g, '.');
        }else if (/Linux/.test(userAgent)) {
            osVersion = "Linux";
        } else {
            osVersion = "NA";
        }
        return osVersion;
    }catch(e){
        return "NA";
    }
}

function browserVersion(){
    try{
        var userAgent = navigator.userAgent;
        let browserVersion = "NA"
        if (/Chrome/.test(userAgent)) {
            browserVersion = /Chrome\/(\d+\.\d+)/.exec(userAgent)[1];
        } else if (/Firefox/.test(userAgent)) {
            browserVersion = /Firefox\/(\d+\.\d+)/.exec(userAgent)[1];
        } else if (/Safari/.test(userAgent)) {
            browserVersion = /Version\/(\d+\.\d+)/.exec(userAgent)[1];
        } else if (/MSIE/.test(userAgent)) {
            browserVersion = /MSIE (\d+\.\d+)/.exec(userAgent)[1];
        } else if (/Trident/.test(userAgent)) {
            browserVersion = /rv:(\d+\.\d+)/.exec(userAgent)[1];
        } else {
            browserVersion = "NA";
        }
        return browserVersion;
    }catch(e){
        return "NA";
    }
}

function timezoneOffset(){
    try{
        var date = new Date();
        var timezoneOffsetMinutes = date.getTimezoneOffset();
        var offsetHours = Math.floor(Math.abs(timezoneOffsetMinutes) / 60);
        var offsetMinutes = Math.abs(timezoneOffsetMinutes) % 60;
        var sign = timezoneOffsetMinutes < 0 ? "+" : "-";
        var timezoneOffset = sign + offsetHours.toString().padStart(2, "0") + ":" + offsetMinutes.toString().padStart(2, "0");

        return timezoneOffset;
    }catch(e){
        return "NA";
    }
}

function getUserAgent(){
    try{
        return navigator.userAgent;
    }catch(e){
        return "NA";
    }
}

function isCookieEnabled(){
    try{
        return navigator.cookieEnabled.toString();
    }catch(e){
        return "NA";
    }
}

function getScreenWidth(){
    try{
        return window.screen.width.toString();
    }catch(e){
        return "NA";
    }
}

function getScreenHeight(){
    try{
        return window.screen.height.toString();
    }catch(e){
        return "NA";
    }
}

function getTimeZone(){
    try{
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
    }catch(e){
        return "NA";
    }
}

function getLanguage(){
    try{
        return navigator.language;
    }catch(e){
        return "NA";
    }
}

async function getBrowserData(){
    let browserInfo = {
        device_type: getDevice(), //mobile or desktop
        device_hash: hashDeviceInfo(), //unique identifier for browser
        os_name: getOS(), //os name
        os_version: osVersion(), //os version
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
        gpu_renderer: getGPU()  //gpu information
    }
    const [session_id, browser_hash, private_mode, battery_percentage] = await Promise.all([hashDocumentCookie(), hashBrowserInfo(), isIncognito(), getBatteryLevel()]);

    browserInfo = {
        ...browserInfo,
        session_id: session_id, //cookie hash
        browser_hash: browser_hash, //navigator hash
        private_mode: private_mode, //incognito or not
        battery_percentage: battery_percentage  //battery percentage
    }
    return browserInfo;
}

export {getBrowserData};