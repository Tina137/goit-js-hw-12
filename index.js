import{a as p,i as c,S as L}from"./assets/vendor-BBSqv8W6.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();async function w(o,t){try{let e=await p.get(`https://pixabay.com/api/?key=49659648-1ebf0f70bcfba68f8c305ff0f&q=${o}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=${t}`);if(e.data.hits.length==0)c.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});else return[e.data.hits,e.data.totalHits]}catch(e){c.error({title:"Error",message:`Something went wrong: ${e.message}`,position:"topRight"})}}const m=document.querySelector(".gallery");let b=new L(".gallery a",{captionsData:"alt",captionDelay:250});function S(o){let t="";o.forEach(e=>{t+=`
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
  `}),m.insertAdjacentHTML("beforeend",t),b.refresh()}const y=document.querySelector("#loader");function $(){y.classList=""}function v(){y.classList="hide"}function q(){m.innerHTML=""}const f=document.querySelector("#more");function h(){f.classList=""}function d(){f.classList="hide"}const P=document.querySelector(".form");let l=1,u=0,a="";async function g(o,t){try{console.log(t),$();const e=await w(o,t),[i,r]=e;S(i),h(),u=Math.ceil(r/15),t<u?h():(d(),t!==1&&c.info({position:"bottomRight",message:"You've reached the end of search results."}))}catch(e){return d(),e}finally{v()}}P.addEventListener("submit",async o=>{o.preventDefault(),q(),d();let t=o.target.elements["search-text"];a=t.value,a.trim()&&(await g(a,1),t.value="")});f.addEventListener("click",async()=>{if(console.log(a),l<u){l++,await g(a,l);const o=document.querySelector("li:last-child");if(o){const t=o.getBoundingClientRect();window.scrollBy(0,t.height)}}});
//# sourceMappingURL=index.js.map
