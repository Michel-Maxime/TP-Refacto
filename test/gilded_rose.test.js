const {Shop, Item, Vest, Agedbrie, Elixir, Sulfuras, BackstagePasses, Conjured} = require("../src/gilded_rose");

describe("Dexterity Vest", function(){
  it("should downgrade quality and sellIn", function(){
    const vest = new Vest("+5 Dexterity Vest", 10, 20);
    vest.updateQuality();
    expect(vest.sellIn).toBe(9);
    expect(vest.quality).toBe(19);
  });
});

describe("Aged Brie", function(){

  it("should downgrade sellIn and upgrade quality", function(){
    const brie = new Agedbrie("Aged Brie", 10, 20);
    brie.updateQuality();
    expect(brie.sellIn).toBe(9);
    expect(brie.quality).toBe(21);
  });

  it("should dowgrade sellIn and upgrade quality by 2 when sellIn < 0", function(){
    const brie = new Agedbrie("Aged Brie", 0, 20)
    brie.updateQuality();
    expect(brie.sellIn).toBe(-1);
    expect(brie.quality).toBe(22);
  });

  it("should not have a quality over 50", function(){
    const brie = new Agedbrie("Aged Brie", -1, 49)
    brie.updateQuality();
    expect(brie.sellIn).toBe(-2);
    expect(brie.quality).toBe(50);
  });

});

describe("Elixir of the Mongoose", function(){

  it("should downgrade quality and sellIn", function(){
    const elixir = new Elixir("Aged Brie", 10, 20);
    elixir.updateQuality();
    expect(elixir.sellIn).toBe(9);
    expect(elixir.quality).toBe(19);
  });

  it("should not go under 0 for quality", function(){
    const elixir = new Elixir("Elixir of the Mongoose", 0, 0)
    elixir.updateQuality();
    expect(elixir.sellIn).toBe(-1);
    expect(elixir.quality).toBe(0);
  });
});

describe("Sulfuras, Hand of Ragnaros", function(){

  it("should not downgrade or upgrade quality  sellIn", function(){
    const sulfuras = new Sulfuras("Sulfuras, Hand of Ragnaros", 0, 80);
    sulfuras.updateQuality();
    expect(sulfuras.sellIn).toBe(0);
    expect(sulfuras.quality).toBe(80);
  });

});

describe("Backstage passes to a TAFKAL80ETC concert", function(){

  it("should downgrade sellIn and upgrade quality", function(){
    const passes = new BackstagePasses("Backstage passes to a TAFKAL80ETC concert", 15, 20);
    passes.updateQuality();
    expect(passes.sellIn).toBe(14);
    expect(passes.quality).toBe(21);
  });

  it("should downgrade sellIn by 1 and upgrade quality by 2 when sellIn is < 10", function(){
    const passes = new BackstagePasses("Backstage passes to a TAFKAL80ETC concert", 10, 20);
    passes.updateQuality();
    expect(passes.sellIn).toBe(9);
    expect(passes.quality).toBe(22);
  });
  
  it("should downgrade sellIn by 1 and upgrade quality by 3 when sellIn is < 5", function(){
    const passes = new BackstagePasses("Backstage passes to a TAFKAL80ETC concert", 5, 20);
    passes.updateQuality();
    expect(passes.sellIn).toBe(4);
    expect(passes.quality).toBe(23);
  });

  it("should downgrade sellIn by 1 and upgrade quality should not be over 50", function(){
    const passes = new BackstagePasses("Backstage passes to a TAFKAL80ETC concert", 5, 50);
    passes.updateQuality();
    expect(passes.sellIn).toBe(4);
    expect(passes.quality).toBe(50);
  });

  it("should downgrade sellIn by 1 and quality should go down to 0", function(){
    const passes = new BackstagePasses("Backstage passes to a TAFKAL80ETC concert", 0, 20);
    passes.updateQuality();
    expect(passes.sellIn).toBe(-1);
    expect(passes.quality).toBe(0);
  });
});

describe("Conjured Mana Cake", function(){

  it("should downgrade sellIn and quality should downgrade by 2", function(){
    const cake = new Conjured("Conjured Mana Cake", 15, 20);
    cake.updateQuality();
    expect(cake.sellIn).toBe(14);
    expect(cake.quality).toBe(18);
  });

  
  it("should downgrade sellIn and quality should not be under 0", function(){
    const cake = new Conjured("Conjured Mana Cake", 15, 1);
    cake.updateQuality();
    expect(cake.sellIn).toBe(14);
    expect(cake.quality).toBe(0);
  });

});

describe("Gilded Rose", function() {
  it("should return following statements", function() {
    const gildedRose = new Shop([
      new Vest("+5 Dexterity Vest", 10, 20),
      new Agedbrie("Aged Brie", 2, 0),
      new Elixir("Elixir of the Mongoose", 5, 7),
      new Sulfuras("Sulfuras, Hand of Ragnaros", 0, 80),
      new Sulfuras("Sulfuras, Hand of Ragnaros", -1, 80),
      new BackstagePasses("Backstage passes to a TAFKAL80ETC concert", 15, 20),
      new BackstagePasses("Backstage passes to a TAFKAL80ETC concert", 10, 20),
      new BackstagePasses("Backstage passes to a TAFKAL80ETC concert", 5, 20),
      new Conjured("Conjured Mana Cake", 3, 6),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("+5 Dexterity Vest");
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(19);
    expect(items[1].sellIn).toBe(1);
    expect(items[1].quality).toBe(1);
    expect(items[2].sellIn).toBe(4);
    expect(items[2].quality).toBe(6);
    expect(items[3].sellIn).toBe(0);
    expect(items[3].quality).toBe(80);
    expect(items[4].sellIn).toBe(-1);
    expect(items[4].quality).toBe(80);
    expect(items[5].sellIn).toBe(14);
    expect(items[5].quality).toBe(21);
    expect(items[6].sellIn).toBe(9);
    expect(items[6].quality).toBe(22);
    expect(items[7].sellIn).toBe(4);
    expect(items[7].quality).toBe(23);
    expect(items[8].sellIn).toBe(2);
    expect(items[8].quality).toBe(4);
  });
});