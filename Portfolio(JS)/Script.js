let intro = document.querySelector("body");
let int = document.createElement("div");
int.innerHTML = `
  <h1>Hi, I Am <span style="color:#ff4d6d;">Muhammad Shoaib</span></h1>
  <h6>AI/ML Engineer | Web Developer | PU Lahore Student</h6>
  <img src="profile.jpg">
`;
int.style.textAlign = "center";
int.style.padding = "40px 20px";
int.style.background = "linear-gradient(135deg, #280000ff, #b30f4eff)";
int.style.color = "#fff";
int.querySelector("h1").style.fontFamily = "Arial, sans-serif";
int.querySelector("h1").style.fontSize = "28px";
int.querySelector("h6").style.fontFamily = "Calibri";
int.querySelector("h6").style.fontSize = "16px";
let img = int.querySelector("img");
img.style.height = "200px";
img.style.width = "200px";
img.style.border = "5px solid #fff";
img.style.borderRadius = "50%";
img.style.display = "block";
img.style.margin = "20px auto";
img.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3)";
intro.prepend(int);

let education = document.createElement("div");
education.innerHTML = `
  <div id="edu">
    <h3>Education</h3>
    <div class="edu-card">
      <h4>Matric</h4>
      <p>Institute: Ghazali Public School Zafarwal</p>
      <p>Marks: 1058/1100</p>
      <p>Grade: A+</p>
    </div>
    <div class="edu-card">
      <h4>FSC (Pre-Eng)</h4>
      <p>Institute: Punjab College Zafarwal</p>
      <p>Marks: 1021/1200</p>
      <p>Grade: A+</p>
    </div>
    <div class="edu-card">
      <h4>BSCS</h4>
      <p>Institute: University of Punjab Lahore</p>
      <p>CGPA: 3.59</p>
      <p>Grade: A+</p>
    </div>
  </div>
`;
let educationw = education.querySelector("#edu");
educationw.style.display = "flex";
educationw.style.flexDirection = "column";
educationw.style.alignItems = "center";
educationw.style.background = "#fff";
educationw.style.borderRadius = "12px";
educationw.style.padding = "20px";
educationw.style.margin = "30px auto";
educationw.style.width = "80%";
educationw.style.fontFamily = "Calibri";
educationw.querySelector("h3").style.textAlign = "center";
educationw.querySelector("h3").style.color = "#b30f4eff";
educationw.querySelector("h3").style.fontSize = "24px";
educationw.querySelector("h3").style.marginBottom = "20px";

// Style each education card
let cards = educationw.querySelectorAll(".edu-card");
cards.forEach(card => {
  card.style.background = "#b30f4eff";
  card.style.color = "#fff";
  card.style.borderRadius = "10px";
  card.style.padding = "15px";
  card.style.margin = "10px 0";
  card.style.width = "90%";
  card.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
  card.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.05)";
    card.style.boxShadow = "0 6px 15px rgba(0,0,0,0.3)";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
    card.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
  });
});

let ed = document.querySelector("div");
ed.after(education);
