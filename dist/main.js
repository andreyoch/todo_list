(()=>{"use strict";!function(){const e=document.querySelector(".burger-icon"),t=document.querySelector(".mobile-menu-window");e.addEventListener("click",(()=>{t.classList.toggle("mobile-menu-active")}))}();const e=document.querySelector(".project"),t=document.querySelector(".project_btns");e.addEventListener("mouseenter",(()=>{t.style="display: block",e.style="height: 140px"})),e.addEventListener("mouseleave",(()=>{t.style="display: none",e.style="height: 98px"}));const n=document.querySelectorAll(".edit-btn"),o=document.querySelector(".edit-modal-window"),c=o.querySelector(".close");n.forEach((e=>e.addEventListener("click",(()=>o.style="display:block")))),c.addEventListener("click",(()=>o.style="display: none")),window.addEventListener("click",(e=>{"main-page_edit-project-modal-window edit-modal-window"===e.target.className&&(o.style="display: none")}))})();