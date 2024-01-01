import JustValidate from "just-validate";
import { v4 as uuidv4 } from "uuid";

const validate = new JustValidate("#parathaForm");
const parathaFormEl = document.getElementById("parathaForm");
const storageKey = "order-details";

const closeBtnEl = document.getElementById("closeBtn");
const modalWrapperEl = document.getElementById("modalWrapper");
const navEl = document.getElementById("aboutUs");
const modalEl = document.getElementById("modalEl")

validate.addField("#fullName", [
  {
    rule: "required",
  },
  {
    rule: "minLength",
    value: 2,
  },
  {
    rule: "maxLength",
    value: 20,
  },
]);

validate.addField("#contactNum", [
  {
    rule: "required",
  },
    {
      rule: "minLength",
      value: 10,
    },
]);

validate.addField("#deliveryAddress", [
  {
    rule: "required",
  },
]);

validate.onSuccess((e) => {
  const myFormData = new FormData(parathaFormEl);
  myFormData.append("id", uuidv4());
  const formDataObj = Object.fromEntries(myFormData.entries());

  const orderDb = [];

  const getFromLocal = localStorage.getItem(storageKey);
  const convertedArray = JSON.parse(getFromLocal);

  if (convertedArray) {
    convertedArray.push(formDataObj);
    localStorage.setItem(storageKey, JSON.stringify(convertedArray));
  } else {
    orderDb.push(formDataObj);
    localStorage.setItem(storageKey, JSON.stringify(orderDb));
  }

  alert("Placed the order successfully.");
  parathaFormEl.reset();
  getAllDatas();
});

function getAllDatas() {
  const getStoredData = localStorage.getItem(storageKey);
  const getStoredDataArray = JSON.parse(getStoredData);

  const mainSectionEl = document.getElementById("mainTableSection");

  if (getStoredDataArray && getStoredDataArray.length > 0) {
    mainSectionEl.classList.remove("hidden");
    const tableEl = document.getElementById("orderDataTable");

    tableEl.innerHTML = "";

    const finalHoldValues = [];

    getStoredDataArray.map(function (value) {
      const trEl = document.createElement("tr");
      const fullNameEl = document.createElement("td");
      const deliveryEl = document.createElement("td");
      const contactNumber = document.createElement("td");
      const parathaEl = document.createElement("td");
      const paymentEl = document.createElement("td");
      const updateEl = document.createElement("td");

      const delBtnEl = document.createElement("button");

      fullNameEl.classList.add("px-5", "py-3", "border", "text-[12px]", "bg-[#393053]", "text-white");
      fullNameEl.textContent = value.fullName;

      deliveryEl.classList.add("px-5", "py-3", "border", "text-[12px]", "bg-[#393053]", "text-white");
      deliveryEl.textContent = value.deliveryAddress;

      contactNumber.classList.add("px-2", "py-3", "border", "text-[12px]", "bg-[#393053]", "text-white");
      contactNumber.textContent = value.contactNum;

      parathaEl.classList.add("px-2", "py-3", "border", "text-[12px]", "bg-[#393053]", "text-white");
      parathaEl.textContent = value.parathas;

      paymentEl.classList.add("px-2", "py-3", "border", "text-[12px]", "bg-[#393053]", "text-white");
      paymentEl.textContent = value.paymentType;

      updateEl.classList.add("px-2", "py-3", "border", "text-[12px]", "bg-[#0A1F38]");
      updateEl.append(delBtnEl);
      delBtnEl.textContent = "Cancel Order";

      delBtnEl.addEventListener("click", (e) => {
        deleteOrders(value)
      });

      delBtnEl.className =
        "px-2 py-1 rounded bg-red-500 hover:bg-red-700 text-white text-xs";

      trEl.append(
        fullNameEl,
        deliveryEl,
        contactNumber,
        parathaEl,
        paymentEl,
        updateEl
      );

      finalHoldValues.push(trEl);
    });

    finalHoldValues.forEach(function (elements) {
      tableEl.append(elements);
    });

    const orderCountEl = document.querySelector("#orderCount");
    orderCountEl.textContent = getStoredDataArray.length;
  } else {
    mainTableSection.classList.add("hidden");
    console.log("no orders yet");
  }
}

