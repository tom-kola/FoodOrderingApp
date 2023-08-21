let startersBtn;
let soupsBtn;
let meatBtn;
let fishBtn;
let drinksBtn;
let alkoholBtn;
let shoppingBtn;
let cancelBtn;
let confirmOrderBtn;
let confirmTipBtn;
let finishOrderBtn;
let cashBtn;
let cardBtn;
let closeBtn
let aboutBtn
let backBtns;
let plusBtns;
let trashBtns;
let dishViews;
let othersViews;
let startersView;
let soupsView;
let meatView;
let fishView;
let drinksView;
let alkoholView;
let shoppingView;
let tipView;
let confirmOrderView;
let priceArray;
let showPrice;
let aboutPopup
let successPopup;
let shoppingPopup;
let cardPopup;
let er1;
let er2;
const showPriceArray = [];
let chooseAmount;
let amount;
let finalPrice;
let shoppingMenu;
let shoppingSpan;
let trash;

const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
};
const prepareDOMElements = () => {
	startersBtn = document.querySelector(".starters");
	soupsBtn = document.querySelector(".soups");
	meatBtn = document.querySelector(".meat");
	fishBtn = document.querySelector(".fish");
	drinksBtn = document.querySelector(".drinks");
	alkoholBtn = document.querySelector(".alkohol");
	shoppingBtn = document.querySelector("button.shopping");
	cancelBtn = document.querySelector(".cancel");
	confirmOrderBtn = document.querySelector(".confirm");
	confirmTipBtn = document.querySelector(".confirmtip");
	finishOrderBtn = document.querySelector(".finishorder");
	cashBtn = document.querySelector(".cash");
	cardBtn = document.querySelector(".card");
  closeBtn = document.querySelector('.close')
  aboutBtn = document.querySelector('.about')
	backBtns = document.querySelectorAll(".backbtn");
	plusBtns = document.querySelectorAll(".plus-btn");
	trashBtns = document.querySelectorAll(".deleteitem");
	dishViews = document.querySelectorAll(".dish-view");
	othersViews = document.querySelector(".others-views");
	startersView = document.querySelector(".starters-view");
	soupsView = document.querySelector(".soups-view");
	meatView = document.querySelector(".meat-view");
	fishView = document.querySelector(".fish-view");
	drinksView = document.querySelector(".drinks-view");
	alkoholView = document.querySelector(".alkohol-view");
	shoppingView = document.querySelector(".shopping-view");
	tipView = document.querySelector(".tip-view");
	confirmOrderView = document.querySelector(".confirmorder-view");
	priceArray = document.querySelectorAll(".price");
	showPrice = document.querySelector(".showprice p");
  aboutPopup = document.querySelector('.about-popup')
	successPopup = document.querySelector(".success-window");
	shoppingPopup = document.querySelector(".shopping-window");
	cardPopup = document.querySelector(".card-popup");
	er1 = document.querySelector(".er1");
	er2 = document.querySelector(".er2");
	chooseAmount = document.querySelector(".chooseamount");
	amount = document.querySelector(".amount span");
	inputTip = document.querySelector(".tipamount");
	finalPrice = document.querySelector(".payment span");
};
const prepareDOMEvents = () => {
	document.addEventListener("click", showNewView);
	shoppingBtn.addEventListener("click", showShopping);
	backBtns.forEach((backBtn) => {
		backBtn.addEventListener("click", closeNewView);
	});
	plusBtns.forEach((plusBtn) => {
		plusBtn.addEventListener("click", showSuccessPopup);
	});
	shoppingView.addEventListener("click", checkClick);
	cancelBtn.addEventListener("click", cancelOrder);
	confirmOrderBtn.addEventListener("click", confirmOrder);
	confirmTipBtn.addEventListener("click", confirmTip);
	tipView.addEventListener("click", addTip);
	cashBtn.addEventListener("click", activatedCashBtn);
	cardBtn.addEventListener("click", activatedCardBtn);
	finishOrderBtn.addEventListener("click", finishOrder);
  aboutBtn.addEventListener('click', showAboutPopup)
  closeBtn.addEventListener('click', closeAboutPopup)
};

