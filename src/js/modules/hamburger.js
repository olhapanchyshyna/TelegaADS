function hamburger(openSelector,closeSelector,menuSelector){

    window.addEventListener('resize', () => {
        showMenu();
    });
    showMenu();


    function showMenu(){
        if (window.innerWidth <= 1040){
            const   openBtn = document.querySelector(openSelector),
                    closeBtn = document.querySelector(closeSelector),
                    menu = document.querySelector(menuSelector);
                   

            close();

            function open(){
                menu.style.display = 'flex';
                menu.style.flexDirection = 'column';
                openBtn.style.display = 'none';
                closeBtn.style.display = 'flex';
                

            }
            function close(){
                menu.style.display = 'none'
                closeBtn.style.display = 'none';
                openBtn.style.display = 'flex';
                
            }
        
            openBtn.addEventListener('click', () =>{
                open();

                menu.classList.add('animate__fadeIn');
                menu.classList.remove('animate__fadeOut');

                closeBtn.classList.add('animate__fadeIn');
                closeBtn.classList.remove('animate__fadeOut');

                openBtn.classList.remove('animate__fadeIn');
                openBtn.classList.add('animate__fadeOut');
        
            })
            
            closeBtn.addEventListener('click', () => {
        
                menu.classList.remove('animate__fadeIn');
                menu.classList.add('animate__fadeOut');

                closeBtn.classList.remove('animate__fadeIn');
                closeBtn.classList.add('animate__fadeOut');

                openBtn.classList.add('animate__fadeIn');
                openBtn.classList.remove('animate__fadeOut');
            
                setTimeout(() => {
                    close();
                },1000)
            })
        }
        if (window.innerWidth >= 1041){
            const   openBtn = document.querySelector(openSelector),
                closeBtn = document.querySelector(closeSelector),
                menu = document.querySelector(menuSelector);


            menu.style.display = 'flex';
            menu.style.flexDirection = 'row';
            openBtn.style.display = 'none';
            closeBtn.style.display = 'none';
        }
        
    }
}
export default hamburger;