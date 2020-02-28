const allPickers = document.querySelectorAll('.left-panel div');
let selectedPicker;
allPickers.forEach(picker => {
    picker.addEventListener('click', () => {
        allPickers.forEach(pickerTile => pickerTile.classList.remove('selected'));
        picker.classList.add('selected');
        selectedPicker = picker;
    });
});

const allTiles = document.querySelectorAll('.row div');
allTiles.forEach(tile => {
    tile.addEventListener('click', () => {
        const allClassesFromPicker = Array.from(selectedPicker.classList.values());
        const colorClass = allClassesFromPicker.filter(oneClass => oneClass !== 'selected');
        tile.className = '';
        tile.classList.add(colorClass[0]);
    });
});