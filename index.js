import{a as y,S as B,i as u}from"./assets/vendor-B7yatFIi.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const g=15;y.defaults.baseURL="https://pixabay.com/api/";async function S(r,o){const s={params:{key:"42598065-1779ad5a953180c3fe77c2809",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:g,page:o}};return(await y.get("",s)).data}const i={inputForm:document.querySelector(".js-form"),galleryList:document.querySelector(".js-gallery"),loader:document.querySelector(".js-loader"),loadMoreButton:document.querySelector(".js-load-images-btn"),elem:document.querySelector(".js-gallery")},M=new B(".gallery a",{captionsData:"alt",captionDelay:250});function j(r){const o=r.map(({largeImageURL:a,webformatURL:s,tags:e,likes:t,views:n,comments:b,downloads:w})=>`
  <li class="gallery-card js-gallery-card">
    <a href="${a}">
      <img class="gallery-img" src="${s}" alt="${e}" />
    </a>
    <ul class='card-item'>
      <li class="description">
        <h2>Likes</h2>
        <p>${t}</p>
      </li>
      <li class="description">
        <h2>Views</h2>
        <p>${n}</p>
      </li>
      <li class="description">
        <h2>Comments</h2>
        <p>${b}</p>
      </li>
      <li class="description">
        <h2>Downloads</h2>
        <p>${w}</p>
      </li>
    </ul>
  </li>
  `).join("");i.galleryList.insertAdjacentHTML("beforeend",o),M.refresh()}const q=()=>{i.galleryList.innerHTML=""},L=i.loader.classList,E=()=>L.remove("is-hidden"),d=()=>L.add("is-hidden"),v=i.loadMoreButton.classList,P=()=>v.remove("is-hidden"),h=()=>v.add("is-hidden");let l=0,p="",f=null,c=null;async function O(r){if(r.preventDefault(),c=r.target.elements.search_text,p=c.value.trim(),p===""){u.error({message:"Sorry, the search field must be filled. Please enter correct data!",position:"topRight"}),c.value="";return}q(),c.value="",l=1,m()}async function m(){try{let a=function(){let e=i.elem.lastElementChild;e.classList.add("last-item");let t=e.getBoundingClientRect();f=t.height+t.top};l>1&&a(),h(),E();const r=await S(p,l);if(r.hits.length===0){u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),d(),c.value="";return}const o=j(r.hits);if(r.totalHits>l*g)l+=1;else{h(),d(),i.loadMoreButton.removeEventListener("click",m),u.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}d(),P();const s=()=>{window.scrollBy({top:f,left:0,behavior:"smooth"})};l>2&&s()}catch{d(),console.log(err)}i.loadMoreButton.addEventListener("click",m)}i.inputForm.addEventListener("submit",O);
//# sourceMappingURL=index.js.map
