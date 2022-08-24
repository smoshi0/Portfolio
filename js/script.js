function myFunction() {
    var element = document.body;
    var profile = document.getElementById('profile');
    const modalElemen = document.querySelectorAll('.modal-content');
    const borderCard = document.querySelectorAll('#border-card');
    const btnClose = document.querySelectorAll('.btn-close');
    const cardTitle = document.querySelectorAll('.card-title');
    const cardBody = document.querySelectorAll('.card-body');
    const buttonCard = document.querySelectorAll('#button-card');
    const nav = document.querySelectorAll('#nav');
    const textDark = document.querySelectorAll('#text-dark');
    const myFolio = document.querySelector('#myfolio');
    const btnSwitch = document.querySelector('#btn-switch');
    btnSwitch.classList.toggle('btn-dark');
    btnSwitch.classList.toggle('btn-light');
    myFolio.classList.toggle('text-white');
    myFolio.classList.toggle('text-dark');
    textDark.forEach((dark)=>{
        dark.classList.toggle("text-white");
        dark.classList.toggle("text-dark");
    })
    nav.forEach((nav)=>{
        nav.classList.toggle("border-dark");
        nav.classList.toggle("border-light");
        nav.classList.toggle("bg-dark");
        nav.classList.toggle("bg-light");
        nav.classList.toggle("navbar-dark");
    })
    cardTitle.forEach((card)=>{
        card.classList.toggle("text-white");
    })
    cardBody.forEach((body)=>{
        body.classList.toggle("bg-dark");
    })
    modalElemen.forEach((modal)=>{
        modal.classList.toggle("bg-dark");
    })
    borderCard.forEach((border)=>{
        border.classList.toggle("border-dark");
    })
    btnClose.forEach((close)=>{
        close.classList.toggle('bg-danger');
    })
    buttonCard.forEach((btn)=>{
        btn.classList.toggle("btn-dark");
        btn.classList.toggle("btn-light");
    })
    element.classList.toggle("dark-mode");
    profile.classList.toggle("shadow");
    profile.classList.toggle("shadow-css");
  }