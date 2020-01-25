var Globals = {
  Production:{
    lemonade: 0,
    lemons:{
      cost: 2,
      quantity: 50,
      deliveryTime: 2
    },
    cups:{
      cost: 5,
      quantity: 150,
      deliveryTime: 2
    },
    water:{
      cost: 1,
      quantity: 1
    }
  },
  Sales:{
    money: 0,
    sellLemonade:{
      price: 1,
      quantity: 1,
    }
  },
  Staff:{
    productionWorker:{
      cost: 10,
      nextCost: 0,
      quantity: 0
    },
    salesWorker:{
      cost: 15,
      nextCost: 0,
      quantity: 0
    },
    inventoryWorker:{
      cost: 100,
      nextCost: 0,
      quantity: 0
    }
  },
  Storefront:{
    stand:{
      cost: 250,
      nextCost: 0,
      quantity: 1
    },
    kiosk:{
      cost: 1000,
      nextCost: 0,
      quantity: 0
    },
    store:{
      cost: 10000,
      nextCost: 0,
      quantity: 0
    }
  }
};

var PRODUCTION = Globals.Production;
var SALES = Globals.Sales;
var STAFF = Globals.Staff;
var STOREFRONT = Globals.Storefront;

var LABELS = {
  lemonade: document.getElementById("lemonade"),
  lemons: document.getElementById("lemons"),
  cups: document.getElementById("cups"),
  water: document.getElementById("water"),
  money: document.getElementById("money"),
  productionWorkers: document.getElementById("productionWorkers"),
  productionWorkerCost: document.getElementById("productionWorkerCost"),
  salesWorkers: document.getElementById("salesWorkers"),
  salesWorkerCost: document.getElementById("salesWorkerCost"),
  inventoryWorker: document.getElementById("inventoryWorker"),
  inventoryWorkerCost: document.getElementById("inventoryWorkerCost"),
  lemonadeStand: document.getElementById("lemonadeStand"),
  kiosk: document.getElementById("kiosk"),
  store: document.getElementById("store")
};

function updateLabels(){
  LABELS.lemonade.innerHTML = PRODUCTION.lemonade;
  LABELS.lemons.innerHTML = PRODUCTION.lemons.quantity;
  LABELS.cups.innerHTML = PRODUCTION.cups.quantity;
  LABELS.water.innerHTML = PRODUCTION.water.quantity;
  LABELS.money.innerHTML = "$ " + SALES.money;
  LABELS.productionWorkers.innerHTML = STAFF.productionWorker.quantity;
  LABELS.salesWorkers.innerHTML = STAFF.salesWorker.quantity;
  LABELS.inventoryWorker.innerHTML = STAFF.inventoryWorker.quantity;
  LABELS.lemonadeStand.innerHTML = STOREFRONT.stand.quantity;
  LABELS.kiosk.innerHTML = STOREFRONT.kiosk.quantity;
  LABELS.store.innerHTML = STOREFRONT.store.quantity;

  if(STAFF.productionWorker.quantity > 0){
      LABELS.productionWorkerCost.innerHTML = " ($ " + STAFF.productionWorker.nextCost + ")";
  }else{
    LABELS.productionWorkerCost.innerHTML = " ($ " + STAFF.productionWorker.cost + ")";
  }

  if(STAFF.salesWorker.quantity > 0){
    LABELS.salesWorkerCost.innerHTML = " ($ " + STAFF.salesWorker.nextCost + ")";
  }else{
    LABELS.salesWorkerCost.innerHTML = " ($ " + STAFF.salesWorker.cost + ")";
  }

  if(STAFF.inventoryWorker.quantity > 0){
    LABELS.inventoryWorkerCost.innerHTML = " ($ " + STAFF.inventoryWorker.nextCost + ")";
  }else{
    LABELS.inventoryWorkerCost.innerHTML = " ($ " + STAFF.inventoryWorker.cost + ")";
  }
}

function buyLemons(number){
  if(SALES.money >= PRODUCTION.lemons.cost){
      PRODUCTION.lemons.quantity += 50 * number;
      SALES.money -= PRODUCTION.lemons.cost * number;
    }
  updateLabels();
}

function buyCups(number){
  if(SALES.money >= PRODUCTION.cups.cost){
      PRODUCTION.cups.quantity += 150 * number;
      SALES.money -= PRODUCTION.cups.cost * number;
    }
  updateLabels();
}

