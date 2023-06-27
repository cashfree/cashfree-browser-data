
# CASHFREE BROWSER DATA 

## Installation
1. Using NPM package
```
npm i @cashfreepayments/cashfree-browser-data
```

```
import {getBrowserData} from "cashfree-browser-data";
```

2. Using CDN URL

```
<script src="https://cdn.jsdelivr.net/gh/cashfree/cashfree-browser-data@latest/dist/browser.min.js"></script>
```

Note: Make sure only one of the above is present in your application


## Implementation
```
let data = await getBrowserData();
```
Make sure it is invoked inside an async function

## Parameters Fetched 
The data variable will be a json object which has the following parameters

| Parameter            | Information                                |
| -------------------- | ------------------------------------------ | 
|device_type           |Screen Information either mobile or desktop |
|session_id            |Hash of Browser Cookies                     |
|device_hash           |Unique Identifier for Browser               |
|os_name               |Device Operating System Name                |
|os_version            |Device Operating System Version             |
|user_agent            |Browser User Agent Data                     |
|browser_hash          |Hash of Browser User Agent                  |
|browser_name          |Browser Application Name                    |
|private_mode          |Incognito or not                            |
|browser_version       |Browser Version                             |
|cookie_enabled        |Browser Cookies enabled or not              |
|screen_width          |Device Screen Width                         |
|screen_height         |Device Screen Height                        |
|region_timezone       |Timezone Data                               |
|region_timezone_offset|Timezone Offset Value                       |
|region_language       |Browser Language                            |
|installed_fonts       |Browser Installed Fonts                     |
|installed_plugins     |Browser Installed Plugins                   |
|battery_percentage    |Device Battery Percentage                   |
|gpu_renderer          |GPU Information                             |

