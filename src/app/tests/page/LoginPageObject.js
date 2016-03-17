var logInPage = function() {



    var signBtn = element(by.id("btn-login"));
    var profile = element.all(by.className("img-circle"));
    var logOutbtn = element(by.id("logout"));
    var name = element(by.id("usernamefield"));
    var Filtered_names = element.all(by.css("body > app > div > login > div > div > div:nth-child(2) > div")).get(0);
    var loggedUser = element(by.css("body > app > div > home > div > div > b"));
    var profile_number;
    var random_no;
    var profileNames;
    var selectedName;
    var loggedUsername;


    this.get = function(value) {
        browser.get(value);
    };

    this.LogIn = function() {
        profile.count().then(function(counted) {
            console.log(counted);
            profile_number = parseInt(counted);
            console.log("Profilenumber: " + profile_number);
            random_no = Math.floor(Math.random() * (profile_number - 1));
            profileNames = element.all(by.className("text-overflow")).get(random_no);
            profileNames.getAttribute("innerHTML").then(function(text) {
                selectedName = text;
                console.log("Random number: " + random_no);
                console.log("Selected user:" + selectedName);
                profile.get(random_no).click();
                signBtn.click();
            });
        });

    };


    this.LogOut = function() {
        logOutbtn.click();
    };

    this.getCurrentURL = function() {
        return browser.getCurrentUrl();
    };

    this.FilterUsername = function(filter) {
        name.sendKeys(filter);

    }

    this.FilterUsernameClear = function(filter) {
        name.clear();

    }
    this.GetTextFromFilter = function() {
        var names = Filtered_names.getText();
        return names;
    }

    this.signBtnIsVisible = function() {
        var ispresent = signBtn.isPresent();
        return ispresent;
    }

    this.GetLoggedUser = function() {
        loggedUser.getAttribute("innerHTML").then(function(text) {
        loggedUsername = text;
        console.log("User logged in: " + loggedUsername);
        return loggedUsername;
        });
    };

    this.GetSelectedUser = function() {
        return selectedName;
    };
    
    this.GetTitle = function (){
        var title = browser.getTitle();
        return title;
    }



};

module.exports = new logInPage();