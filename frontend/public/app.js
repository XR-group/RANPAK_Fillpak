/* copied from root app.js (module safe) */
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const CATALOG={fillpak:{label:'FillPak',models:[{id:'fillpak_m',label:'FillPak M',xml:'fillpak_m_out.xml'},{id:'fillpak_tt',label:'FillPak TT',xml:'fillpak_tt_out.xml'},{id:'fillpak_go',label:'FillPak Go',xml:'fillpak_go_out.xml'},{id:'fillpak_ttc',label:'FillPak TTC',xml:'fillpak_ttc_out.xml'},{id:'fillpak_trident',label:'FillPak Trident',xml:'fillpack_trident_out.xml'},{id:'fillpak_classic',label:'FillPak Classic',xml:'fillpack_out.xml'}]},padpak:{label:'PadPak',models:[{id:'padpak_lc',label:'PadPak LC',xml:'padpak_lc_out.xml'},{id:'padpak_jr',label:'PadPak JR',xml:'padpak_jr_out.xml'},{id:'padpak_guardian',label:'PadPak Guardian',xml:'padpak_guardian_out.xml'},{id:'padpak_cc',label:'PadPak CC',xml:'padpak_cc_out.xml'}]},wrappak:{label:'WrapPak',models:[{id:'wrappak_protector',label:'WrapPak Protector',xml:'wrappak_protector_out.xml'}]},geami:{label:'Geami',models:[{id:'geami_mx_3d',label:'Geami MX 3D',xml:'geami_mx_3d.xml'},{id:'geami_mx_die_cut_only',label:'Geami MX Die Cut Only',xml:'geami_mx_die_cut_only.xml'},{id:'geami_exbox_mini_standard',label:'Geami ExBox Mini Standard',xml:'geami_exbox_mini_standard.xml'},{id:'geami_exbox_mini_die_cut_only',label:'Geami ExBox Mini Die Cut Only',xml:'geami_exbox_mini_die_cut_only_out.xml'},{id:'geami_hv',label:'Geami HV',xml:'geami_hv.xml'},{id:'geami_hv_under_table',label:'Geami HV Under Table',xml:'geami_hv_under_table.xml'},{id:'geami_ms_cabinet',label:'Geami MS Cabinet',xml:'geami_ms_cabinet.xml'},{id:'geami_sheets',label:'Geami Sheets',xml:'geami_sheets.xml'}]}};

// Optional info copy per category (placeholder). Provide final copy later.
const CATALOG_INFO = {
  fillpak: {
    title: 'Fillpak',
    text: 'FillPak paper packaging material provides an effective way to fill empty spaces in a box, preventing your products from shifting around during transit. As a clean, efficient, reliable, and flexible solution, it is dispensed on-demand at high volumes to reduce material usage.'
  },
  padpak: { title: 'PadPak', text: 'Protective paper cushioning for heavier items and void fill.' },
  wrappak: { title: 'WrapPak', text: 'Paper-based wrapping that replaces plastic bubble for surface protection.' },
  geami: { title: 'Geami', text: 'Die-cut kraft paper expansion system for wrapping and protection.' }
};

const viewerEl=document.getElementById('viewer');
const statusEl=document.getElementById('viewerStatus');
const selectEl=document.getElementById('productSelect');
const reloadBtn=document.getElementById('reloadBtn'); // removed visually; pressing select triggers load
const nav=document.querySelector('.app__nav');
const infoTitle=document.getElementById('infoTitle');
const infoText=document.getElementById('infoText');

let currentCat='fillpak';
let currentModel=null;let player=null;
let loadToken=0; // ensures only the latest load applies
let debounceTimer=null;

function setStatus(m,t='muted'){statusEl.textContent=m;statusEl.style.color=t==='error'?'#b91c1c':'#000'}
function clearViewer(){viewerEl.innerHTML='';player=null}
function createPlayer(){clearViewer();const container=document.createElement('div');container.id='o2vr-container';container.style.width='100%';container.style.height='100%';viewerEl.appendChild(container);player=new object2vrPlayer('o2vr-container');try{player.openUrl=(url,target)=>routeTo(url)}catch(e){}if(prefersReduced){try{player.stopAutorotate&&player.stopAutorotate()}catch(e){}}return player}
function renderFallback(message){const empty=document.createElement('div'); empty.setAttribute('role','img'); empty.setAttribute('aria-label','Geen viewer assets gevonden'); empty.style.position='absolute'; empty.style.inset='0'; empty.style.display='grid'; empty.style.placeItems='center'; empty.style.color='#111'; empty.innerHTML=`<div style="text-align:center;max-width:520px;padding:24px"><div style="font-size:18px;font-weight:700;margin-bottom:6px">Geen 360° afbeeldingen gevonden</div><div style="font-size:14px">${message||'Assets ontbreken of konden niet geladen worden.'}</div></div>`; viewerEl.appendChild(empty);}

