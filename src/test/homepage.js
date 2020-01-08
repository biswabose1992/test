const assert = require('assert')
class homePage {
  
    get contactusLink() {return $('=Contact us');}

    gotocontactus(){
    this.contactusLink.click();
    
    
    }

    verifytitle(){
    const title = browser.getTitle();
    //console.log(title);
    assert.equal(title,'My Store');
    }

    
}
    module.exports = new homePage();