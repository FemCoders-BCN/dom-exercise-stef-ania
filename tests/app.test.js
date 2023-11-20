import { describe, expect, it, beforeAll } from "vitest";
import { JSDOM } from "jsdom";
import { changeToRed, changeToGray, changeToBlack, buttonClicked } from "../src/js/app";

describe("APP", () => {
  let dom;
  let imgMock;
  let tag;
  let backgroundMock;
  let feedbackBtn;

  beforeAll(async () => {
    dom = await JSDOM.fromFile("index.html", {
      resources: "usable",
      runScripts: "dangerously",
    });
    /*
    const article = document.createElement("article");
    article.classList.add("product-card");

    imgMock = document.createElement("figure");
    imgMock.classList.add("product-image");
    article.appendChild(imgMock);

    tag = document.createElement("p");
    tag.classList.add("tag");
    article.appendChild(tag);

    backgroundMock = document.createElement("button");
    backgroundMock.id = "button";
    article.appendChild(backgroundMock);

    feedbackBtn = document.createElement("output");
    feedbackBtn.classList.add("feedback");
    article.appendChild(feedbackBtn);
    */
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

  it("should exist the function buttonClicked", async () => {
    expect(buttonClicked).toBeDefined();
    expect(typeof buttonClicked).toBe("function");
  });

  // RED COLOR:
  // Change image and colors clicking on red button
  it("changeToRed should change the image to an image of a red car", () => {
    changeToRed();
    expect(imgMock.style.backgroundImage).toBe("url('./public/img/redcar.jpg')");
  });

  it("changeToRed should change alt of the image", () => {
    changeToRed();
    expect(imgCard.alt).toBe("Red car");
  });

  it("changeToRed should change the tag's color to red", () => {
    changeToRed();
    expect(tag.style.backgroundColor).toBe("red");
  });

  it("changeToRed should change the color of the cart button to red", () => {
    changeToRed();
    expect(backgroundMock.style.backgroundColor).toBe("red");
  });

  // GRAY COLOR:
  // Change image and colors clicking on grey button
  it("changeToGray should change the image to an image of a gray car", () => {
    changeToGray();
    expect(imgMock.style.backgroundImage).toBe("url('./public/img/graycar.jpg')");
  });

  it("changeToGray should change alt of the image", () => {
    changeToGray();
    expect(imgCard.alt).toBe("Gray car");
  });

  it("changeToGray should change the tag's color to gray", () => {
    changeToGray();
    expect(tag.style.backgroundColor).toBe("gray");
  });

  it("changeToGray should change the color of the cart button to gray", () => {
    changeToGray();
    expect(backgroundMock.style.backgroundColor).toBe("gray");
  });

  // BLACK COLOR:
  // Change image and colors clicking on black button

  it("changeToBlack should change the image to an image of a black car", () => {
    changeToBlack();
    expect(imgMock.style.backgroundImage).toBe("url('./public/img/blackcar.jpg')");
  });

  it("changeToBlack should change alt of the image", () => {
    changeToBlack();
    expect(imgCard.alt).toBe("Black car");
  });

  it("changeToBlack should change the tag's color to black", () => {
    changeToBlack();
    expect(tag.style.backgroundColor).toBe("black");
  });

  it("changeToBlack should change the color of the cart button to black", () => {
    changeToBlack();
    expect(backgroundMock.style.backgroundColor).toBe("black");
  });

  /*
  //Simulate click on button
  it("clicking the button with red class should trigger changeToRed", () => {
    buttonClicked();
    expect(imgCard.style.backgroundImage).toBe("url('./public/img/redcar.jpg')");
    expect(btnCart.style.backgroundColor).toBe("red");
    expect(tag.style.backgroundColor).toBe("red");
  });*/
});
