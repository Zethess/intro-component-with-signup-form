class TemplateManager {

    loadEventListeners() {
        $(document).ready(() => {
            $('.claim-button').click((event) => {    
                this.checkInputsNotEmpty($(event.currentTarget));
            });
        });
    }

    checkInputsNotEmpty(btn) {
        const formDiv = btn.closest('.form-div');
        const inputContainers = formDiv.find('.input-container');
        inputContainers.each(function(){
        const input = $(this).find('input');
        const inputContainer = $(this);
        if (!input.val() && !inputContainer.hasClass('error')) {
            inputContainer.addClass('error');
            const isEmailInput = input.attr('type') === 'email';
            if (isEmailInput) {
                input.attr('placeholder', 'email@example/com');
            }
        } else if (input.val() && inputContainer.hasClass('error')) {
            inputContainer.removeClass('error');
        }
       })
    }
    init() {
        this.loadEventListeners();
    }
}

const templateManager = new TemplateManager();
templateManager.init();