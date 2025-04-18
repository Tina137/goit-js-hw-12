import{a as h,i as u,S as y}from"./assets/vendor-BBSqv8W6.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();async function m(s,r){let e=await h.get(`https://pixabay.com/api/?key=49659648-1ebf0f70bcfba68f8c305ff0f&q=${s}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=${r}`);try{if(e.data.hits.length==0)u.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});else return[e.data.hits,e.data.totalHits]}catch(a){return a}}const d=document.querySelector(".gallery");let p=new y(".gallery a",{captionsData:"alt",captionDelay:250});function g(s){let r="";s.forEach(e=>{r+=`
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
  `}),d.insertAdjacentHTML("beforeend",r),p.refresh()}const f=document.querySelector("#loader");function L(){f.classList=""}function b(){f.classList="hide"}function w(){d.innerHTML=""}const i=document.querySelector("#more");function v(){i.classList=""}function l(){i.classList="hide"}const q=document.querySelector(".form");function c(s,r){m(s,r).then(e=>{console.log(e),g(e[0]),v();let a=Math.ceil(e[1]/15);if(r>a)return l(),u.error({position:"bottomRight",message:"We're sorry, but you've reached the end of search results."})}).catch(e=>(l(),e)).finally(()=>{b()})}q.addEventListener("submit",s=>{s.preventDefault(),w();let r=s.target.elements["search-text"];if(r.value.trim()){L();let e=1,a=r.value;i.addEventListener("click",t=>{e++,c(a,e);let n=document.querySelector("li:last-child").getBoundingClientRect();window.scrollBy(0,n.height)}),c(a,e),r.value=""}});
//# sourceMappingURL=index.js.map
