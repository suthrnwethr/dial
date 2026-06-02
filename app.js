/* ============================================================================
   DIAL — app logic
   ============================================================================ */

/* ─── Icon library ──────────────────────────────────────────────────────────── */
const ICONS = {
  'dial':`<svg viewBox="14.5 13.5 19 21" fill="none"><path d="M16.5834 18.5417L23.25 31.8583C23.3183 31.9992 23.4248 32.118 23.5574 32.2012C23.6901 32.2843 23.8435 32.3284 24 32.3284C24.1566 32.3284 24.3099 32.2843 24.4426 32.2012C24.5752 32.118 24.6818 31.9992 24.75 31.8583L31.4167 18.5417" stroke="var(--color-icon-on-accent)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 15.6667C19.8579 15.6667 16.5 16.786 16.5 18.1667C16.5 19.5474 19.8579 20.6667 24 20.6667C28.1421 20.6667 31.5 19.5474 31.5 18.1667C31.5 16.786 28.1421 15.6667 24 15.6667Z" stroke="var(--color-icon-on-accent)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  'dial-dim':`<svg viewBox="14.5 13.5 19 21" fill="none"><path d="M16.5834 18.5417L23.25 31.8583C23.3183 31.9992 23.4248 32.118 23.5574 32.2012C23.6901 32.2843 23.8435 32.3284 24 32.3284C24.1566 32.3284 24.3099 32.2843 24.4426 32.2012C24.5752 32.118 24.6818 31.9992 24.75 31.8583L31.4167 18.5417" stroke="var(--color-icon-dim)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 15.6667C19.8579 15.6667 16.5 16.786 16.5 18.1667C16.5 19.5474 19.8579 20.6667 24 20.6667C28.1421 20.6667 31.5 19.5474 31.5 18.1667C31.5 16.786 28.1421 15.6667 24 15.6667Z" stroke="var(--color-icon-dim)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  'camera':`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>`,
  'image':`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>`,
  'arrow-up':`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>`,
  'check':`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`,
  'trash':`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>`,
  'more-vertical':`<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="1.6" fill="currentColor"/><circle cx="12" cy="5" r="1.6" fill="currentColor"/><circle cx="12" cy="19" r="1.6" fill="currentColor"/></svg>`,
  'plus':`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>`,
  'waves':`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/></svg>`,
  'chevron-down':`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-icon-muted)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`,
  'x':`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
};
function icon(name){ return ICONS[name] || ''; }
function hydrateIcons(root){
  (root||document).querySelectorAll('[data-icon]').forEach(el=>{
    if(el.dataset.hydrated) return;
    el.innerHTML = icon(el.dataset.icon);
    el.dataset.hydrated = '1';
  });
}

/* ─── Data ─────────────────────────────────────────────────────────────────── */
const METHODS = ['V60','Chemex','AeroPress','French Press','Moka Pot','Kalita Wave'];
const RATIOS  = ['1:12','1:13','1:14','1:15','1:16','1:17'];
const CW_OPTS = ['Auto',14,16,18,20,22,24,26,28,30,32];

/* ─── State ────────────────────────────────────────────────────────────────── */
let recipe = null;
let saved  = [];
let setup  = {method:'V60',grinder:'',kettle:'',ratio:'1:15'};
let csSetup = {method:'V60',grinder:'',kettle:'',ratio:'1:15'};
let apiKey = '';
let soundOn = true;
let cpCoffee = '26';
let brewStatus = 'idle';
let hiRes = 0, baseTime = 0, startTime = null, rafId = null;
let lB64 = null, lType = 'image/jpeg', lName = null;
let pending = null;
let popId = null;
let activeScreen = null; // 'menu-screen' | 'create-screen' | 'rc-screen'

/* ─── Storage ──────────────────────────────────────────────────────────────── */
function load(){
  try{ saved = JSON.parse(localStorage.getItem('dial-r')||'[]'); }catch{ saved=[]; }
  try{ setup = Object.assign({method:'V60',grinder:'',kettle:'',ratio:'1:15'},JSON.parse(localStorage.getItem('dial-s')||'{}')); }catch{}
  apiKey = localStorage.getItem('dial-k')||'';
  soundOn = localStorage.getItem('dial-sound')!=='0'; // default on
  csSetup = Object.assign({},setup);
}
function saveR(){ localStorage.setItem('dial-r', JSON.stringify(saved)); }
function saveS(){ localStorage.setItem('dial-s', JSON.stringify(setup)); }

/* ─── Screen navigation ────────────────────────────────────────────────────── */
function navigateTo(id){
  // Hide current screen without un-dimming brew in between
  if(activeScreen && activeScreen !== id){
    document.getElementById(activeScreen).classList.remove('open');
  }
  activeScreen = id;
  document.getElementById(id).classList.add('open');
  document.getElementById('brew').classList.add('dimmed');
}
function closeAllScreens(){
  if(activeScreen){ document.getElementById(activeScreen).classList.remove('open'); }
  activeScreen = null;
  document.getElementById('brew').classList.remove('dimmed');
  closePop();
}

/* ─── Menu ─────────────────────────────────────────────────────────────────── */
function openMenu(){
  smSetup=Object.assign({},setup); // fresh working copy each time the menu opens
  renderRecipes(); renderSetupTab();
  switchTab('recipes');
  navigateTo('menu-screen');
}
function closeMenu(){ closeAllScreens(); }

function switchTab(t){
  const rt=document.getElementById('recipes-tab'), st=document.getElementById('setup-tab');
  const btns=document.querySelectorAll('.seg-btn');
  if(t==='recipes'){ rt.classList.remove('hidden'); st.classList.add('hidden'); btns[0].classList.add('active'); btns[1].classList.remove('active'); }
  else { rt.classList.add('hidden'); st.classList.remove('hidden'); btns[0].classList.remove('active'); btns[1].classList.add('active'); }
}

function renderRecipes(){
  const empty=document.getElementById('recipes-empty');
  const wrap=document.getElementById('recipes-list-wrap');
  const list=document.getElementById('recipes-list');
  const acts=document.getElementById('menu-actions');
  if(!saved.length){
    empty.classList.remove('hidden'); wrap.classList.add('hidden');
    hydrateIcons(empty);
    return;
  }
  empty.classList.add('hidden'); wrap.classList.remove('hidden');
  list.innerHTML = saved.map(r=>{
    const sel = recipe&&recipe.id===r.id;
    const sub = [r.method, r.coffeeWeight&&r.coffeeWeight+'g', r.waterTemp&&Math.round(r.waterTemp)+'°F'].filter(Boolean).join(' • ');
    return `<div class="recipe-card${sel?' selected':''}" onclick="selRecipe('${r.id}')">
      <div style="flex:1;min-width:0">
        <div class="rc-name t-body">${esc(r.name)}</div>
        <div class="rc-sub t-mono-sub">${esc(sub)}</div>
      </div>
      <button class="rc-kebab" onclick="event.stopPropagation();showPop(event,'${r.id}')" data-icon="more-vertical"></button>
    </div>`;
  }).join('');
  const hasSelected = recipe && saved.some(r=>r.id===recipe.id);
  acts.innerHTML = mkIBtn('plus','openCreate()') + (hasSelected ? mkIBtn('waves','brewSelected()') : '');
  hydrateIcons(list); hydrateIcons(acts);
}
function mkIBtn(ic, fn){ return `<button class="icon-btn" onclick="${fn}" data-icon="${ic}"></button>`; }
function esc(s){ return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }

function selRecipe(id){
  const r=saved.find(r=>r.id===id); if(!r) return;
  recipe=r; resetBrew(); updateIcon(); drawRings(); updateUI();
  renderRecipes();
}
function brewSelected(){
  closeAllScreens();
}

let smSetup=null;
function renderSetupTab(){
  if(!smSetup) smSetup=Object.assign({},setup);
  renderMethods('sm-methods', smSetup.method, 'setSetupMethod');
  document.getElementById('sm-grinder').value=smSetup.grinder||'';
  document.getElementById('sm-kettle').value=smSetup.kettle||'';
  renderSoundToggle();
  updateSetupDirty();
}
function onSetupInput(){
  if(!smSetup) smSetup=Object.assign({},setup);
  smSetup.grinder=document.getElementById('sm-grinder').value;
  smSetup.kettle=document.getElementById('sm-kettle').value;
  updateSetupDirty();
}
function updateSetupDirty(){
  if(!smSetup) return;
  const dirty = smSetup.method!==setup.method
    || (smSetup.grinder||'').trim()!==(setup.grinder||'').trim()
    || (smSetup.kettle||'').trim()!==(setup.kettle||'').trim();
  document.getElementById('sm-save-wrap').classList.toggle('hidden', !dirty);
}
function renderMethods(id, sel, fnName){
  const el=document.getElementById(id); if(!el) return;
  el.innerHTML=METHODS.map(m=>`<button class="method-btn${m===sel?' active':''}" onclick="${fnName}('${m}')">${m}</button>`).join('');
}
function renderRatioOpts(id, sel, fnName){
  const el=document.getElementById(id); if(!el) return;
  el.innerHTML=RATIOS.map(r=>`<button class="method-btn${r===sel?' active':''}" onclick="${fnName}('${r}')">${r}</button>`).join('');
}
function setSetupMethod(m){ if(!smSetup) smSetup=Object.assign({},setup); smSetup.method=m; renderSetupTab(); }
function saveSetup(){
  setup=Object.assign({},setup,{
    method:smSetup.method,
    grinder:(smSetup.grinder||'').trim(),
    kettle:(smSetup.kettle||'').trim()
  });
  saveS();
  smSetup=Object.assign({},setup);
  updateSetupDirty(); // hides the save button now that it's clean
}

/* ─── Popover ──────────────────────────────────────────────────────────────── */
function showPop(e, id){
  popId=id;
  const pop=document.getElementById('pop');
  pop.classList.remove('hidden');
  pop.style.right='16px';
  pop.style.top=(e.target.getBoundingClientRect().bottom+6)+'px';
  setTimeout(()=>document.addEventListener('click',closePop,{once:true}),50);
}
function closePop(){ document.getElementById('pop').classList.add('hidden'); popId=null; }
function viewRecipe(){
  const r=saved.find(r=>r.id===popId); closePop();
  if(!r) return; csSetup=Object.assign({},setup); showRC(r);
}
function askDeleteFromPop(){
  const id=popId; closePop();
  if(id) openConfirm(id);
}

/* ─── Delete confirmation modal ─────────────────────────────────────────────── */
let pendingDeleteId = null;
function openConfirm(id){
  pendingDeleteId=id;
  const m=document.getElementById('confirm-modal');
  m.classList.remove('hidden');
  requestAnimationFrame(()=>m.classList.add('open'));
}
function closeConfirm(){
  const m=document.getElementById('confirm-modal');
  m.classList.remove('open');
  setTimeout(()=>m.classList.add('hidden'),200);
  pendingDeleteId=null;
}
function doDelete(){
  const id=pendingDeleteId;
  const m=document.getElementById('confirm-modal');
  m.classList.remove('open');
  setTimeout(()=>m.classList.add('hidden'),200);
  pendingDeleteId=null;
  if(!id) return;
  saved=saved.filter(r=>r.id!==id); saveR();
  if(recipe&&recipe.id===id){ recipe=null; resetBrew(); updateIcon(); drawRings(); updateUI(); }
  // Return to the menu after deleting
  renderRecipes(); renderSetupTab(); switchTab('recipes');
  navigateTo('menu-screen');
}

/* ─── Create recipe ────────────────────────────────────────────────────────── */
function openCreate(){
  lB64=null; lType='image/jpeg'; lName=null; pending=null;
  resetCreateUI();
  navigateTo('create-screen');
}
function closeCreate(){
  // Always return to the menu
  renderRecipes(); renderSetupTab(); switchTab('recipes');
  navigateTo('menu-screen');
}
function resetCreateUI(){
  document.getElementById('label-cta').classList.remove('hidden');
  document.getElementById('label-uploaded').classList.add('hidden');
  document.getElementById('cr-loading').classList.add('hidden');
  document.getElementById('cr-err').classList.add('hidden');
  ['cp-water','cp-temp','cp-ratio','cp-grind'].forEach(id=>document.getElementById(id).textContent='Auto');
  csSetup=Object.assign({},setup);
  updateCRSetupSub();
  renderMethods('cr-methods', csSetup.method, 'setCRMethod');
  document.getElementById('cr-grinder').value=setup.grinder||'';
  document.getElementById('cr-kettle').value=setup.kettle||'';
  document.getElementById('create-scroll').scrollTop=0;
}
function updateCRSetupSub(){
  const parts=[csSetup.method,csSetup.grinder||document.getElementById('cr-grinder')?.value,csSetup.kettle||document.getElementById('cr-kettle')?.value].filter(Boolean);
  document.getElementById('cr-setup-sub').textContent=parts.join(' • ');
}
function setCRMethod(m){ csSetup.method=m; updateCRSetupSub(); renderMethods('cr-methods',m,'setCRMethod'); }
function setCRRatio(r){ csSetup.ratio=r; renderRatioOpts('cr-ratios',r,'setCRRatio'); }
function toggleSetupCard(){
  const body=document.getElementById('cr-setup-body');
  const chev=document.getElementById('cr-chev');
  const open=!body.classList.contains('hidden');
  body.classList.toggle('hidden',open);
  chev.style.transform=open?'':'rotate(180deg)';
  if(!open) setTimeout(()=>{
    csSetup.grinder=document.getElementById('cr-grinder').value;
    csSetup.kettle=document.getElementById('cr-kettle').value;
    updateCRSetupSub();
  },50);
}
function setCoffeeDisplay(){
  const el=document.getElementById('coffee-val'); if(!el) return;
  el.textContent=(cpCoffee==='Auto'?'Auto':cpCoffee+'g');
}
function openCoffeePop(e){
  e.stopPropagation();
  const box=document.getElementById('coffee-box');
  const pop=document.getElementById('coffee-pop');
  pop.innerHTML=CW_OPTS.map(w=>{
    const v=String(w); const sel=v===String(cpCoffee);
    const label=typeof w==='number'?w+'g':w;
    return `<button class="pop-item${sel?' active':''}" onclick="selCoffee('${v}')">${label}</button>`;
  }).join('');
  const r=box.getBoundingClientRect();
  pop.style.left=r.left+'px';
  pop.style.top=(r.bottom+6)+'px';
  pop.style.minWidth=r.width+'px';
  pop.classList.remove('hidden');
  box.classList.add('dropdown-open');
  setTimeout(()=>document.addEventListener('click',closeCoffeePop,{once:true}),50);
}
function closeCoffeePop(){
  document.getElementById('coffee-pop').classList.add('hidden');
  const box=document.getElementById('coffee-box'); if(box) box.classList.remove('dropdown-open');
}
function selCoffee(v){
  cpCoffee=v; setCoffeeDisplay(); closeCoffeePop();
}
function handleLabel(e){
  const file=e.target.files[0]; if(!file) return;
  lName=file.name||'Uploaded label';
  lB64=null; lType='image/jpeg';
  document.getElementById('cr-err').classList.add('hidden');
  const reader=new FileReader();
  reader.onerror=()=>showCRErr('Could not read file. Try again.');
  reader.onload=function(ev){
    const raw=ev.target.result;
    const img=new Image();
    img.onload=function(){
      let w=img.naturalWidth||0, h=img.naturalHeight||0;
      if(w&&h){
        const MAX=1000;
        if(w>MAX||h>MAX){ if(w>=h){h=Math.round(h*MAX/w);w=MAX;}else{w=Math.round(w*MAX/h);h=MAX;} }
        try{
          const c=document.createElement('canvas'); c.width=w; c.height=h;
          c.getContext('2d').drawImage(img,0,0,w,h);
          const j=c.toDataURL('image/jpeg',.82); const b=j.split(',')[1];
          if(b&&b.length>500){ lB64=b.replace(/\s/g,''); lType='image/jpeg'; showUploadedState(); return; }
        } catch(e){}
      }
      const t=(file.type||'').toLowerCase();
      const sup=['image/jpeg','image/png','image/gif','image/webp'];
      lType=sup.includes(t)?t:'image/jpeg';
      lB64=raw.split(',')[1].replace(/\s/g,'');
      if(lB64) showUploadedState(); else showCRErr('Could not process image.');
    };
    img.onerror=function(){
      const t=(file.type||'').toLowerCase(); const sup=['image/jpeg','image/png','image/gif','image/webp'];
      lType=sup.includes(t)?t:'image/jpeg'; lB64=raw.split(',')[1].replace(/\s/g,'');
      if(lB64) showUploadedState(); else showCRErr('Could not decode image.');
    };
    img.src=raw;
  };
  reader.readAsDataURL(file);
}
function showUploadedState(){
  document.getElementById('label-cta').classList.add('hidden');
  document.getElementById('label-uploaded').classList.remove('hidden');
  document.getElementById('ul-name').textContent=lName||'Label uploaded';
}
function clearLabel(){
  lB64=null; lName=null;
  document.getElementById('cam-input').value='';
  document.getElementById('lib-input').value='';
  document.getElementById('label-cta').classList.remove('hidden');
  document.getElementById('label-uploaded').classList.add('hidden');
  document.getElementById('cr-err').classList.add('hidden');
}
function showCRErr(msg){ const e=document.getElementById('cr-err'); e.textContent=msg; e.classList.remove('hidden'); }

/* ─── Generate ──────────────────────────────────────────────────────────────── */
function validateImg(){
  if(!lB64) return 'No image loaded.';
  if(!/^[A-Za-z0-9+/]+=*$/.test(lB64)) return 'Image data corrupted. Re-upload the photo.';
  const bytes=lB64.length*.75;
  if(bytes<1000) return 'Image appears empty. Re-upload.';
  if(bytes>5*1024*1024) return 'Image too large (over 5MB). Try re-taking closer.';
  return null;
}
function apiHeaders(){ return {'Content-Type':'application/json','anthropic-version':'2023-06-01','anthropic-dangerous-direct-browser-access':'true','x-api-key':apiKey}; }

async function doGenerate(){
  if(!lB64) return;
  if(!apiKey){ closeAllScreens(); document.getElementById('apikey-screen').classList.remove('hidden'); return; }
  const ve=validateImg(); if(ve){ showCRErr(ve); return; }
  document.getElementById('label-uploaded').classList.add('hidden');
  document.getElementById('cr-loading').classList.remove('hidden');
  document.getElementById('cr-err').classList.add('hidden');
  const coffeeW = cpCoffee==='Auto'?20:Number(cpCoffee);
  const m=csSetup.method||'V60', g=csSetup.grinder||'burr grinder', k=csSetup.kettle||'gooseneck kettle', ratio=csSetup.ratio||'1:15';
  const today=new Date().toISOString().slice(0,10);
  const METHOD_GUIDE={
    'V60':'Conical pour-over, fast flow. Medium-fine grind. Bloom then 2-4 pulse pours, even/concentric spirals. Total brew 2:30-3:30.',
    'Chemex':'Thick-filter pour-over, slower flow, very clean cup. Medium to medium-coarse grind. Bloom then 3-4 controlled pours. Total brew 3:30-4:30.',
    'AeroPress':'Immersion + light pressure. Medium-fine grind, lower water temp. Short steep (1-2 min) with a gentle stir, then a slow press. Model as 1-2 fill stages; the final stage is the press.',
    'French Press':'Full immersion, coarse grind. Single saturating pour to full, ~4 min steep, optional crust break; NO drawdown/pulse pours. Model as 1-2 stages (saturate, then steep).',
    'Moka Pot':'Stovetop pressure, fine (not espresso-fine) grind, preheated water. Not a pour-over — model as a single fill stage; technique is heat control. Keep stages minimal.',
    'Kalita Wave':'Flat-bottom pour-over, very even extraction. Medium grind. Bloom then 3-4 steady pulse pours keeping the bed flat. Total brew 3:00-3:45.'
  };
  const methodGuide=METHOD_GUIDE[m]||('Apply specialty best-practice parameters for '+m+'.');
  const prompt='You are a world-class specialty coffee brewer and competition judge. Today is '+today+'. '
    +'Carefully read this coffee bag label and extract: origin, farm/producer, variety, process (washed/natural/honey/etc.), altitude, roast level, roast date, and tasting notes. '
    +'Reason like an expert: washed coffees take brighter, hotter extraction; naturals/honeys take slightly lower temp and gentler agitation; high-altitude/dense beans want hotter water and a finer grind; '
    +'if a roast date is visible, compute roast age from today and lengthen the bloom for fresher coffee (more CO2 off-gassing), shorten it for older coffee. '
    +'Design the recipe specifically for this equipment: method='+m+', grinder='+g+', kettle='+k+', ratio='+ratio+', coffee='+coffeeW+'g. '
    +'Method guidance for '+m+': '+methodGuide+' '
    +'Brewing science: bloom water = 2-3× the coffee dose; target 18-22% extraction; keep total brew time within the method window above. '
    +'GRIND must match the grinder ("'+g+'"): if the grinder model is recognizable (e.g. Baratza Encore 1-40, Comandante ~15-30 clicks, 1Zpresso, Fellow Ode), LEAD with that grinder\'s recommended setting NUMBER, then " • " and a descriptor — e.g. "15 • Medium-Fine". Use that grinder\'s correct scale. If the grinder is generic/unknown, lead with a micron range instead — e.g. "600-700µm • Medium-Fine". '
    +'waterTemp in Fahrenheit by roast level: light=201-205, medium=194-200, dark=185-190. '
    +'If the label is missing details, make sensible specialty assumptions and note them briefly in the rationale — never fabricate an origin or process you cannot actually see. '
    +'Before answering, silently verify: totalWater = coffeeWeight × the ratio denominator; targetWeights increase and are cumulative; the FINAL stage targetWeight equals totalWater; every pourDuration < its duration; total time fits the method window. Fix any mismatch. '
    +'Respond with ONLY a raw JSON object (no markdown) matching this schema. Replace every <...> with a value derived from THIS coffee — these are instructions, never reuse example wording or numbers:\n'
    +'{"name":"<short recipe name>","coffee":"<origin & roaster from the label>","method":"'+m+'","coffeeWeight":'+coffeeW+','
    +'"waterTemp":<water temp in °F, integer>,"totalWater":<grams = coffeeWeight × the ratio denominator>,'
    +'"grindSize":"<setting-number-or-microns • descriptor, matched to '+g+'>","ratio":"'+ratio+'","tastingNotes":"<from the label>",'
    +'"rationale":"<4-6 expert sentences: why this temp, ratio, grind and technique suit THIS coffee, what to expect in the cup, any roast-age notes, and any assumptions made>",'
    +'"stages":[{"name":"<e.g. Bloom>","duration":<seconds>,"pourDuration":<seconds, less than duration>,"targetWeight":<cumulative grams on the scale>,"pourRate":"<slow|medium|fast>","technique":"<3-6 word cue>"}]}\n'
    +'Produce 3-5 stages appropriate for '+m+' (fewer for immersion methods like French Press). '
    +'CRITICAL: each "technique" must be a terse imperative cue of 3-6 words max — minimal, scannable, accurate, no full sentences (e.g. "Pulse pour at center", "Gentle spiral, keep bed flat").';
  try{
    const res=await fetch('https://api.anthropic.com/v1/messages',{
      method:'POST', headers:apiHeaders(),
      body:JSON.stringify({model:'claude-sonnet-4-6',max_tokens:3000,thinking:{type:'enabled',budget_tokens:1600},messages:[{role:'user',content:[
        {type:'image',source:{type:'base64',media_type:lType,data:lB64}},
        {type:'text',text:prompt}
      ]}]})
    });
    if(!res.ok){ const ed=await res.json().catch(()=>({})); throw new Error('API '+res.status+': '+((ed.error&&ed.error.message)||res.statusText)); }
    const data=await res.json();
    if(data.error) throw new Error(data.error.message);
    const raw=(data.content||[]).map(b=>b.text||'').join('').trim();
    const match=raw.match(/\{[\s\S]*\}/); if(!match) throw new Error('No JSON in response. Got: '+raw.slice(0,100));
    const parsed=JSON.parse(match[0]);
    if(!parsed.name||!Array.isArray(parsed.stages)||!parsed.stages.length) throw new Error('Recipe missing required fields.');
    const rec=Object.assign({},parsed,{id:String(Date.now())});
    // Auto-save the generated recipe, then review it
    saved=[rec,...saved.filter(r=>r.name!==rec.name)]; saveR();
    showRC(rec);
  } catch(e){
    document.getElementById('cr-loading').classList.add('hidden');
    document.getElementById('label-uploaded').classList.remove('hidden');
    showCRErr(e.message||'Something went wrong. Try again.');
  }
}

/* ─── Generated / RC screen ─────────────────────────────────────────────────── */
let viewingId = null;
function showRC(r){
  viewingId=r.id;
  const _rcs=document.getElementById('rc-scroll'); if(_rcs) _rcs.scrollTop=0;
  document.getElementById('rc-hdr').classList.remove('scrolled');
  document.getElementById('rc-coffee-name').textContent=r.coffee||r.name;
  document.getElementById('rc-rationale').textContent=r.rationale||'';
  // reset rationale collapsed
  const wrap=document.getElementById('rc-rationale-wrap');
  wrap.classList.add('collapsed'); wrap.classList.remove('expanded');
  document.getElementById('rc-more').textContent='More notes';
  // param rows
  const tempF=r.waterTemp?Math.round(r.waterTemp)+'°F':'—';
  const rows=[
    ['Grinder', csSetup.grinder||setup.grinder||'—'],
    ['Kettle', csSetup.kettle||setup.kettle||'—'],
    ['Brewer', r.method||csSetup.method||'V60'],
    ['Coffee', (r.coffeeWeight||'—')+'g'],
    ['Water', (r.totalWater||'—')+'g'],
    ['Ratio', r.ratio||csSetup.ratio||'1:15'],
    ['Grind', r.grindSize||'—'],
    ['Temp', tempF],
  ];
  document.getElementById('rc-rows').innerHTML = rows.map(([l,v])=>
    `<div class="rc-cell"><div class="rc-cell-lbl">${esc(l)}</div><div class="rc-cell-val">${esc(v)}</div></div>`
  ).join('');
  // brew recipe card
  const stages=r.stages||[];
  const totalT=stages.reduce((a,s)=>a+s.duration,0);
  document.getElementById('brc-sub').textContent=`${stages.length} steps • ${fmt(totalT)}`;
  document.getElementById('brc-body').innerHTML = renderStageList(stages);
  document.getElementById('brc-card').classList.remove('open');
  document.getElementById('brc-body').classList.add('hidden');
  navigateTo('rc-screen');
}
function renderStageList(stages){
  return `<div class="stage-list" style="padding-top:14px">` + stages.map((s,i)=>{
    const conn = i<stages.length-1 ? '<div class="stage-connector"></div>' : '';
    const tech=(s.technique||'').split(/[.!?]/)[0];
    return `<div class="stage-item">
      <div class="si-name t-label">${esc(s.name)}</div>
      <div class="si-stats t-mono-value">${fmt(s.duration)} • ${esc(String(s.targetWeight))}g</div>
      <div class="si-tech t-caption">${esc(tech)}</div>
    </div>${conn}`;
  }).join('') + `</div>`;
}
function toggleNotes(){
  const wrap=document.getElementById('rc-rationale-wrap');
  const btn=document.getElementById('rc-more');
  const collapsed=wrap.classList.contains('collapsed');
  wrap.classList.toggle('collapsed',!collapsed);
  wrap.classList.toggle('expanded',collapsed);
  btn.textContent=collapsed?'Less notes':'More notes';
}
function toggleBrewRecipe(){
  const card=document.getElementById('brc-card');
  const body=document.getElementById('brc-body');
  const open=card.classList.toggle('open');
  body.classList.toggle('hidden',!open);
}
function closeRC(){
  // Recipe is already saved — just return to the menu
  renderRecipes(); renderSetupTab(); switchTab('recipes');
  navigateTo('menu-screen');
}
function brewRC(){
  // Set the viewed recipe active and return home, ready to brew
  const r=saved.find(x=>x.id===viewingId);
  if(r) recipe=r;
  closeAllScreens();
  resetBrew(); updateIcon(); drawRings(); updateUI();
}
function confirmDeleteRC(){
  if(viewingId) openConfirm(viewingId);
}

/* ─── Stage overlay ─────────────────────────────────────────────────────────── */
function openOverlay(stages){
  document.getElementById('ov-stages').innerHTML = (stages||[]).map((s,i)=>{
    const conn = i<stages.length-1 ? '<div class="stage-connector"></div>' : '';
    const tech=(s.technique||'').split(/[.!?]/)[0];
    return `<div class="stage-item">
      <div class="si-name t-label">${esc(s.name)}</div>
      <div class="si-stats t-mono-value">${fmt(s.duration)} • ${esc(String(s.targetWeight))}g</div>
      <div class="si-tech t-caption">${esc(tech)}</div>
    </div>${conn}`;
  }).join('');
  hydrateIcons(document.getElementById('ov'));
  document.getElementById('ov').classList.add('open');
}
function closeOverlay(){
  document.getElementById('ov').classList.remove('open');
}

/* ─── Sound (synthesized, no audio files) ──────────────────────────────────── */
let audioCtx=null;
function initAudio(){
  try{
    if(!audioCtx) audioCtx=new (window.AudioContext||window.webkitAudioContext)();
    if(audioCtx.state==='suspended') audioCtx.resume();
    // iOS: play through the silent/ring switch instead of being muted by it
    if(navigator.audioSession) navigator.audioSession.type='playback';
  }catch(e){}
}
// Shared reverb (synthesized impulse) for a little organic air/space.
let reverb=null;
function initReverb(){
  if(reverb||!audioCtx) return;
  reverb=audioCtx.createConvolver();
  const len=Math.floor(audioCtx.sampleRate*2.4);
  const buf=audioCtx.createBuffer(2,len,audioCtx.sampleRate);
  for(let ch=0;ch<2;ch++){ const d=buf.getChannelData(ch); for(let i=0;i<len;i++) d[i]=(Math.random()*2-1)*Math.pow(1-i/len,3.2); }
  reverb.buffer=buf;
  const rg=audioCtx.createGain(); rg.gain.value=1;
  reverb.connect(rg); rg.connect(audioCtx.destination);
}
// Cue parameters designed in the sound lab.
const SOUNDS={
  pour:{wave:'sine',freq:158,attack:50,dur:1.5,gain:0.12,cutoff:200,glide:0.97,l2ratio:1,l2level:0.04,detune:0,partial:0,strike:0,reverb:0},
  draw:{wave:'sine',freq:119,attack:95,dur:1.7,gain:0.12,cutoff:200,glide:0.975,l2ratio:1.5,l2level:0.1,detune:0,partial:0,strike:0,reverb:0},
  done:{wave:'sine',freq:373,attack:30,dur:2,gain:0.12,cutoff:200,glide:1,l2ratio:1,l2level:0,detune:0,partial:0.32,strike:0,reverb:0.24}
};
const MASTER=3.4; // boost: lab volumes (max 0.12) are too quiet for phone speakers
function playTone(p){
  if(!audioCtx) return;
  initReverb();
  const t=audioCtx.currentTime, att=p.attack/1000;
  const send=audioCtx.createGain(); send.gain.value=p.reverb; send.connect(reverb);
  const layers=[{ratio:1,level:1},{ratio:p.l2ratio,level:p.l2level}];
  if(p.partial>0){ layers.push({ratio:2.01,level:0.42*p.partial},{ratio:2.71,level:0.22*p.partial},{ratio:4.18,level:0.12*p.partial}); }
  if(p.strike>0){ // soft mallet strike (filtered noise burst)
    const n=audioCtx.createBuffer(1,Math.floor(audioCtx.sampleRate*0.06),audioCtx.sampleRate);
    const nd=n.getChannelData(0); for(let i=0;i<nd.length;i++) nd[i]=Math.random()*2-1;
    const ns=audioCtx.createBufferSource(); ns.buffer=n;
    const nf=audioCtx.createBiquadFilter(); nf.type='bandpass'; nf.frequency.value=p.freq*3.2; nf.Q.value=0.7;
    const ng=audioCtx.createGain();
    ng.gain.setValueAtTime(0.0001,t); ng.gain.linearRampToValueAtTime(p.gain*p.strike*0.5*MASTER,t+0.004); ng.gain.exponentialRampToValueAtTime(0.0001,t+0.09);
    ns.connect(nf); nf.connect(ng); ng.connect(audioCtx.destination); ng.connect(send);
    ns.start(t); ns.stop(t+0.12);
  }
  layers.forEach((L,idx)=>{
    const dts=p.detune>0?[-p.detune,p.detune]:[0];
    dts.forEach(dt=>{
      const o=audioCtx.createOscillator(), g=audioCtx.createGain(), lp=audioCtx.createBiquadFilter();
      o.type=p.wave; o.frequency.setValueAtTime(p.freq*L.ratio+dt,t);
      if(p.glide!==1) o.frequency.exponentialRampToValueAtTime(p.freq*L.ratio*p.glide+dt,t+p.dur);
      lp.type='lowpass'; lp.frequency.value=p.cutoff;
      const pd=p.dur*(idx<2?1:0.6), peak=p.gain*L.level*(p.detune>0?0.5:1)*MASTER;
      g.gain.setValueAtTime(0.0001,t); g.gain.linearRampToValueAtTime(peak,t+att+idx*0.02); g.gain.exponentialRampToValueAtTime(0.0001,t+pd);
      o.connect(lp); lp.connect(g); g.connect(audioCtx.destination); g.connect(send);
      o.start(t); o.stop(t+pd+0.06);
    });
  });
}
function soundPourStart(){ if(!soundOn) return; playTone(SOUNDS.pour); }
function soundDrawdown(){ if(!soundOn) return; playTone(SOUNDS.draw); }
function soundDone(){ if(!soundOn) return; playTone(SOUNDS.done); }
function renderSoundToggle(){
  const t=document.getElementById('sound-toggle');
  if(t) t.setAttribute('aria-checked', soundOn?'true':'false');
}
function toggleSound(){
  soundOn=!soundOn;
  localStorage.setItem('dial-sound', soundOn?'1':'0');
  renderSoundToggle();
  if(soundOn){ initAudio(); soundPourStart(); } // unlock + play the actual pour cue as confirmation
}
let _lastStageIdx=-1, _lastIsDD=false, _lastDone=false;
function checkStageSound(){
  if(brewStatus==='done'){ if(!_lastDone){ _lastDone=true; soundDone(); } return; }
  if(brewStatus!=='running') return;
  const si=getSI(); if(!si) return;
  if(si.i!==_lastStageIdx){      // a new pour has begun
    _lastStageIdx=si.i; _lastIsDD=false;
    soundPourStart();
  }
  if(si.isDD && !_lastIsDD){     // this pour just entered drawdown
    _lastIsDD=true;
    soundDrawdown();
  }
}

/* ─── Brew engine ──────────────────────────────────────────────────────────── */
function toggleBrew(){
  if(brewStatus==='done'||!recipe) return;
  if(brewStatus==='running'){ brewStatus='paused'; baseTime=hiRes; cancelAnimationFrame(rafId); }
  else{
    initAudio(); // unlock audio within the user gesture (iOS requirement)
    // Fresh start (from idle) replays from the first pour; resume keeps trackers
    if(brewStatus==='idle'){ _lastStageIdx=-1; _lastIsDD=false; _lastDone=false; }
    brewStatus='running'; startTime=performance.now(); rafId=requestAnimationFrame(tick);
  }
  updateUI();
}
function tick(now){
  hiRes=baseTime+(now-startTime)/1000;
  const tot=recipe?recipe.stages.reduce((a,s)=>a+s.duration,0):0;
  if(hiRes>=tot){ hiRes=tot; brewStatus='done'; cancelAnimationFrame(rafId); }
  else rafId=requestAnimationFrame(tick);
  updateUI(); drawRings(); checkStageSound();
}
function resetBrew(){
  cancelAnimationFrame(rafId); brewStatus='idle'; hiRes=0; baseTime=0; startTime=null;
  _lastStageIdx=-1; _lastIsDD=false; _lastDone=false;
  updateUI(); drawRings();
}
function getSI(){
  if(!recipe) return null;
  let acc=0;
  for(let i=0;i<recipe.stages.length;i++){
    const s=recipe.stages[i];
    if(hiRes<acc+s.duration){ const se=hiRes-acc; const pd=s.pourDuration||s.duration; return{s,i,se,sp:se/s.duration,isDD:se>=pd}; }
    acc+=s.duration;
  }
  const last=recipe.stages[recipe.stages.length-1];
  return{s:last,i:recipe.stages.length-1,se:last.duration,sp:1,isDD:false,done:true};
}
function liveW(si){
  if(!si) return 0;
  const prev=si.i>0?recipe.stages[si.i-1].targetWeight:0;
  const pd=si.s.pourDuration||si.s.duration;
  return Math.round(prev+(si.s.targetWeight-prev)*Math.min(si.se/pd,1));
}
function fmt(s){ const m=Math.floor(s/60); return m+':'+String(Math.floor(s%60)).padStart(2,'0'); }

/* ─── UI state ─────────────────────────────────────────────────────────────── */
function cssVar(name){ return getComputedStyle(document.documentElement).getPropertyValue(name).trim(); }

// First sentence of a technique string, uppercased
function tech(s){ return (s||'').split(/[.!?]/)[0].toUpperCase(); }

// Soft vertical shuffle, reused by the status label and the grams readout:
// the old value drifts gently up and fades, the new one eases up into place.
function shuffleSwap(el, text, store){
  if(text===store.v) return;
  const first=store.v===undefined;
  store.v=text;
  if(first){ el.textContent=text; el.style.opacity='1'; el.style.transform='none'; return; }
  el.style.transition='transform .46s cubic-bezier(.4,0,.2,1), opacity .46s ease';
  el.style.transform='translateY(-8px)';
  el.style.opacity='0';
  clearTimeout(store.t);
  store.t=setTimeout(()=>{
    el.textContent=text;
    el.style.transition='none';
    el.style.transform='translateY(8px)';
    void el.offsetHeight; // reflow so the entrance eases
    el.style.transition='transform .55s cubic-bezier(.22,.61,.36,1), opacity .55s ease';
    el.style.transform='none';
    el.style.opacity='1';
  },340);
}
const _statusStore={}, _gwStore={};
function setStatus(text,color){
  const sEl=document.getElementById('status-el');
  sEl.style.color=color;
  shuffleSwap(sEl, text, _statusStore);
}

function updateUI(){
  const si=getSI(); const done=brewStatus==='done';
  const tEl=document.getElementById('timer-el');
  tEl.textContent=fmt(hiRes);
  tEl.style.color = done ? 'var(--color-accent-amber)' : (brewStatus==='running') ? 'var(--color-text-primary)' : 'var(--color-text-muted)';
  // Status text:
  //  - idle: first stage name (e.g. BLOOM) as placeholder
  //  - pouring: the stage's pour technique
  //  - drawdown: 'DRAWDOWN', then fade to the NEXT technique 5s before it starts
  let stText='', stColor='var(--color-text-dim)';
  if(done){ stText='DONE'; stColor='var(--color-accent-amber)'; }
  else if(!recipe){ stText='NO RECIPE SELECTED'; stColor='var(--color-text-dim)'; }
  else if(brewStatus==='idle'){ stText=(recipe.stages[0].name||'Bloom').toUpperCase(); stColor='var(--color-text-dim)'; }
  else if(si){
    const remaining=si.s.duration-si.se;
    const next=recipe.stages[si.i+1];
    if(si.isDD && next && remaining<=5){ stText=tech(next.technique); stColor='var(--color-text-secondary)'; }
    else if(si.isDD){ stText='DRAWDOWN'; stColor='var(--color-text-muted)'; }
    else { stText=tech(si.s.technique); stColor='var(--color-text-secondary)'; }
  }
  setStatus(stText, stColor);
  const sb=document.getElementById('start-btn'), rb=document.getElementById('reset-btn');
  if(!recipe){ sb.textContent='Start'; sb.className='brew-btn t-button'; rb.textContent='Reset'; rb.className='brew-btn t-button'; }
  else if(done){ sb.textContent='Done'; sb.className='brew-btn t-button'; rb.textContent='Reset'; rb.className='brew-btn t-button lit'; }
  else if(brewStatus==='running'){ sb.textContent='Pause'; sb.className='brew-btn t-button primary'; rb.textContent='Reset'; rb.className='brew-btn t-button lit'; }
  else if(brewStatus==='paused'){ sb.textContent='Resume'; sb.className='brew-btn t-button primary'; rb.textContent='Reset'; rb.className='brew-btn t-button lit'; }
  else{ sb.textContent='Start'; sb.className='brew-btn t-button primary'; rb.textContent='Reset'; rb.className='brew-btn t-button'; }
  updateIcon();
}

/* ─── Rings — 390×390 square ───────────────────────────────────────────────── */
function drawRings(){
  const svg=document.getElementById('rings-svg'); if(!svg) return;
  const cx=195, cy=195; // centre of 390×390 square
  const stages=recipe?recipe.stages:[];
  const n=Math.max(stages.length,4);
  const GAP=22, outerR=180, baseR=outerR-(n-1)*GAP;
  const si=getSI(); const done=brewStatus==='done';
  const ringInactive=cssVar('--color-icon-dim')||'#3d3730';
  const amber=cssVar('--color-accent-amber')||'#c8a87e';
  const bright=cssVar('--color-accent-amber-bright')||'#fff3dc';
  const primary=cssVar('--color-text-primary')||'#e8ddd0';
  const dim=cssVar('--color-text-dim')||'#8d8268';
  const small=cssVar('--neutral-325')||'#2c2922';
  let h='';
  for(let i=0;i<n;i++){
    const R=baseR+i*GAP, C=2*Math.PI*R;
    const stDone=done||(si&&i<si.i);
    const active=!done&&si&&i===si.i;
    const prog=active?si.sp:stDone?1:0;
    const off=C*(1-Math.min(prog,1));
    const fullyDone=stDone&&!active;
    // Dotted track only shows where the solid progress hasn't completed it
    if(!fullyDone) h+=`<circle cx="${cx}" cy="${cy}" r="${R}" fill="none" stroke="${ringInactive}" stroke-width="1.5" stroke-dasharray="3 8" opacity="0.55"/>`;
    if(prog>0||stDone) h+=`<circle cx="${cx}" cy="${cy}" r="${R}" fill="none" stroke="${amber}" stroke-width="${active?1.8:1.4}" stroke-dasharray="${C.toFixed(1)}" stroke-dashoffset="${off.toFixed(1)}" stroke-linecap="round" transform="rotate(-90 ${cx} ${cy})" opacity="${fullyDone?.85:1}"/>`;
    if(active&&prog>.02&&prog<.995){
      const a=-Math.PI/2+prog*2*Math.PI;
      h+=`<circle cx="${(cx+R*Math.cos(a)).toFixed(1)}" cy="${(cy+R*Math.sin(a)).toFixed(1)}" r="3" fill="${amber}" opacity=".85" style="filter:blur(1.5px)"/>`;
    }
  }
  const si2=getSI();
  const lw=si2?liveW(si2):0;
  let gw;
  if(si2){
    // During the 5s drawdown preview, show the NEXT pour's target as the goal
    const remaining=si2.s.duration-si2.se;
    const nx=recipe.stages[si2.i+1];
    gw=(si2.isDD && nx && remaining<=5) ? nx.targetWeight : si2.s.targetWeight;
  } else {
    gw=(recipe&&recipe.stages[0]?recipe.stages[0].targetWeight:0);
  }
  const lwStr=String(lw).padStart(2,'0');
  const gwStr=recipe?String(gw):'00';
  const bigFill=done?amber:brewStatus==='running'?primary:dim;
  svg.innerHTML=h;
  // Update the HTML overlay numbers. Big live weight counts continuously (no
  // animation); the target weight shuffles softly whenever it changes.
  const lwEl=document.getElementById('lw-num');
  if(lwEl){ lwEl.textContent=lwStr; lwEl.style.color=bigFill; }
  const gwEl=document.getElementById('gw-num');
  if(gwEl){ gwEl.style.color=small; shuffleSwap(gwEl, gwStr, _gwStore); }
}

/* ─── Menu icon ─────────────────────────────────────────────────────────────── */
function updateIcon(){
  const btn=document.getElementById('menu-btn');
  btn.innerHTML = recipe ? icon('dial') : icon('dial-dim');
  btn.classList.toggle('lit', !!recipe);
  // Also keep menu-close-btn hydrated with dial icon
  const cb=document.getElementById('menu-close-btn');
  if(cb && !cb.dataset.hydrated){ cb.innerHTML=icon('dial'); cb.dataset.hydrated='1'; }
}

/* ─── API key ───────────────────────────────────────────────────────────────── */
function saveApiKey(){
  const v=document.getElementById('ak-input').value.trim();
  if(!v.startsWith('sk-')){ const e=document.getElementById('ak-err'); e.textContent='Key should start with sk- — check and try again.'; e.classList.remove('hidden'); return; }
  apiKey=v; localStorage.setItem('dial-k',v);
  document.getElementById('apikey-screen').classList.add('hidden');
}
function skipApiKey(){ document.getElementById('apikey-screen').classList.add('hidden'); }

/* ─── Init ──────────────────────────────────────────────────────────────────── */
load();
hydrateIcons(document);
(function(){ const s=document.getElementById('rc-scroll'); if(s) s.addEventListener('scroll',()=>document.getElementById('rc-hdr').classList.toggle('scrolled', s.scrollTop>4)); })();
setCoffeeDisplay();
updateIcon();
drawRings();
updateUI();
if(!apiKey) document.getElementById('apikey-screen').classList.remove('hidden');
