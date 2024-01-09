(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const l=document.getElementById("main"),a=["mshajid","muthukumarimoorthi","muthuakalya","bearcin46","esakki2104prsnl","Vk2401","suriyamassmsd","riyaz1000","hema-venkat3","mushkir","dineshdevelope","jeya-rosini","swethadsalvatore","vedhatech002","danielace1","sharif-22","gayathrihg","kishorekumar-kp"];a.forEach(n=>{const i=`https://api.github.com/users/${n}`;fetch(i).then(t=>t.json()).then(t=>{const r=document.createElement("div");r.innerHTML=`
        <div class="border-2 border-[#424769] bg-[#424769]/35 rounded-md max-w-xs py-5">
        <div class="flex flex-col gap-y-4 px-8">
          <div class="relative flex justify-center">
            <img src="${t.avatar_url}" class="size-32 rounded-full object-cover border-4 border-black" />
            <div class="bg-black w-fit text-white text-[10px] px-2 py-0.5 items-center rounded-xl flex gap-x-1 absolute bottom-[-2px]">
              <img src="./images/GitHub.png" />
              <span>${t.login}</span>
            </div>
          </div>
          <div class="flex justify-center items-center flex-col text-white">
            <h2 class="text-2xl font-bold">${t.name}</h2>
            <span class="text-xs font-light">${t.location}</span>
          </div>
          <div class="flex justify-center items-center gap-x-2">
            <div class="text-sm  text-white">
              <span class="font-semibold">${t.followers}</span>
              <span class="font-light">Followers</span>
            </div>
            <div class="text-sm text-white">
              <span class="font-semibold">${t.public_repos}</span>
              <span class="font-light">Public Repositories</span>
            </div>
          </div>
          <div class="flex justify-center items-center">
            <button class="bg-black text-white px-5 py-2 rounded-full text-sm"><a href="https://github.com/${t.login}?tab=repositories">View all repositores</a></button>
          </div>
        </div>
      </div>
        `,l.append(r)})});
