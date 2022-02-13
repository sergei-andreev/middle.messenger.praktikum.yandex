const inputs = document.querySelectorAll(".profile-info__input");
const changeInfoBtn = document.querySelector("#change-info");

let isChangedInfo = false;

changeInfoBtn.addEventListener("click", () => {
    isChangedInfo = !isChangedInfo;

    changeInfoBtn.textContent = isChangedInfo ? "Save info" : "Change info";
    inputs.forEach((input) => {
        input.disabled = !isChangedInfo;
    });
});
