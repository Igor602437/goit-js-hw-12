import{a as h,S as m,i as c}from"./assets/vendor-B7yatFIi.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function f(i){const r="https://pixabay.com/api/",s="42598065-1779ad5a953180c3fe77c2809",o=new URLSearchParams({key:s,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:"21"});return h.get(`${r}?${o}`).then(e=>e.data)}const n={inputForm:document.querySelector(".js-form"),galleryList:document.querySelector(".js-gallery"),loader:document.querySelector(".js-loader")},g=new m(".gallery a",{captionsData:"alt",captionDelay:250});function y(i){const r=i.map(({largeImageURL:s,webformatURL:o,tags:e,likes:t,views:a,comments:d,downloads:p})=>`
  <li class="gallery-card">
    <a href="${s}">
      <img class="gallery-img" src="${o}" alt="${e}" />
    </a>
    <ul class='card-item'>
      <li class="description">
        <h2>Likes</h2>
        <p>${t}</p>
      </li>
      <li class="description">
        <h2>Views</h2>
        <p>${a}</p>
      </li>
      <li class="description">
        <h2>Comments</h2>
        <p>${d}</p>
      </li>
      <li class="description">
        <h2>Downloads</h2>
        <p>${p}</p>
      </li>
    </ul>
  </li>
  `).join("");n.galleryList.innerHTML=r,l(),g.refresh()}const u=n.loader.classList,L=()=>{u.remove("is-hidden")},l=()=>u.add("is-hidden"),S=()=>{n.galleryList.innerHTML=""};function P(i){i.preventDefault();const r=i.target.elements.search_text,s=r.value.trim();if(s===""){c.error({message:"Sorry, the search field must be filled. Please enter correct data!",position:"topRight"}),r.value="";return}S(),L(),r.value="",f(s).then(o=>{if(o.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),l(),r.value="";return}y(o.hits)}).catch(o=>{l(),console.log(o)})}n.inputForm.addEventListener("submit",P);
//# sourceMappingURL=index.js.map
