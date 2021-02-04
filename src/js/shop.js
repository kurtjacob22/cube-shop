var count = 0;
var totalPrice = 0;

function addToCart(amount) {
  count++;
  totalPrice += amount;
  document.getElementById("countPurchases").innerHTML = count++;
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
  window.location.replace("././shop.html");
}

function Shop() {
  window.location.replace("././shop.html");
}
