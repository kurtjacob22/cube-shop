var count = 0;

var productSubTotal = [, 0, 0, 0, 0, 0, 0, 0, 0, 0];

var yuxinProductCount = 0;
var gts3MProductCount = 0;
var valk3ProductCount = 0;
var dayanProductCount = 0;
var gan356ProductCount = 0;
var qiyiProductCount = 0;
var mf3RSProductCount = 0;
var yulongProductCount = 0;
var shengShouProductCount = 0;

function addToCart(amount, productKey) {
  count++; //! increments the count number in cart
  productSubTotal[productKey] += amount;
  // console.log(productSubTotal[productKey]);
  document.getElementById("countPurchases").innerHTML = count;
  document.getElementById("displayTotal").innerHTML =
    "TOTAL : $" + getArraySum(productSubTotal);
}

function removeToCart(amount, productKey) {
  if (productSubTotal[productKey] > 0) {
    count--; //! decrements the count number in cart
    productSubTotal[productKey] -= amount;
    // console.log(productSubTotal[productKey]);
    document.getElementById("countPurchases").innerHTML = count;
    document.getElementById("displayTotal").innerHTML =
      "TOTAL : $" + getArraySum(productSubTotal);
  } else {
    alert("Add this item first");
  }
}

function getArraySum(a) {
  var total = 0;
  for (var i in a) {
    total += a[i];
  }
  return total;
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

    document.getElementById("littleMagicBtn2").disabled = false;
    document.getElementById("gts3MBtn2").disabled = false;
    document.getElementById("valk3EliteBtn2").disabled = false;
    document.getElementById("dayanBtn2").disabled = false;
    document.getElementById("gan356Btn2").disabled = false;
    document.getElementById("qiyiThunderclapBtn2").disabled = false;
    document.getElementById("mf3RSBtn2").disabled = false;
    document.getElementById("yjYulongBtn2").disabled = false;
    document.getElementById("shengShouBtn2").disabled = false;

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

    document.getElementById("gts3MBtn2").disabled = true;
    document.getElementById("valk3EliteBtn2").disabled = true;
    document.getElementById("gan356Btn2").disabled = true;
    document.getElementById("shengShouBtn2").disabled = true;

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

    document.getElementById("littleMagicBtn2").disabled = false;
    document.getElementById("dayanBtn2").disabled = false;
    document.getElementById("qiyiThunderclapBtn2").disabled = false;
    document.getElementById("mf3RSBtn2").disabled = false;
    document.getElementById("yjYulongBtn2").disabled = false;

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

    document.getElementById("littleMagicBtn2").disabled = true;
    document.getElementById("dayanBtn2").disabled = true;
    document.getElementById("qiyiThunderclapBtn2").disabled = true;
    document.getElementById("mf3RSBtn2").disabled = true;
    document.getElementById("yjYulongBtn2").disabled = true;
    // show
    document.getElementById("gts3MProduct").classList.remove("hide");
    document.getElementById("valk3Product").classList.remove("hide");
    document.getElementById("gan356Product").classList.remove("hide");
    document.getElementById("shengShouProduct").classList.remove("hide");

    document.getElementById("gts3MBtn").disabled = false;
    document.getElementById("valk3EliteBtn").disabled = false;
    document.getElementById("gan356Btn").disabled = false;
    document.getElementById("shengShouBtn").disabled = false;

    document.getElementById("gts3MBtn2").disabled = false;
    document.getElementById("valk3EliteBtn2").disabled = false;
    document.getElementById("gan356Btn2").disabled = false;
    document.getElementById("shengShouBtn2").disabled = false;

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

    document.getElementById("littleMagicBtn2").disabled = false;
    document.getElementById("gts3MBtn2").disabled = false;
    document.getElementById("valk3EliteBtn2").disabled = false;
    document.getElementById("dayanBtn2").disabled = false;
    document.getElementById("gan356Btn2").disabled = false;
    document.getElementById("qiyiThunderclapBtn2").disabled = false;
    document.getElementById("mf3RSBtn2").disabled = false;
    document.getElementById("yjYulongBtn2").disabled = false;
    document.getElementById("shengShouBtn2").disabled = false;

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

    document.getElementById("gts3MBtn2").disabled = true;
    document.getElementById("valk3EliteBtn2").disabled = true;
    document.getElementById("dayanBtn2").disabled = true;
    document.getElementById("gan356Btn2").disabled = true;
    document.getElementById("mf3RSBtn2").disabled = true;
    document.getElementById("shengShouBtn2").disabled = true;
    // SHOW
    document.getElementById("yuxinProduct").classList.remove("hide");
    document.getElementById("qiyiProduct").classList.remove("hide");
    document.getElementById("yulongProduct").classList.remove("hide");

    document.getElementById("littleMagicBtn").disabled = false;
    document.getElementById("qiyiThunderclapBtn").disabled = false;
    document.getElementById("yjYulongBtn").disabled = false;

    document.getElementById("littleMagicBtn2").disabled = false;
    document.getElementById("qiyiThunderclapBtn2").disabled = false;
    document.getElementById("yjYulongBtn2").disabled = false;

    qualityValue = "stickered";
    console.log("Stickered");
  } else if (price.value === "stickerless") {
    document.getElementById("yuxinProduct").classList.add("hide");
    document.getElementById("qiyiProduct").classList.add("hide");
    document.getElementById("yulongProduct").classList.add("hide");

    document.getElementById("littleMagicBtn").disabled = true;
    document.getElementById("qiyiThunderclapBtn").disabled = true;
    document.getElementById("yjYulongBtn").disabled = true;

    document.getElementById("littleMagicBtn2").disabled = true;
    document.getElementById("qiyiThunderclapBtn2").disabled = true;
    document.getElementById("yjYulongBtn2").disabled = true;
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

    document.getElementById("gts3MBtn2").disabled = false;
    document.getElementById("valk3EliteBt2").disabled = false;
    document.getElementById("dayanBtn2").disabled = false;
    document.getElementById("gan356Btn2").disabled = false;
    document.getElementById("mf3RSBtn2").disabled = false;
    document.getElementById("shengShouBtn2").disabled = false;
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
    if (yuxinProductCount > 1) {
      document.getElementById("countLittleMagic").innerHTML =
        yuxinProductCount + " pcs";
    } else {
      document.getElementById("countLittleMagic").innerHTML =
        yuxinProductCount + " pc";
    }

    console.log(yuxinProductCount);
  });

