var DeleteUser = function() {

    var someProfile = element.all(by.className("img-circle")).get(0);
    var deleteBtn = element(by.id("deleteBtn"));
    var YesBtn = element(by.id("daBtn"));
    var NoBtn = element(by.id("neBtn"));
    var modal = element(by.id("myModal"));
    var alertmessage = element(by.id("messagelabel"));

    this.get = function(value) {
        browser.get(value);
    };

    this.DeleteProfile = function() {
        someProfile.click();
        deleteBtn.click();
        browser.wait(EC.visibilityOf(modal), 5000);
        YesBtn.click();
        browser.wait(EC.visibilityOf(someProfile), 5000);
    };

    this.DeleteFilteredUser = function() {
        someProfile.click();
        deleteBtn.click();
        browser.wait(EC.visibilityOf(modal), 5000);
        YesBtn.click();

    };

    this.deleteBtnIsVisible = function() {
        var ispresent = deleteBtn.isPresent();
        return ispresent;
    };
    this.CancelDelete = function() {
        someProfile.click();
        deleteBtn.click();
        browser.wait(EC.visibilityOf(modal), 5000);
        NoBtn.click();
    };
    
    this.IsDeleteBtnIsVisible = function() {
        return deleteBtn.isPresent();
    };


    this.ReturnMessage = function() {
        var message = alertmessage.getText();
        return message;
    };
};
module.exports = new DeleteUser();