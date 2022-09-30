// Диаграмма
let diagramParts = document.querySelectorAll('.circle__part');

diagramParts.forEach(function(part) {
    part.addEventListener('mouseover', function() {
        let partId = part.getAttribute('id'),
            legend = document.querySelector(`.circle__legend-part--${partId}`),
            partFill = part.getAttribute('fill');
        legend.style.opacity = '1';
        legend.style.borderBottom = `2px solid ${partFill}`;
    })
    part.addEventListener('mouseout', function() {
        let partId = part.getAttribute('id');
        let legend = document.querySelector(`.circle__legend-part--${partId}`);
        legend.style.opacity = '0.6';
        legend.style.borderBottom = '1px solid transparent';
    })
});