document
  .getElementById("littleMagicBtn2")
  .addEventListener("click", function () {
    if (yuxinProductCount > 0) {
      yuxinProductCount--;
      console.log(yuxinProductCount);
      if (yuxinProductCount > 1) {
        document.getElementById("countLittleMagic").innerHTML =
          yuxinProductCount + " pcs";
      } else {
        document.getElementById("countLittleMagic").innerHTML =
          yuxinProductCount + " pc";
      }
    }
  });

document.getElementById("gts3MBtn").addEventListener("click", function () {
  gts3MProductCount++;
  if (gts3MProductCount > 1) {
    document.getElementById("countGts").innerHTML = gts3MProductCount + " pcs";
  } else {
    document.getElementById("countGts").innerHTML = gts3MProductCount + " pc";
  }
  console.log(gts3MProductCount);
});

document.getElementById("gts3MBtn2").addEventListener("click", function () {
  if (gts3MProductCount > 0) {
    gts3MProductCount--;
    if (gts3MProductCount > 1) {
      document.getElementById("countGts").innerHTML =
        gts3MProductCount + " pcs";
    } else {
      document.getElementById("countGts").innerHTML = gts3MProductCount + " pc";
    }
    console.log(gts3MProductCount);
  }
});

document.getElementById("valk3EliteBtn").addEventListener("click", function () {
  valk3ProductCount++;
  if (valk3ProductCount > 1) {
    document.getElementById("countValk3").innerHTML =
      valk3ProductCount + " pcs";
  } else {
    document.getElementById("countValk3").innerHTML = valk3ProductCount + " pc";
  }
  console.log(valk3ProductCount);
});

document
  .getElementById("valk3EliteBtn2")
  .addEventListener("click", function () {
    if (valk3ProductCount > 0) {
      valk3ProductCount--;
      if (valk3ProductCount > 1) {
        document.getElementById("countValk3").innerHTML =
          valk3ProductCount + " pcs";
      } else {
        document.getElementById("countValk3").innerHTML =
          valk3ProductCount + " pc";
      }
      console.log(valk3ProductCount);
    }
  });

document.getElementById("dayanBtn").addEventListener("click", function () {
  dayanProductCount++;
  if (dayanProductCount > 1) {
    document.getElementById("countDayan").innerHTML =
      dayanProductCount + " pcs";
  } else {
    document.getElementById("countDayan").innerHTML = dayanProductCount + " pc";
  }
  console.log(dayanProductCount);
});

document.getElementById("dayanBtn2").addEventListener("click", function () {
  if (dayanProductCount > 0) {
    dayanProductCount--;
    if (dayanProductCount > 1) {
      document.getElementById("countDayan").innerHTML =
        dayanProductCount + " pcs";
    } else {
      document.getElementById("countDayan").innerHTML =
        dayanProductCount + " pc";
    }
    console.log(dayanProductCount);
  }
});

