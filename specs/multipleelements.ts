var assert = require("assert");

describe("multiple elements",async()=>{

    it("social icons", async ()=>{

        await browser.url("https://opensource-demo.orangehrmlive.com/");
        await browser.maximizeWindow();
        const socialicons = await $$("//div[@id='social-icons']//img");
        console.log("count is " + socialicons.length);
        assert.strictEqual(socialicons.length,4);
        
        for ( let i=0; i<socialicons.length;i++)
        {
            if (await socialicons[i].getAttribute("alt") === "OrangeHRM on twitter")
            {
                await socialicons[i].click();
                await browser.pause(3000);
                break;
            }
        }
    });

});