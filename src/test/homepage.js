const assert = require('assert')
const testadata=require("./../data/testdata.json")

class homePage {
  
    get searchfield() {return $('#searchInput');}
    get searchbutton() {return $('//button[@type="submit"]');}
   

    verifytitle(){
    const title = browser.getTitle();
    assert.equal(title,'Wikipedia');
    }

    enterserachdata(){
        
        this.searchfield.setValue(testadata.value)     
    }

    clicksearchbutton(){

        this.searchbutton.click();
    }
    
}
    module.exports = new homePage();