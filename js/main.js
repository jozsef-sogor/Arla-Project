"use strict";

M.AutoInit();
//var instance = M.Tabs.init(el, options);


// Navigation
let hideAllPages = () => {
    let pages = document.querySelectorAll(".page");
    for (let page of pages) {
        page.style.display = "none";
    }
}
// show page or tab
let showPage = pageId => {
    hideAllPages();
    document.querySelector(`#${pageId}`).style.display = "block";
    location.href = `#${pageId}`;
    setActiveTab(pageId);
    // showLoader(500);
}
// set default page
let setDefaultPage = () => {
    let page = "profile-page";
    if (location.hash) {
        page = location.hash.slice(1);
    }
    showPage(page);
}
setDefaultPage();

// function setActiveTab(pageId) {
//     let pages = document.querySelectorAll("nav a");
//     for (let page of pages) {
//       if (`#${pageId}` === page.getAttribute("href")) {
//         page.classList.add("active");
//       } else {
//         page.classList.remove("active");
//       } Let me try something
//do you wanna talk on the pho
//     }
//   }

// let showLoader = (duration) => {
//     $("#splash").show();
//     setTimeout(function () {
//         $("#splash").hide();
//     }, duration);
// }
// setTimeout(() => {
//     $("#splash").hide();
// }, 1500);

// Navigation inside profile
let hideAllNavPages = () => {
    let pages = document.querySelectorAll(".profileNavPage");
    for (let page of pages) {
        page.style.display = "none";
    }
}
// show page or tab
let showNavPage = pageId => {
    hideAllNavPages();
    document.querySelector(`#${pageId}`).style.display = "block";
    location.href = `#${pageId}`;
    setActiveTabNav(pageId);
    // showLoader(500);
}
// set default page
let setDefaultNavPage = () => {
    let page = 'previousReports';
    if (location.hash) {
        page = location.hash.slice(1);
    }
    showNavPage(page);
}
setDefaultNavPage();

function setActiveTabNav(pageId) {
    let pages = document.querySelectorAll("#profile-nav a");
    for (let page of pages) {
      if (`#${pageId}` === page.getAttribute("href")) {
        page.classList.add("activeNav");

      } else {
        page.classList.remove("activeNav");
      }

    }
  }

  function setActiveTab(pageId) {
      let pages = document.querySelectorAll("nav a");
      for (let page of pages) {
        if (`#${pageId}` === page.getAttribute("href")) {
          page.classList.add("active");
        } else {
          page.classList.remove("active");
        }

      }
    }

  hideAllNavPages();









  _dataRef.orderBy("year").onSnapshot(function(snapshotData) {
    _sustainabilityData = [];  // reset _sustainabilityData
    for (let doc of snapshotData.docs) { // loop trough the docs
      let docData = doc.data(); // save the doc data in the variable docData
      docData.id = doc.id; // add the doc id to the docData object
      _sustainabilityData.push(docData); // push docData to the global variable _sustainabilityData
    }

    appendCarbonFootprint(_sustainabilityData); //call appendCarbonFootprint with _sustainabilityData as function argument
    appendMilkProduction(_sustainabilityData); //call appendMilkProduction with _sustainabilityData as function argument
  });



  function appendCarbonFootprint(sustainabilityData) {
    console.log(sustainabilityData);
    // TODO: prepare data for the chart
    // TODO: create the chart with options
    let chart = document.querySelector('#carbonFootprint');
    // let myDoughnutChart = new Chart(chart, {...}
  }

  function appendMilkProduction(sustainabilityData) {
    console.log(sustainabilityData);
  let year = [];
  let milkProductionNorth = [];
  let milkProductionSouth = [];
  for(let data of sustainabilityData) {
    console.log(data);
    if(data.region === 'north') {
      milkProductionNorth.push(data.herdMilkProduction.replace(",","."));
      year.push(data.year);
    }

    else if (data.region === 'south') {
      milkProductionSouth.push(data.herdMilkProduction.replace(",","."));
    }

  }

  console.log(milkProductionNorth);
  console.log(milkProductionSouth);
    // TODO: create the chart with options
    let chart = document.querySelector("#milkProduction")
    let myDoughnutChart = new Chart(chart, {
    type: 'line',
    data: {
      datasets: [{
        data: milkProductionNorth,
        label: "Milk Production North",
        borderDash:[5 , 6],
        fill: false,
        borderColor: "red"



      }, {
        label: 'Milk Production South',
        data: milkProductionSouth,
        type: 'line',
        label: "Milk Production South",

      }],
      labels: year
    },


  });
}

/*
let showLoader = (duration) => {
    $("#splash").show();
    setTimeout(function () {
        $("#splash").hide();
    }, duration);
}
setTimeout(() => {
    $("#splash").hide();
}, 1500);
*/
