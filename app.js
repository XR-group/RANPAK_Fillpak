(function(){
  'use strict';

  // WCAG: prefer reduced motion
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Catalogus mapping: categorie → modellen → xml pad
  const CATALOG = {
    fillpak: {
      label: 'FillPak',
      models: [
        { id:'fillpak_m', label:'FillPak M', xml:'fillpak_m_out.xml' },
        { id:'fillpak_tt', label:'FillPak TT', xml:'fillpak_tt_out.xml' },
        { id:'fillpak_go', label:'FillPak Go', xml:'fillpak_go_out.xml' },
        { id:'fillpak_ttc', label:'FillPak TTC', xml:'fillpak_ttc_out.xml' },
        { id:'fillpak_trident', label:'FillPak Trident', xml:'fillpack_trident_out.xml' },
        { id:'fillpak_classic', label:'FillPak Classic', xml:'fillpack_out.xml' }
      ]
    },
    padpak: {
      label: 'PadPak',
      models: [
        { id:'padpak_lc', label:'PadPak LC', xml:'padpak_lc_out.xml' },
        { id:'padpak_jr', label:'PadPak JR', xml:'padpak_jr_out.xml' },
        { id:'padpak_guardian', label:'PadPak Guardian', xml:'padpak_guardian_out.xml' },
        { id:'padpak_cc', label:'PadPak CC', xml:'padpak_cc_out.xml' }
      ]
    },
    wrappak: {
      label: 'WrapPak',
      models: [
        { id:'wrappak_protector', label:'WrapPak Protector', xml:'wrappak_protector_out.xml' }
      ]
    },
    geami: {
      label: 'Geami',
      models: [
        { id:'geami_mx_3d', label:'Geami MX 3D', xml:'geami_mx_3d.xml' },
        { id:'geami_mx_die_cut_only', label:'Geami MX Die Cut Only', xml:'geami_mx_die_cut_only.xml' },
        { id:'geami_exbox_mini_standard', label:'Geami ExBox Mini Standard', xml:'geami_exbox_mini_standard.xml' },
        { id:'geami_exbox_mini_die_cut_only', label:'Geami ExBox Mini Die Cut Only', xml:'geami_exbox_mini_die_cut_only_out.xml' },
        { id:'geami_hv', label:'Geami HV', xml:'geami_hv.xml' },
        { id:'geami_hv_under_table', label:'Geami HV Under Table', xml:'geami_hv_under_table.xml' },
        { id:'geami_ms_cabinet', label:'Geami MS Cabinet', xml:'geami_ms_cabinet.xml' },
        { id:'geami_sheets', label:'Geami Sheets', xml:'geami_sheets.xml' }
      ]
    }
  };

  // Elements
  const viewerEl = document.getElementById('viewer');
  const statusEl = document.getElementById('viewerStatus');
  const selectEl = document.getElementById('productSelect');
  const reloadBtn = document.getElementById('reloadBtn');
  const nav = document.querySelector('.app__nav');

  // State
  let currentCat = 'fillpak';
  let currentModel = null;
  let player = null;

  function setStatus(msg, tone = 'muted'){
    statusEl.textContent = msg;
    statusEl.style.color = tone === 'error' ? '#b91c1c' : 'var(--muted)';
  }

  function clearViewer(){
    viewerEl.innerHTML = '';
    player = null;
  }

  function createPlayer(){
    clearViewer();
    const container = document.createElement('div');
    container.id = 'o2vr-container';
    container.style.width = '100%';
    container.style.height = '100%';
    viewerEl.appendChild(container);

    player = new object2vrPlayer('o2vr-container');

    // Intercept openUrl calls from legacy skins (defensief)
    try { player.openUrl = (url, target) => routeTo(url); } catch(e) {}

    // Respect reduced motion
    if (prefersReduced) {
      try {
        // autorotate off
        player.stopAutorotate && player.stopAutorotate();
      } catch(e) {}
    }
    return player;
  }

  function xmlExists(path){
    // We cannot sync-check existence without server. Attempt to fetch quickly.
    return fetch(path, { method: 'HEAD' }).then(r => r.ok).catch(() => false);
  }

  async function loadModel(model){
    if (!model) { setStatus('Geen model geselecteerd.'); return; }
    setStatus('Model laden…');

    const ok = await xmlExists(model.xml);
    const p = createPlayer();

    if (!ok){
      // Graceful fallback: show friendly message
      setStatus('Viewer assets ontbreken voor dit model. Navigatie werkt; vraag om volledige assets.', 'error');
      // Create a soft placeholder panel
      const empty = document.createElement('div');
      empty.setAttribute('role','img');
      empty.setAttribute('aria-label','Geen viewer assets gevonden');
      empty.style.position = 'absolute';
      empty.style.inset = '0';
      empty.style.display = 'grid';
      empty.style.placeItems = 'center';
      empty.style.color = '#475569';
      empty.innerHTML = '<div style="text-align:center;max-width:520px;padding:24px"><div style="font-size:18px;font-weight:700;margin-bottom:6px">Geen 360° afbeeldingen gevonden</div><div style="font-size:14px">De originele repository bevat geen afbeeldingsmap (images_*) voor dit model. De nieuwe interface werkt verder volledig en is geoptimaliseerd voor mobiel en desktop.</div></div>';
      viewerEl.appendChild(empty);
      return;
    }

    // Load the XML config
    try {
      p.readConfigUrl(model.xml);
      setStatus(`${CATALOG[currentCat].label} – ${model.label}`);
    } catch (e) {
      console.error(e);
      setStatus('Kon viewer niet initialiseren.', 'error');
    }
  }

  function populateModels(catKey){
    const { models } = CATALOG[catKey];
    selectEl.innerHTML = '';
    for (const m of models){
      const opt = document.createElement('option');
      opt.value = m.id; opt.textContent = m.label;
      selectEl.appendChild(opt);
    }
    currentModel = models[0];
    selectEl.value = currentModel.id;
  }

  function handleCatClick(e){
    const btn = e.target.closest('button[data-cat]');
    if (!btn) return;
    if (btn.dataset.cat === currentCat) return;

    document.querySelectorAll('.chip').forEach(b => {
      b.classList.remove('is-active');
      b.setAttribute('aria-pressed', 'false');
    });
    btn.classList.add('is-active');
    btn.setAttribute('aria-pressed', 'true');

    currentCat = btn.dataset.cat;
    populateModels(currentCat);
    loadModel(currentModel);
  }

  function handleModelChange(){
    const models = CATALOG[currentCat].models;
    const sel = selectEl.value;
    currentModel = models.find(m => m.id === sel) || models[0];
    loadModel(currentModel);
  }

  function routeTo(url){
    // Map legacy Ranpak_*.html navigaties naar modelkeuze
    if (!url) return;
    const map = {
      'Ranpak_fillpak.html': ['fillpak','fillpak_classic'],
      'Ranpak_fillpak_m.html': ['fillpak','fillpak_m'],
      'Ranpak_fillpak_tt.html': ['fillpak','fillpak_tt'],
      'Ranpak_fillpak_go.html': ['fillpak','fillpak_go'],
      'Ranpak_fillpak_ttc.html': ['fillpak','fillpak_ttc'],
      'Ranpak_fillpak_trident.html': ['fillpak','fillpak_trident'],
      'Ranpak_padpak_lc.html': ['padpak','padpak_lc'],
      'Ranpak_padpak_jr.html': ['padpak','padpak_jr'],
      'Ranpak_padpak_guardian.html': ['padpak','padpak_guardian'],
      'Ranpak_padpak_cc.html': ['padpak','padpak_cc'],
      'Ranpak_wrappak_protector.html': ['wrappak','wrappak_protector'],
      'Ranpak_geami_mx_3d.html': ['geami','geami_mx_3d'],
      'Ranpak_geami_mx_die_cut_only.html': ['geami','geami_mx_die_cut_only'],
      'Ranpak_geami_exbox_mini_standard.html': ['geami','geami_exbox_mini_standard'],
      'Ranpak_geami_exbox_mini_die_cut_only.html': ['geami','geami_exbox_mini_die_cut_only'],
      'Ranpak_geami_hv.html': ['geami','geami_hv'],
      'Ranpak_geami_hv_under_table.html': ['geami','geami_hv_under_table'],
      'Ranpak_geami_ms_cabinet.html': ['geami','geami_ms_cabinet'],
      'Ranpak_geami_sheets.html': ['geami','geami_sheets']
    };
    const tgt = map[url];
    if (!tgt) return;

    // Update UI state
    currentCat = tgt[0];
    document.querySelectorAll('.chip').forEach(b => {
      b.classList.toggle('is-active', b.dataset.cat === currentCat);
      b.setAttribute('aria-pressed', b.dataset.cat === currentCat ? 'true' : 'false');
    });
    populateModels(currentCat);
    selectEl.value = tgt[1];
    handleModelChange();
  }

  function init(){
    nav.addEventListener('click', handleCatClick);
    selectEl.addEventListener('change', handleModelChange);
    reloadBtn.addEventListener('click', () => loadModel(currentModel));

    populateModels(currentCat);
    loadModel(currentModel);
  }

  document.addEventListener('DOMContentLoaded', init);
})();