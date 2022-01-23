import {
  AGED_BRIE,
  BACKSTAGE_PASS,
  CONJURED,
  MAX_QUALITY,
  MIN_QUALITY,
  SULFARAS,
  SULFARAS_QUALITY,
} from "./gilded-rose.constants";

import { Item } from "./gilded-rose.item";

export class GildedRose {
  private _items: Item[];

  public get items() {
    return this._items;
  }

  constructor(items = [] as Item[]) {
    this._items = items;
  }

  private _checkQualityBoundaries(quality: number) {
    if (quality < MIN_QUALITY) {
      return MIN_QUALITY;
    }
    if (quality > MAX_QUALITY) {
      return MAX_QUALITY;
    }
    return quality;
  }

  private _updateAgedBrieItem({ name, quality, sellIn }: Item) {
    return {
      name,
      quality: this._checkQualityBoundaries(quality + 1),
      sellIn: sellIn - 1,
    };
  }

  private _updateGeneralItem({ name, quality, sellIn }: Item) {
    const sellInHasPast = sellIn < 0;
    const multiplier = sellInHasPast ? 2 : 1;
    return {
      name,
      quality: this._checkQualityBoundaries(quality - multiplier),
      sellIn: sellIn - 1,
    };
  }

  private _updateSulfaras({ name, quality, sellIn }: Item) {
    return {
      name,
      quality: SULFARAS_QUALITY,
      sellIn,
    };
  }

  private _updateConjuredItem({ name, quality, sellIn }: Item) {
    return {
      name,
      quality: this._checkQualityBoundaries(quality - 2),
      sellIn,
    };
  }

  private _updateBackstagePasses({ name, quality, sellIn }: Item) {
    const eventIsPassed = sellIn <= 0;

    let multiplier = 1;

    if (sellIn <= 10) {
      multiplier = 2;
    }

    if (sellIn <= 5) {
      multiplier = 3;
    }

    return {
      name,
      quality: this._checkQualityBoundaries(
        eventIsPassed ? 0 : quality + multiplier
      ),
      sellIn: sellIn - 1,
    };
  }

  updateQuality() {
    this._items = this._items.map((item) => {
      switch (item.name) {
        case AGED_BRIE: {
          return this._updateAgedBrieItem(item);
        }
        case SULFARAS: {
          return this._updateSulfaras(item);
        }
        case BACKSTAGE_PASS: {
          return this._updateBackstagePasses(item);
        }
        case CONJURED: {
          return this._updateConjuredItem(item);
        }
        default:
          return this._updateGeneralItem(item);
      }
    });
    return this.items;
  }

  /*

  updateQualityLegacyV2() {
    return this.items.map((item) => {
      let { name: itemName, sellIn: itemSellIn, quality: itemQuality } = item;

      if (itemName !== AGED_BRIE && itemName !== BACKSTAGE_PASS) {
        if (itemQuality > 0) {
          if (itemName !== SULFARAS) {
            itemQuality -= 1;
          }
        }
      } else {
        if (itemQuality < 50) {
          itemQuality += 1;
          if (itemName === BACKSTAGE_PASS) {
            if (itemSellIn < 11) {
              if (itemQuality < 50) {
                itemQuality += 1;
              }
            }
            if (itemSellIn < 6) {
              if (itemQuality < 50) {
                itemQuality += 1;
              }
            }
          }
        }
      }
      if (itemName !== SULFARAS) {
        itemSellIn -= 1;
      }
      if (itemSellIn < 0) {
        if (itemName !== AGED_BRIE) {
          if (itemName !== BACKSTAGE_PASS) {
            if (itemQuality > 0) {
              if (itemName !== SULFARAS) {
                itemQuality -= 1;
              }
            }
          } else {
            itemQuality = 0;
          }
        } else {
          if (itemQuality < 50) {
            itemQuality += 1;
          }
        }
      }
      return {
        name: itemName,
        quality: itemQuality,
        sellIn: itemSellIn,
      };
    });
  }


  */
}
