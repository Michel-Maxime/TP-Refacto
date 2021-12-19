const limitMaxQuality = 50
const limitMinQuality = 0

class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
  updateQuality(){}
  
  GetQualityWithLimits(number){
    if((this.quality + number) <= limitMaxQuality && (this.quality + number) >= limitMinQuality){
      return this.quality + number
    }
    else if((this.quality + number) > limitMaxQuality){
      return limitMaxQuality
    }
    return limitMinQuality
  }
}

class Vest extends Item{
  constructor(name, sellIn, quality){
    super(name, sellIn, quality)
  }
  updateQuality() {
    this.sellIn--
    if (this.quality>limitMinQuality) {
      this.quality--
    }
  }
}

class Agedbrie extends Item{
  constructor(name, sellIn, quality){
    super(name, sellIn, quality)
  }
  updateQuality(){
    this.sellIn--
    if(this.quality < limitMaxQuality){
      if (this.sellIn < 0) {
        this.quality = this.GetQualityWithLimits(2)
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
  updateQuality() {
    this.sellIn--
    if (this.quality> limitMinQuality) {
      this.quality--
    }
  }
}

class Sulfuras extends Item{
  constructor(name, sellIn){
    super(name, sellIn, 80)
  }
}

class BackstagePasses extends Item{
  constructor(name, sellIn, quality){
    super(name, sellIn, quality)
    this.peremption = 0
  }
  updateQuality(){
    this.sellIn--
    if(this.quality < limitMaxQuality){
      if (this.sellIn <= this.peremption){
        this.quality = limitMinQuality
      }
      else if(this.sellIn <= 5){
        this.quality = this.GetQualityWithLimits(3)
      } 
      else if(this.sellIn <= 10){
        this.quality = this.GetQualityWithLimits(2)
      }
      else{
        this.quality++
      }
    }
  }
}

class Conjured extends Item{
  constructor(name, sellIn, quality){
    super(name, sellIn, quality)
  }
  updateQuality(){
    this.sellIn--
    if (this.quality > limitMinQuality) {
      this.quality = this.GetQualityWithLimits(-2)
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
