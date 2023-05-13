function modals(){
    const   btnsRegistration = document.querySelectorAll('[data-btn]'),
        btnRegistrationSingIn = document.querySelector('[data-btn-2]'),
        close = document.querySelectorAll('[data-close]'),
        form = document.querySelector('.form-container'),
        formRegistrationSingIn = document.querySelector('.form-container-authorization'),
        linkRegistration = document.querySelector('[data-link]');
    

    function openModal(item = formRegistrationSingIn){
        item.style.display = 'block';
        document.body.style.overflow = 'hidden';
        // clearTimeout(timeOut);
    }

    function closeModal(item = formRegistrationSingIn){
        item.style.display = 'none';    
        document.body.style.overflow = '';
    }

    btnsRegistration.forEach(item => {
        item.addEventListener('click', () => {
            openModal(form);
        });
    });

    btnRegistrationSingIn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(formRegistrationSingIn);
    });



    close.forEach(item => {
        item.addEventListener('click', () => {
            closeModal(form);
            closeModal(formRegistrationSingIn);
        });
    });



    linkRegistration.addEventListener('click', () => {
        closeModal(formRegistrationSingIn);
        openModal(form);
    });
    

    window.addEventListener('keydown', (e) => {
        if(e.code === 'Escape'){
            closeModal(formRegistrationSingIn);
            closeModal(form);
        }
    });

    function closeModalInForm(form){
        form.addEventListener('click', (e) => {
            if(e.target === form){
                closeModal(form);
            }
        });
    }
    closeModalInForm(form);
    closeModalInForm(formRegistrationSingIn);

    // const timeOut = setTimeout(openModal, 5000);

    form.addEventListener('click', (e) => {
        if(e.target === form){
            closeModal(form);
        }
    });

    formRegistrationSingIn.addEventListener('click', (e) => {
        if(e.target === formRegistrationSingIn){
            closeModal(formRegistrationSingIn);
        }
    });

    function showThanksModal(message){
        const   modalDialog1= document.querySelector('.form1'),
                modalDialog2= document.querySelector('.form2'),
                formsTest = document.querySelectorAll('.ggg'),
                formContainer = document.querySelector('.form-container'),
                formCon = document.querySelector('.form-container-authorization');

        
        const thanksModal1 = document.createElement('div');
        thanksModal1.classList.add('form');
        thanksModal1.style.textAlign = 'center';
        thanksModal1.innerHTML = `
            <div class="form-content">
                <div data-close class="form-close">&times;</div>
                <hi class="form-title">${message}</hi>
            </div>
        `;

        const thanksModal2 = document.createElement('div');
        thanksModal2.classList.add('form');
        thanksModal2.style.textAlign = 'center';
        thanksModal2.innerHTML = `
            <div class="form-content">
                <div data-close class="form-close">&times;</div>
                <hi class="form-title">${message}</hi>
            </div>
        `;


        formsTest.forEach(form => {
            if(form.classList.contains('test1')){
                modalDialog1.classList.add('hide');
                openModal(modalDialog1);
                formContainer.append(thanksModal1);
                showSetTimeOut(modalDialog1,formContainer,thanksModal1);
            }
            if(form.classList.contains('test2')){
                modalDialog2.classList.add('hide');
                openModal(modalDialog2);
                formCon.append(thanksModal2);
                showSetTimeOut(modalDialog2,formCon,thanksModal2);
            }
        });

        function showSetTimeOut(item,modal,thanksModal){
            setTimeout(() => {
                thanksModal.remove();
                item.classList.add('show');
                item.classList.remove('hide');        
                closeModal(modal);
           },2000);
        }
    }


    function requests(){
        const forms = document.querySelectorAll('form');
    
        const message = {
            loading: 'img/form/spinner.svg',
            success: 'Спасибо! Скоро мы с вами свяжемся',
            failure: 'Что-то пошло не так...'
        };
    
        forms.forEach(item => {
            bindPostData(item);
        });
    
        const postData = async (url, data) =>{
            let res = await fetch(url,{
                method : 'POST',
                headers : {
                    'Content-type': 'application/json'
                },
                body : data
            });
    
            return await res.json();
        };
    
        function bindPostData(form){
            form.addEventListener('submit', (e) =>{
                e.preventDefault();
    
                let statusMessage = document.createElement('img');  
                statusMessage.src = message.loading;
                statusMessage.style.cssText = `
                    display: block;
                    margin: 0 auto;
                `; 
                form.insertAdjacentElement('afterend', statusMessage);
    
                const formData = new FormData(form);
    
                const json = JSON.stringify(Object.fromEntries(formData.entries()));
    
                postData('http://localhost:3000/requests',json)
                
                .then(data => {
                    console.log(data);
                    showThanksModal(message.success);
                    statusMessage.remove();
                    form.reset();
                }).catch(() => {
                    showThanksModal(message.failure);
                }).finally(() => {
                    form.reset();
                });
            });
        }
    
    }
    requests();
}
export default modals;