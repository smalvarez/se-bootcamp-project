// src/mutationObserver.js
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    console.log(mutation);
  });
});

observer.observe(document.body, { childList: true, subtree: true });
