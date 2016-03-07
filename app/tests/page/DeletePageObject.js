var deleteUser = function() {

var someProfile =element.all(by.className('img-circle')).get(4);
var profiles =element.all(by.className('img-circle'));  
var deleteBtn= element(by.id('deleteBtn'));  
var YesBtn= element(by.id('daBtn'));  
var NoBtn= element(by.id('neBtn'));  
var modal= element(by.id('myModal'));

this.get = function (value) {
        browser.get(value);
    };
    
    this.DeleteUser = function () {
        someProfile.click();
        deleteBtn.click();
        browser.wait(EC.visibilityOf(modal), 5000);
        YesBtn.click();
        browser.wait(EC.visibilityOf(someProfile), 5000);
    };  
    
     this.CancelDelete = function () {
        someProfile.click();
        deleteBtn.click();
        browser.wait(EC.visibilityOf(modal), 5000);
        NoBtn.click();
    };  
    
    
   this.CountProfile = function(){
       var items = element.all(by.className('img-circle'));  
       items.count().then(function(originalCount) {
       startCount = originalCount;
       return startCount;
   });
   
  };    
};
module.exports = new deleteUser();