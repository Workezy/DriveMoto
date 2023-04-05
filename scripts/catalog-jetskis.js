let sortingRightMenuDropBtn = document.querySelector(
  ".sorting-rightmenu-dropbtn"
);
let sortingRightMenuDropDownItems = document.querySelectorAll(
  ".sorting-rightmenu-dropdown-content--item"
);

for (let sortingRightMenuDropDownItem of sortingRightMenuDropDownItems) {
  sortingRightMenuDropDownItem.addEventListener("click", () => {
    sortingRightMenuDropBtn.textContent =
      sortingRightMenuDropDownItem.textContent;
  });
}

let arrow = document.querySelectorAll(".arrow");
let dropButton = document.querySelectorAll(".dropbtn");
dropButton.forEach((elem) => {
  elem.addEventListener("click", () => {
    arrow.forEach((elem) => {
      if (elem.classList.contains("down")) {
        elem.classList.remove("down");
        elem.classList.add("up");
      } else {
        elem.classList.remove("up");
        elem.classList.add("down");
      }
    });
  });
});

let availabilityDropButton = document.querySelector('.availability-dropbtn');
let availabilityDropDownContent = document.querySelector('.availability-dropdown-content');
availabilityDropButton.addEventListener('click', () => {
    if(availabilityDropDownContent.classList.contains('dropdown-content--active')) {
        availabilityDropDownContent.classList.remove('dropdown-content--active');
    } else {
        availabilityDropDownContent.classList.add('dropdown-content--active');
    }
    
})
