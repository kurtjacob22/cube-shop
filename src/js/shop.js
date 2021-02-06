var count = 0;
var totalPrice = 0;
var yuxinProductCount = 0;
var gts3MProductCount = 0;
var valk3ProductCount = 0;
var dayanProductCount = 0;
var gan356ProductCount = 0;
var qiyiProductCount = 0;
var mf3RSProductCount = 0;
var yulongProductCount = 0;
var shengShouProductCount = 0;

function addToCart(amount) {
  count++;
  totalPrice += amount;
  document.getElementById("countPurchases").innerHTML = count;
  document.getElementById("displayTotal").innerHTML = "TOTAL : $" + totalPrice;
}

//* FILTER

function filterProduct() {
  var price = document.getElementById("filterPrice");

  if (price.value === "Price") {
    document.getElementById("yuxinProduct").classList.remove("hide");
    document.getElementById("gts3MProduct").classList.remove("hide");
    document.getElementById("valk3Product").classList.remove("hide");
    document.getElementById("dayanProduct").classList.remove("hide");
    document.getElementById("gan356Product").classList.remove("hide");
    document.getElementById("qiyiProduct").classList.remove("hide");
    document.getElementById("mf3RSProduct").classList.remove("hide");
    document.getElementById("yulongProduct").classList.remove("hide");
    document.getElementById("shengShouProduct").classList.remove("hide");

    document.getElementById("littleMagicBtn").disabled = false;
    document.getElementById("gts3MBtn").disabled = false;
    document.getElementById("valk3EliteBtn").disabled = false;
    document.getElementById("dayanBtn").disabled = false;
    document.getElementById("gan356Btn").disabled = false;
    document.getElementById("qiyiThunderclapBtn").disabled = false;
    document.getElementById("mf3RSBtn").disabled = false;
    document.getElementById("yjYulongBtn").disabled = false;
    document.getElementById("shengShouBtn").disabled = false;

    console.log("All Price");
  } else if (price.value === "under") {
    document.getElementById("gts3MProduct").classList.add("hide");
    document.getElementById("valk3Product").classList.add("hide");
    document.getElementById("gan356Product").classList.add("hide");
    document.getElementById("shengShouProduct").classList.add("hide");

    document.getElementById("gts3MBtn").disabled = true;
    document.getElementById("valk3EliteBtn").disabled = true;
    document.getElementById("gan356Btn").disabled = true;
    document.getElementById("shengShouBtn").disabled = true;

    // show

    document.getElementById("yuxinProduct").classList.remove("hide");
    document.getElementById("dayanProduct").classList.remove("hide");
    document.getElementById("qiyiProduct").classList.remove("hide");
    document.getElementById("mf3RSProduct").classList.remove("hide");
    document.getElementById("yulongProduct").classList.remove("hide");

    document.getElementById("littleMagicBtn").disabled = false;
    document.getElementById("dayanBtn").disabled = false;
    document.getElementById("qiyiThunderclapBtn").disabled = false;
    document.getElementById("mf3RSBtn").disabled = false;
    document.getElementById("yjYulongBtn").disabled = false;

    console.log("Under $10");
  } else if (price.value === "above") {
    document.getElementById("yuxinProduct").classList.add("hide");
    document.getElementById("dayanProduct").classList.add("hide");
    document.getElementById("qiyiProduct").classList.add("hide");
    document.getElementById("mf3RSProduct").classList.add("hide");
    document.getElementById("yulongProduct").classList.add("hide");

    document.getElementById("littleMagicBtn").disabled = true;
    document.getElementById("dayanBtn").disabled = true;
    document.getElementById("qiyiThunderclapBtn").disabled = true;
    document.getElementById("mf3RSBtn").disabled = true;
    document.getElementById("yjYulongBtn").disabled = true;
    // show
    document.getElementById("gts3MProduct").classList.remove("hide");
    document.getElementById("valk3Product").classList.remove("hide");
    document.getElementById("gan356Product").classList.remove("hide");
    document.getElementById("shengShouProduct").classList.remove("hide");

    document.getElementById("gts3MBtn").disabled = false;
    document.getElementById("valk3EliteBtn").disabled = false;
    document.getElementById("gan356Btn").disabled = false;
    document.getElementById("shengShouBtn").disabled = false;

    console.log("$10 - 20$");
  } else if (price.value === "quality") {
    document.getElementById("yuxinProduct").classList.remove("hide");
    document.getElementById("gts3MProduct").classList.remove("hide");
    document.getElementById("valk3Product").classList.remove("hide");
    document.getElementById("dayanProduct").classList.remove("hide");
    document.getElementById("gan356Product").classList.remove("hide");
    document.getElementById("qiyiProduct").classList.remove("hide");
    document.getElementById("mf3RSProduct").classList.remove("hide");
    document.getElementById("yulongProduct").classList.remove("hide");
    document.getElementById("shengShouProduct").classList.remove("hide");

    document.getElementById("littleMagicBtn").disabled = false;
    document.getElementById("gts3MBtn").disabled = false;
    document.getElementById("valk3EliteBtn").disabled = false;
    document.getElementById("dayanBtn").disabled = false;
    document.getElementById("gan356Btn").disabled = false;
    document.getElementById("qiyiThunderclapBtn").disabled = false;
    document.getElementById("mf3RSBtn").disabled = false;
    document.getElementById("yjYulongBtn").disabled = false;
    document.getElementById("shengShouBtn").disabled = false;

    console.log("All Quality");
  } else if (price.value === "stickered") {
    document.getElementById("gts3MProduct").classList.add("hide");
    document.getElementById("valk3Product").classList.add("hide");
    document.getElementById("dayanProduct").classList.add("hide");
    document.getElementById("gan356Product").classList.add("hide");
    document.getElementById("mf3RSProduct").classList.add("hide");
    document.getElementById("shengShouProduct").classList.add("hide");

    document.getElementById("gts3MBtn").disabled = true;
    document.getElementById("valk3EliteBtn").disabled = true;
    document.getElementById("dayanBtn").disabled = true;
    document.getElementById("gan356Btn").disabled = true;
    document.getElementById("mf3RSBtn").disabled = true;
    document.getElementById("shengShouBtn").disabled = true;
    // SHOW
    document.getElementById("yuxinProduct").classList.remove("hide");
    document.getElementById("qiyiProduct").classList.remove("hide");
    document.getElementById("yulongProduct").classList.remove("hide");

    document.getElementById("littleMagicBtn").disabled = false;
    document.getElementById("qiyiThunderclapBtn").disabled = false;
    document.getElementById("yjYulongBtn").disabled = false;

    qualityValue = "stickered";
    console.log("Stickered");
  } else if (price.value === "stickerless") {
    document.getElementById("yuxinProduct").classList.add("hide");
    document.getElementById("qiyiProduct").classList.add("hide");
    document.getElementById("yulongProduct").classList.add("hide");

    document.getElementById("littleMagicBtn").disabled = true;
    document.getElementById("qiyiThunderclapBtn").disabled = true;
    document.getElementById("yjYulongBtn").disabled = true;
    // SHOW
    document.getElementById("gts3MProduct").classList.remove("hide");
    document.getElementById("valk3Product").classList.remove("hide");
    document.getElementById("dayanProduct").classList.remove("hide");
    document.getElementById("gan356Product").classList.remove("hide");
    document.getElementById("mf3RSProduct").classList.remove("hide");
    document.getElementById("shengShouProduct").classList.remove("hide");

    document.getElementById("gts3MBtn").disabled = false;
    document.getElementById("valk3EliteBtn").disabled = false;
    document.getElementById("dayanBtn").disabled = false;
    document.getElementById("gan356Btn").disabled = false;
    document.getElementById("mf3RSBtn").disabled = false;
    document.getElementById("shengShouBtn").disabled = false;
  }
}