function buyWater(number){
  if(SALES.money >= PRODUCTION.water.cost){
      PRODUCTION.water.quantity += 1 * number;
      SALES.money -= PRODUCTION.water.cost * number;
    }
  updateLabels();
}

function hireInventoryWorker(number){
  STAFF.inventoryWorker.cost = Math.floor(STAFF.inventoryWorker.cost * Math.pow(1.3, STAFF.inventoryWorker.quantity));

  if(SALES.money >= STAFF.inventoryWorker.cost){
    STAFF.inventoryWorker.quantity += number;
    SALES.money -= STAFF.inventoryWorker.cost;

    STAFF.inventoryWorker.nextCost = Math.floor(STAFF.inventoryWorker.cost * Math.pow(1.3, STAFF.inventoryWorker.quantity));
  }

  updateLabels();
}

function fireInventoryWorker(number){
  STAFF.inventoryWorker.quantity -= number;
  updateLabels();
}

function hireProductionWorkers(number){
  STAFF.productionWorker.cost = Math.floor(STAFF.productionWorker.cost * Math.pow(1.1, STAFF.productionWorker.quantity));

  if(SALES.money >= STAFF.productionWorker.cost){
      STAFF.productionWorker.quantity += number;
      SALES.money -= STAFF.productionWorker.cost;

      STAFF.productionWorker.nextCost = Math.floor(STAFF.productionWorker.cost * Math.pow(1.1, STAFF.productionWorker.quantity));
    }

  updateLabels();
}

function fireProductionWorkers(number){
  STAFF.productionWorker.quantity -= number;
  updateLabels();
}

function hireSalesWorkers(number){
  STAFF.salesWorker.cost = Math.floor(STAFF.salesWorker.cost * Math.pow(1.5, STAFF.salesWorker.quantity));

  if(SALES.money >= STAFF.salesWorker.cost){
    STAFF.salesWorker.quantity += number;
    SALES.money -= STAFF.salesWorker.cost;

    STAFF.salesWorker.nextCost = Math.floor(STAFF.salesWorker.cost * Math.pow(1.5, STAFF.salesWorker.quantity));
  }

  updateLabels();
}

function fireSalesWorker(number){
  STAFF.salesWorker.quantity -= number;
  updateLabels();
}

function makeLemonade(number){
  if(PRODUCTION.lemons.quantity >= 4 && PRODUCTION.water.quantity >= 1){
      PRODUCTION.lemons.quantity -= 4 * number;
      PRODUCTION.water.quantity -= 1 * number;
      PRODUCTION.lemonade += 6 * number;
  }
  updateLabels();
}

function sellLemonade(number){
  if(PRODUCTION.lemonade >= 1){
      PRODUCTION.lemonade -= number;
      PRODUCTION.cups.quantity -= number;
      SALES.money += SALES.sellLemonade.price * number;
    }
  updateLabels();
}

function inventoryPurchase(number){
  if(PRODUCTION.lemons.quantity <= 6){
    buyLemons(number);
  }

  if(PRODUCTION.cups.quantity <= 50){
    buyCups(number);
  }

  if(PRODUCTION.water.quantity <= 2){
    buyWater(number);
  }

  updateLabels();
}

function zeroAllValues(){
  if(PRODUCTION.lemonade < 0){
    PRODUCTION.lemonade = 0;
  }
  if(PRODUCTION.lemons.quantity < 0){
    PRODUCTION.lemons.quantity = 0;
  }
  if(PRODUCTION.cups.quantity < 0){
    PRODUCTION.cups.quantity = 0;
  }
  if(PRODUCTION.water.quantity < 0){
    PRODUCTION.water.quantity = 0;
  }
  if(STAFF.productionWorker.quantity < 0){
    STAFF.productionWorker.quantity = 0;
  }
  if(STAFF.salesWorker.quantity < 0){
    STAFF.salesWorker.quantity = 0;
  }
}

window.setInterval(function(){
  if(STAFF.salesWorker.quantity >= 1){
    sellLemonade(STAFF.salesWorker.quantity);
  }

  if(STAFF.productionWorker.quantity >= 1){
    makeLemonade(STAFF.productionWorker.quantity);
  }

  if(STAFF.inventoryWorker.quantity >= 1){
    inventoryPurchase(STAFF.productionWorker.quantity);
  }

  zeroAllValues();
}, 1000);

window.onload = function(){
  updateLabels();
};
