(()=>{"use strict";class e{constructor(e){this.projectName=e,this.id=function(){const e=t.getProjects();let o=new Set;for(let t in e)"id"===t&&o.add(e[t]);const n=o.size;let c,r=!0;for(;r;){let e=Math.floor(1e4*Math.random()+1);if(c=o.add(e).size,n!==c)return r=!1,e}}()}}class t{static getProjects(){let e;return e=null===localStorage.getItem("projects")?[]:JSON.parse(localStorage.getItem("projects")),e}static addProject(e){const o=t.getProjects();o.push(e),localStorage.setItem("projects",JSON.stringify(o))}static updateProjectName(e,o){e=Number.parseInt(e);const n=t.getProjects();for(let t=0;t<n.length;t++)if(n[t].id===e){n[t].projectName=o;break}localStorage.setItem("projects",JSON.stringify(n))}static removeProject(e){e=Number.parseInt(e);const o=t.getProjects();for(let t=0;t<o.length;t++)if(o[t].id===e){o.splice(t,1);break}localStorage.setItem("projects",JSON.stringify(o))}}function o(e,t){const o=document.createElement("div");o.className="main-page_project project";const n=document.createElement("div");n.className="project_title",n.textContent=e;const l=document.createElement("div");l.className="project_number-of-tasks",l.textContent="Tasks: 0";const a=document.createElement("div");a.className="project_btns";const d=document.createElement("button");d.className="edit-btn",d.textContent="Edit";const s=document.createElement("button");s.className="remove-btn",s.textContent="Remove",a.append(d,s),d.addEventListener("click",c),s.addEventListener("click",r);const i=document.createElement("div");i.textContent=t,i.className="project-id",o.append(n,l,a,i);const m=o.querySelector(".project_btns");return o.addEventListener("mouseenter",(()=>{m.style="display: block",o.style="height: 140px"})),o.addEventListener("mouseleave",(()=>{m.style="display: none",o.style="height: 98px"})),o}function n(e){document.querySelector(".main-page_row").append(e)}function c(e){const o=document.querySelector(".edit-modal-window_btn"),n=document.querySelector(".edit-modal-window"),c=e.target.parentElement.parentElement,r=c.querySelector(".project_title"),l=document.querySelector(".edit-modal-window_name-field");l.value=r.textContent,n.style="display:block",o.addEventListener("click",(()=>{r.textContent=l.value;const e=c.querySelector(".project-id").textContent;t.updateProjectName(e,l.value),n.style="display:none"}),{once:!0})}function r(e){const o=document.querySelector(".remove-modal-window"),n=e.target.parentElement.parentElement,c=n.querySelector(".project_title").textContent,r=o.querySelector(".remove-project-modal_no-btn"),l=o.querySelector(".remove-project-modal_yes-btn");o.querySelector(".remove-modal-window_title").innerHTML=`Are you sure to delete <br>"${c}" project?`,o.style="display: block",r.addEventListener("click",(()=>o.style="display: none")),l.addEventListener("click",(()=>{const e=n.querySelector(".project-id").textContent;t.removeProject(e),n.remove(),o.style="display: none"}),{once:!0})}!function(){const e=document.querySelector(".burger-icon"),t=document.querySelector(".mobile-menu-window");e.addEventListener("click",(()=>{t.classList.toggle("mobile-menu-active")}))}(),function(){const c=document.querySelector(".remove-modal-window"),r=document.querySelector(".edit-modal-window"),l=r.querySelector(".edit-modal-close"),a=c.querySelector(".remove-modal-close"),d=document.querySelector(".main-page_add-project-btn"),s=document.querySelector(".main-page_add-project-modal"),i=s.querySelector(".add-modal-window_name-field"),m=s.querySelector(".create-modal-window_btn");l.addEventListener("click",(()=>r.style="display: none")),a.addEventListener("click",(()=>c.style="display: none")),d.addEventListener("click",(()=>{s.style="display: block",m.addEventListener("click",(()=>{const c=i.value;i.value="";let r=new e(c);t.addProject(r),n(o(c,r.id)),s.style="display: none"}),{once:!0})})),window.addEventListener("click",(e=>{"main-page_edit-project-modal-window edit-modal-window modal-window"===e.target.className&&(r.style="display: none")})),window.addEventListener("click",(e=>{"main-page_remove-project-modal-window remove-modal-window modal-window"===e.target.className&&(c.style="display: none")})),window.addEventListener("click",(e=>{"main-page_add-project-modal modal-window"===e.target.className&&(s.style="display: none")}))}();const l=document.querySelectorAll(".project");l.forEach((e=>e.addEventListener("mouseenter",(t=>{const o=e.querySelector(".project_btns");e.style="height: 140px",o.style="display: block"})))),l.forEach((e=>e.addEventListener("mouseleave",(t=>{const o=e.querySelector(".project_btns");e.style="height: 98px",o.style="display: none"})))),t.getProjects().forEach((e=>n(o(e.projectName,e.id))))})();