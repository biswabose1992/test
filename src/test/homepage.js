const assert = require('assert')
class homePage {
  
    get searchfield() {return $('#searchInput');}

    verifytitle(){
    const title = browser.getTitle();
    //console.log(title);
    assert.equal(title,'Wikipedia');
    }

    enterserachdata(){

        this.searchfield.setValue("furry rabbits")
    }
    
}
    module.exports = new homePage();