document.getElementById("gan356Btn").addEventListener("click", function () {
  gan356ProductCount++;
  if (gan356ProductCount > 1) {
    document.getElementById("countGan356").innerHTML =
      gan356ProductCount + " pcs";
  } else {
    document.getElementById("countGan356").innerHTML =
      gan356ProductCount + " pc";
  }
  console.log(gan356ProductCount);
});

document.getElementById("gan356Btn2").addEventListener("click", function () {
  if (gan356ProductCount > 0) {
    gan356ProductCount--;
    if (gan356ProductCount > 1) {
      document.getElementById("countGan356").innerHTML =
        gan356ProductCount + " pcs";
    } else {
      document.getElementById("countGan356").innerHTML =
        gan356ProductCount + " pc";
    }
    console.log(gan356ProductCount);
  }
});

document
  .getElementById("qiyiThunderclapBtn")
  .addEventListener("click", function () {
    qiyiProductCount++;
    if (qiyiProductCount > 1) {
      document.getElementById("countThunderClap").innerHTML =
        qiyiProductCount + " pcs";
    } else {
      document.getElementById("countThunderClap").innerHTML =
        qiyiProductCount + " pc";
    }
    console.log(qiyiProductCount);
  });

document
  .getElementById("qiyiThunderclapBtn2")
  .addEventListener("click", function () {
    if (qiyiProductCount > 0) {
      qiyiProductCount--;
      if (qiyiProductCount > 1) {
        document.getElementById("countThunderClap").innerHTML =
          qiyiProductCount + " pcs";
      } else {
        document.getElementById("countThunderClap").innerHTML =
          qiyiProductCount + " pc";
      }
      console.log(qiyiProductCount);
    }
  });

document.getElementById("mf3RSBtn").addEventListener("click", function () {
  mf3RSProductCount++;
  if (mf3RSProductCount > 1) {
    document.getElementById("countMF3RS").innerHTML =
      mf3RSProductCount + " pcs";
  } else {
    document.getElementById("countMF3RS").innerHTML = mf3RSProductCount + " pc";
  }
  console.log(mf3RSProductCount);
});

document.getElementById("mf3RSBtn2").addEventListener("click", function () {
  if (mf3RSProductCount > 0) {
    mf3RSProductCount--;
    if (mf3RSProductCount > 1) {
      document.getElementById("countMF3RS").innerHTML =
        mf3RSProductCount + " pcs";
    } else {
      document.getElementById("countMF3RS").innerHTML =
        mf3RSProductCount + " pc";
    }
    console.log(mf3RSProductCount);
  }
});

document.getElementById("yjYulongBtn").addEventListener("click", function () {
  yulongProductCount++;
  if (yulongProductCount > 1) {
    document.getElementById("countYulong").innerHTML =
      yulongProductCount + " pcs";
  } else {
    document.getElementById("countYulong").innerHTML =
      yulongProductCount + " pc";
  }
  console.log(yulongProductCount);
});

document.getElementById("yjYulongBtn2").addEventListener("click", function () {
  if (yulongProductCount > 0) {
    yulongProductCount--;
    if (yulongProductCount > 1) {
      document.getElementById("countYulong").innerHTML =
        yulongProductCount + " pcs";
    } else {
      document.getElementById("countYulong").innerHTML =
        yulongProductCount + " pc";
    }
    console.log(yulongProductCount);
  }
});

document.getElementById("shengShouBtn").addEventListener("click", function () {
  shengShouProductCount++;
  if (shengShouProductCount > 1) {
    document.getElementById("countShengShou").innerHTML =
      shengShouProductCount + " pcs";
  } else {
    document.getElementById("countShengShou").innerHTML =
      shengShouProductCount + " pc";
  }
  console.log(shengShouProductCount);
});

document.getElementById("shengShouBtn2").addEventListener("click", function () {
  if (shengShouProductCount > 0) {
    shengShouProductCount--;
    if (shengShouProductCount > 1) {
      document.getElementById("countShengShou").innerHTML =
        shengShouProductCount + " pcs";
    } else {
      document.getElementById("countShengShou").innerHTML =
        shengShouProductCount + " pc";
    }
    console.log(shengShouProductCount);
  }
});

function shippingVer() {
  if (getArraySum(productSubTotal) == 0) {
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
        getArraySum(productSubTotal)
    )
      ? (window.location.href = "../../src/confirm-payment.html")
      : alert("purchase cancelled");
  }

  // import "../../src/confirm-payment.html"
}

function getProductQty(prodName, prodCount) {
  // var cont;
  if (prodCount != 0) {
    return prodCount + "x " + prodName + "\n";
  } else {
    return "";
  }
}
