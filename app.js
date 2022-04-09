let colorBox = document.getElementsByClassName('color_box');
let colorBoxCode = document.getElementsByClassName('color_box-code');
// let clickSound = new Audio(click-sound.wav);
let soundCheckBox = document.getElementById('sound');
let isSoundBoxChecked = false;
let modal = document.querySelector('.modal');

/**
 * Sound Check Box Event Handler
 */
soundCheckBox.addEventListener('change', function (e) {
    if (e.target.checked) {
        isSoundBoxChecked = true;
    }
    return isSoundBoxChecked;
})




let colorBoxArray = [...colorBox];
let colorBoxCodeArray = [...colorBoxCode];

colorBoxArray.forEach((v, i) => {
    v.style.backgroundColor = v.innerText;

})


colorBoxArray.forEach((v, i) => {
    v.addEventListener('click', function () {


        navigator.clipboard.writeText(v.innerText);



        if (isSoundBoxChecked) {
            document.getElementById('click-sound').play();
        }

        // console log here
        console.log(`${v.innerText} copied! & ${isSoundBoxChecked}`);


            modal.innerText = `${v.innerText} Copied!`
            modal.style.display = 'grid'
       
        setTimeout(function(){
            modal.style.display = 'none'
        },1000)

    })
})



function showModal(){
    modal.style.display = 'block'
}