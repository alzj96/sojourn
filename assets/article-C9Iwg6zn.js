import{a as e,o as t}from"./shared-C2vhhfa-.js";import{n,r,t as i}from"./util-4IKf0xAX.js";import{n as a,t as o}from"./articles.en-BdsrtPJE.js";var s=e?o:a,c=n(s);document.title=t(`${c.title} · 栖迟 SOJOURN`,`${c.title} · SOJOURN 栖迟`),r(`#aMeta`).textContent=`${c.date} · ${c.read}`,r(`#aTitle`).textContent=c.title,r(`#aEn`).innerHTML=`<em>${c.en}</em>`;var l=r(`#aHero`);l.src=i(`img/${c.img}-1600.webp`),l.alt=c.title,r(`#aBody`).innerHTML=c.body.map(e=>`<p data-animate="fade-up">${e}</p>`).join(``);var u=s[(s.findIndex(e=>e.slug===c.slug)+1)%s.length];r(`#aNext`).innerHTML=`
  <div class="article-next__card">
    <p class="eyebrow eyebrow--gold" data-animate="fade-up">Next</p>
    <a class="article-next__link" href="article.html?slug=${u.slug}">
      <h2 data-split="lines">${u.title}</h2>
      <p class="acard__excerpt">${u.excerpt}</p>
    </a>
  </div>`;