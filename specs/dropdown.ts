describe("dropdown",async()=>{

    it("seelting values from dropdown", async ()=>{

        await browser.url("https://facebook.com/");
        await browser.maximizeWindow();
        await browser.pause(3000);

        await (await $('[data-testid="open-registration-form-button"]')).click();
        const dayDropDown = await($('#day'));
        const monthDropDown = await($('#month'));
        const yearDropDown = await($('#year'));

       await dayDropDown.selectByAttribute("value",12);
       await monthDropDown.selectByVisibleText("Feb");
       await yearDropDown.selectByIndex(10)

       await browser.pause(10000);
       console.log(await dayDropDown.getValue());

    });
});