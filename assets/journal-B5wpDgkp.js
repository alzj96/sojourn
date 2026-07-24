import{a as e}from"./shared-C2vhhfa-.js";import{r as t,t as n}from"./util-4IKf0xAX.js";import{n as r,t as i}from"./articles.en-BdsrtPJE.js";var a=e?i:r;t(`#articleList`).innerHTML=a.map(e=>`
  <a class="acard" href="article.html?slug=${e.slug}">
    <figure class="frame" data-animate="mask-reveal"><img src="${n(`img/${e.img}-800.webp`)}" alt="" loading="lazy" decoding="async" /></figure>
    <p class="acard__date">${e.date} · ${e.read}</p>
    <h3 class="acard__title">${e.title}</h3>
    <p class="acard__excerpt">${e.excerpt}</p>
  </a>`).join(``);