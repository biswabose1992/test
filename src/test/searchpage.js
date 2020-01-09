const assert = require('assert')
const testadata=require("./../data/testdata.json")

class searchPage {
  
    get furryrabbits() {return $('#mw-search-DYM-original');}
    get suggestioncount() {return $$('//li[@class="mw-search-result"]/div/a')}
    get firstarticle(){ return $('//li[@class="mw-search-result"]/div/a')}
    get tablecontents(){return $('//div[@id="toc"]/div/h2')}
    get suggestiontext() {return $('//div[@class="searchdidyoumean"]')}

    clicksuggestion(){
    this.furryrabbits.click();
    }

    verifysuggestiontext(){

        const title= this.suggestiontext.getText();
        assert.equal(title,'Showing results for fury rabbit. Search instead for furry rabbits.');

    }
    
    verifyserachresultcount(){

        assert.equal(this.suggestioncount.length,20)
 
    }

    verifyfirstarticle(){

        this.firstarticle.click();
        const title = browser.getTitle();
        assert.equal(title,'Furry fandom - Wikipedia');

    }
}
    module.exports = new searchPage();