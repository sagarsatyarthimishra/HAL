document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".card");
    const overlay = document.getElementById("overlay");
    const staffDetails = document.getElementById("staff-details");
    const closeBtn = document.getElementById("close-btn");
    const detailsName = document.getElementById("details-name");
    const detailsPhoto = document.getElementById("details-photo");
    const detailsPbNumber = document.getElementById("details-pb-number");
    const detailsDepartment = document.getElementById("details-department");

    cards.forEach(card => {
        card.addEventListener("click", function() {
            const name = card.getAttribute("data-name");
            const photo = card.getAttribute("data-photo");
            const pbNumber = card.getAttribute("data-pb-number");
            const department = card.getAttribute("data-department");

            detailsName.textContent = name;
            detailsPhoto.innerHTML = `<img src="${photo}" alt="${name}">`;
            detailsPbNumber.textContent = pbNumber;
            detailsDepartment.textContent = department;

            overlay.style.display = "flex";
        });
    });

    closeBtn.addEventListener("click", function() {
        overlay.style.display = "none";
    });
});
