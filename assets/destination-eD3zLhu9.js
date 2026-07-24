import{a as e,o as t}from"./shared-C2vhhfa-.js";import{n,r,t as i}from"./util-4IKf0xAX.js";import{n as a,t as o}from"./journeys.en-Bgmzdhy3.js";import{n as s,t as c}from"./destinations.en-kjT_mh45.js";var l=e?c:s,u=e?o:a,d=n(l);document.title=t(`${d.zh} · 栖迟 SOJOURN`,`${d.zh} · SOJOURN 栖迟`),r(`#dHeroMedia`).innerHTML=`
  <img src="${i(`img/${d.img}-1280.webp`)}"
    srcset="${i(`img/${d.img}-1280.webp`)} 1280w, ${i(`img/${d.img}-1920.webp`)} 1920w"
    sizes="100vw" alt="${d.zh}" fetchpriority="high" />`,r(`#dCoord`).textContent=`${d.en} — ${d.coord}`,r(`#dTitle`).textContent=d.zh,r(`#dEn`).textContent=d.sub,r(`#dTagline`).textContent=d.tagline,r(`#dIntro`).innerHTML=d.intro.map(e=>`<p data-animate="fade-up">${e}</p>`).join(``),r(`#dChapters`).innerHTML=d.chapters.map((e,t)=>`
  <article class="chap">
    <figure class="chap__media frame frame--wide" data-animate="mask-reveal">
      <img src="${i(`img/${e.img}-1600.webp`)}" alt="${e.title}" loading="lazy" decoding="async" />
    </figure>
    <div class="chap__body">
      <p class="chap__no">${String(t+1).padStart(2,`0`)}</p>
      <h2 class="chap__title">${e.title}</h2>
      <p class="chap__en">${e.en}</p>
      <p class="chap__text">${e.text}</p>
    </div>
  </article>`).join(``),r(`#dWhen`).innerHTML=d.bestTime.map(e=>`
  <div class="step">
    <p class="step__no">${e.period}</p>
    <p class="step__text">${e.note}</p>
  </div>`).join(``);var f=u.filter(e=>d.journeys.includes(e.slug));f.length?r(`#dRelated`).innerHTML=`
    <div class="section-head" style="margin-bottom: clamp(2.5rem, 5vw, 4rem)">
      <p class="eyebrow eyebrow--gold" data-animate="fade-up">Signature Journey</p>
      <h2 data-split="lines">${t(`与它相配的行程`,`The Journey to Match`)}</h2>
    </div>
    <div class="jcards jcards--center">
      ${f.map(e=>`
      <a class="card jcard" href="journey.html?slug=${e.slug}">
        <figure class="frame frame--card"><img src="${i(`img/${e.img}-800.webp`)}" alt="${e.zh}" loading="lazy" decoding="async" /></figure>
        <div class="card__meta">
          <h3 class="card__title">${e.zh}</h3>
          <p class="card__en">${e.en}</p>
          <p class="card__specs"><span>${e.days} ${t(`天`,`days`)}</span><span>${e.seasons}</span></p>
        </div>
      </a>`).join(``)}
    </div>`:r(`#dRelated`).innerHTML=`
    <div class="section-head">
      <p class="eyebrow eyebrow--gold" data-animate="fade-up">Bespoke Only</p>
      <h2 data-split="lines">${t(`这里只以定制的方式抵达`,`Reached only by bespoke`)}</h2>
      <p class="lede" data-animate="fade-up">${t(`海岛更适合作为一段旅程的后奏，或一次纪念日的独立出行——都值得为你单独设计。`,`Islands are best as the coda of a longer journey, or an anniversary of their own — either deserves a design entirely yours.`)}</p>
      <div data-animate="fade-up" data-delay="0.15"><a class="btn-pill" href="bespoke.html">${t(`了解私人定制`,`Discover Bespoke`)}</a></div>
    </div>`;