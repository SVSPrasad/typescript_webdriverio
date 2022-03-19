describe("elements",async()=>{

    it("login", async ()=>{

        browser.url("https://opensource-demo.orangehrmlive.com/");
        browser.maximizeWindow();

        browser.pause(3000);

        const username = await $("#txtUsername")
        const password = await $("input[name='txtPassword']")
        const login  =await $(".button")


    //    console.log("login button is enabled : "+ await login.isEnabled())     ;
    //    console.log("login button is displayed : "+await login.isDisplayed());
    //    console.log("login button is clickable : "+await login.isClickable());

    //    expect(login).toBeClickable();
    //    expect(login).toBeEnabled();
    //    expect(login).toBeDisplayed();

console.log("Text on login button is" + await login.getAttribute("value"))
console.log("color of button is " +await login.getCSSProperty('color'))

const forgotlink = await $('#forgotPasswordLink a');
const forgotLinkText = await forgotlink.getText();
console.log("forgot link text " + forgotLinkText);
expect(forgotlink).toHaveValueContaining("forgot");
expect(forgotlink).toHaveValue("Forgot your password?");

        await username.setValue("admin");
        console.log("username entered is " + await username.getValue())
        await password.setValue("admin123");
        console.log("password entered is " + await password.getValue())
        await login.click();

    });
});