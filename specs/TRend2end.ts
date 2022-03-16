//var assert = require("assert");

//import assert from "node_modules\\assert-plus\\assert";


describe("TR Holidays End 2 End " ,async()=>{
   //allureReporter.addDescription(config.browser)
    it("Holiday Search", async ()=>{

       await browser.url("https://tv.travelrepublic.co.uk/");
       await browser.maximizeWindow();
       
       const destinationButton = await $("//button[text()='Add a destination']")
       const flyingFromButton = await $("//button[text()='Add airports']")
       const destination = await $("//input[@id='destination-autocompleter-field']");
       const destinationItem =await $("//ul[@role='listbox']/li[1]/div[1]");
       const LondonAllAirpots = await $("//input[@id='checkbox-option-LGW:LHR:LTN:SEN:STN:LCY']")
       const datetimefield = await $("//button[text()='Add dates']")
       const calenderNext = await $("//button[contains(@class,'next')]")
       const fromDate = await $("//div[@class='DayPicker-Day__day-number'][normalize-space()='22']");
       const toDate = await $("//div[@class='DayPicker-Day__day-number'][normalize-space()='27']");
       const searchButton = await $("//span[normalize-space()='Search']")

        await destinationButton.waitForDisplayed({timeout:20000});
        await destinationButton.click();

        
        await destination.waitForDisplayed({timeout:20000});
        await destination.setValue("Dubai");
        await browser.pause(2000);    
        await destinationItem.waitForDisplayed();
        await destinationItem.click();


       // await flyingFromButton.click();
        await LondonAllAirpots.click();


        await datetimefield.click();
       
        await calenderNext.click();
        await calenderNext.click();
        await calenderNext.click();
        await calenderNext.click();

        await fromDate.click();
        await toDate.click();
        await searchButton.click();

    });
    it("Search Results", async ()=>{

        const viewMoreDetails = await $("//span[contains(.,'View More Details')]");
        await viewMoreDetails.waitForExist({timeout:50000})  
        await viewMoreDetails.scrollIntoView();     
        await viewMoreDetails.click();
 
     });
     it("Hotel Details", async ()=>{

        const ChooseRoom = await $("//span[contains(.,'Choose Room')]");
        const ConfirmAndContinue = await $("//span[contains(.,'Confirm and Continue to Flights')]");

        await ChooseRoom.waitForDisplayed();
        await ChooseRoom.click();

        await ConfirmAndContinue.waitForDisplayed();
        await ConfirmAndContinue.click();

     });
     it("Flight Search Results ", async ()=>{

        const ContinueToBook = await $("//span[contains(.,'Continue To Book')]");
        const ConfirmAndContinueToBook = await $("//span[contains(.,'Continue to Book')]");

        await ContinueToBook.waitForDisplayed({timeout:50000});
        await ContinueToBook.click();
        await browser.pause(5000);
        await ContinueToBook.waitForEnabled({timeout:50000});
        await ContinueToBook.click();

        await ConfirmAndContinueToBook.waitForDisplayed();
        await ConfirmAndContinueToBook.click();

     });
     it("Guest Information", async ()=>{

        const TitleOne = await $("//select[@id='title-0-0']")
        const FirstNameOne = await $("//input[@id='firstName-0-0']")
        const LastNameOne = await $("//input[@id='lastName-0-0']")
        const DOBOne = await $("//input[@id='dob-0-0']")

        const TitleTwo = await $("//select[@id='title-0-1']")
        const FirstNameTwo = await $("//input[@id='firstName-0-1']")
        const LastNameTwo = await $("//input[@id='lastName-0-1']")
        const DOBTwo = await $("//input[@id='dob-0-1']")

        const PhoneNumber = await $("//input[@id='mobileTel']");
        const emailID = await $("//input[@id='email']")

        const AddPaymentDetails = await $("//span[contains(.,'Add My Payment Details')]")

        await TitleOne.waitForExist();
        await TitleOne.scrollIntoView();
        await TitleOne.selectByVisibleText("Mr")
        await FirstNameOne.setValue("Prasad");
        await LastNameOne.setValue("Sajja")
        await DOBOne.setValue("01/01/2000")

        await TitleTwo.waitForDisplayed();
        await TitleTwo.scrollIntoView();
        await TitleTwo.selectByVisibleText("Mr")
        await FirstNameTwo.setValue("Ram    ");
        await LastNameTwo.setValue("Sajja")
        await DOBTwo.setValue("01/01/2000")

        await PhoneNumber.scrollIntoView();
        await PhoneNumber.setValue("9886123856")
        await emailID.setValue("vsajja@travelrepublic.com")

        await AddPaymentDetails.scrollIntoView();
        await AddPaymentDetails.click();

     });
     it("Address Selection", async ()=>{

        const AddressDialogTrigger = await $("#dialogTrigger")
        const AddressSearch = await $("#addressSearch")
        const address = await $("//li[@class='sc-c-option-list__item']")

        await browser.pause(10000);
        await AddressDialogTrigger.click()
        await AddressSearch.click()
        await AddressSearch.setValue("KT26nh")
        await browser.pause(1000)
        await address.click()

        
     });
});
