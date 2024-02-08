const { getBrowserData } = require('../dist/browser.min.js');

let windowSpy = jest.SpyInstance;

describe('browserDataSDK', () => {
    beforeEach(() => {
        windowSpy = jest.spyOn(window, 'window', 'get');
    });

    afterEach(() => windowSpy.mockRestore());
    
    it('should return the browser data keys of length 20', async() => {
        windowSpy.mockImplementation(()=>({navigator}))
        const data = await getBrowserData();
        expect(Object.keys(data).length).toBe(20);
    });

    it('should return the browser data with all keys in it', async() => {
        windowSpy.mockImplementation(()=>({navigator}))
        const data = await getBrowserData();

        let dataKeys = ['device_type','session_id','device_hash','os_name','os_version','user_agent','browser_hash','browser_name','private_mode','browser_version','cookie_enabled','screen_width','screen_height','region_timezone','region_timezone_offset','region_language','installed_fonts','installed_plugins','battery_percentage','gpu_renderer'];
        let temp = true;
        for (let i = 0; i < dataKeys.length; i++) {
            if (!data.hasOwnProperty(dataKeys[i])) {
                temp = false;
            }
        }
        expect(temp).toBe(true);
    });

    it('no value in json should be undefined or null', async() => {
        windowSpy.mockImplementation(()=>({navigator}))
        const data = await getBrowserData();

        let temp = true;
        for (let key in data) {
            if (data[key] === undefined || data[key] === null) {
                temp = false;
            }
        }
        expect(temp).toBe(true);
    });
})
