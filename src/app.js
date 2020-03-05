const allLeftPanelDivs = document.querySelectorAll('.left-panel div');
allLeftPanelDivs.forEach(function (el) {
    el.addEventListener('click', function(event) {
        allLeftPanelDivs.forEach(function (leftPanelDiv) {
            leftPanelDiv.classList.remove('selected');
        });
        event.srcElement.classList.add('selected');
    });
});

document.querySelectorAll('.row div').forEach(function (el) {
    el.addEventListener('click', function(event) {
        const tileColor = document.querySelector('div.selected');
        const availableClasses = [ ...tileColor.classList.values() ];
        const classToAdd = availableClasses.filter(className => className !== 'selected');
        event.srcElement.classList.add(classToAdd);
    });
});