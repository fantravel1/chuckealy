<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <meta name="theme-color" content="#0b0f18" />

  <title>Chuck Ealy — Biography & Impact</title>
  <meta name="description" content="The story, work, and measurable impact of Chuck Ealy — built for the web: fast, visual, and shareable." />

  <!-- Open Graph -->
  <meta property="og:title" content="Chuck Ealy — Biography & Impact" />
  <meta property="og:description" content="A visual-first biography and impact page for Chuck Ealy." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://chuckealy.com/" />
  <meta property="og:image" content="https://chuckealy.com/og.jpg" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Chuck Ealy — Biography & Impact" />
  <meta name="twitter:description" content="A visual-first biography and impact page for Chuck Ealy." />
  <meta name="twitter:image" content="https://chuckealy.com/og.jpg" />

  <!-- Basic structured data (edit the fields) -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Chuck Ealy",
    "url": "https://chuckealy.com",
    "jobTitle": "Leader / Founder / Operator",
    "sameAs": [
      "https://www.linkedin.com/in/CHANGEME",
      "https://twitter.com/CHANGEME"
    ],
    "image": "https://chuckealy.com/portrait.jpg",
    "description": "Short bio summary here."
  }
  </script>

  <style>
    /* =========================
       CHUCKEALY.COM — BIO/IMPACT
       100% HTML/CSS/JS (no deps)
       ========================= */

    :root{
      --bg0:#060914;
      --bg1:#0b0f18;
      --card: rgba(255,255,255,.06);
      --card2: rgba(255,255,255,.085);
      --stroke: rgba(255,255,255,.10);
      --text: rgba(255,255,255,.92);
      --muted: rgba(255,255,255,.68);
      --faint: rgba(255,255,255,.50);
      --shadow: 0 24px 60px rgba(0,0,0,.45);
      --shadow2: 0 18px 36px rgba(0,0,0,.35);
      --radius: 22px;

      /* Accent palette (edit freely) */
      --a1: #7c5cff;   /* violet */
      --a2: #25e6a8;   /* mint */
      --a3: #ffd36e;   /* sun */
      --a4: #ff4d7d;   /* rose */

      --max: 1180px;
      --grid: 16px;
      --mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
      --sans: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji";
    }

    *{box-sizing:border-box}
    html,body{height:100%}
    body{
      margin:0;
      color:var(--text);
      font-family:var(--sans);
      background:
        radial-gradient(1200px 700px at 70% 10%, rgba(124,92,255,.20), transparent 60%),
        radial-gradient(1000px 600px at 20% 30%, rgba(37,230,168,.14), transparent 60%),
        radial-gradient(900px 500px at 60% 80%, rgba(255,77,125,.10), transparent 60%),
        linear-gradient(180deg, var(--bg0), var(--bg1));
      overflow-x:hidden;
    }

    /* Subtle noise overlay */
    body:before{
      content:"";
      position:fixed; inset:0;
      pointer-events:none;
      opacity:.08;
      mix-blend-mode:overlay;
      background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='.35'/%3E%3C/svg%3E");
      background-size:180px 180px;
    }

    a{color:inherit}
    .wrap{max-width:var(--max); margin:0 auto; padding:28px 20px 90px;}
    .topbar{
      position:sticky; top:0;
      z-index:20;
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      background:linear-gradient(180deg, rgba(6,9,20,.86), rgba(6,9,20,.58));
      border-bottom:1px solid rgba(255,255,255,.08);
    }
    .topbar-inner{
      max-width:var(--max);
      margin:0 auto;
      padding:14px 20px;
      display:flex; align-items:center; justify-content:space-between; gap:14px;
    }
    .brand{
      display:flex; align-items:center; gap:12px; text-decoration:none;
    }
    .mark{
      width:34px; height:34px; border-radius:12px;
      background:
        radial-gradient(circle at 30% 30%, rgba(255,255,255,.9), rgba(255,255,255,.0) 45%),
        linear-gradient(135deg, var(--a1), var(--a2));
      box-shadow: 0 10px 24px rgba(124,92,255,.25);
      border:1px solid rgba(255,255,255,.18);
    }
    .brand strong{letter-spacing:.3px}
    .nav{
      display:flex; gap:6px; flex-wrap:wrap; justify-content:flex-end;
    }
    .nav a{
      font-size:13px;
      padding:8px 10px;
      border-radius:999px;
      text-decoration:none;
      color:var(--muted);
      border:1px solid transparent;
      transition:all .18s ease;
    }
    .nav a:hover{color:var(--text); border-color:rgba(255,255,255,.12); background:rgba(255,255,255,.04)}
    .nav a.active{color:var(--text); border-color:rgba(255,255,255,.16); background:rgba(255,255,255,.05)}

    /* HERO */
    .hero{
      padding:42px 0 10px;
      display:grid;
      grid-template-columns: 1.1fr .9fr;
      gap:22px;
      align-items:stretch;
    }
    @media (max-width: 980px){
      .hero{grid-template-columns:1fr; padding-top:26px}
    }

    .card{
      border-radius:var(--radius);
      background: linear-gradient(180deg, rgba(255,255,255,.07), rgba(255,255,255,.04));
      border: 1px solid rgba(255,255,255,.10);
      box-shadow: var(--shadow2);
      overflow:hidden;
      position:relative;
    }
    .hero-left{padding:26px 26px 22px}
    .kicker{
      display:inline-flex; align-items:center; gap:10px;
      font-family:var(--mono);
      font-size:12px;
      color:rgba(255,255,255,.75);
      text-transform:uppercase;
      letter-spacing:.16em;
    }
    .dot{
      width:8px; height:8px; border-radius:99px;
      background:linear-gradient(90deg, var(--a2), var(--a1));
      box-shadow:0 0 0 4px rgba(37,230,168,.12);
    }
    h1{
      margin:14px 0 10px;
      line-height:1.05;
      font-size:54px;
      letter-spacing:-.02em;
    }
    @media (max-width: 520px){ h1{font-size:40px} }

    .subhead{
      color:var(--muted);
      font-size:16px;
      line-height:1.55;
      margin:0 0 18px;
      max-width:60ch;
    }

    .pillrow{display:flex; flex-wrap:wrap; gap:10px; margin:18px 0 18px}
    .pill{
      display:inline-flex; align-items:center; gap:8px;
      padding:9px 12px;
      border-radius:999px;
      border:1px solid rgba(255,255,255,.12);
      background:rgba(255,255,255,.04);
      color:rgba(255,255,255,.82);
      font-size:13px;
      white-space:nowrap;
    }
    .pill svg{opacity:.9}

    .ctarow{display:flex; gap:10px; flex-wrap:wrap; margin-top:16px}
    .btn{
      appearance:none; border:0;
      cursor:pointer;
      text-decoration:none;
      border-radius:14px;
      padding:12px 14px;
      font-weight:600;
      display:inline-flex; align-items:center; justify-content:center; gap:10px;
      transition: transform .16s ease, box-shadow .16s ease, background .16s ease, border-color .16s ease;
      user-select:none;
    }
    .btn:active{transform:translateY(1px)}
    .btn.primary{
      background: linear-gradient(135deg, rgba(124,92,255,.95), rgba(37,230,168,.88));
      color:#071019;
      box-shadow: 0 18px 46px rgba(124,92,255,.18), 0 18px 46px rgba(37,230,168,.12);
    }
    .btn.primary:hover{box-shadow: 0 22px 54px rgba(124,92,255,.22), 0 22px 54px rgba(37,230,168,.14)}
    .btn.ghost{
      background: rgba(255,255,255,.04);
      border:1px solid rgba(255,255,255,.14);
      color:rgba(255,255,255,.92);
    }
    .btn.ghost:hover{background: rgba(255,255,255,.06); border-color: rgba(255,255,255,.18)}
    .btn small{font-weight:600; opacity:.88}

    /* HERO RIGHT: portrait + metrics */
    .hero-right{display:grid; grid-template-rows: 1fr auto; gap:12px}
    .portrait{
      position:relative;
      min-height:320px;
      border-radius:var(--radius);
      border:1px solid rgba(255,255,255,.10);
      background:
        radial-gradient(120px 120px at 20% 20%, rgba(255,255,255,.22), transparent 60%),
        linear-gradient(135deg, rgba(255,255,255,.08), rgba(255,255,255,.02));
      overflow:hidden;
      box-shadow:var(--shadow2);
    }
    .portrait .img{
      position:absolute; inset:0;
      background-size:cover;
      background-position:center;
      filter:saturate(1.05) contrast(1.05);
      transform: scale(1.02);
    }
    .portrait .overlay{
      position:absolute; inset:0;
      background:
        radial-gradient(700px 360px at 40% 30%, rgba(124,92,255,.18), transparent 60%),
        radial-gradient(600px 360px at 70% 70%, rgba(37,230,168,.14), transparent 60%),
        linear-gradient(180deg, rgba(6,9,20,.10), rgba(6,9,20,.72));
    }
    .portrait .label{
      position:absolute; left:16px; bottom:14px; right:16px;
      display:flex; align-items:flex-end; justify-content:space-between; gap:12px;
    }
    .nameplate{
      display:flex; flex-direction:column; gap:6px;
      padding:10px 12px;
      border-radius:16px;
      background:rgba(0,0,0,.28);
      border:1px solid rgba(255,255,255,.10);
      backdrop-filter: blur(10px);
    }
    .nameplate strong{font-size:15px}
    .nameplate span{font-family:var(--mono); font-size:12px; color:rgba(255,255,255,.72)}
    .chip{
      padding:10px 12px;
      border-radius:999px;
      background:rgba(0,0,0,.28);
      border:1px solid rgba(255,255,255,.10);
      font-family:var(--mono);
      font-size:12px;
      color:rgba(255,255,255,.75);
      backdrop-filter: blur(10px);
      white-space:nowrap;
    }

    .metrics{
      display:grid;
      grid-template-columns: repeat(3, 1fr);
      gap:10px;
    }
    @media (max-width: 560px){ .metrics{grid-template-columns:1fr} }
    .metric{
      padding:14px 14px;
      border-radius:18px;
      background:rgba(255,255,255,.05);
      border:1px solid rgba(255,255,255,.10);
    }
    .metric b{
      font-size:22px;
      letter-spacing:-.02em;
      display:block;
    }
    .metric span{
      font-size:12px;
      color:rgba(255,255,255,.72);
      font-family:var(--mono);
      letter-spacing:.06em;
      text-transform:uppercase;
    }

    /* SECTIONS */
    section{margin-top:18px}
    .grid{
      display:grid;
      grid-template-columns: 1fr 1fr;
      gap:14px;
    }
    @media (max-width: 900px){ .grid{grid-template-columns:1fr} }

    .section-card{padding:22px}
    .section-title{
      display:flex; align-items:center; justify-content:space-between; gap:10px;
      margin-bottom:10px;
    }
    .section-title h2{
      font-size:18px; margin:0;
      letter-spacing:-.01em;
    }
    .section-title .tag{
      font-size:12px;
      color:rgba(255,255,255,.72);
      font-family:var(--mono);
      padding:6px 10px;
      border-radius:999px;
      border:1px solid rgba(255,255,255,.12);
      background:rgba(255,255,255,.04);
      white-space:nowrap;
    }
    p{margin:10px 0; color:var(--muted); line-height:1.6}

    /* Timeline */
    .timeline{display:flex; flex-direction:column; gap:10px; margin-top:14px}
    .titem{
      display:grid;
      grid-template-columns: 140px 1fr;
      gap:14px;
      padding:14px;
      border-radius:18px;
      background:rgba(255,255,255,.04);
      border:1px solid rgba(255,255,255,.10);
      position:relative;
    }
    @media (max-width: 560px){ .titem{grid-template-columns:1fr} }
    .twhen{
      font-family:var(--mono);
      font-size:12px;
      color:rgba(255,255,255,.72);
      letter-spacing:.08em;
      text-transform:uppercase;
    }
    .twhat b{display:block; font-size:14px; color:rgba(255,255,255,.92)}
    .twhat span{display:block; font-size:13px; color:rgba(255,255,255,.70); margin-top:4px; line-height:1.45}
    .tbadge{
      position:absolute; right:12px; top:12px;
      font-family:var(--mono);
      font-size:11px;
      color:rgba(255,255,255,.68);
      border:1px solid rgba(255,255,255,.12);
      background:rgba(255,255,255,.04);
      padding:6px 10px;
      border-radius:999px;
    }

    /* Impact stories */
    .stories{
      display:grid;
      grid-template-columns: 1fr 1fr;
      gap:12px;
      margin-top:14px;
    }
    @media (max-width: 700px){ .stories{grid-template-columns:1fr} }
    .story{
      border-radius:18px;
      border:1px solid rgba(255,255,255,.10);
      background:
        radial-gradient(260px 180px at 20% 0%, rgba(124,92,255,.12), transparent 60%),
        radial-gradient(260px 180px at 80% 100%, rgba(37,230,168,.10), transparent 60%),
        rgba(255,255,255,.04);
      padding:16px;
      position:relative;
      overflow:hidden;
    }
    .story h3{margin:0 0 8px; font-size:14px; letter-spacing:-.01em}
    .story p{margin:0; font-size:13px}
    .story .mini{
      margin-top:12px;
      display:flex; flex-wrap:wrap; gap:8px;
    }
    .mini .k{
      font-family:var(--mono);
      font-size:11px;
      color:rgba(255,255,255,.72);
      border:1px solid rgba(255,255,255,.12);
      background:rgba(0,0,0,.18);
      padding:6px 9px;
      border-radius:999px;
    }

    /* Quote */
    .quote{
      padding:20px;
      border-radius:18px;
      border:1px solid rgba(255,255,255,.10);
      background:rgba(255,255,255,.04);
      position:relative;
      overflow:hidden;
    }
    .quote:before{
      content:"“";
      position:absolute;
      left:14px; top:-10px;
      font-size:72px;
      color:rgba(255,255,255,.08);
      font-family: Georgia, "Times New Roman", serif;
    }
    .quote p{margin:0; font-size:15px; color:rgba(255,255,255,.82); line-height:1.55}
    .quote .by{
      margin-top:10px;
      font-family:var(--mono);
      color:rgba(255,255,255,.70);
      font-size:12px;
      letter-spacing:.06em;
      text-transform:uppercase;
    }

    /* Logos/press */
    .press{
      display:grid;
      grid-template-columns: repeat(4, 1fr);
      gap:10px;
      margin-top:14px;
    }
    @media (max-width: 860px){ .press{grid-template-columns:repeat(2, 1fr)} }
    .logo{
      height:56px;
      border-radius:16px;
      border:1px solid rgba(255,255,255,.10);
      background:rgba(255,255,255,.03);
      display:flex; align-items:center; justify-content:center;
      color:rgba(255,255,255,.70);
      font-family:var(--mono);
      font-size:12px;
      letter-spacing:.14em;
      text-transform:uppercase;
    }

    /* Footer / Contact */
    .footer{
      margin-top:18px;
      padding:20px;
      border-radius:var(--radius);
      border:1px solid rgba(255,255,255,.10);
      background:linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.03));
      display:flex; align-items:center; justify-content:space-between; gap:14px;
      flex-wrap:wrap;
    }
    .footer .left{display:flex; flex-direction:column; gap:6px}
    .footer .left b{font-size:14px}
    .footer .left span{color:rgba(255,255,255,.70); font-size:13px}
    .footer .right{display:flex; gap:10px; flex-wrap:wrap}

    /* Floating background blobs */
    .blob{
      position:absolute;
      filter: blur(42px);
      opacity:.55;
      border-radius:999px;
      pointer-events:none;
      transform: translate3d(0,0,0);
      will-change: transform;
      mix-blend-mode:screen;
    }
    .blob.b1{width:260px; height:260px; background:rgba(124,92,255,.35); left:-60px; top:200px}
    .blob.b2{width:320px; height:320px; background:rgba(37,230,168,.25); right:-120px; top:120px}
    .blob.b3{width:260px; height:260px; background:rgba(255,77,125,.20); right:90px; bottom:120px}

    /* Reveal animation */
    .reveal{opacity:0; transform: translateY(10px); transition: opacity .55s ease, transform .55s ease}
    .reveal.on{opacity:1; transform: translateY(0)}

    /* Reduced motion */
    @media (prefers-reduced-motion: reduce){
      .reveal{opacity:1; transform:none; transition:none}
      .blob{display:none}
      .btn{transition:none}
    }

    /* Tiny utility */
    .row{display:flex; gap:10px; flex-wrap:wrap}
    .hr{
      height:1px;
      background:rgba(255,255,255,.10);
      margin:16px 0;
    }
    .list{
      display:grid;
      grid-template-columns: 1fr 1fr;
      gap:10px;
      margin-top:14px;
    }
    @media (max-width: 720px){ .list{grid-template-columns:1fr} }
    .li{
      padding:14px;
      border-radius:18px;
      border:1px solid rgba(255,255,255,.10);
      background:rgba(255,255,255,.04);
    }
    .li b{display:block; font-size:13px; margin-bottom:6px}
    .li span{display:block; font-size:13px; color:rgba(255,255,255,.70); line-height:1.5}

    /* Back-to-top */
    .toTop{
      position:fixed;
      right:16px; bottom:16px;
      z-index:30;
      opacity:0;
      transform: translateY(8px);
      pointer-events:none;
      transition: opacity .2s ease, transform .2s ease;
    }
    .toTop.show{
      opacity:1; transform: translateY(0);
      pointer-events:auto;
    }
  </style>
