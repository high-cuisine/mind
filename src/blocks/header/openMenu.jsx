import { useEffect } from "react"

const useOpenMenu = (menuBlock, burger, activeClass) => {

    let isOpen = false;

   const handleModal = () => {
    if(isOpen) {
        menuBlock.current.style.right = '-100%';
        setTimeout(() => {
            menuBlock.current.style.display = 'none';
            burger.current.classList.remove(activeClass);

        }, 300);

       
    }
    else {
        menuBlock.current.style.display = 'flex';
        burger.current.classList.add(activeClass);
        setTimeout(() => menuBlock.current.style.right = '0', 0);
        
    }
    isOpen = !isOpen;
   }

   return { handleModal }
}

export { useOpenMenu }