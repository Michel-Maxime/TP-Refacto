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
      if (this.sellIn < 0) {
        this.quality += 2
      }
      else {
        this.quality++
      }
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
    this.sellIn = this.sellIn // voir pour faire mieux
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

      if (this.sellIn <= this.peremption){
        this.quality = 0
      }
      else if(this.sellIn <= 5){
        this.quality += 3
      } 
      else if(this.sellIn <= 10){
        this.quality+= 2
      }
      else{
        this.quality++
      }

    }
    if (this.quality > 50 ) {
      this.quality = 50
    }
  }
}

class Conjured extends Item{
  constructor(name, sellIn, quality){
    super(name, sellIn, quality)
  }
  updateQuality(){
    this.sellIn--
    if (this.quality > 0) {
      this.quality -= 2
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
  Conjured,
  Shop
}
