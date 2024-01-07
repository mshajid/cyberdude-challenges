(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function l(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(t){if(t.ep)return;t.ep=!0;const a=l(t);fetch(t.href,a)}})();const s=[{id:1,name:"Shajid Shafee",image:"./images/shajid.jpg",organization:"CyberDude Networks Pvt. Ltd.",role:{position:"Full Stack Engineer",totalHours:7200,totalJobs:41,techStacks:["Html","CSS","JavaScript","TailwindCSS","Vite","GSAP","Git","GitHub","React JS","Node JS","TypeScript","Express JS","Next JS","MongoDB","Three JS","Python"],otherSkills:["SEO","Digital Marketing","Content Writing","Blogger","Marketing Strategist","Google Analaytics","Google Search Console"],hourlyRate:55,hoursPerWeek:35},location:"Colombo, Sri Lanka",stackOverFlow:!0,gitHub:!0},{id:2,name:"Abirami",image:"./images/abirami.webp",organization:"Zoho Corporation (India)",role:{position:"Full Stack Engineer",totalHours:5734,totalJobs:20,techStacks:["Html","CSS","JavaScript","TailwindCSS","Vite","GSAP","Git","GitHub","React JS","Node JS","TypeScript","Express JS","Next JS","MongoDB","Three JS","Python"],otherSkills:["SEO","Digital Marketing","Content Writing","Blogger","Marketing Strategist","Google Analaytics","Google Search Console"],hourlyRate:55,hoursPerWeek:15},location:"Chennai, India",stackOverFlow:!0,gitHub:!0},{id:3,name:"Yogha Raj Dhayal",image:"./images/Yoga.png",organization:"Google Alphabets, INC",role:{position:"Full Stack Engineer",totalHours:4200,totalJobs:61,techStacks:["HTML","CSS","JavaScript","TailwindCSS","Vite","Bootstrap 5","React JS","Node JS","MongoDB"],otherSkills:["Problem solving","Google Analaytics","Canva","Figma","Obsidian","Video Editor","Video Marketing","GYM Enthusiast"],hourlyRate:55,hoursPerWeek:35},location:"Rameswaram, India",stackOverFlow:!0,gitHub:!0},{id:4,name:"Abishek",image:"./images/abishake.jpg",organization:"CyberDude Networks Pvt. Ltd.",role:{position:"Data Scientist",totalHours:2865,totalJobs:10,techStacks:["HTML","CSS","JavaScript","TailwindCSS","Vite","Git","GitHub","React JS","Node JS","MongoDB"],otherSkills:["AWS","Google Cloud","Cybersecurity","Blender","Qbcore","Graphic Artist"],hourlyRate:35,hoursPerWeek:20},location:"Kanyakumari, India",stackOverFlow:!0,gitHub:!0},{id:5,name:"Bearcin Sweety",image:"./images/sweety.png",organization:"Air Bus Corporate Jets",role:{position:"Full Stack Engineer",totalHours:3586,totalJobs:41,techStacks:["HTML","CSS","JavaScript","Bootstrap 5","React JS","MongoDB","Node JS"],otherSkills:["Air Simulation","Writing Blogs","Short Stories","Scrolling Social Media"],hourlyRate:55,hoursPerWeek:25},location:"Penang, Malaysia",stackOverFlow:!0,gitHub:!0},{id:6,name:"Rosini S.",image:"./images/rosini.png",organization:"GitHub, INC",role:{position:"Full Stack Engineer",totalHours:4087,totalJobs:80,techStacks:["HTML","CSS","JavaScript","TailwindCSS","PHP","MySQL","React JS","Node JS"],otherSkills:["Editor","Home Designer","Mehendi Designer","Language Translator","Polygot"],hourlyRate:55,hoursPerWeek:18},location:"Madurai, India",stackOverFlow:!0,gitHub:!0},{id:7,name:"Ahmed Hasith",image:"./images/hasith.enc",organization:"Zoho Corporation (India)",role:{position:"ML Engineer",totalHours:7200,totalJobs:41,techStacks:["Html","CSS","JavaScript","TailwindCSS","Vite","GSAP","Git","GitHub","React JS","Node JS","TypeScript","Express JS","Next JS","MongoDB","Three JS","Python"],otherSkills:["SEO","Digital Marketing","Content Writing","Blogger","Marketing Strategist","Google Analaytics","Google Search Console"],hourlyRate:55,hoursPerWeek:18},location:"Colombo, Sri Lanka",stackOverFlow:!0,gitHub:!0},{id:8,name:"Gayathri",image:"./images/gai3.enc",organization:"CyberDude Networks Pvt. Ltd.",role:{position:"Full Stack Engineer",totalHours:789,totalJobs:25,techStacks:["Html","CSS","JavaScript","TailwindCSS","Vite","GSAP","Git","React JS"],otherSkills:["Graphic Artist"],hourlyRate:55,hoursPerWeek:25},location:"Bangalore, India",stackOverFlow:!0,gitHub:!0},{id:9,name:"Riyaz",image:"./images/riyaz.enc",organization:"Kajima Technologies",role:{position:"Full Stack Engineer",totalHours:1463,totalJobs:2,techStacks:["Html","CSS","JavaScript","TailwindCSS","Vite","React JS","MySQL"],otherSkills:["Free Style Football","Machine Learning","AI"],hourlyRate:55,hoursPerWeek:25},location:"Karaikudi, India",stackOverFlow:!0,gitHub:!0},{id:10,name:"Muthu Akalya",image:"./images/akalya.jpg",organization:"Zoho Corporation (India)",role:{position:"Full Stack Engineer",totalHours:1528,totalJobs:10,techStacks:["Html","CSS","JavaScript","Bootstrap 5","TailwindCSS","Vite","React JS","MongoDB","Node JS"],otherSkills:["Graphic Artist","Scrolling Social Media"],hourlyRate:55,hoursPerWeek:30},location:"Thoothukudi, India",stackOverFlow:!0,gitHub:!0}];document.querySelectorAll("#name");const n=document.getElementById("main");s.forEach(e=>{const o=document.createElement("div");o.className="max-w-sm h-[525px] border-2 border-[#D9D9D9] rounded-xl relative",o.innerHTML=`
  <div title="${e.name} is online" class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse absolute right-2 top-2 shadow-sm shadow-emerald-400"></div>
  <div class="flex items-center justify-center gap-x-5 py-4">
    <div>
        <img src=${e.image} class="size-20 rounded-full object-cover" />
    </div>
    <div class="space-y-2">
      <div class="leading-3">
        <h2 id="name" class="font-bold text-xl">${e.name}</h2>
        <span id="location" class="text-sm tracking-tight">${e.location}</span>
      </div>
      <div class="leading-3">
        <h2 id="position" class="font-semibold text-sm">${e.role.position}</h2>
        <span class="font-bold">@</span>
        <span id="organization" class="font-light text-xs -tracking-tighter">${e.organization}</span>
      </div>
    </div>
  </div>
  <div
  class="flex items-center border-t-2 mt-8 mb-4 border-b-2 gap-x-3 justify-center"
>
  <div class="flex gap-x-2 border-r-2 px-5 py-5">
    <div class="flex flex-col leading-tight">
      <span id="totalJobs" class="font-bold text-xl">${e.role.totalJobs}</span>
      <span class="font-light text-sm">Total Jobs</span>
    </div>
    <div class="flex flex-col leading-tight">
      <span id="totalHours" class="font-bold text-xl">${e.role.totalHours}</span>
      <span class="font-light text-sm">Total Hours</span>
    </div>
  </div>
  <div>
    <div>
      <span class="font-bold text-2xl">$55.00/hr</span>
      <div class="font-semibold flex gap-x-1">
        <span id="totalHoursWeek">${e.role.hoursPerWeek}</span>
        <span>Hours Per Week</span>
      </div>
    </div>
  </div>
</div>
  <div class="px-10 flex flex-col gap-y-3">
    <div class="flex flex-col flex-wrap">
        <span class="font-bold text-lg">Tech Stacks</span>
        <span class="text-xs font-regular">${e.role.techStacks.join(", ")}</span>
    </div>
    <div class="flex flex-col">
    <span class="font-bold text-lg">Other Skills</span>
    <span id="otherSkills" class="text-xs font-regular">${e.role.otherSkills.join(", ")}</span>
    </div>
    <div>
      <span class="font-semibold">Ready to Work With</span>
      <span id="name" class="font-semibold">${e.name}</span>
      <span class="font-semibold">?</span>
      <button title="Hire ${e.name}" class="bg-[#A78295] px-2 py-0.5 my-2 rounded-md text-white text-sm">Hire Now</button>
    </div>
  </div>
`,n.append(o)});
