// src/js/main.js

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    console.log(mutation);
  });
});

const config = { attributes: true, childList: true, subtree: true };

observer.observe(document.body, config);
