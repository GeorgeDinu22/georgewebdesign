function resizeGridItems() {
    const grid = document.querySelector(".masonryGrid");
    if (!grid) return;

    if (window.innerWidth < 1024) {
        grid.querySelectorAll(".masonryItem").forEach(item => {
            item.style.gridRowEnd = "auto";
        });
        return;
    }

    const rowHeight = 10;
    const rowGap = 24;

    grid.querySelectorAll(".masonryItem").forEach(item => {
        item.style.gridRowEnd = "auto"; 
        
        const contentHeight = item.getBoundingClientRect().height;
        const span = Math.ceil((contentHeight + rowGap) / (rowHeight + rowGap));
        
        item.style.gridRowEnd = "span " + span;
    });
}

window.addEventListener("load", resizeGridItems);

window.addEventListener("resize", resizeGridItems);

if (document.fonts) {
    document.fonts.ready.then(() => {
        resizeGridItems();
    });
}

setTimeout(resizeGridItems, 100);
setTimeout(resizeGridItems, 500);