function Home() {
  window.location.href = "../../index.html";
}

function OurStory() {
  window.location.href = "././our-story.html";
}

function Shop() {
  window.location.replace("././shop.html");
}

function Tournament() {
  alert("closing this page means that you are logging out your account");
  window.location.replace("https://www.worldcubeassociation.org/competitions");
}

function LogOut() {
  window.location.replace("../../index.html");
}

document
  .getElementById("littleMagicBtn")
  .addEventListener("click", function () {
    yuxinProductCount++;
    console.log(yuxinProductCount);
  });

document.getElementById("gts3MBtn").addEventListener("click", function () {
  gts3MProductCount++;
  console.log(gts3MProductCount);
});

document.getElementById("valk3EliteBtn").addEventListener("click", function () {
  valk3ProductCount++;
  console.log(valk3ProductCount);
});

document.getElementById("dayanBtn").addEventListener("click", function () {
  dayanProductCount++;
  console.log(dayanProductCount);
});

document.getElementById("gan356Btn").addEventListener("click", function () {
  gan356ProductCount++;
  console.log(gan356ProductCount);
});

document
  .getElementById("qiyiThunderclapBtn")
  .addEventListener("click", function () {
    qiyiProductCount++;
    console.log(qiyiProductCount);
  });

document.getElementById("mf3RSBtn").addEventListener("click", function () {
  mf3RSProductCount++;
  console.log(mf3RSProductCount);
});

document.getElementById("yjYulongBtn").addEventListener("click", function () {
  yulongProductCount++;
  console.log(yulongProductCount);
});

document.getElementById("shengShouBtn").addEventListener("click", function () {
  shengShouProductCount++;
  console.log(shengShouProductCount);
});

function shippingVer() {
  if (totalPrice == 0) {
    alert("Please Pick a Product");
  } else {
    confirm(
      "Pls Confirm your purchases: \n\n" +
        getProductQty("YuXin Little Magic 3x3", yuxinProductCount) +
        getProductQty("MoYu WeiLong GTS3 M", gts3MProductCount) +
        getProductQty("Valk 3 Elite", valk3ProductCount) +
        getProductQty("DaYan TengYun M", dayanProductCount) +
        getProductQty("GAN356 X", gan356ProductCount) +
        getProductQty("QiYi Thunderclap", qiyiProductCount) +
        getProductQty("MoFang JiaoShi MF3RS", mf3RSProductCount) +
        getProductQty("YJ Yulong V2 M", yulongProductCount) +
        getProductQty("ShengShou Mr. M 3x3", shengShouProductCount) +
        "\nTotal Amount is: $" +
        totalPrice
    )
      ? (window.location.href = "../../src/confirm-payment.html")
      : alert("purchase cancelled");
  }

  // import "../../src/confirm-payment.html"
}

function getProductQty(prodName, prodCount) {
  var cont;
  if (prodCount != 0) {
    return (cont = prodCount + "x " + prodName + "\n");
  } else {
    return "";
  }
}
