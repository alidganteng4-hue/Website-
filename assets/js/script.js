/* ===== GhoulNet — script.js ===== */
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const rm = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const rupiah = n => 'Rp ' + n.toLocaleString('id-ID');
  const page = document.body.dataset.page;

  /* ---------- Ikon ---------- */
  const svg = (p, extra = '') => `<svg viewBox="0 0 24 24" aria-hidden="true" ${extra}>${p}</svg>`;
  const IC = {
    ig: svg('<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r=".8"/>'),
    wa: svg('<path d="M3 21l1.6-4.8A8.5 8.5 0 1 1 8 19.5L3 21z"/><path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.5-2-1-1 .8c-1-.4-2-1.4-2.4-2.4l.8-1-1-2-1.9.6z"/>'),
    yt: svg('<rect x="2.5" y="5.5" width="19" height="13" rx="4"/><path d="M10 9.5v5l4.5-2.5z"/>'),
    fb: svg('<path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z"/>'),
    mail: svg('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>'),
    phone: svg('<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>'),
    pin: svg('<path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>'),
    bolt: svg('<path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/>'),
    shield: svg('<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>'),
    clock: svg('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'),
    map: svg('<path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2-6-2z"/><path d="M9 4v14M15 6v14"/>'),
    search: svg('<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>'),
    up: svg('<path d="M6 15l6-6 6 6"/>')
  };

  /* ---------- Header, footer, tombol mengambang ---------- */
  const NAV = [['index.html', 'Beranda', 'home'], ['produk.html', 'Produk', 'produk'], ['cakupan.html', 'Cakupan', 'cakupan'], ['kontak.html', 'Kontak', 'kontak']];

  function chrome() {
    const nav = NAV.map(([h, t, k]) => `<a href="${h}"${k === page ? ' aria-current="page"' : ''}>${t}</a>`).join('');
    document.body.insertAdjacentHTML('afterbegin', `
      <a class="skip" href="#main">Lewati ke konten</a>
      <div class="progress" aria-hidden="true"><i id="bar"></i></div>
      <header class="site-head"><div class="wrap head-in">
        <a class="brand" href="index.html" aria-label="GhoulNet, ke beranda"><span class="k">東京喰種</span><span class="n">GHOULNET</span></a>
        <nav class="nav" id="nav" aria-label="Menu utama">${nav}<a class="btn btn-primary" href="produk.html" style="margin-left:8px;color:#fff;min-height:42px;padding:0 20px">Pasang sekarang</a></nav>
        <button class="burger" id="burger" aria-expanded="false" aria-controls="nav" aria-label="Buka menu"><span></span><span></span><span></span></button>
      </div></header>`);

    document.body.insertAdjacentHTML('beforeend', `
      <footer class="foot"><div class="wrap">
        <div class="foot-grid">
          <div class="brand-big"><span class="k">東京喰種</span><p>Tenang, Senang, Menang. Internet rumah cepat dan stabil untuk semua Warrior.</p></div>
          <div><h4>Informasi</h4><ul>
            <li><a href="#">Tentang Ghoulnet</a></li><li><a href="#">Blog</a></li><li><a href="kontak.html">Kontak</a></li>
            <li><a href="#">Syarat dan Ketentuan</a></li><li><a href="#">Kebijakan Privasi</a></li></ul></div>
          <div><h4>Media sosial</h4><div class="socials">
            <a href="#" aria-label="Instagram">${IC.ig}</a><a href="https://wa.me/${SITE.wa}" aria-label="WhatsApp">${IC.wa}</a>
            <a href="#" aria-label="YouTube">${IC.yt}</a><a href="#" aria-label="Facebook">${IC.fb}</a></div></div>
          <div><h4>Ghoulnet Home Care</h4><address>
            <a href="mailto:${SITE.email}">${SITE.email}</a><br>
            Contact Center: <a href="tel:${SITE.hotline}"><strong>${SITE.hotline}</strong></a><br>Hotline 24 jam<br><br>${SITE.address}</address></div>
        </div>
        <div class="copy">© 2000 – 2026 All Rights Reserved. <a href="#">Kebijakan Privasi</a> | <a href="#">Syarat dan Ketentuan</a>. Ghoulnet is part of MidPlaza Holding.</div>
      </div></footer>
      <button class="fab fab-top" id="toTop" aria-label="Kembali ke atas">${IC.up}</button>
      <a class="fab fab-wa" href="https://wa.me/${SITE.wa}?text=${encodeURIComponent('Halo GhoulNet, saya mau tanya tentang paket internet.')}" target="_blank" rel="noopener" aria-label="Chat WhatsApp"><svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm5.2 14c-.2.6-1.2 1.2-1.7 1.2-.5.1-1 .2-3.3-.7-2.8-1.2-4.600-4-4.700-4.200-.1-.2-1.100-1.500-1.100-2.800s.7-2 .9-2.300c.2-.3.500-.3.700-.3h.5c.2 0 .4 0 .6.500l.9 2.100c.1.200.1.400 0 .5l-.4.600c-.1.200-.3.300-.1.600.6 1 1.400 1.800 2.400 2.300.3.2.5.1.600-.1l.8-1c.2-.3.400-.2.600-.1l2 1c.3.100.5.200.5.300.1.200.1.800-.1 1.400z"/></svg></a>
      <div class="toast" id="toast" role="status" aria-live="polite"></div>`);

    const burger = $('#burger'), navEl = $('#nav');
    burger.addEventListener('click', () => {
      const o = navEl.classList.toggle('open');
      burger.setAttribute('aria-expanded', o);
      burger.setAttribute('aria-label', o ? 'Tutup menu' : 'Buka menu');
    });
    $$('a', navEl).forEach(a => a.addEventListener('click', () => { navEl.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); }));
    $('#toTop').addEventListener('click', () => scrollTo({ top: 0, behavior: rm ? 'auto' : 'smooth' }));
  }

  let toastT;
  function toast(msg) {
    const t = $('#toast'); t.textContent = msg; t.classList.add('show');
    clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('show'), 3200);
  }

  /* ---------- Animasi scroll ---------- */
  function motion() {
    // reveal + stagger
    $$('[data-stagger]').forEach(g => [...g.children].forEach((c, i) => { c.dataset.reveal ||= 'up'; c.style.setProperty('--i', i); }));
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }), { threshold: .15, rootMargin: '0px 0px -6% 0px' });
    $$('[data-reveal]').forEach(el => io.observe(el));

    // counter
    const cio = new IntersectionObserver(es => es.forEach(e => {
      if (!e.isIntersecting) return; cio.unobserve(e.target);
      const el = e.target, end = +el.dataset.count;
      if (rm) { el.textContent = end.toLocaleString('id-ID'); return; }
      const t0 = performance.now(), D = 1600;
      const tick = t => { const p = Math.min((t - t0) / D, 1), v = 1 - Math.pow(1 - p, 4);
        el.textContent = Math.round(end * v).toLocaleString('id-ID'); if (p < 1) requestAnimationFrame(tick); };
      requestAnimationFrame(tick);
    }), { threshold: .6 });
    $$('[data-count]').forEach(el => cio.observe(el));

    // scroll-linked: progress, parallax kanji, marquee, tombol atas
    const bar = $('#bar'), top = $('#toTop'), par = $$('[data-parallax]'), mq = $$('[data-scrollx]');
    let tick = false;
    const update = () => {
      tick = false;
      const y = scrollY, h = document.documentElement.scrollHeight - innerHeight;
      bar.style.width = (h > 0 ? y / h * 100 : 0) + '%';
      top.classList.toggle('show', y > 600);
      if (rm) return;
      par.forEach(el => { if (y < 900) el.style.transform = `translateY(${y * .12}px)`; });
      mq.forEach(el => { const half = el.scrollWidth / 2, dir = el.dataset.scrollx === 'rev' ? 1 : -1;
        const x = (y * .45) % half; el.style.transform = `translateX(${dir === -1 ? -x : x - half}px)`; });
    };
    addEventListener('scroll', () => { if (!tick) { tick = true; requestAnimationFrame(update); } }, { passive: true });
    update();
  }

  /* ---------- Pengecek wilayah ---------- */
  function checker() {
    const f = $('#checker'); if (!f) return;
    const prov = $('#prov'), kota = $('#kota'), res = $('#result');
    Object.keys(COVERAGE).forEach(p => prov.add(new Option(p, p)));
    prov.addEventListener('change', () => {
      const c = COVERAGE[prov.value]; kota.length = 1; res.className = 'result';
      if (!c) { kota.disabled = true; return; }
      c.kota.forEach(k => kota.add(new Option('Kota ' + k, 'Kota ' + k)));
      c.kab.forEach(k => kota.add(new Option('Kab. ' + k, 'Kab. ' + k)));
      kota.disabled = false;
    });
    f.addEventListener('submit', e => {
      e.preventDefault();
      if (!prov.value || !kota.value) {
        res.className = 'result show bad'; res.textContent = 'Pilih provinsi dan kota/kabupaten terlebih dahulu.'; return;
      }
      res.className = 'result show ok';
      res.innerHTML = `Layanan GhoulNet tersedia di <strong>${kota.value}</strong>, ${prov.value}. <a href="produk.html">Lihat paket</a> atau <a href="kontak.html?kota=${encodeURIComponent(kota.value)}">minta dipasang</a>.`;
    });
    $('#locate')?.addEventListener('click', () => {
      if (!navigator.geolocation) return toast('Browser tidak mendukung lokasi. Pilih wilayah secara manual.');
      toast('Mencari lokasi Anda…');
      navigator.geolocation.getCurrentPosition(
        () => toast('Lokasi ditemukan. Pilih kota Anda untuk cek layanan.'),
        () => toast('Izin lokasi ditolak. Pilih wilayah secara manual.'),
        { timeout: 8000 });
    });
  }

  /* ---------- Produk ---------- */
  const minPrice = s => Math.min(...s.plans.map(p => p.price));
  function featured() {
    const box = $('#featured'); if (!box) return;
    box.innerHTML = PACKAGES.map(s => `
      <article class="card pcard" style="--accent:${s.accent}">
        <span class="badge">${s.tag}</span>
        <h3>${s.name}</h3>
        <p class="desc">${s.desc}</p>
        <div class="chips">${s.plans.slice(0, 4).map(p => `<span class="chip">${p.mbps} Mbps</span>`).join('')}${s.plans.length > 4 ? `<span class="chip">+${s.plans.length - 4}</span>` : ''}</div>
        <div class="from">Mulai dari<b>${rupiah(minPrice(s))}</b></div>
        <a class="btn btn-ghost btn-block" href="produk.html#${s.id}">Lihat paket</a>
      </article>`).join('');
  }

  function products() {
    const box = $('#series'); if (!box) return;
    const render = brand => {
      box.innerHTML = PACKAGES.filter(s => brand === 'all' || s.brand === brand).map(s => `
        <section class="series" id="${s.id}" style="--accent:${s.accent}">
          <div class="series-head" data-reveal="up"><div><span class="badge">${s.tag}</span><h2 style="margin-top:10px">${s.name}</h2><p>${s.desc}</p></div></div>
          <div class="plans" data-stagger>
            ${s.plans.map(p => `
              <article class="card plan${p.pop ? ' pop' : ''}">
                ${p.pop ? '<span class="flag">Paling dipilih</span>' : ''}
                <div class="speed"><b>${p.mbps}</b><span>Mbps</span></div>
                ${p.extra ? `<span class="chip" style="align-self:flex-start">${p.extra}</span>` : ''}
                <div class="price"><b>${rupiah(p.price)}</b> /bulan</div>
                <ul class="perks">${s.perks.map(x => `<li>${x}</li>`).join('')}</ul>
                <a class="btn ${p.pop ? 'btn-primary' : 'btn-ghost'} btn-block" href="kontak.html?paket=${encodeURIComponent(s.name + ' ' + p.mbps + ' Mbps')}">Pilih paket</a>
              </article>`).join('')}
          </div>
        </section>`).join('');
      motion.reveal();
    };
    $$('.tab').forEach(t => t.addEventListener('click', () => {
      $$('.tab').forEach(x => x.setAttribute('aria-selected', x === t));
      render(t.dataset.brand);
    }));
    render('all');
    if (location.hash) setTimeout(() => $(location.hash)?.scrollIntoView(), 80);
  }

  // kalkulator kebutuhan
  function calc() {
    const r = $('#devices'); if (!r) return;
    const out = { n: $('#devVal'), need: $('#need'), plan: $('#recName'), price: $('#recPrice'), go: $('#recGo') };
    const all = PACKAGES.flatMap(s => s.plans.map(p => ({ ...p, s }))).sort((a, b) => a.mbps - b.mbps || a.price - b.price);
    const run = () => {
      let need = +r.value * 3;
      $$('.check input:checked').forEach(c => need += +c.value);
      const pick = all.find(p => p.mbps >= need) || all[all.length - 1];
      out.n.textContent = r.value; out.need.textContent = need;
      out.plan.textContent = `${pick.s.name} ${pick.mbps} Mbps`;
      out.price.textContent = rupiah(pick.price) + ' /bulan';
      out.go.href = 'kontak.html?paket=' + encodeURIComponent(`${pick.s.name} ${pick.mbps} Mbps`);
    };
    r.addEventListener('input', run); $$('.check input').forEach(c => c.addEventListener('change', run)); run();
  }

  /* ---------- Cakupan ---------- */
  function coverage() {
    const box = $('#cov'); if (!box) return;
    const entries = Object.entries(COVERAGE);
    box.innerHTML = entries.map(([p, c]) => `
      <article class="card cov" data-reveal="up">
        <h3>${p}<small>${c.kota.length + c.kab.length} wilayah</small></h3>
        <div class="chips">${c.kota.map(k => `<span class="chip kota" data-n="${k.toLowerCase()}">Kota ${k}</span>`).join('')}
        ${c.kab.map(k => `<span class="chip" data-n="${k.toLowerCase()}">Kab. ${k}</span>`).join('')}</div>
      </article>`).join('');
    const total = entries.reduce((a, [, c]) => a + c.kab.length + c.kota.length, 0);
    const meta = $('#covMeta'), empty = $('#covEmpty'), q = $('#q');
    meta.textContent = `${entries.length} provinsi, ${total} kota/kabupaten`;
    q.addEventListener('input', () => {
      const v = q.value.trim().toLowerCase(); let shown = 0;
      $$('.cov', box).forEach((card, i) => {
        const pName = entries[i][0].toLowerCase(), pm = v && pName.includes(v); let any = false;
        $$('.chip', card).forEach(ch => { const m = !v || pm || ch.dataset.n.includes(v); ch.style.display = m ? '' : 'none'; if (m) any = true; });
        card.style.display = any ? '' : 'none'; if (any) { shown++; card.classList.add('in'); }
      });
      empty.classList.toggle('show', !shown);
      meta.textContent = v ? `${shown} provinsi cocok dengan “${q.value}”` : `${entries.length} provinsi, ${total} kota/kabupaten`;
    });
  }

  /* ---------- Form kontak ---------- */
  function contact() {
    const f = $('#contactForm'); if (!f) return;
    const sel = $('#paket');
    sel.add(new Option('Belum tahu, mohon rekomendasi', 'Belum tahu'));
    PACKAGES.forEach(s => s.plans.forEach(p => { const v = `${s.name} ${p.mbps} Mbps`; sel.add(new Option(`${v} – ${rupiah(p.price)}`, v)); }));
    const qs = new URLSearchParams(location.search);
    if (qs.get('paket')) { const m = [...sel.options].find(o => o.value === qs.get('paket')); if (m) sel.value = m.value; }
    if (qs.get('kota')) $('#kotaIn').value = qs.get('kota');

    const rules = {
      nama: v => v.trim().length >= 2 || 'Tulis nama lengkap Anda.',
      hp: v => /^(\+62|62|0)8\d{7,12}$/.test(v.replace(/[\s-]/g, '')) || 'Gunakan nomor WhatsApp aktif, contoh 081234567890.',
      kota: v => v.trim().length >= 2 || 'Tulis kota atau kabupaten tempat pemasangan.'
    };
    f.addEventListener('submit', e => {
      e.preventDefault(); let ok = true;
      Object.entries(rules).forEach(([id, fn]) => {
        const el = f.elements[id], msg = fn(el.value), err = $('#e-' + id);
        const bad = msg !== true; el.setAttribute('aria-invalid', bad); err.textContent = bad ? msg : ''; if (bad) ok = false;
      });
      if (!ok) { toast('Periksa kembali kolom yang ditandai.'); return; }
      const d = Object.fromEntries(new FormData(f));
      const text = `Halo GhoulNet, saya ingin pasang internet.\nNama: ${d.nama}\nWhatsApp: ${d.hp}\nKota: ${d.kota}\nPaket: ${d.paket}\n${d.pesan ? 'Catatan: ' + d.pesan : ''}`;
      window.open(`https://wa.me/${SITE.wa}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
      toast('Terkirim! Kami lanjutkan lewat WhatsApp.'); f.reset();
    });
  }


  /* ---------- Video trailer hero ---------- */
  function heroVideo() {
    const box = $('#heroVideo'); if (!box) return;
    const cfg = SITE.heroVideo || {}, ctl = $('#vctl');
    const saver = navigator.connection && navigator.connection.saveData;
    // Gambar sampul trailer langsung tampil sebagai latar (video menyusul di atasnya)
    if (cfg.youtube) box.style.cssText += `background:#06070f url(https://img.youtube.com/vi/${cfg.youtube}/maxresdefault.jpg) center/cover no-repeat`;
    // Dibuka dari file lokal (file://): YouTube menolak embed, jadi beri tombol putar yang membuka YouTube
    if (!cfg.mp4 && cfg.youtube && location.protocol === 'file:') {
      ctl.innerHTML = `<a class="btn btn-primary" style="min-height:44px;padding:0 20px;color:#fff" href="https://www.youtube.com/watch?v=${cfg.youtube}" target="_blank" rel="noopener">▶ Putar trailer</a>`;
      ctl.hidden = false; return;
    }
    if (saver || (!cfg.youtube && !cfg.mp4)) return;   // mode hemat data: cukup gambar sampul
    let el, yt = false, paused = false, muted = true;
    const cmd = (f, a = []) => el.contentWindow.postMessage(JSON.stringify({ event: 'command', func: f, args: a }), '*');
    const mount = () => {
      if (cfg.mp4) {
        el = document.createElement('video');
        Object.assign(el, { src: cfg.mp4, autoplay: true, muted: true, loop: true, playsInline: true });
        el.setAttribute('muted', ''); el.addEventListener('playing', () => box.classList.add('ready')); el.addEventListener('loadeddata', retry);
      } else {
        yt = true; el = document.createElement('iframe');
        const id = cfg.youtube;
        el.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=1&controls=0&loop=1&playlist=${id}&playsinline=1&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1&enablejsapi=1${location.protocol.startsWith('http') ? '&origin=' + encodeURIComponent(location.origin) : ''}`;
        el.referrerPolicy = 'strict-origin-when-cross-origin';
        el.allow = 'autoplay; encrypted-media'; el.title = 'Trailer'; el.tabIndex = -1;
        el.addEventListener('load', () => { hello(); retry(); setTimeout(() => box.classList.add('ready'), 900); });
      }
      box.appendChild(el);
    };
    (document.readyState === 'complete') ? mount() : addEventListener('load', mount, { once: true });

    // Pastikan benar-benar otomatis berputar (beberapa browser menunda autoplay)
    const kick = () => { if (!el || paused) return; if (yt) { cmd('mute'); cmd('playVideo'); } else { el.muted = true; el.play().catch(() => {}); } };
    const retry = () => [600, 1500, 3000, 5000].forEach(t => setTimeout(kick, t));
    addEventListener('message', e => { if (!(yt && el && e.source === el.contentWindow)) return; try { if (JSON.parse(e.data).event === 'onReady') kick(); } catch (_) {} });
    const hello = () => { if (yt && el) el.contentWindow.postMessage(JSON.stringify({ event: 'listening', id: 1 }), '*'); };
    const oncePlay = () => { kick(); ['pointerdown', 'touchstart', 'keydown', 'scroll'].forEach(ev => removeEventListener(ev, oncePlay)); };
    ['pointerdown', 'touchstart', 'keydown', 'scroll'].forEach(ev => addEventListener(ev, oncePlay, { passive: true }));

    const play = on => { if (!el) return; yt ? cmd(on ? 'playVideo' : 'pauseVideo') : (on ? el.play() : el.pause()); };
    new IntersectionObserver(es => es.forEach(e => { if (!paused) play(e.isIntersecting); }), { threshold: .05 }).observe(box);

  }

  /* ---------- Jalankan ---------- */
  chrome();
  motion();
  const motionReveal = () => {};
  motion.reveal = () => {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12 });
    $$('[data-stagger]').forEach(g => [...g.children].forEach((c, i) => { c.dataset.reveal ||= 'up'; c.style.setProperty('--i', i); }));
    $$('[data-reveal]:not(.in)').forEach(el => io.observe(el));
  };
  heroVideo(); checker(); featured(); products(); calc(); coverage(); contact();
  motion.reveal();
})();
