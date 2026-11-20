chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "signal-rubric-decoder",
    title: "Decode Rubric Headings (Signal Academic)",
    contexts: ["selection"]
  });
  chrome.contextMenus.create({
    id: "signal-apa-scanner",
    title: "Scan APA 7th Citations & Flow (Signal Academic)",
    contexts: ["selection"]
  });
  chrome.contextMenus.create({
    id: "signal-lit-checker",
    title: "Check 5-Year Reference Currency 2021-2026 (Signal Academic)",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info) => {
  const routes = {
    "signal-rubric-decoder": "https://signalacademic.com/tools/rubric-checker?utm_source=chrome_ext&utm_medium=context_menu",
    "signal-apa-scanner": "https://signalacademic.com/tools/apa-checker?utm_source=chrome_ext&utm_medium=context_menu",
    "signal-lit-checker": "https://signalacademic.com/tools/literature-checker?utm_source=chrome_ext&utm_medium=context_menu"
  };
  const target = routes[info.menuItemId];
  if (target) {
    chrome.tabs.create({ url: target });
  }
});
