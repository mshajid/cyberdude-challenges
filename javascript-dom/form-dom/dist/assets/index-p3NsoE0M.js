(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))v(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&v(i)}).observe(document,{childList:!0,subtree:!0});function D(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function v(t){if(t.ep)return;t.ep=!0;const n=D(t);fetch(t.href,n)}})();const g=document.querySelector("#creditRadio"),h=document.getElementById("creditCardDiv"),y=document.getElementById("payPalRadioBtn"),f=document.getElementById("payPalDiv"),E=document.getElementById("greetName");document.getElementById("verifyBtn");const F=document.getElementById("validationDot"),I=document.getElementById("lastNameIndicator"),N=document.getElementById("deliveryDot"),B=document.getElementById("emailDot"),C=document.getElementById("primaryDot"),P=document.getElementById("secondaryDot"),p=document.forms[0],w=document.forms[1],{card:u,cvvNumber:m,firstName:o,lastName:s,delivery:r,email:a,primary:d,secondary:L}=p.elements,l=document.querySelectorAll("div"),O=l[36].children[0],x=l[36].children[1],R=l[36].children[2],Y=l[36].children[3],A=e=>{e.preventDefault(),u.value.length<16||u.value.length>16?alert("Please Enter the Correct Credit Card Number"):console.log("You've been successfully authenitcated"),m.value.length<3||m.value.length>3?alert("Please Enter the Correct CVV Number"):console.log("You've been successfully authenticated CVV"),o.value.length<2||o.value.length>15?console.log("Kindly, Enter Your Proper First Name"):(O.textContent=o.value,E.textContent=o.value),s.value.length<2||s.value.length>15?console.log("Kindly, Enter Your Proper Last Name"):console.log("Nice last name :D"),r.value.length<2||r.value.length>40?console.log("Kindly, Enter Your Correct Address To Deliver"):x.textContent=r.value,d.value.length<10||d.value.length>10?console.log("Enter your correct phone number"):R.textContent=d.value,a.value===""?alert("email cannot be empty"):Y.textContent=a.value};p.addEventListener("submit",A);const K=e=>{F.classList.remove("hidden"),o.classList.add("border-green-500","shadow-md")},V=e=>{I.classList.remove("hidden"),s.classList.add("border-green-500","shadow-md")},q=e=>{N.classList.remove("hidden"),r.classList.add("border-green-500","shadow-md")},S=e=>{B.classList.remove("hidden"),a.classList.add("border-green-500","shadow-md")},G=e=>{C.classList.remove("hidden"),d.classList.add("border-green-500","shadow-md")},T=e=>{P.classList.remove("hidden"),L.classList.add("border-green-500","shadow-md")},M=()=>{E.textContent=o.value},j=e=>{g.checked&&(f.classList.remove("bg-[#0075FF]/20","border-[#0075FF]","shadow-lg"),h.classList.add("bg-[#0075FF]/20","border-[#0075FF]","shadow-lg"),console.dir(e.target))},k=e=>{y.checked&&(h.classList.remove("bg-[#0075FF]/20","border-[#0075FF]","shadow-lg"),f.classList.add("bg-[#0075FF]/20","border-[#0075FF]","shadow-lg"))},z=e=>{e.preventDefault(),alert("Thank you")},b=e=>{e.preventDefault(),alert("You cannot paste credit card numbers.")};g.addEventListener("change",j);y.addEventListener("change",k);o.addEventListener("change",K);s.addEventListener("change",V);r.addEventListener("change",q);a.addEventListener("change",S);d.addEventListener("change",G);L.addEventListener("change",T);o.addEventListener("input",M);w.addEventListener("submit",z);u.addEventListener("paste",b);m.addEventListener("paste",b);
