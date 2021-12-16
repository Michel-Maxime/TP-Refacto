class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
  
  updateQuality(){
    this.sellIn--
    if (this.quality>0) {
      this.quality--
    }
  }

}

class Vest extends Item{
  constructor(name, sellIn, quality){
    super(name, sellIn, quality)
  }
}

class Agedbrie extends Item{
  constructor(name, sellIn, quality){
    super(name, sellIn, quality)
  }
  updateQuality(){
    this.sellIn--
    if(this.quality<50){
        this.quality++
    }
  }
}

class Elixir extends Item{
  constructor(name, sellIn, quality){
    super(name, sellIn, quality)
  }
}

class Sulfuras extends Item{ // pas de date de peremption
  constructor(name, sellIn){
    super(name, sellIn, 80)
  }
  updateQuality(){
    this.sellIn--
  }
}

class BackstagePasses extends Item{
  constructor(name, sellIn, quality){
    super(name, sellIn, quality)
    this.peremption = 0
  }
  updateQuality(){
    this.sellIn--
    if(this.quality < 50){
      switch (true) {
        case (this.sellIn <= this.peremption):
          this.quality = 0
          break;
        case (this.sellIn <= 5):
          this.quality += 3
          break;
        case (this.sellIn <= 10):
          this.quality += 2
          break;
        default:
          this.quality++
          break;
      }
    }
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    this.items.forEach(item => item.updateQuality())
    return this.items
  }
}

module.exports = {
  Item,
  Vest,
  Agedbrie,
  Elixir,
  Sulfuras,
  BackstagePasses,
  Shop
}