function deleteOrders(orderRequest) {
  const confirmDelete = confirm(
    `Do you want to delete ${orderRequest.fullName}'s order?`
  );

  if (confirmDelete) {
    const localData = localStorage.getItem(storageKey);
    const localDataObj = JSON.parse(localData);

    const deleteRecords = localDataObj.filter(value => value.id != orderRequest.id)
    console.log(deleteRecords);

    // Let's push the value to the local storage.
    localStorage.setItem(storageKey, JSON.stringify(deleteRecords))
    alert(`Cancelled the order of ${orderRequest.fullName}`)
    getAllDatas()
  }
}

navEl.addEventListener("click", (e) => {
  modalWrapperEl.classList.remove("hidden");
})

closeBtnEl.addEventListener("click", () => {
  modalWrapperEl.classList.add("hidden");
})

modalWrapperEl.addEventListener("click", (e) => {
  if(e.target === modalEl) {
    modalWrapperEl.classList.add("hidden");
  }
})

// If I click Exclusives It Should Open the exclusive modal. 
// exclusive modal close and also it should close when click the outer.
// if the coupon code is copied then alert coupon is copied. 
// Exclusive Menu | Exclusive Menu Modal | Close Button | CouponElemet | couponAlert 

const exclusiveModalEl = document.getElementById("exclusiveModal");
const exclusiveCloseBtn = document.getElementById("exclusiveCloseBtn");
const couponElement = document.getElementById("couponElement");
const couponAlert = document.getElementById("couponAlert");
const exclusivesMenu = document.getElementById("exclusives");
const exclusiveSectionEl = document.getElementById("exclusiveSection");

exclusivesMenu.addEventListener("click", () => {
  exclusiveModalEl.classList.remove("hidden");
})

exclusiveCloseBtn.addEventListener("click", () => {
  exclusiveModalEl.classList.add("hidden");
})

exclusiveSectionEl.addEventListener("click", (e)=> {
  if(exclusiveSectionEl === e.target){
    exclusiveModalEl.classList.add("hidden");
  }
})

couponElement.addEventListener("copy", () => {
  couponAlert.classList.remove("hidden");
  couponAlert.classList.add("animate-bounce")
  setTimeout(()=> {
    couponAlert.classList.add("hidden");
  },3000)
})

const pyazEl = document.getElementById("pyaz");
const pyazAlertEl = document.getElementById("pyazAlert");

const alooEl = document.getElementById("aloo");
const alooAlertEl = document.getElementById("alooAlert");

const mooliEl = document.getElementById("mooli"); 
const mooliAlertEl = document.getElementById('mooliAlert');

const malabarEl = document.getElementById("malabar");
const malabarAlertEl = document.getElementById("malabarAlert");

pyazEl.addEventListener("change", () => {
  showSelectedAlert("pyaz")
})

alooEl.addEventListener("change", () => {
  showSelectedAlert("aloo")
})

mooliEl.addEventListener("change", () => {
  showSelectedAlert("mooli")
})

malabarEl.addEventListener("change", () => {
  showSelectedAlert("malabar")
})

function showSelectedAlert(selectedId) {
  pyazAlertEl.classList.add("hidden")
  alooAlertEl.classList.add("hidden")
  mooliAlertEl.classList.add("hidden")
  malabarAlertEl.classList.add("hidden")

  if(selectedId === "pyaz") {
    pyazAlertEl.classList.remove("hidden")
  } else if(selectedId === "aloo") {
    alooAlertEl.classList.remove("hidden")
  } else if (selectedId === "mooli") {
    mooliAlertEl.classList.remove("hidden");
  } else if (selectedId === "malabar") {
    malabarAlertEl.classList.remove("hidden");
  }
}

getAllDatas();
