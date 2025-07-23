import{a as h,S as v,i as d}from"./assets/vendor-B7yatFIi.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function l(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=l(t);fetch(t.href,r)}})();const f=15;h.defaults.baseURL="https://pixabay.com/api/";async function S(e,o){const s={params:{key:"42598065-1779ad5a953180c3fe77c2809",q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:f,page:o}};return(await h.get("",s)).data}const i={inputForm:document.querySelector(".js-form"),galleryList:document.querySelector(".js-gallery"),loader:document.querySelector(".js-loader"),loadMoreButton:document.querySelector(".js-load-images-btn")},w=new v(".gallery a",{captionsData:"alt",captionDelay:250});function P(e){const o=e.map(({largeImageURL:l,webformatURL:s,tags:t,likes:r,views:a,comments:L,downloads:b})=>`
  <li class="gallery-card js-gallery-card">
    <a href="${l}">
      <img class="gallery-img" src="${s}" alt="${t}" />
    </a>
    <ul class='card-item'>
      <li class="description">
        <h2>Likes</h2>
        <p>${r}</p>
      </li>
      <li class="description">
        <h2>Views</h2>
        <p>${a}</p>
      </li>
      <li class="description">
        <h2>Comments</h2>
        <p>${L}</p>
      </li>
      <li class="description">
        <h2>Downloads</h2>
        <p>${b}</p>
      </li>
    </ul>
  </li>
  `).join("");i.galleryList.insertAdjacentHTML("beforeend",o),w.refresh()}const B=()=>{i.galleryList.innerHTML=""},g=i.loader.classList,M=()=>g.remove("is-hidden"),j=()=>g.add("is-hidden"),m=i.loadMoreButton.classList,q=()=>m.remove("is-hidden"),p=()=>m.add("is-hidden");let n=1,u="",c=null;async function $(e){if(e.preventDefault(),c=e.target.elements.search_text,u=c.value.trim(),u===""){d.error({message:"Sorry, the search field must be filled. Please enter correct data!",position:"topRight"}),c.value="";return}B(),c.value="",n=1,y()}async function y(){try{p(),M();const e=await S(u,n);if(e.hits.length===0){d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}if(P(e.hits),n>1&&x(),Math.ceil(e.totalHits/f)>n)n+=1;else{p(),d.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}q()}catch(e){console.log(e),d.error({message:`Sorry, you have encountered an error: ${e}`,position:"topRight"})}finally{j()}}function O(){const e=document.querySelector(".js-gallery-card");if(!e)return 0;const{height:o}=e.getBoundingClientRect();return o}function x(){const e=O();window.scrollBy({top:(e+24)*2,left:0,behavior:"smooth"})}i.inputForm.addEventListener("submit",$);i.loadMoreButton.addEventListener("click",y);
//# sourceMappingURL=index.js.map
