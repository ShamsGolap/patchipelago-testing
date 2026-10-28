'use strict';
const checks = [...document.querySelectorAll('[data-check]')];
function progress(){
 const count = checks.filter(el => el.checked).length;
 document.getElementById('progressbar').style.width=(100*count/checks.length)+'%';
 document.getElementById('progresslabel').textContent=count+' / '+checks.length+' vérifications';
}
checks.forEach(el=>el.addEventListener('change',progress));
progress();
const form=document.getElementById('report');
form.addEventListener('submit',e=>{
 e.preventDefault();
 const data=new FormData(form);
 const text=[
  'PATCHIPELAGO — RETOUR PREVIEW',
  'Écran : '+(data.get('screen')||''),
  'Étapes :\n'+(data.get('steps')||''),
  'Résultat attendu / constaté :\n'+(data.get('actual')||''),
  'Appareil/version : '+(data.get('device')||'')
 ].join('\n\n');
 document.getElementById('reporttext').textContent=text;
 document.getElementById('result').hidden=false;
 document.getElementById('copystatus').textContent='';
});
document.getElementById('copy').addEventListener('click',async()=>{
 const text=document.getElementById('reporttext').textContent;
 try{
  await navigator.clipboard.writeText(text);
  document.getElementById('copystatus').textContent='Rapport copié. Envoie-le au support.';
 }catch{
  const range=document.createRange();
  range.selectNodeContents(document.getElementById('reporttext'));
  const selection=window.getSelection();
  selection.removeAllRanges();selection.addRange(range);
  document.getElementById('copystatus').textContent='Sélectionne et copie le texte affiché.';
 }
});