async function loadModel(model){if(!model){setStatus('Geen model geselecteerd.');return} const token=++loadToken; setStatus('Model laden…'); const p=createPlayer(); try{p.readConfigUrl(model.xml); if(token!==loadToken) return; setStatus(`${CATALOG[currentCat].label} – ${model.label}`)}catch(e){console.error(e); if(token!==loadToken) return; setStatus('Kon viewer niet initialiseren.','error'); renderFallback('Fout bij initialiseren van viewer.');}}

function populateModels(catKey){const {models}=CATALOG[catKey];selectEl.innerHTML='';for(const m of models){const opt=document.createElement('option');opt.value=m.id;opt.textContent=m.label;selectEl.appendChild(opt)} currentModel=models[0];selectEl.value=currentModel.id}
function scheduleLoad(){clearTimeout(debounceTimer);debounceTimer=setTimeout(()=>loadModel(currentModel),200)}
function handleCatClick(e){const btn=e.target.closest('button[data-cat]'); if(!btn) return; if(btn.dataset.cat===currentCat) return; document.querySelectorAll('.chip').forEach(b=>{ b.classList.remove('is-active'); b.setAttribute('aria-pressed','false'); }); btn.classList.add('is-active'); btn.setAttribute('aria-pressed','true'); currentCat=btn.dataset.cat; populateModels(currentCat); updateInfo(); scheduleLoad()}
function handleModelChange(){const models=CATALOG[currentCat].models; const sel=selectEl.value; currentModel=models.find(m=>m.id===sel)||models[0]; scheduleLoad()}
function updateInfo(){ if(!infoTitle||!infoText) return; const info=CATALOG_INFO[currentCat]; if(info){ infoTitle.textContent=info.title; infoText.textContent=info.text; } }
function routeTo(url){if(!url) return; const map={'Ranpak_fillpak.html':['fillpak','fillpak_classic'],'Ranpak_fillpak_m.html':['fillpak','fillpak_m'],'Ranpak_fillpak_tt.html':['fillpak','fillpak_tt'],'Ranpak_fillpak_go.html':['fillpak','fillpak_go'],'Ranpak_fillpak_ttc.html':['fillpak','fillpak_ttc'],'Ranpak_fillpak_trident.html':['fillpak','fillpak_trident'],'Ranpak_padpak_lc.html':['padpak','padpak_lc'],'Ranpak_padpak_jr.html':['padpak','padpak_jr'],'Ranpak_padpak_guardian.html':['padpak','padpak_guardian'],'Ranpak_padpak_cc.html':['padpak','padpak_cc'],'Ranpak_wrappak_protector.html':['wrappak','wrappak_protector'],'Ranpak_geami_mx_3d.html':['geami','geami_mx_3d'],'Ranpak_geami_mx_die_cut_only.html':['geami','geami_mx_die_cut_only'],'Ranpak_geami_exbox_mini_standard.html':['geami','geami_exbox_mini_standard'],'Ranpak_geami_exbox_mini_die_cut_only.html':['geami','geami_exbox_mini_die_cut_only'],'Ranpak_geami_hv.html':['geami','geami_hv'],'Ranpak_geami_hv_under_table.html':['geami','geami_hv_under_table'],'Ranpak_geami_ms_cabinet.html':['geami','geami_ms_cabinet'],'Ranpak_geami_sheets.html':['geami','geami_sheets']}; const tgt=map[url]; if(!tgt) return; currentCat=tgt[0]; document.querySelectorAll('.chip').forEach(b=>{b.classList.toggle('is-active',b.dataset.cat===currentCat); b.setAttribute('aria-pressed', b.dataset.cat===currentCat ? 'true':'false')}); populateModels(currentCat); selectEl.value=tgt[1]; handleModelChange()}
function init(){nav.addEventListener('click',handleCatClick); selectEl.addEventListener('change',handleModelChange); reloadBtn.addEventListener('click',()=>scheduleLoad()); populateModels(currentCat); updateInfo(); scheduleLoad()}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}