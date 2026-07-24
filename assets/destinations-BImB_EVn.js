import{a as e,o as t}from"./shared-C2vhhfa-.js";import{r as n,t as r}from"./util-4IKf0xAX.js";import{n as i,t as a}from"./destinations.en-kjT_mh45.js";var o=e?a:i;n(`#destList`).innerHTML=o.map((e,n)=>`
  <article class="chap dlist__row">
    <a class="chap__media frame frame--wide" data-animate="mask-reveal" href="destination.html?slug=${e.slug}" aria-label="${e.zh}">
      <img src="${r(`img/${e.img}-1280.webp`)}" alt="${e.zh} — ${e.tagline}" loading="${n===0?`eager`:`lazy`}" decoding="async" />
    </a>
    <div class="chap__body">
      <p class="chap__no">${String(n+1).padStart(2,`0`)} — ${e.coord}</p>
      <h2 class="chap__title"><a href="destination.html?slug=${e.slug}">${e.zh}</a></h2>
      <p class="chap__en">${e.en} · ${e.sub}</p>
      <p class="chap__text">${e.tagline}。${e.intro[0]}</p>
      <a class="link-arrow" href="destination.html?slug=${e.slug}">
        ${t(`进入目的地`,`Enter the Destination`)}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M4 12h15m-6-6 6 6-6 6" /></svg>
      </a>
    </div>
  </article>`).join(``);