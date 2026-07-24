import{a as e,o as t}from"./shared-C2vhhfa-.js";import{r as n,t as r}from"./util-4IKf0xAX.js";import{n as i,t as a}from"./journeys.en-Bgmzdhy3.js";import{n as o,t as s}from"./destinations.en-kjT_mh45.js";var c=e?a:i,l=e?s:o;n(`#journeyList`).innerHTML=c.map((e,n)=>{let i=l.find(t=>t.slug===e.destination);return`
  <a class="card jcard" href="journey.html?slug=${e.slug}">
    <figure class="frame frame--card" data-animate="mask-reveal"><img src="${r(`img/${e.img}-800.webp`)}" alt="${e.zh}" loading="lazy" decoding="async" /></figure>
    <div class="card__meta">
      <p class="card__index">${String(n+1).padStart(2,`0`)} · ${i?i.zh:``}</p>
      <h3 class="card__title">${e.zh}</h3>
      <p class="card__en">${e.en}</p>
      <p class="card__specs"><span>${e.days} ${t(`天`,`days`)}</span><span>${e.group.replace(`每期 `,``)}</span><span>${e.seasons}</span></p>
      <p class="card__line">${e.essence}</p>
    </div>
  </a>`}).join(``);