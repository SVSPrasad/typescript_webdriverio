
import HomePage from '../features/pageobjects/home.page';
import HotelSearchResultsPage from '../features/pageobjects/hotelSearchResults.page';
import EstabPage from '../features/pageobjects/estab.page';
import FlightSearchResultsPage from '../features/pageobjects/flightSearchResults.page'
import GuestInfoPage from '../features/pageobjects/guestInfo.page'
import PaymentOptionsPage from '../features/pageobjects/paymentOptions.page'


describe("TR end 2 end",async()=>{

    it("end 2 end pom ",  async ()=>{

      await browser.url("https://pp2.travelrepublic.co.uk")
      await browser.maximizeWindow();
      await HomePage.PopulateSearch("Dubai")
      await HotelSearchResultsPage.SelectAHotel();
      await EstabPage.ChooseRooms();
      await FlightSearchResultsPage.SelectFlight();
      await FlightSearchResultsPage.ContinueFromOptionsPage();
      await FlightSearchResultsPage.ContinueWithOutInsurance();
      await GuestInfoPage.PopulateGuestDetails();
      await PaymentOptionsPage.PopulateAddress();

    })

});
