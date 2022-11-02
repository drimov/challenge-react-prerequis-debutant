const tabId = ["mobile-header", "mobile-button", "mobile-menu"];
const tabClass = ["header", "button-close", "menu-mobile"];

function completeClass(classChange, enable) {
  return enable ? classChange + "-enable" : classChange + "-disable";
}

function removeClass(id, classRemove) {
  document.getElementById(id).removeAttribute(classRemove);
}
function addClass(id, classAdd) {
  document.getElementById(id).setAttribute("class", classAdd);
}

function repeatTask(taskType,enableClass) {
  for (var i = 0; i < tabId.length; i++) {
    taskType == "remove"
      ? removeClass(tabId[i], completeClass(tabClass[i], enableClass))
      : addClass(tabId[i], completeClass(tabClass[i], enableClass));
  }
}

function onClickMenu() {
  repeatTask("remove", false);
  repeatTask("add", true);
}

function onClickCloseMenu() {
  repeatTask("remove", true);
  repeatTask("add", false);
}

document.getElementById("mobile-icon").addEventListener("click", onClickMenu);
document
  .getElementById("mobile-button")
  .addEventListener("click", onClickCloseMenu);
