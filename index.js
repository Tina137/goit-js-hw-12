import{a as g,i as c,S as p}from"./assets/vendor-BBSqv8W6.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();async function L(o,t){try{let e=await g.get(`https://pixabay.com/api/?key=49659648-1ebf0f70bcfba68f8c305ff0f&q=${o}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=${t}`);if(e.data.hits.length==0)c.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});else return[e.data.hits,e.data.totalHits]}catch(e){c.error({title:"Error",message:`Something went wrong: ${e.message}`,position:"topRight"})}}const h=document.querySelector(".gallery");let b=new p(".gallery a",{captionsData:"alt",captionDelay:250});function w(o){let t="";o.forEach(e=>{t+=`
    <li>
      <a href="${e.largeImageURL}">
        <img src="${e.webformatURL}" alt="${e.tags}" title="" />
        <table>
          <thead>
            <tr class="th">
              <th>Likes</th>
              <th>Views</th>
              <th>Comments</th>
              <th>Downloads</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${e.likes}</td>
              <td>${e.views}</td>
              <td>${e.comments}</td>
              <td>${e.downloads}</td>
            </tr>
          </tbody>
        </table>
      </a>
    </li>
  `}),h.insertAdjacentHTML("beforeend",t),b.refresh()}const m=document.querySelector("#loader");function S(){m.classList=""}function v(){m.classList="hide"}function $(){h.innerHTML=""}const f=document.querySelector("#more");function q(){f.classList=""}function u(){f.classList="hide"}const P=document.querySelector(".form");let a=1,d=0,n="";async function y(o,t){try{console.log(t),S();const e=await L(o,t),[i,r]=e;if(i.length===0){c.warning({position:"topRight",message:"Sorry, no images found. Please try another search."});return}w(i),d=Math.ceil(r/15),t<d?q():(u(),t!==1&&c.info({position:"bottomRight",message:"We're sorry, but you've reached the end of search results."}))}catch(e){return u(),e}finally{v()}}P.addEventListener("submit",async o=>{o.preventDefault(),$(),u();let t=o.target.elements["search-text"];n=t.value.trim(),n&&(a=1,await y(n,a),t.value="")});f.addEventListener("click",async()=>{if(a<d){a++,await y(n,a);const o=document.querySelector("li:last-child");if(o){const t=o.getBoundingClientRect();window.scrollBy({top:t.height*2,behavior:"smooth"})}}});
//# sourceMappingURL=index.js.map
