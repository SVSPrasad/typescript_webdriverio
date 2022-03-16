describe("dropdown",async()=>{

    it("Alert", async ()=>{
        const jsAlert = await $("//button[text()='Click for JS Alert']");
        const jsConfirm = await $("//button[text()='Click for JS Confirm']");
        const jsPrompt = await $("//button[text()='Click for JS Prompt']");
        await browser.url("http://the-internet.herokuapp.com/javascript_alerts");
       jsAlert.click();
       await browser.pause(5000);
       console.log(await browser.getAlertText())
      await browser.acceptAlert();
    });



});
