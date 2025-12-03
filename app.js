function generate(){
  const out=document.getElementById("out");
  out.innerHTML="";
  for(let i=0;i<16;i++){
    const r=(i*16)%256;
    const g=(i*32)%256;
    const b=(i*8)%256;
    const box=document.createElement("div");
    box.className="color-box";
    box.style.background=`rgb(${r},${g},${b})`;
    out.appendChild(box);
  }
}
