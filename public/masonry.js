function resizeGridItems() {
    const grid = document.querySelector(".masonryGrid");
    if (!grid) return;

    const items = [...grid.querySelectorAll(".masonryItem")];

    if (window.innerWidth < 1024) {
        items.forEach(item => {
            item.style.gridRowEnd = "auto";
        });
        return;
    }

    const rowHeight = 10;
    const rowGap = 24;

    // Citim toate dimensiunile (1 singur reflow)
    const heights = items.map(item => item.getBoundingClientRect().height);

    // Aplicăm stilurile
    items.forEach((item, index) => {
        const span = Math.ceil((heights[index] + rowGap) / (rowHeight + rowGap));
        item.style.gridRowEnd = "span " + span;
    });
}

function initMasonry() {
    requestAnimationFrame(resizeGridItems);
}

// Load
window.addEventListener("load", initMasonry);

// Fonts loaded
if (document.fonts) {
    document.fonts.ready.then(initMasonry);
}

// Debounced resize
let resizeTimeout;

window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        requestAnimationFrame(resizeGridItems);
    }, 150);
});

// Safety recalc după imagini
setTimeout(initMasonry, 300);