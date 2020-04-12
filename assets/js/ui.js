class UI {
    constructor() {
        this.profile = document.querySelector('.profile');
    }
    showProfile(user) {
        let company;
        let blog;
        let location;

        let formated = new Date(user.created_at);
        if (user.company === null) {
            company = '* * * * *';
        } else {
            company = user.company; 
        }
        if(user.blog === null){
            blog = '* * * * *';
        }else{
            blog = user.blog;
        }
        if(user.location === null){
            location = '* * * * *';
        }else{
            location = user.location;
        }
        this.profile.innerHTML = `
        <div class="uk-container uk-card uk-animation-slide-top-small uk-margin-large-bottom">
            <div class="uk-card uk-card-large uk-card-default uk-card-body">
                <div class="uk-grid uk-flex-center">
                    <div class="uk-width-1-3@s uk-width-1-4@m uk-width-1-4@l uk-margin-bottom">
                        <img src="${user.avatar_url}"
                            class="uk-margin-auto uk-animation-slide-top-small" alt="تصویر پروفایل" uk-img>
                        <a href="${user.html_url}" class="uk-child-width-expand uk-animation-toggle">
                            <button class="uk-button uk-button-danger uk-animation-fade">دیدن پروفایل</button>
                        </a>
                    </div>
                    <div class="uk-width-2-3@s uk-width-3-4@l uk-width-3-4@m uk-margin-auto">
                        <span class="uk-label uk-animation-slide-left">دنبال شونده: ${user.following}</span>
    
                        <span class="uk-label uk-label-success uk-animation-slide-left">دنبال کننده: ${user.followers}</span>
    
                        <span class="uk-label uk-label-danger uk-animation-slide-left">مخزن های عمومی: ${user.public_repos}</span>
    
                        <ul class="uk-list uk-list-striped uk-animation-slide-top-small">
                            <li class="uk-animation-slide-left-small">
                                <span class="uk-animation-fade" uk-icon="chevron-double-left"></span>
                                شرکت: <span>${company}</span>
                            </li>
    
                            <li class="uk-animation-slide-left-small">
                                <span class="uk-animation-fade" uk-icon="chevron-double-left"></span>
                                سایت/وبلاگ: <span><a href="${blog}" class="uk-link-reset">${blog}</a></span>
                            </li>
    
                            <li class="uk-animation-slide-left-small">
                                <span class="uk-animation-fade" uk-icon="chevron-double-left"></span>
                                موقعیت: <span>${location}</span>
                            </li>
    
                            <li class="uk-animation-slide-left-small">
                                <span class="uk-animation-fade" uk-icon="chevron-double-left"></span>
                                تاریخ عضویت: <span dir="ltr">${formated.getFullYear()}-${formated.getMonth()}-${formated.getDay()}</span>
                            </li>
    
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
    clearProfile() {
        this.profile.innerHTML = '';
    }
    changeColor(input) {
        input.classList.add('uk-form-danger');
        setTimeout(() => {
            input.classList.remove('uk-form-danger');
        }, 600);
    }
    showAlert(message) {
        this.clearAlert();
        let alert = `
        <div class="uk-alert-danger uk-alert uk-animation-shake uk-animation-slide-top uk-box-shadow-large uk-width-1-2 uk-margin-auto uk-border-rounded"
        uk-alert>
            <p class="uk-align-center uk-text-center ">${message}</p>
        </div>
        `;
        let div = document.querySelector('.uk-container');
        div.insertAdjacentHTML("afterbegin", alert);

        setTimeout(() => {
            this.clearAlert();
        }, 2000);

    }
    clearAlert() {
        let currentError = document.querySelector('.uk-alert-danger');

        if (currentError) {
            currentError.remove();
        }
    }
    showLoading() {
        let loading = `
        <div class="uk-position-fixed uk-position-cover uk-overlay uk-overlay-default uk-flex uk-flex-center uk-flex-middle uk-position-z-index uk-animation-fade">
            <span uk-spinner="ratio: 6.5"></span>
        </div>
        `;
        document.querySelector('body').insertAdjacentHTML('afterbegin',loading);
    }
    hideLoading() {
        document.querySelector('.uk-position-fixed').remove();
    }
}