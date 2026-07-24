import{a as e,o as t}from"./shared-C2vhhfa-.js";import{n,r,t as i}from"./util-4IKf0xAX.js";import{n as a,t as o}from"./journeys.en-Bgmzdhy3.js";var s=n(e?o:a);document.title=t(`${s.zh} · 栖迟 SOJOURN`,`${s.zh} · SOJOURN 栖迟`),r(`#jHeroMedia`).innerHTML=`
  <img src="${i(`img/${s.hero}-1280.webp`)}"
    srcset="${i(`img/${s.hero}-1280.webp`)} 1280w, ${i(`img/${s.hero}-1920.webp`)} 1920w"
    sizes="100vw" alt="${s.zh}" fetchpriority="high" />`,r(`#jEn`).textContent=s.en,r(`#jTitle`).textContent=s.zh,r(`#jSpecs`).innerHTML=`${s.days} ${t(`天`,`days`)} &nbsp;·&nbsp; ${s.group} &nbsp;·&nbsp; ${s.seasons}`,r(`#jEssence`).textContent=s.essence,r(`#jIntro`).textContent=s.intro,r(`#jRhythm`).textContent=s.rhythm,r(`#jSeasons`).textContent=s.seasons,r(`#jPhases`).innerHTML=s.phases.map((e,t)=>`
  <article class="phase" data-animate="fade-up">
    <div class="phase__rail" aria-hidden="true"><span></span></div>
    <p class="phase__span">${e.span}</p>
    <div class="phase__body">
      <h3 class="phase__title">${e.title}</h3>
      <p class="phase__text">${e.text}</p>
    </div>
  </article>`).join(``),r(`#jMoments`).innerHTML=s.moments.map((e,t)=>`
  <div class="step">
    <p class="step__no">${[`Ⅰ`,`Ⅱ`,`Ⅲ`,`Ⅳ`,`Ⅴ`][t]||``}</p>
    <p class="step__text">${e}</p>
  </div>`).join(``),r(`#jCtaMedia`).innerHTML=`
  <img src="${i(`img/${s.img}-1600.webp`)}" alt="" loading="lazy" decoding="async" />`;