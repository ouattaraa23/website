var modal = document.getElementById("myModal");

var projectData = {
  proxiSVG: {
    title: "Proxi - Mobile Application",
    tech: "Technologies used: MongoDB, Express.js, React-Native, Expo, Node.js",
    description:
      "In collaboration with the Northeastern University course ENTR 3330: Design Thinking for Startups, I designed a medium-high fidelty software prototype in a two week period that would showcase and simulate what they wanted the application to do.",
    image: "./Personal Web Pictures/proxilogo.png",
  },
  premSVG: {
    title: "Premier League - API/React App",
    tech: "Technologies used: MongoDB, Express.js, React.js, Node.js",
    description:
      "While learning how to build a full-stack web application, I decided to create a React application that connected to an API of premier league soccer players from the 2019/2020 season. The main focus of this application was getting the React  front-end to work seamlessly with the API.",
    image: "./Personal Web Pictures/premlogo.png",
  },
  // Add more projects as needed
};

var svgContainers = document.querySelectorAll(".svg-container");

svgContainers.forEach(function (container) {
  container.onclick = function () {
    var svgId = container.getAttribute('data-svgid');
    var data = projectData[svgId];
    document.getElementById("modalTitle").innerText = data.title;
    document.getElementById("modalTech").innerText = data.tech;
    document.getElementById("modalDescription").innerText = data.description;
    document.getElementById("modalImage").src = data.image;
    modal.style.display = "block";
    setTimeout(function () {
      modal.classList.add("show");
    }, 20);
  };
});

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.classList.remove("show"); // Remove the "show" class
  setTimeout(function () {
    modal.style.display = "none";
  }, 500);
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
