/* SPA logic (Vite root) */
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const CATALOG={fillpak:{label:'FillPak',models:[{id:'fillpak_m',label:'FillPak M',xml:'/fillpak_m_out.xml'},{id:'fillpak_tt',label:'FillPak TT',xml:'/fillpak_tt_out.xml'},{id:'fillpak_go',label:'FillPak Go',xml:'/fillpak_go_out.xml'},{id:'fillpak_ttc',label:'FillPak TTC',xml:'/fillpak_ttc_out.xml'},{id:'fillpak_trident',label:'FillPak Trident',xml:'/fillpack_trident_out.xml'},{id:'fillpak_classic',label:'FillPak Classic',xml:'/fillpack_out.xml'}]},padpak:{label:'PadPak',models:[{id:'padpak_lc',label:'PadPak LC',xml:'/padpak_lc_out.xml'},{id:'padpak_jr',label:'PadPak JR',xml:'/padpak_jr_out.xml'},{id:'padpak_guardian',label:'PadPak Guardian',xml:'/padpak_guardian_out.xml'},{id:'padpak_cc',label:'PadPak CC',xml:'/padpak_cc_out.xml'}]},wrappak:{label:'WrapPak',models:[{id:'wrappak_protector',label:'WrapPak Protector',xml:'/wrappak_protector_out.xml'}]},geami:{label:'Geami',models:[{id:'geami_mx_3d',label:'Geami MX 3D',xml:'/geami_mx_3d.xml'},{id:'geami_mx_die_cut_only',label:'Geami MX Die Cut Only',xml:'/geami_mx_die_cut_only.xml'},{id:'geami_exbox_mini_standard',label:'Geami ExBox Mini Standard',xml:'/geami_exbox_mini_standard.xml'},{id:'geami_exbox_mini_die_cut_only',label:'Geami ExBox Mini Die Cut Only',xml:'/geami_exbox_mini_die_cut_only_out.xml'},{id:'geami_hv',label:'Geami HV',xml:'/geami_hv.xml'},{id:'geami_hv_under_table',label:'Geami HV Under Table',xml:'/geami_hv_under_table.xml'},{id:'geami_ms_cabinet',label:'Geami MS Cabinet',xml:'/geami_ms_cabinet.xml'},{id:'geami_sheets',label:'Geami Sheets',xml:'/geami_sheets.xml'}]}};
const viewerEl=document.getElementById('viewer');
const statusEl=document.getElementById('viewerStatus');
const selectEl=document.getElementById('productSelect');
const reloadBtn=document.getElementById('reloadBtn');
const nav=document.querySelector('.app__nav');
let currentCat='fillpak';
let currentModel=null;let player=null;
function setStatus(m,t='muted'){statusEl.textContent=m;statusEl.style.color=t==='error'?'#b91c1c':'var(--muted)'}
function clearViewer(){viewerEl.innerHTML='';player=null}
function createPlayer(){clearViewer();const container=document.createElement('div');container.id='o2vr-container';container.style.width='100%';container.style.height='100%';viewerEl.appendChild(container);if(typeof object2vrPlayer!=='undefined'){player=new object2vrPlayer('o2vr-container');try{player.openUrl=(url,target)=>routeTo(url)}catch(e){}} if(prefersReduced){try{player&&player.stopAutorotate&&player.stopAutorotate()}catch(e){}}return player}
function xmlExists(path){return fetch(path,{method:'GET',cache:'no-store'}).then(r=>r.ok).catch(()=>false)}
async function loadModel(model){
  if(!model){setStatus('Geen model geselecteerd.');return}
  // Toon direct status met gekozen model
  setStatus(`${CATALOG[currentCat].label} – ${model.label}`);
  // Clear en toon altijd nette fallback/preview in base64 (SVG) omdat 360° assets ontbreken in repo
  viewerEl.innerHTML = '';
  const svg = (title, subtitle)=>{
    const esc = s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    const body = `<?xml version="1.0" encoding="UTF-8"?>
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="720" viewBox="0 0 1200 720">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#e2e8f0"/>
          <stop offset="100%" stop-color="#f8fafc"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="720" fill="url(#g)"/>
      <g fill="#0b5394" font-family="Segoe UI, Roboto, Arial, sans-serif" text-anchor="middle">
        <text x="600" y="340" font-size="42" font-weight="700">${esc(title)}</text>
        <text x="600" y="388" font-size="20" fill="#334155">${esc(subtitle)}</text>
      </g>
    </svg>`;
    return 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(body)));
  };
  const img = document.createElement('img');
  img.alt = `${CATALOG[currentCat].label} – ${model.label}`;
  img.src = svg(CATALOG[currentCat].label, model.label);
  img.style.position = 'absolute';
  img.style.inset = '0';
  img.style.width = '100%';
  img.style.height = '100%';
  img.style.objectFit = 'cover';
  img.setAttribute('role','img');
  viewerEl.appendChild(img);
}
function populateModels(catKey){const {models}=CATALOG[catKey];selectEl.innerHTML='';for(const m of models){const opt=document.createElement('option');opt.value=m.id;opt.textContent=m.label;selectEl.appendChild(opt)} currentModel=models[0];selectEl.value=currentModel.id}
function handleCatClick(e){const btn=e.target.closest('button[data-cat]'); if(!btn) return; if(btn.dataset.cat===currentCat) return; document.querySelectorAll('.chip').forEach(b=>{b.classList.remove('is-active'); b.setAttribute('aria-pressed','false')}); btn.classList.add('is-active'); btn.setAttribute('aria-pressed','true'); currentCat=btn.dataset.cat; populateModels(currentCat); loadModel(currentModel)}
function handleModelChange(){const models=CATALOG[currentCat].models; const sel=selectEl.value; currentModel=models.find(m=>m.id===sel)||models[0]; loadModel(currentModel)}
function routeTo(url){if(!url) return; const map={'Ranpak_fillpak.html':['fillpak','fillpak_classic'],'Ranpak_fillpak_m.html':['fillpak','fillpak_m'],'Ranpak_fillpak_tt.html':['fillpak','fillpak_tt'],'Ranpak_fillpak_go.html':['fillpak','fillpak_go'],'Ranpak_fillpak_ttc.html':['fillpak','fillpak_ttc'],'Ranpak_fillpak_trident.html':['fillpak','fillpak_trident'],'Ranpak_padpak_lc.html':['padpak','padpak_lc'],'Ranpak_padpak_jr.html':['padpak','padpak_jr'],'Ranpak_padpak_guardian.html':['padpak','padpak_guardian'],'Ranpak_padpak_cc.html':['padpak','padpak_cc'],'Ranpak_wrappak_protector.html':['wrappak','wrappak_protector'],'Ranpak_geami_mx_3d.html':['geami','geami_mx_3d'],'Ranpak_geami_mx_die_cut_only.html':['geami','geami_mx_die_cut_only'],'Ranpak_geami_exbox_mini_standard.html':['geami','geami_exbox_mini_standard'],'Ranpak_geami_exbox_mini_die_cut_only.html':['geami','geami_exbox_mini_die_cut_only'],'Ranpak_geami_hv.html':['geami','geami_hv'],'Ranpak_geami_hv_under_table.html':['geami','geami_hv_under_table'],'Ranpak_geami_ms_cabinet.html':['geami','geami_ms_cabinet'],'Ranpak_geami_sheets.html':['geami','geami_sheets']}; const tgt=map[url]; if(!tgt) return; currentCat=tgt[0]; document.querySelectorAll('.chip').forEach(b=>{b.classList.toggle('is-active',b.dataset.cat===currentCat); b.setAttribute('aria-pressed', b.dataset.cat===currentCat ? 'true':'false')}); populateModels(currentCat); selectEl.value=tgt[1]; handleModelChange()}
function init(){if(!nav||!selectEl||!reloadBtn){console.error('UI container niet gevonden'); return} nav.addEventListener('click',handleCatClick); selectEl.addEventListener('change',handleModelChange); reloadBtn.addEventListener('click',()=>loadModel(currentModel)); populateModels(currentCat); loadModel(currentModel)}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',init)}else{init()}