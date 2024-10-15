$(document).ready(function () {
    $(window).scroll(function () {
      if (this.scrollY > 20) {
        $(".navbar").addClass("sticky");
      } else {
        $(".navbar").removeClass("sticky");
      }
  
      if (this.scrollY > 500) {
        $(".scroll-up-btn").addClass("show");
      } else {
        $(".scroll-up-btn").removeClass("show");
      }
    });
  
    $(".scroll-up-btn").click(function () {
      $("html").animate({ scrollTop: 0 });
      $("html").css("scrollBehavior", "auto");
    });
  
    $(".navbar .menu li a").click(function () {
      $("html").css("scrollBehavior", "smooth");
    });
  
    $(".menu-btn").click(function () {
      $(".navbar .menu").toggleClass("active");
      $(".menu-btn i").toggleClass("active");
    });
  
    var typed = new Typed(".typing", {
      strings: [
        "Front end developer",
        "Fresher",
        "Bug Hunter",
        "Full Stack Devloper",
        "Advance Designer",
        "Freelancer",
        "Manager",
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
  
    var typed = new Typed(".typing-3", {
      strings: ["Connect with me on :)"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
  
    var typed = new Typed(".typing-2", {
      strings: [
        "Front end developer",
        "Fresher",
        "Full-Stack Developer",
        "Bug Hunter",
        "Designer",
        "Smart Worker",
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
  
    $(".carousel").owlCarousel({
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        600: {
          items: 2,
          nav: false,
        },
        1000: {
          items: 3,
          nav: false,
        },
      },
    });
  });
  
  document.addEventListener("scroll", function () {
    const leftDiv = document.querySelector(".about .about-content .left");
    if (leftDiv) {
      const rectLeft = leftDiv.getBoundingClientRect();
      if (rectLeft.top <= window.innerHeight && rectLeft.bottom >= 0) {
        leftDiv.classList.add("visible");
      }
    }
  
    const rightColumn = document.querySelector(".right");
    if (rightColumn) {
      const rectRight = rightColumn.getBoundingClientRect();
      if (rectRight.top <= window.innerHeight && rectRight.bottom >= 0) {
        rightColumn.classList.add("visible");
      }
    }
  
    const specialBox = document.querySelector("#special-box");
    if (specialBox) {
      const rectSpecial = specialBox.getBoundingClientRect();
      if (rectSpecial.top <= window.innerHeight && rectSpecial.bottom >= 0) {
        specialBox.classList.add("visible");
      }
    }
  
    const secondBox = document.querySelector("#second-box");
    if (secondBox) {
      const rectSecond = secondBox.getBoundingClientRect();
      if (rectSecond.top <= window.innerHeight && rectSecond.bottom >= 0) {
        secondBox.classList.add("visible");
      }
    }
  
    const thirdBox = document.querySelector("#third-box");
    if (thirdBox) {
      const rectThird = thirdBox.getBoundingClientRect();
      if (rectThird.top <= window.innerHeight && rectThird.bottom >= 0) {
        thirdBox.classList.add("visible");
      }
    }
  
    const specialBox1 = document.querySelector("#special-box1");
    if (specialBox1) {
      const rectSpecial = specialBox1.getBoundingClientRect();
      if (rectSpecial.top <= window.innerHeight && rectSpecial.bottom >= 0) {
        specialBox1.classList.add("visible");
      }
    }
  
    const secondBox1 = document.querySelector("#second-box1");
    if (secondBox1) {
      const rectSecond = secondBox1.getBoundingClientRect();
      if (rectSecond.top <= window.innerHeight && rectSecond.bottom >= 0) {
        secondBox1.classList.add("visible");
      }
    }
  
    const thirdBox1 = document.querySelector("#third-box1");
    if (thirdBox1) {
      const rectThird = thirdBox1.getBoundingClientRect();
      if (rectThird.top <= window.innerHeight && rectThird.bottom >= 0) {
        thirdBox1.classList.add("visible");
      }
    }
  
    const skillsSection1 = document.querySelector('#skills1');
    if (skillsSection1) {
      const rectSkills1 = skillsSection1.getBoundingClientRect();
      if (rectSkills1.top <= window.innerHeight && rectSkills1.bottom >= 0) {
        skillsSection1.classList.add('visible');
      }
    }
  
    const progressSection = document.querySelector('#progress');
    if (progressSection) {
      const rectProgress = progressSection.getBoundingClientRect();
      if (rectProgress.top <= window.innerHeight && rectProgress.bottom >= 0) {
        progressSection.classList.add('visible');
      }
    }
  
    function checkVisibility() {
      const sections = ['#info0', '#info1', '#info2', '#info3', '#info4'];
  
      sections.forEach(sectionId => {
        const section = document.querySelector(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            section.classList.add('visible');
          }
        }
      });
    }
  
    function checkFormVisibility() {
      const forms = ['#form0', '#form1', '#form2', '#form3', '#form4', '#form5'];
  
      forms.forEach(formId => {
        const form = document.querySelector(formId);
        if (form) {
          const rect = form.getBoundingClientRect();
          if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            form.classList.add('visible');
          }
        }
      });
    }
  
    checkFormVisibility();
    checkVisibility();
  });
  
  window.addEventListener("load", function () {
    const textBlocks = document.querySelectorAll(".home .home-content div");
    textBlocks.forEach((block) => {
      block.classList.add("visible");
    });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const bars = [
      { id: "html-bar", percentage: "90%" },
      { id: "css-bar", percentage: "90%" },
      { id: "js-bar", percentage: "50%" },
      { id: "photoshop-bar", percentage: "50%" },
      { id: "java-bar", percentage: "85%" },
      { id: "django-bar", percentage: "75%" },
    ];
  
    bars.forEach((bar) => {
      const line = document.querySelector(`#${bar.id} .line`);
      line.style.width = bar.percentage;
    });
  });
  