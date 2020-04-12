let github = new Github();
let ui = new UI();
let input = document.querySelector('input');
let btnSearch = document.querySelector('button');
let btnRemove = document.querySelector('button:nth-child(2)');
input.addEventListener('keyup', (e)=>{  
    console.log(e.code);
    if(e.code === 'Enter'){
        checkInput(input.value);
    }
    if(input.value === ''){
        ui.clearProfile();
    }
}); 
btnSearch.addEventListener('click', ()=>{
    checkInput(input.value);
});
btnRemove.addEventListener('click', ()=>{
    ui.clearProfile();
    input.value = '';
});
function checkInput(username){
    if(username !== ''){
        ui.showLoading();
        // get user profil
        github.getUser(username).then(data => {
            if(!data.profile.message){
                //show profile  
                ui.showProfile(data.profile);
            }else{
                //show error 
                ui.showAlert('کاربری پیدا نشد!');
            }
        }).finally(()=>{ui.hideLoading()});
    }else{
        //clear profile 
        ui.changeColor(input);
    }
}