</head>

<body>
  <div class="topbar">
    <div class="topbar-inner">
      <a class="brand" href="#top" aria-label="Chuck Ealy Home">
        <div class="mark" aria-hidden="true"></div>
        <div>
          <strong>Chuck Ealy</strong><br/>
          <span style="font-family:var(--mono); font-size:12px; color:rgba(255,255,255,.65); letter-spacing:.06em;">BIO · IMPACT · WORK</span>
        </div>
      </a>

      <nav class="nav" aria-label="Primary">
        <a href="#story">Story</a>
        <a href="#impact">Impact</a>
        <a href="#timeline">Timeline</a>
        <a href="#work">Work</a>
        <a href="#press">Press</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  </div>

  <div class="wrap" id="top">
    <div class="blob b1"></div>
    <div class="blob b2"></div>
    <div class="blob b3"></div>

    <!-- HERO -->
    <header class="hero">
      <div class="card hero-left reveal">
        <div class="kicker"><span class="dot"></span> Visual-first biography & measurable impact</div>
        <h1>Build big. Lead well. Leave receipts.</h1>
        <p class="subhead">
          Replace this line with Chuck’s one-sentence identity:
          <span style="color:rgba(255,255,255,.88); font-weight:600">operator / founder / community builder</span>,
          focused on outcomes that people can feel and numbers that can be verified.
        </p>

        <div class="pillrow" aria-label="Highlights">
          <div class="pill" title="Primary arena">
            <!-- icon -->
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
            Strategic Leadership
          </div>
          <div class="pill" title="Core craft">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 2l3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
            </svg>
            Innovation & Execution
          </div>
          <div class="pill" title="Values">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.5-7 10-7 10z" stroke="currentColor" stroke-width="2"/>
            </svg>
            People-First Outcomes
          </div>
          <div class="pill" title="Preferred mode">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 20V10m6 10V4m6 16v-7m4 7V8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
            Impact Systems
          </div>
        </div>

        <div class="ctarow">
          <a class="btn primary" href="#contact">
            <span>Work with Chuck</span>
            <small>→</small>
          </a>
          <a class="btn ghost" href="#impact">
            <span>See impact</span>
            <small>↓</small>
          </a>
          <a class="btn ghost" href="#" id="downloadBioBtn" title="Downloads a simple bio TXT you can paste anywhere">
            <span>Download bio</span>
            <small>TXT</small>
          </a>
        </div>

        <div class="hr"></div>

        <div class="row" style="align-items:center; justify-content:space-between">
          <div style="color:rgba(255,255,255,.70); font-size:13px">
            <span style="font-family:var(--mono); letter-spacing:.06em; text-transform:uppercase; font-size:12px;">Now</span><br/>
            <span id="nowLine">Based in <b>CHANGEME</b> · Building <b>CHANGEME</b> · Advising <b>CHANGEME</b></span>
          </div>
          <div class="chip" id="liveChip">Updated: <span id="updatedAt">today</span></div>
        </div>
      </div>

      <div class="hero-right reveal">
        <div class="portrait" aria-label="Portrait">
          <!-- Put a real image here: replace url() or set in JS via data-portrait -->
          <div class="img" id="portraitImg"
               style="background-image:url('https://images.unsplash.com/photo-1520975682031-a7a6ce1ed0d8?auto=format&fit=crop&w=1400&q=70');">
          </div>
          <div class="overlay"></div>
          <div class="label">
            <div class="nameplate">
              <strong>Chuck Ealy</strong>
              <span>Builder · Operator · Impact</span>
            </div>
            <div class="chip" id="statusChip">Currently: <b>CHANGEME</b></div>
          </div>
        </div>

        <div class="metrics" aria-label="Impact metrics">
          <div class="metric">
            <b data-count="125" data-suffix="+">0</b>
            <span>Projects shipped</span>
          </div>
          <div class="metric">
            <b data-count="48" data-suffix="M">0</b>
            <span>Value influenced</span>
          </div>
          <div class="metric">
            <b data-count="31000" data-suffix="+">0</b>
            <span>People reached</span>
          </div>
        </div>
      </div>
    </header>

    <!-- STORY / BIO -->
    <section id="story" class="grid">
      <div class="card section-card reveal">
        <div class="section-title">
          <h2>Story</h2>
          <div class="tag">BIO</div>
        </div>
        <p>
          Replace this paragraph with Chuck’s “origin” in 4–6 sentences:
          where he started, what he saw that others didn’t, and what he committed to build.
          Keep it human, vivid, and specific.
        </p>
        <p>
          Then add the “through-line” (what never changes): a pattern of building systems,
          elevating people, and delivering outcomes under pressure.
        </p>

        <div class="list" aria-label="Signature strengths">
          <div class="li">
            <b>Signature strength</b>
            <span>Turn ambiguous goals into a plan, a team, and shipped results.</span>
          </div>
          <div class="li">
            <b>Leadership style</b>
            <span>High standards + high care. Clear expectations. Clean feedback.</span>
          </div>
          <div class="li">
            <b>Operating edge</b>
            <span>Design the system once; let it compound for years.</span>
          </div>
          <div class="li">
            <b>What he’s known for</b>
            <span>Momentum, integrity, and outcomes people can measure.</span>
          </div>
        </div>
      </div>

      <div class="card section-card reveal">
        <div class="section-title">
          <h2>Principles</h2>
          <div class="tag">HOW HE BUILDS</div>
        </div>

        <div class="quote" role="note" aria-label="Key quote">
          <p>
            Replace this with Chuck’s defining quote — the one sentence people repeat
            after meeting him.
          </p>
          <div class="by">— Chuck Ealy</div>
        </div>

        <div class="timeline" style="margin-top:14px">
          <div class="titem">
            <div class="twhen">Clarity</div>
            <div class="twhat">
              <b>Make the goal undeniable</b>
              <span>Define the “win,” the constraints, and what success looks like in public.</span>
            </div>
            <div class="tbadge">01</div>
          </div>
          <div class="titem">
            <div class="twhen">People</div>
            <div class="twhat">
              <b>Build the room</b>
              <span>Bring the right talent together; protect focus; remove friction.</span>
            </div>
            <div class="tbadge">02</div>
          </div>
          <div class="titem">
            <div class="twhen">Systems</div>
            <div class="twhat">
              <b>Design compounding loops</b>
              <span>Create repeatable workflows that improve with every cycle.</span>
            </div>
            <div class="tbadge">03</div>
          </div>
        </div>
      </div>
    </section>

    <!-- IMPACT -->
    <section id="impact" class="grid">
      <div class="card section-card reveal">
        <div class="section-title">
          <h2>Impact</h2>
          <div class="tag">PROOF</div>
        </div>
        <p>
          Put real, verifiable impact here (numbers + context). If a metric is sensitive,
          use ranges or “at least” language.
        </p>

        <div class="stories" aria-label="Impact stories">
          <div class="story">
            <h3>Outcome #1 (headline)</h3>
            <p>One short paragraph: the problem, what Chuck did, and the measurable result.</p>
            <div class="mini">
              <span class="k">Metric: +CHANGEME%</span>
              <span class="k">Time: CHANGEME</span>
              <span class="k">Role: CHANGEME</span>
            </div>
          </div>
          <div class="story">
            <h3>Outcome #2 (headline)</h3>
            <p>One short paragraph: the turning point, the strategy, and the impact.</p>
            <div class="mini">
              <span class="k">Metric: $CHANGEME</span>
              <span class="k">Scale: CHANGEME</span>
              <span class="k">Team: CHANGEME</span>
            </div>
          </div>
          <div class="story">
            <h3>Outcome #3 (headline)</h3>
            <p>One short paragraph: what changed for people, not just systems.</p>
            <div class="mini">
              <span class="k">Metric: CHANGEME</span>
              <span class="k">Partner: CHANGEME</span>
              <span class="k">Region: CHANGEME</span>
            </div>
          </div>
          <div class="story">
            <h3>Outcome #4 (headline)</h3>
            <p>One short paragraph: how the work created durable, long-term compounding.</p>
            <div class="mini">
              <span class="k">Metric: CHANGEME</span>
              <span class="k">Duration: CHANGEME</span>
              <span class="k">Stack: CHANGEME</span>
            </div>
          </div>
        </div>
      </div>

      <div class="card section-card reveal" id="timeline">
        <div class="section-title">
          <h2>Timeline</h2>
          <div class="tag">HIGHLIGHTS</div>
        </div>
        <p>
          A tight, skimmable set of highlights. Keep each line crisp: “What” + “Why it mattered.”
        </p>

        <div class="timeline" aria-label="Career timeline">
          <div class="titem">
            <div class="twhen">2026 — Now</div>
            <div class="twhat">
              <b>CHANGEME role / project</b>
              <span>One sentence about the mission and what’s being built.</span>
            </div>
            <div class="tbadge">A</div>
          </div>
          <div class="titem">
            <div class="twhen">2023 — 2026</div>
            <div class="twhat">
              <b>CHANGEME</b>
              <span>Shipped X, led Y, achieved Z — one sentence.</span>
            </div>
            <div class="tbadge">B</div>
          </div>
          <div class="titem">
            <div class="twhen">2018 — 2023</div>
            <div class="twhat">
              <b>CHANGEME</b>
              <span>Define the leap: new scale, new complexity, measurable impact.</span>
            </div>
            <div class="tbadge">C</div>
          </div>
          <div class="titem">
            <div class="twhen">Early</div>
            <div class="twhat">
              <b>Origins</b>
              <span>The formative chapter that explains the “why.”</span>
            </div>
            <div class="tbadge">D</div>
          </div>
        </div>
      </div>
    </section>

    <!-- WORK -->
    <section id="work" class="grid">
      <div class="card section-card reveal">
        <div class="section-title">
          <h2>What Chuck does</h2>
          <div class="tag">OFFER</div>
        </div>
        <p>
          Make this section extremely practical. This is where visitors decide to reach out.
        </p>

        <div class="list" aria-label="Offer list">
          <div class="li">
            <b>Executive advising</b>
            <span>Strategy, operating systems, culture, accountability, and scale.</span>
          </div>
          <div class="li">
            <b>Keynotes & workshops</b>
            <span>Leadership, resilience, performance, and building under real constraints.</span>
          </div>
          <div class="li">
            <b>Fractional leadership</b>
            <span>Interim operator support: align team, ship roadmap, unblock execution.</span>
          </div>
          <div class="li">
            <b>Partnership builds</b>
            <span>Turn relationships into repeatable programs with measurable outcomes.</span>
          </div>
        </div>

        <div class="hr"></div>

        <div class="row">
          <a class="btn primary" href="#contact">Request availability →</a>
          <a class="btn ghost" href="#" id="copyEmailBtn">Copy email</a>
        </div>
      </div>

      <div class="card section-card reveal" id="press">
        <div class="section-title">
          <h2>Press / Recognition</h2>
          <div class="tag">SOCIAL PROOF</div>
        </div>
        <p>
          Replace placeholders with real logos, publications, awards, and organizations.
          You can swap each box for an SVG logo.
        </p>

        <div class="press" aria-label="Press logos">
          <div class="logo">Publication</div>
          <div class="logo">Podcast</div>
          <div class="logo">Conference</div>
          <div class="logo">Award</div>
          <div class="logo">Org</div>
          <div class="logo">Foundation</div>
          <div class="logo">Partner</div>
          <div class="logo">Community</div>
        </div>

        <div class="hr"></div>

        <div class="quote" aria-label="Testimonial">
          <p>
            Replace with a short testimonial (max 2–3 sentences). Keep it specific.
          </p>
          <div class="by">— Name, Title, Organization</div>
        </div>
      </div>
    </section>

    <!-- CONTACT -->
    <section id="contact">
      <div class="footer reveal">
        <div class="left">
          <b>Let’s build something worth repeating.</b>
          <span>
            Email: <span style="font-family:var(--mono)" id="emailText">hello@chuckealy.com</span>
            · Social: <span style="font-family:var(--mono)">LinkedIn / X / IG</span>
          </span>
        </div>
        <div class="right">
          <a class="btn primary" href="mailto:hello@chuckealy.com?subject=Work%20with%20Chuck%20Ealy&body=Hi%20Chuck%2C%0A%0AHere%E2%80%99s%20what%20I%E2%80%99m%20building%3A%0A%0A-%20%0A-%20%0A-%20%0A%0AWhat%20I%E2%80%99d%20love%20from%20you%3A%0A%0A-%20%0A%0AThank%20you%2C%0A">
            Email Chuck →
          </a>
          <a class="btn ghost" href="#top">Back to top ↑</a>
        </div>
      </div>
    </section>

  </div>

  <button class="btn ghost toTop" id="toTopBtn" aria-label="Back to top">
    ↑ Top
  </button>

  <script>
    // =========================
    // Minimal JS for polish:
    // - section highlighting
    // - reveal on scroll
    // - animated counters
    // - parallax blobs
    // - download bio + copy email
    // =========================

    const $ = (sel, root=document) => root.querySelector(sel);
    const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));

    // Set "Updated" chip (local date)
    (function setUpdated(){
      const d = new Date();
      const opts = { year:'numeric', month:'short', day:'2-digit' };
      $('#updatedAt').textContent = d.toLocaleDateString(undefined, opts);
    })();

    // Reveal observer
    const revealEls = $$('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('on');
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => io.observe(el));

    // Smooth scroll for nav
    $$('.nav a').forEach(a => {
      a.addEventListener('click', (e) => {
        const href = a.getAttribute('href');
        if (!href || !href.startsWith('#')) return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior:'smooth', block:'start' });
      });
    });

    // Active nav highlighting
    const sections = ['#story','#impact','#timeline','#work','#press','#contact']
      .map(id => document.querySelector(id))
      .filter(Boolean);

    const navLinks = $$('.nav a');
    const navMap = new Map(navLinks.map(a => [a.getAttribute('href'), a]));

    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navLinks.forEach(a => a.classList.remove('active'));
        const id = '#' + entry.target.id;
        const link = navMap.get(id);
        if (link) link.classList.add('active');
      });
    }, { rootMargin: "-40% 0px -55% 0px", threshold: 0.01 });

    sections.forEach(s => navObserver.observe(s));

    // Counter animation
    function animateCount(el){
      const target = Number(el.dataset.count || 0);
      const suffix = el.dataset.suffix || '';
      const duration = 900 + Math.min(target, 3000) * 0.08;
      const start = performance.now();
      const from = 0;

      function tick(t){
        const p = Math.min((t - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        let val = Math.round(from + (target - from) * eased);

        // Format large ints with commas
        const txt = (val >= 10000 && suffix !== 'M')
          ? val.toLocaleString()
          : String(val);

        el.textContent = txt + suffix;
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }

    // Only animate when metrics appear
    const metricsObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        $$('[data-count]').forEach(animateCount);
        metricsObserver.disconnect();
      });
    }, { threshold: 0.25 });

    const metrics = document.querySelector('.metrics');
    if (metrics) metricsObserver.observe(metrics);

    // Blob parallax
    const blobs = $$('.blob');
    let lastX = 0, lastY = 0;
    window.addEventListener('pointermove', (e) => {
      lastX = (e.clientX / window.innerWidth) - 0.5;
      lastY = (e.clientY / window.innerHeight) - 0.5;
    }, { passive:true });

    function blobLoop(){
      blobs.forEach((b, i) => {
        const factor = (i + 1) * 10;
        b.style.transform = `translate(${lastX * factor}px, ${lastY * factor}px)`;
      });
      requestAnimationFrame(blobLoop);
    }
    blobLoop();

    // Back-to-top button
    const toTopBtn = $('#toTopBtn');
    const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    toTopBtn.addEventListener('click', toTop);

    window.addEventListener('scroll', () => {
      const show = window.scrollY > 700;
      toTopBtn.classList.toggle('show', show);
    }, { passive:true });

    // Download Bio TXT (edit the template)
    $('#downloadBioBtn').addEventListener('click', (e) => {
      e.preventDefault();
      const bio = [
        'CHUCK EALY — SHORT BIO',
        '',
        'Chuck Ealy is a CHANGEME (operator/founder/leader) focused on CHANGEME.',
        'He is known for CHANGEME: building systems, elevating teams, and delivering measurable results.',
        '',
        'Signature work:',
        '- CHANGEME (metric/result)',
        '- CHANGEME (metric/result)',
        '- CHANGEME (metric/result)',
        '',
        'Contact: hello@chuckealy.com',
        'Website: https://chuckealy.com'
      ].join('\\n');

      const blob = new Blob([bio], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'ChuckEaly_Bio.txt';
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    });

    // Copy email
    $('#copyEmailBtn').addEventListener('click', async (e) => {
      e.preventDefault();
      const email = $('#emailText')?.textContent?.trim() || 'hello@chuckealy.com';
      try{
        await navigator.clipboard.writeText(email);
        $('#copyEmailBtn').textContent = 'Copied ✓';
        setTimeout(()=> $('#copyEmailBtn').textContent = 'Copy email', 1300);
      }catch(err){
        // fallback
        const ta = document.createElement('textarea');
        ta.value = email;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        ta.remove();
        $('#copyEmailBtn').textContent = 'Copied ✓';
        setTimeout(()=> $('#copyEmailBtn').textContent = 'Copy email', 1300);
      }
    });

    // OPTIONAL: Set portrait via data attribute (if you want)
    // Example: <body data-portrait="portrait.jpg">
    const portrait = document.body.dataset.portrait;
    if (portrait) $('#portraitImg').style.backgroundImage = `url('${portrait}')`;
  </script>
</body>
</html>
