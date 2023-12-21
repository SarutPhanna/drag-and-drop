const equipSlot = document.querySelector('.equip-slot');
const equipWeapon = document.querySelector('.equip-weapon');
const weaponList = document.querySelectorAll('.sword');

// drang 
function drag (e) {
    e.dataTransfer.setData('text/plain',e.target.id)
    console.log(e.target.id);
};

weaponList.forEach((weapon)=>{
    weapon.addEventListener('dragstart',drag);
});

// drop
function overdrop(e) {
    e.preventDefault();
};

function drop(e) {
    e.preventDefault();
    let id = e.dataTransfer.getData('text/plain');
    let image = document.querySelector('#' + id);
    equipWeapon.src = image.src;
};

equipSlot.addEventListener('dragover',overdrop);
equipSlot.addEventListener('drop',drop);