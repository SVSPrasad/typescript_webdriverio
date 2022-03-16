
describe("dropdown",async()=>{

    it("setting values from dropdown", async ()=>{

        await browser.url("https://google.com/");
       const search = await $('[name="q"]');
       await search.setValue("hello world python");
       await browser.pause(2000);

       const searchList  = await $$('//ul[@role="listbox"]/li//div[@role="option"]');
        console.log("******** List size" + searchList.length)
       for(let i = 0;i<=searchList.length-1;i++)
       {
           console.log(await searchList[i].getText());
           if ('hello world program in python' === await searchList[i].getText())
           {
           await searchList[i].click()
           break;
           }
       }
    });
});