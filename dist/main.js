(()=>{"use strict";function e(e){const t=document.querySelector(".edit-modal-window_btn"),n=document.querySelector(".edit-modal-window"),o=e.target.parentElement.parentElement.querySelector(".project_title"),c=document.querySelector(".edit-modal-window_name-field");c.value=o.textContent,n.style="display:block",t.addEventListener("click",(()=>{o.textContent=c.value,n.style="display:none"}),{once:!0})}function t(e){const t=document.querySelector(".remove-modal-window"),n=e.target.parentElement.parentElement,o=n.querySelector(".project_title").textContent,c=t.querySelector(".remove-project-modal_no-btn"),l=t.querySelector(".remove-project-modal_yes-btn");t.querySelector(".remove-modal-window_title").innerHTML=`Are you sure to delete <br>"${o}" project?`,t.style="display: block",c.addEventListener("click",(()=>t.style="display: none")),l.addEventListener("click",(()=>{n.remove(),t.style="display: none"}),{once:!0})}!function(){const e=document.querySelector(".burger-icon"),t=document.querySelector(".mobile-menu-window");e.addEventListener("click",(()=>{t.classList.toggle("mobile-menu-active")}))}(),function(){const n=document.querySelector(".remove-modal-window"),o=document.querySelector(".edit-modal-window"),c=o.querySelector(".edit-modal-close"),l=n.querySelector(".remove-modal-close"),d=document.querySelector(".main-page_add-project-btn"),r=document.querySelector(".main-page_add-project-modal"),a=r.querySelector(".add-modal-window_name-field"),i=r.querySelector(".create-modal-window_btn");c.addEventListener("click",(()=>o.style="display: none")),l.addEventListener("click",(()=>n.style="display: none")),d.addEventListener("click",(()=>{r.style="display: block",i.addEventListener("click",(()=>{const n=a.value;var o;a.value="",o=function(n){const o=document.createElement("div");o.className="main-page_project project";const c=document.createElement("div");c.className="project_title",c.textContent=n;const l=document.createElement("div");l.className="project_number-of-tasks",l.textContent="Tasks: 0";const d=document.createElement("div");d.className="project_btns";const r=document.createElement("button");r.className="edit-btn",r.textContent="Edit";const a=document.createElement("button");a.className="remove-btn",a.textContent="Remove",d.append(r,a),r.addEventListener("click",e),a.addEventListener("click",t),o.append(c,l,d);const i=o.querySelector(".project_btns");return o.addEventListener("mouseenter",(()=>{i.style="display: block",o.style="height: 140px"})),o.addEventListener("mouseleave",(()=>{i.style="display: none",o.style="height: 98px"})),o}(n),document.querySelector(".main-page_row").append(o),r.style="display: none"}),{once:!0})})),window.addEventListener("click",(e=>{"main-page_edit-project-modal-window edit-modal-window modal-window"===e.target.className&&(o.style="display: none")})),window.addEventListener("click",(e=>{"main-page_remove-project-modal-window remove-modal-window modal-window"===e.target.className&&(n.style="display: none")})),window.addEventListener("click",(e=>{"main-page_add-project-modal modal-window"===e.target.className&&(r.style="display: none")}))}();const n=document.querySelectorAll(".project");document.querySelector(".project_btns"),n.forEach((e=>e.addEventListener("mouseenter",(t=>{const n=e.querySelector(".project_btns");e.style="height: 140px",n.style="display: block"})))),n.forEach((e=>e.addEventListener("mouseleave",(t=>{const n=e.querySelector(".project_btns");e.style="height: 98px",n.style="display: none"}))))})();