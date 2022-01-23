import {
  GildedRose,
  Item,
  TEST,
  AGED_BRIE,
  SULFARAS,
  BACKSTAGE_PASS,
  CONJURED,
  MAX_QUALITY,
  MIN_QUALITY,
} from "./";

describe("GildedRose Test Suite", () => {
  it("should degrade quality twice as fast when SellIn value is passed", () => {
    const exampleItem = new Item(TEST, -5, 40);
    const gildedRoseInstance = new GildedRose([exampleItem]);
    const items = gildedRoseInstance.updateQuality();
    expect(items[0].quality).toBe(38);
  });

  it("should never degrade the quality below zero", () => {
    const exampleItem = new Item(TEST, 1, 0);
    const gildedRoseInstance = new GildedRose([exampleItem]);
    const items = gildedRoseInstance.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  it("should increase the quality of Aged Brie over time", () => {
    const exampleItem = new Item(AGED_BRIE, 10, 5);
    const gildedRoseInstance = new GildedRose([exampleItem]);
    const items = gildedRoseInstance.updateQuality();
    expect(items[0].quality).toBe(6);
  });

  it("should never increase the quality over 50", () => {
    const exampleItem = new Item(AGED_BRIE, 10, 50);
    const gildedRoseInstance = new GildedRose([exampleItem]);
    const items = gildedRoseInstance.updateQuality();
    expect(items[0].quality).toBe(50);
  });

  it("should make sure 'Sulfaras' do not age", () => {
    const exampleItem = new Item(SULFARAS, 5, 0);
    const gildedRoseInstance = new GildedRose([exampleItem]);
    const items = gildedRoseInstance.updateQuality();
    expect(items[0].sellIn).toBe(5);
  });

  it("should make sure 'Sulfaras' always have the same quality of 80", () => {
    const exampleItem = new Item(SULFARAS, 5, 80);
    const gildedRoseInstance = new GildedRose([exampleItem]);
    const items = gildedRoseInstance.updateQuality();
    expect(items[0].quality).toBe(80);
  });

  it("should make 'Backstage Passes' increase quality over time", () => {
    const exampleItem = new Item(BACKSTAGE_PASS, 30, 10);
    const gildedRoseInstance = new GildedRose([exampleItem]);
    const items = gildedRoseInstance.updateQuality();
    expect(items[0].quality).toBe(11);
  });

  it("should make 'Backstage Passes' increase quality over X2 if time is less then 10 days", () => {
    const exampleItem = new Item(BACKSTAGE_PASS, 10, 10);
    const gildedRoseInstance = new GildedRose([exampleItem]);
    const items = gildedRoseInstance.updateQuality();
    expect(items[0].quality).toBe(12);
  });

  it("should make 'Backstage Passes' increase quality over X3 if time is less then 5 days", () => {
    const exampleItem = new Item(BACKSTAGE_PASS, 5, 10);
    const gildedRoseInstance = new GildedRose([exampleItem]);
    const items = gildedRoseInstance.updateQuality();
    expect(items[0].quality).toBe(13);
  });

  it("should make 'Backstage Passes' drop quality to zero when concert is passed", () => {
    const exampleItem = new Item(BACKSTAGE_PASS, 0, 10);
    const gildedRoseInstance = new GildedRose([exampleItem]);
    const items = gildedRoseInstance.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  it("should make drop the quality of 'Conjured items' at twice the rate", () => {
    const exampleItem = new Item(CONJURED, 5, 10);
    const gildedRoseInstance = new GildedRose([exampleItem]);
    const items = gildedRoseInstance.updateQuality();
    expect(items[0].quality).toBe(8);
  });

  it("quality should never exceed the max quality level", () => {
    const exampleItem = new Item(AGED_BRIE, 5, MAX_QUALITY);
    const gildedRoseInstance = new GildedRose([exampleItem]);
    const items = gildedRoseInstance.updateQuality();
    expect(items[0].quality).toBe(MAX_QUALITY);
  });

  it("quality should never subceed the min quality level", () => {
    const exampleItem = new Item(TEST, 5, MIN_QUALITY);
    const gildedRoseInstance = new GildedRose([exampleItem]);
    const items = gildedRoseInstance.updateQuality();
    expect(items[0].quality).toBe(MIN_QUALITY);
  });
});
