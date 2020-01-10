const assert = require('assert')
const testadata=require("./../data/testdata.json")

class searchPage {
  
    get furryrabbits() {return $('//div[@class="searchdidyoumean"]/a')}
    get suggestioncount() {return $$('//li[@class="mw-search-result"]/div/a')}
    get firstarticle(){ return $('//li[@class="mw-search-result"]/div/a')}
    get tablecontents(){return $('//div[@id="toc"]/div/h2')}
    get suggestiontext() {return $('//div[@class="searchdidyoumean"]')}

    clicksuggestion(){
    this.furryrabbits.click();
    }

    verifysuggestiontext(){

        const title= this.suggestiontext.getText();
        assert.equal(title,'Did you mean: fury rabbit');

    }
    
    verifyserachresultcount(int){

        assert.equal(this.suggestioncount.length,int)
 
    }

    verifyfirstarticle(){

        this.firstarticle.click();
        const title = browser.getTitle();
        assert.equal(title,'Dirty Little Rabbits - Wikipedia');

    }
}
    module.exports = new searchPage();