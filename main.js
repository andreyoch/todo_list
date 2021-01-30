(()=>{"use strict";class e{constructor(e){this.projectName=e,this.id=function(){const e=t.getProjects();let n=new Set;for(let t in e)"id"===t&&n.add(e[t]);const o=n.size;let c,a=!0;for(;a;){let e=Math.floor(1e4*Math.random()+1);if(c=n.add(e).size,o!==c)return a=!1,e}}()}}class t{static getProjects(){let e;return e=null===localStorage.getItem("projects")?[]:JSON.parse(localStorage.getItem("projects")),e}static addProject(e){const n=t.getProjects();n.push(e),localStorage.setItem("projects",JSON.stringify(n))}static updateProjectName(e,n){e=Number.parseInt(e);const o=t.getProjects();for(let t=0;t<o.length;t++)if(o[t].id===e){o[t].projectName=n;break}localStorage.setItem("projects",JSON.stringify(o))}static removeProject(e){e=Number.parseInt(e);const n=t.getProjects();for(let t=0;t<n.length;t++)if(n[t].id===e){n.splice(t,1);break}localStorage.setItem("projects",JSON.stringify(n))}}function n(e,t){const n=document.createElement("div");n.className="main-page_project project";const o=document.createElement("div");o.className="project_title",o.textContent=e;const s=document.createElement("div");s.className="project_number-of-tasks",s.textContent="Tasks: 0";const d=document.createElement("div");d.className="project_btns";const l=document.createElement("button");l.className="edit-btn",l.textContent="Edit";const r=document.createElement("button");r.className="remove-btn",r.textContent="Remove",d.append(l,r),l.addEventListener("click",c),r.addEventListener("click",a);const i=document.createElement("div");i.textContent=t,i.className="project-id",n.append(o,s,d,i);const m=n.querySelector(".project_btns");return n.addEventListener("mouseenter",(()=>{m.style="display: block",n.style="height: 140px"})),n.addEventListener("mouseleave",(()=>{m.style="display: none",n.style="height: 98px"})),n}function o(e){document.querySelector(".main-page_row").append(e)}function c(e){const n=document.querySelector(".edit-modal-window_btn"),o=document.querySelector(".edit-modal-window"),c=e.target.parentElement.parentElement,a=c.querySelector(".project_title"),s=document.querySelector(".edit-modal-window_name-field");s.value=a.textContent,o.style="display:block",n.addEventListener("click",(()=>{a.textContent=s.value;const e=c.querySelector(".project-id").textContent;t.updateProjectName(e,s.value),o.style="display:none"}),{once:!0})}function a(e){const n=document.querySelector(".remove-modal-window"),o=e.target.parentElement.parentElement,c=o.querySelector(".project_title").textContent,a=n.querySelector(".remove-project-modal_no-btn"),s=n.querySelector(".remove-project-modal_yes-btn");n.querySelector(".remove-modal-window_title").innerHTML=`Are you sure to delete <br>"${c}" project?`,n.style="display: block",a.addEventListener("click",(()=>n.style="display: none")),s.addEventListener("click",(()=>{const e=o.querySelector(".project-id").textContent;t.removeProject(e),o.remove(),n.style="display: none"}),{once:!0})}!function(){const e=document.querySelector(".burger-icon"),t=document.querySelector(".mobile-menu-window");e.addEventListener("click",(()=>{t.classList.toggle("mobile-menu-active")}))}(),function(){const c=document.querySelector(".remove-modal-window"),a=document.querySelector(".edit-modal-window"),s=a.querySelector(".edit-modal-close"),d=c.querySelector(".remove-modal-close"),l=document.querySelector(".main-page_add-project-btn"),r=document.querySelector(".main-page_add-project-modal"),i=r.querySelector(".add-modal-window_name-field"),m=r.querySelector(".create-modal-window_btn"),p=document.querySelector(".project-page_modal-window"),u=document.querySelector(".project-page_add-task-btn"),y=document.querySelector(".add-task-modal-close");s.addEventListener("click",(()=>a.style="display: none")),d.addEventListener("click",(()=>c.style="display: none")),y.addEventListener("click",(()=>{p.style="display:none"})),l.addEventListener("click",(()=>{r.style="display: block",m.addEventListener("click",(()=>{const c=i.value;i.value="";let a=new e(c);t.addProject(a),o(n(c,a.id)),r.style="display: none"}),{once:!0})})),u.addEventListener("click",(()=>{p.style="display:block"})),window.addEventListener("click",(e=>{"main-page_edit-project-modal-window edit-modal-window modal-window"===e.target.className&&(a.style="display: none")})),window.addEventListener("click",(e=>{"main-page_remove-project-modal-window remove-modal-window modal-window"===e.target.className&&(c.style="display: none")})),window.addEventListener("click",(e=>{"main-page_add-project-modal modal-window"===e.target.className&&(r.style="display: none")})),window.addEventListener("click",(e=>{"project-page_modal-window modal-window"===e.target.className&&(p.style="display: none")}))}();const s=document.querySelectorAll(".project");s.forEach((e=>e.addEventListener("mouseenter",(t=>{const n=e.querySelector(".project_btns");e.style="height: 140px",n.style="display: block"})))),s.forEach((e=>e.addEventListener("mouseleave",(t=>{const n=e.querySelector(".project_btns");e.style="height: 98px",n.style="display: none"})))),t.getProjects().forEach((e=>o(n(e.projectName,e.id))));const d=document.querySelector(".expand-icon");d.addEventListener("click",(e=>{d.classList.toggle("expand-icon-expanded");const t=e.target.parentElement.parentElement.parentElement;t.classList.toggle("expanded-task"),document.querySelector(".task-expanded_content-normal").classList.toggle("task-expanded_content-expanded"),document.querySelector(".task_upper-elements-row").classList.toggle("task_upper-elements-expanded"),d.addEventListener("click",(()=>{d.classList.toggle("expand-icon-normal"),t.classList.toggle("decreaseHeight")}),{once:!0})}));const l=function(e,t){const n=document.createElement("div");n.className="task";const o=document.createElement("div");o.className="task_upper-elements-row";const c=document.createElement("input");c.type="checkbox",c.className="task_checkbox";const a=document.createElement("div");a.className="task_title",a.textContent="MyTask";const s=document.createElement("div");s.className="task-priority-line",a.append(s);const d=document.createElement("div");d.className="task_priority-block";const l=document.createElement("div");l.className="img-container";const r=document.createElement("img");r.className="expand-icon",r.src="img/expand.png",r.alt="expand-icon",l.append(r),o.append(c,a,d,l);const i=document.createElement("div");i.className="task-expanded_content-normal";const m=document.createElement("textarea");m.className="task-expanded_description",m.setAttribute("disabled","disabled"),m.textContent="Hello,this is task description!";const p=document.createElement("div");p.className="task-expanded_due-date",p.textContent="Due: 10/11/2025";const u=document.createElement("div");u.className="task-expanded_btns-row";const y=document.createElement("div");y.className="task_expanded-edit-btn task-expanded_btn",y.textContent="Edit";const g=document.createElement("div");g.className="task_expanded-remove-btn task-expanded_btn",g.textContent="Remove",u.append(y,g);const k=document.createElement("span");return k.className="task_id",k.textContent=19,i.append(m,p,u),n.append(o,i,k),l.addEventListener("click",(e=>{l.classList.toggle("expand-icon-expanded"),n.classList.toggle("expanded-task"),i.classList.toggle("task-expanded_content-expanded"),o.classList.toggle("task_upper-elements-expanded"),l.addEventListener("click",(()=>{l.classList.toggle("expand-icon-normal"),n.classList.toggle("decreaseHeight")}),{once:!0})})),c.addEventListener("click",(()=>{n.classList.toggle("completed-task"),d.classList.toggle("completed-task-task-priority"),s.classList.toggle("completed-task-task-priority")})),n}();var r;console.log(l),r=l,document.querySelector(".project-page_row").append(r)})();