const fs=require('fs'),path=require('path');
const G={
 file_nlD3aHBk5v2TxQrX5CCC92Wx:['file_LOHAKGqtU1iWl0Py1MTUfn3g','cream'],
 file_E4RyzbNs65laSB9mK3GXEsnp:['file_ZLNLI6MDQ4ghQjASGH3dBaX5','dark grey power'],
 file_UifJps576NjMbznF228eVPn1:['file_2c8bbpkuu9qh7mm9w7sbecpE','tan leather'],
 file_85r5mejd9KcESRrIX7iFrVh8:['file_SkQRYzIVvyqVJZeutqrjLNvq','burgundy leather'],
 file_r90po5MLAvi73rhfUYV1fjVg:['file_Wf0mo2ViSrP0cT3iw8kwww0J','brown leather'],
};
const skip=/^(leather-sofa|leather-couch|gaming-chair)/;
const dir='seo-pages';let total=0;const per={};
for(const f of fs.readdirSync(dir)){
 if(!/^(south-delhi-recliner|delhi-recliner-batch|west-delhi-.*recliner|gurgaon-recliner-new|recliner-authority|recliner-sofa-repair-delhi|leather-recliner-batch)/.test(f))continue;
 let s=fs.readFileSync(path.join(dir,f),'utf8');
 const parts=s.split(/(?=\n  slug: ")/);
 let ch=0;
 const out=parts.map(b=>{
  const m=b.match(/^\n  slug: "([^"]+)"/); if(!m||skip.test(m[1]))return b;
  return b.replace(/imageUrl:\s*"https:\/\/hercules-cdn\.com\/(file_\w+)"(\s*,\s*altText:\s*)"([^"]*)"/,(all,id,mid,alt)=>{
   const g=G[id]; if(!g)return all; ch++;per[id]=(per[id]||0)+1;
   let a=alt.replace(/recliner recliner/g,'recliner').replace(/sofa repair technician/,'recliner repair technician')
    .replace(/working on an? [^—]*? sofa/,`working on a ${g[1]} recliner`);
   return `imageUrl: "https://hercules-cdn.com/${g[0]}"${mid}"${a}"`;
  });
 });
 if(ch){fs.writeFileSync(path.join(dir,f),out.join(''));total+=ch;console.log(f,ch);}
}
console.log(total,per);
