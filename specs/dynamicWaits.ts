

describe("dropdown",async()=>{

    it("wait for the test displayed", async ()=>{

       await browser.url("http://the-internet.herokuapp.com/dynamic_loading/1");
       const search = await $('//*[@id="start"]/button');
       await search.click();
       const loadedText =await $("//h4[text()='Hello World!']");
       // default waittime 10 secs 
       // explicitly waiting for 15 secs    
        await loadedText.waitForDisplayed({timeout:15000});
        //assert.equal(await loadedText.isDisplayed(),true);
    
    });
    


     it("waiting for enabled", async ()=>{

        await browser.url("http://the-internet.herokuapp.com/dynamic_controls");
        const enable_disable_button = await $('//button[@onclick="swapInput()" ]');
        const textField = await $('//form[@id="input-example"]/input');
        await enable_disable_button.click();
 
         await textField.waitForEnabled({timeout:15000});
         await textField.setValue("hello world");

     
     });

     it("custom wait ", async ()=>{

        await browser.url("http://the-internet.herokuapp.com/dynamic_controls");
        const enable_disable_button = await $('//button[@onclick="swapInput()" ]');
        const textField = await $('//form[@id="input-example"]/input');
        await enable_disable_button.click();
        
        // await textField.waitUntil(
        //      async () =>
        //      {
        //          return (await this.isEnabled);
        //      },
        //      {
        //          timeout : 50000,
        //          timeoutMsg : "text field is not displayed",
        //      }
         
        //  );
         

     
        });
       

});
    
