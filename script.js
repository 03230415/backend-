  
//   <script>
    // ── Navigation (mobile menu toggle) ──
    // const - creates a variable navToggle and navLinks
    // getElementById - find element by its id
    // if - check if something is true
    // navToggle(☰ icon) && navLinks - both must exist
    const navToggle = document.getElementById('navToggle');
    const navLinks  = document.getElementById('navLinks');
    if (navToggle && navLinks) {
      // When you click the menu button (☰), it shows or hides the navigation menu.
      navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));}
    // 👉 Click button → menu opens
  // 👉 Click again → menu closes

    // ////////// //
  // java script//
  // ////////// //

  function getGreeting() {
  const hour = new Date().getHours();
  let greeting = '';

  if (hour < 12) {
    greeting = "Good Morning 🌻";
  } else if (hour < 17) {
    greeting = "Good Afternoon 🌤️";
  } else {
    greeting = "Good Evening 🌙";
  }

  return greeting;
}

document.getElementById("greeting").innerText = getGreeting();    
  

  // Clear Answers 🧹 
function clearForm() {
  document.querySelector("form").reset();
}
//  stroy to intro and back
  function enterSite() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("main").style.display = "block";
  }

  function goBackToStory() {
    document.getElementById("main").style.display = "none";
    document.getElementById("intro").style.display = "block";
  }

  // ── Page Router ──
    // movement between section
    const pages = ['home','about','dashboard','company','contact'];

    function showPage(id) {      // you are trying to show one page at a time (id - which page to show?)
      pages.forEach(p => {       // goes through every page you have (p - each page name one by one)
        const pg  = document.getElementById('page-' + p);  // pg variable, get page by id, page-home(p)   -html
        const btn = document.getElementById('nav-' + p);    // btn variable, get page by id, nav-home(p)  - menu button
        if (pg)  pg.classList.remove('active');     //hide page (displays all at once)
        if (btn) btn.classList.remove('active');         //hide page  (highlight on nav-button)
      });
      const target = document.getElementById('page-' + id);
      const navBtn = document.getElementById('nav-' + id);
      if (target) target.classList.add('active');
      if (navBtn) navBtn.classList.add('active');
      if (navLinks) navLinks.classList.remove('open');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // ── Contact Form ──
    // Create a function called when user submits the form
    function handleContact() {
      // ?. - safty check - continue only if element exists
      const name  = document.getElementById('cname')?.value.trim();
      const email = document.getElementById('cemail')?.value.trim();
      const topic = document.getElementById('ctopic')?.value;
      const msg   = document.getElementById('cmsg')?.value.trim();
      // warning for missing information
      if (!name || !email || !topic || !msg) {
        alert('Please fill in all fields before submitting.');
        return;
      }
      // Find the success message element and store it
      const successEl = document.getElementById('contactSuccess');
      // Find the success message element and store it
      if (successEl) successEl.style.display = 'block';
      // submitContactBtn - id of button
      const btn = document.getElementById('submitContactBtn');
      if (btn) {
        // Change button text to ‘Sent
        btn.textContent = '✅ Sent!';
        // Disable the button (cannot click again)
        btn.disabled = true;
      }
    }

    const form = document.getElementById("contactForm");
    const errorBox = document.getElementById("formError");

    form.addEventListener("submit", function(e) {
      const name = document.getElementById("cname").value.trim();
      const email = document.getElementById("cemail").value.trim();
      const topic = document.getElementById("ctopic").value;
      const message = document.getElementById("cmsg").value.trim();

      if (!name || !email || !topic || !message) {
        e.preventDefault(); // stop form from submitting

        errorBox.style.display = "block";
        errorBox.textContent = "⚠️ Please fill in all fields before submitting.";

      } else {
        errorBox.style.display = "none";
      }
    });

    // ── Company Quiz ──
    // recommendation box 
    // submit box
    function submitQuiz() {  
      ////// /* find the slected location option and store it in (loc)*/ //////
      // const - create a variable - storage box
      // loc - name of the box - short for location
      // document - whole webpage
      // querySelector - go find something on the page
      // input - radio button/checkbox 
      // name=location - group called location
      // :checked - only selected one
      const loc  = document.querySelector('input[name="location"]:checked');
      ////// /* find the slected purpose option and store it in (purp)*/ //////
      // purp - short for purpose
      const purp = document.querySelector('input[name="purpose"]:checked');
      ////// /* fget the text user typed in occupation box*/ //////
      // occ - occupation
      // value - get what user typed inside it
      // ?. - safty check - continue only if element exists
      const occ  = document.getElementById('occupation');

      // if any checkbox is missing
      //  || - or
      // if condition
      if (!loc || !purp || !occ) {
        // alert
        alert('Please answer all three questions first.');
        // stop the function - end with the warning
        return;
      }

      //find my provider button functioning
      // let - creates a variable
      // rec - recommendation
      // '' - empty box fo now
      let rec = '';    //this is the recommendation box             // create an empty box called rec
      /////// i will store the result here later/////////////
      if (loc.value === 'urban' || loc.value === 'semi') {
        if (purp.value === 'social' || purp.value === 'gaming') {
          if (  
            occ.value === 'farmer' || 
            occ.value === 'student' || 
            occ.value === 'other'
          ) {
            rec = '📶 <strong>Tashi InfoComm (TashiCell)</strong> - A good pricing competitive advantage and 📡 <strong>Bhutan Telecom Limited</strong> — Good coverage and for daily usage ';
          } 

          else if (
            occ.value === 'digital' ||
            occ.value === 'civil' ||
            occ.value === 'private' ||
            occ.value === 'entrepreneur'
          ) {
            rec = '📶 <strong>Tashi InfoComm (Wi-Fi)</strong> &amp; 📡 <strong>Bhutan Telecom (WiFi)</strong> — good for performance and stable connectivity.';
          }
        }

        // WORK OR BUSINESS
        else if (purp.value === 'work' || purp.value === 'business') {

          if (
            occ.value === 'digital' ||
            occ.value === 'civil' ||
            occ.value === 'private' ||
            occ.value === 'entrepreneur'
          ) {
            rec = '📡 <strong>Bhutan Telecom (Wi-Fi)</strong> &amp; 📶 <strong>TashiCell</strong>(Wi-Fi) — best for professional use and stable connection.';
          }

          else {
            rec = '📡 <strong>Bhutan Telecom</strong> &amp; 📶 <strong>TashiCell</strong> — suitable for general work needs.';
          }
        }

        // FALLBACK
        else {
          rec = '📶 <strong>TashiCell</strong> — general recommendation for urban and semi-urban users with pricing competitive advantage.';
        }
      }
    

      // ───── RURAL ─────
      else if (loc.value === 'rural') {

        if (
          occ.value === 'farmer' ||
          occ.value === 'student' ||
          occ.value === 'other'
        ) {
          rec = '📡 <strong>Bhutan Telecom Limited</strong> — Better coverage in rural areas.';
        }

        else if (
          occ.value === 'digital' ||
          occ.value === 'civil' ||
          occ.value === 'private' ||
          occ.value === 'entrepreneur'
        ) {
          rec = '📡 <strong>Bhutan Telecom (WiFi)</strong> - Better coverage &amp; 📶 <strong>TashiCell</strong> — Good for cost effectiveness.';
        }

        else {
          rec = '📡 <strong>Bhutan Telecom</strong> — reliable rural connectivity.';
        }
      }

      // ───── HIGH ALTITUDE ─────
      else if (loc.value === 'high altitude') {
        rec = '🛸 <strong>Starlink</strong> — best for high-altitude and plane remote areas having weak signal issues.';
      }

      // ───── DEFAULT FALLBACK ─────
      else {
        rec = '📶 <strong>Bhutan Telecom &amp TashiCell</strong> — general recommendation.';
      }


    
      const el = document.getElementById('quizResult');
      if (el) {
        el.innerHTML = '✅ Based on your answers, we suggest: ' + rec;
        el.style.display = 'block';
        el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
    
  
    function resetQuiz() {
      // r → each radio butto, .checked - whether selected or not, false - unselect it
      document.querySelectorAll('input[name="location"]').forEach(r => r.checked = false);
      document.querySelectorAll('input[name="purpose"]').forEach(r => r.checked = false);
      // find drop down box
      const occ = document.getElementById('occupation');
      // if dropdown exist, selected index, select the first option - reset by default
      if (occ) occ.selectedIndex = 0;
      // Find result message box
      const el = document.getElementById('quizResult');
      if (el) {
        // Hide the result box
        el.style.display = 'none';
        // Remove previous result text completely,-- innerHTML contains a result text
        el.innerHTML = '';
      }
    }
    
//   </script>