const showNewView = (e) => {
	if (e.target.matches(".starters")) {
		othersViews.classList.add("visible");
		startersView.classList.add("visible");
	} else if (e.target.matches(".soups")) {
		othersViews.classList.add("visible");
		soupsView.classList.add("visible");
	} else if (e.target.matches(".meat")) {
		othersViews.classList.add("visible");
		meatView.classList.add("visible");
	} else if (e.target.matches(".fish")) {
		othersViews.classList.add("visible");
		fishView.classList.add("visible");
	} else if (e.target.matches(".drinks")) {
		othersViews.classList.add("visible");
		drinksView.classList.add("visible");
	} else if (e.target.matches(".alkohol")) {
		othersViews.classList.add("visible");
		alkoholView.classList.add("visible");
	}
};
const closeNewView = (e) => {
	if (othersViews.classList.contains("visible")) {
		othersViews.classList.remove("visible");
		dishViews.forEach((dish) => {
			dish.classList.remove("visible");
		});
	} else if (shoppingPopup.classList.contains("visible") && !tipView.classList.contains('flexclass') && !confirmOrderView.classList.contains('flexclass')) {
		shoppingPopup.classList.remove("visible");
	}else if (tipView.classList.contains('flexclass')){
    tipView.classList.remove('flexclass')
    shoppingView.style.display = 'block'
    confirmTipBtn.style.display = 'none'
    confirmOrderBtn.style.display = 'block'
  }else if(confirmOrderView.classList.contains('flexclass')){
    confirmOrderView.classList.remove('flexclass')
    tipView.classList.add('flexclass')
    confirmTipBtn.style.display = 'block'
    finishOrderBtn.style.display = 'none'
  }
  document.addEventListener("click", showNewView);
};
const showShopping = () => {
  aboutPopup.style.display = 'none'
	shoppingPopup.classList.add("visible");
  othersViews.classList.remove("visible")
	document.removeEventListener("click", showNewView);
	const allItems = document.querySelectorAll("div.shopping-view p.meal");
	if (allItems.length === 0) {
		er1.textContent = "Twoje zamówienie jest puste.";
	}
};
const showSuccessPopup = (e) => {
	let individualPrice;

	individualPrice = e.target.closest("p").children[0].textContent;
	showPriceArray.push(parseFloat(individualPrice));
	const sum = showPriceArray.reduce((accumulator, currentValue) => {
		return accumulator + currentValue;
	}, 0);
	showPrice.textContent = sum + "zł";

	successPopup.style.display = "block";

	if (othersViews.classList.contains("visible")) {
		let run = setTimeout(() => {
			successPopup.style.display = "none";
		}, 2000);
	} else {
		let run = setTimeout(() => {
			successPopup.style.display = "none";
		}, 1);
	}
	shoppingMenu = document.createElement("p");
	shoppingMenu.classList.add("meal");
	shoppingMenu.classList.add("orders");
	shoppingMenu.textContent = e.target.closest("p").textContent;
	er1.textContent = "";

	shoppingSpan = document.createElement("span");
	shoppingSpan.classList.add("price");
	shoppingSpan.textContent = e.target.closest("p").children[0].textContent;
	shoppingSpan.style.display = "none";

	trash = document.createElement("i");
	trash.classList.add("deleteitem");
	trash.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

	shoppingView.append(shoppingMenu);
	shoppingMenu.append(trash, shoppingSpan);
};

const checkClick = (e) => {
	if (e.target.matches(".fa-trash-can")) {
		deleteItem(e);
	}
};

const cancelOrder = (e) => {
	const orders = document.querySelectorAll(".orders");

	orders.forEach((order) => {
		order.remove();
	});

	const allOrders = showPriceArray.length;
	showPriceArray.splice(0, allOrders);

	const sum = showPriceArray.reduce((accumulator, currentValue) => {
		return accumulator + currentValue;
	}, 0);

	showPrice.textContent = sum + "zł";

	const allItems = document.querySelectorAll("div.shopping-view p.meal");

	if (allItems.length === 0) {
		er1.textContent = "Twoje zamówienie jest puste.";
	}
};

const deleteItem = (e) => {
	e.target.closest("p").remove();

	const allItems = document.querySelectorAll("div.shopping-view p.meal");

	if (allItems.length === 0) {
		er1.textContent = "Twoje zamówienie jest puste.";
	}

	let individualPrice;

	individualPrice = e.target.closest("p").children[1].textContent;

	for (let i = 0; i <= showPriceArray.length; i++) {
		if (parseFloat(individualPrice) === showPriceArray[i]) {
			showPriceArray.splice([i], 1);
			const sum = showPriceArray.reduce((accumulator, currentValue) => {
				return accumulator + currentValue;
			}, 0);

			showPrice.textContent = sum + "zł";
		}
	}
};

const confirmOrder = () => {
	if (showPrice.textContent === 0 + "zł") {
		er1.textContent = "Nie można potwierdzić pustego zamówienia.";
	} else if ((shoppingView.style.display = "flex")) {
		shoppingView.style.display = "none";
		tipView.classList.add("flexclass");
		confirmTipBtn.style.display = "block";
		confirmOrderBtn.style.display = "none";
	}
	addTip();
};
const confirmTip = () => {
	if (tipView.classList.contains("flexclass")) {
		tipView.classList.remove("flexclass");
		confirmOrderView.classList.add("flexclass");
		confirmTipBtn.style.display = "none";
		finishOrderBtn.style.display = "block";
	}
	showFinalPrice();
};
const activatedCashBtn = () => {
	cashBtn.classList.toggle("active");
};
const activatedCardBtn = () => {
	cardPopup.classList.add("visible");
	setTimeout(() => {
		cardPopup.classList.remove("visible");
	}, 1500);
};

const addTip = () => {
	let trialAmount;
	trialAmount = chooseAmount.value * parseFloat(showPrice.textContent);
	amount.textContent = Math.round(trialAmount * 100) / 100 + 'zł';
};

const showFinalPrice = () => {
	let trialFinalPrice;
	trialFinalPrice =
		parseFloat(amount.textContent) + parseFloat(showPrice.textContent);
	finalPrice.textContent = trialFinalPrice + 'zł';
};

const finishOrder = () => {
	const allOrders = showPriceArray.length;

	if (
		(cashBtn.classList.contains("active") ||
			cardBtn.classList.contains("active")) &&
		showPriceArray.length > 0
	) {
		showPriceArray.splice(0, allOrders);
		confirmOrderView.classList.remove("flexclass");
		cashBtn.classList.remove("active");
		shoppingView.style.display = "block";
		finishOrderBtn.style.display = "none";
		confirmOrderBtn.style.display = "block";
		showPrice.textContent = 0 + "zł";
		shoppingView.textContent = "";
    chooseAmount.value = 0.1
    closeNewView()
	}
};
const showAboutPopup = () => {
  if(shoppingPopup.classList.contains('visible')){
    aboutPopup.style.display = 'none'
  }else{
  aboutPopup.style.display = 'block'
  }
}
const closeAboutPopup = () => {
  aboutPopup.style.display = 'none'
}
document.addEventListener("DOMContentLoaded", main);
