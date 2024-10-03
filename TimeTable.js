// document.addEventListener('DOMContentLoaded', function() {
//     const subjects = document.querySelectorAll('.subject');

//     subjects.forEach(subject => {
//         subject.addEventListener('click', function() {
//             alert(`You clicked on ${this.textContent}`);
//         });
//     });
// });
// Get all the subject cells
const subjectCells = document.querySelectorAll('.subject');

// Apply the 3D effect on mouseover and reset on mouseout
subjectCells.forEach(cell => {
    cell.addEventListener('mouseover', () => {
        cell.style.transform = 'perspective(600px) rotateX(10deg) translateZ(15px)';
        cell.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.5)';
    });

    cell.addEventListener('mouseout', () => {
        cell.style.transform = 'perspective(600px) rotateX(0deg) translateZ(0)';
        cell.style.boxShadow = 'none';
    });
});
