'use strict';

const SEARCH_XVIDEOS_ID = "search-xvideos";
const XVIDEOS_URL = "https://xvideos.com?k=";

browser.menus.create({
  id: SEARCH_XVIDEOS_ID,
  title: "Search xvideos for",
  contexts: ["selection"]
});

browser.menus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === SEARCH_XVIDEOS_ID) {
    browser.tabs.create({
      url: XVIDEOS_URL + info.selectionText
    });
  }
});

function updateMenuItem(selectionText) {
  browser.menus.update(SEARCH_XVIDEOS_ID, {
    title: `Search xvideos for "${selectionText}"`
  });
  browser.menus.refresh();
}

browser.menus.onShown.addListener(info => {
  if (! info.selectionText) {
    return;
  }
  updateMenuItem(info.selectionText);
});
