import { describe, expect, it, beforeAll } from "vitest";
import { JSDOM } from "jsdom";
import { changeToRed, changeToGray, changeToBlack } from "../src/js/app";

describe("APP", () => {
  let dom;
  beforeAll(async () => {
    dom = await JSDOM.fromFile("index.html", {
      resources: "usable",
      runScripts: "dangerously",
    });
  });
  it("should render css", async () => {
    let document = dom.window.document;
    let link = document.querySelector("link");
    expect(link.href).toMatch(/\.\/src\/css\/style\.css$/);
  });
  it("should render the script in html", () => {
    const document = dom.window.document;
    const script = document.querySelector("script");
    expect(script).not.toBeNull();
  });

  //The functions should exist:
  it("should exist the function changeToRed", async () => {
    expect(changeToRed).toBeDefined();
    expect(typeof changeToRed).toBe("function");
  });

  it("should exist the function changeToGray", async () => {
    expect(changeToGray).toBeDefined();
    expect(typeof changeToGray).toBe("function");
  });

  it("should exist the function changeToBlack", async () => {
    expect(changeToBlack).toBeDefined();
    expect(typeof changeToBlack).toBe("function");
  });

  // Change colors
  it("changeToRed should set styles the cart button, the tag and the car img to red", () => {
    changeToRed();
    expect(imgCard.style.backgroundImage).toBe("url('./public/img/redcar.jpg')");
    expect(btnCart.style.backgroundColor).toBe("red");
    expect(tag.style.backgroundColor).toBe("red");
    expect(imgCard.alt).toBe("Red car");
  });

  it("changeToGray should set styles the cart button, the tag and the car img to gray", () => {
    changeToGray();
    expect(imgCard.style.backgroundImage).toBe("url('./public/img/graycar.jpg')");
    expect(btnCart.style.backgroundColor).toBe("gray");
    expect(tag.style.backgroundColor).toBe("gray");
    expect(imgCard.alt).toBe("Gray car");
  });

  it("changeToBlack should set styles the cart button, the tag and the car img to black", () => {
    changeToBlack();
    expect(imgCard.style.backgroundImage).toBe("url('./public/img/blackcar.jpg')");
    expect(btnCart.style.backgroundColor).toBe("black");
    expect(tag.style.backgroundColor).toBe("black");
    expect(imgCard.alt).toBe("Black carq");
  });

  /*
  //Simulate click on button
  it("clicking the button with red class should trigger changeToRed", () => {
    btn.click();
    expect(imgCard.style.backgroundImage).toBe("url('./public/img/redcar.jpg')");
    expect(btnCart.style.backgroundColor).toBe("red");
    expect(tag.style.backgroundColor).toBe("red");
  });*/
});
