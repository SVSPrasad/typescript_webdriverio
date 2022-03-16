const { config } = require("../test/wdio.conf_mocha");

describe( "Test1", ()=> {

    it ("Working with url", async ()=>{
        browser.url("https://pp2.travelrepublic.co.uk");
        browser.pause(10000);
        console.log(browser.getUrl());

        expect(browser).toHaveUrlContaining("travelrepublic.co.uk");
        expect(browser).toHaveUrl("https://pp2.travelrepublic.co.uk");
        expect(browser).toHaveTitle("Cheap hotels, flights and holidays from Travel Republic")
        expect(browser).toHaveTitleContaining("Travel Republic");
    const ismenudisplayed = (await $('button[aria-label="Open account menu"]')).isDisplayed;
    //expect(ismenudisplayed).toStrictEqual(true);
        
    })

    it ("Maximize / Minimize", ()=>{
        browser.maximizeWindow();
        browser.pause(10000);
        browser.minimizeWindow();
        browser.pause(10000);
    })

    // Implicit / explicit time outs
    it ("setting timeouts", ()=>{
        //browser.setTimeouts()
    })

    it ("browser details", ()=>{
         console.log(browser.sessionId);
         console.log(browser.capabilities);
         console.log(browser.config);
         console.log(browser.getAllCookies());
        
    })

    it ("Accessing config", ()=>{
        
       console.log(config.baseUrl);
       console.log(config.project);
   })









});