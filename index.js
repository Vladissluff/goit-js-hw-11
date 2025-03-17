import{a as u,S as d,i as f}from"./assets/vendor-DXaqCXe3.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const m="49391964-291726ed136d1a3fb828b3b36",p="https://pixabay.com/api/";async function y(s){return(await u.get(p,{params:{key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}const h=document.querySelector(".gallery"),g=new d(".gallery a",{captionsData:"alt",captionDelay:250});function b(s){const t=s.map(({webformatURL:o,largeImageURL:n,tags:e,likes:r,views:a,comments:c,downloads:l})=>`
        <li class="gallery-item">
            <a href="${n}">
                <img src="${o}" alt="${e}">
            </a>
            <div class="info">
                <p><b>Likes:</b> ${r}</p>
                <p><b>Views:</b> ${a}</p>
                <p><b>Comments:</b> ${c}</p>
                <p><b>Downloads:</b> ${l}</p>
            </div>
        </li>
    `).join("");h.innerHTML=t,g.refresh()}const L=document.querySelector(".form"),w=document.querySelector(".gallery"),i=document.querySelector(".loader");L.addEventListener("submit",s=>{s.preventDefault();const t=s.target.elements["search-text"].value.trim();if(!t)throw new Error("Please enter a search term!");w.innerHTML="",i.classList.remove("hidden"),y(t).then(o=>{if(o.length===0)throw new Error("Sorry, there are no images matching your search query. Please, try again!");b(o)}).catch(o=>{f.error({message:o.message})}).finally(()=>{i.classList.add("hidden")})});
//# sourceMappingURL=index.js.map
