var tl = gsap.timeline({
  defaults: {
    duration: 0.5,
  },
});

function display_s1() {
  tl.from(".s1", {
    y: 100,
    stagger: 0.2,
    opacity: 0,
  });
  tl.from(".description-1", {
    y: 100,
    duration: 0.5,
    opacity: 0,
  });
  gsap.from(".right-container-1 img", {
    opacity: 0,
    duration: 1.5,
    y: 700,
  });
  //$(".main-container-1").removeClass("display-none");
  //$(".main-container-2").addClass("display-none");
  document.getElementById("main_s1").classList.remove("hid");
  document.getElementById("main_s2").classList.add("hid");
  document.getElementById("main_s3").classList.add("hid");
  document.getElementById("main_s4").classList.add("hid");
  document.getElementById("main_s5").classList.add("hid");
  document.getElementById("main_s6").classList.add("hid");
  document.getElementById("main_s7").classList.add("hid");
}

function display_s2() {
  tl.from(".s2", {
    y: 100,
    stagger: 0.2,
    opacity: 0,
  });
  tl.from(".description-2", {
    y: 100,
    stagger: 0.2,
    opacity: 0,
  });
  gsap.from(".page-2-img-1", {
    opacity: 0,
    duration: 1,
    y: 100,
  });
  gsap.from(".page-2-img-2", {
    opacity: 0,
    duration: 1,
    y: -100,
  });

  // $(".main-container-2").removeClass("display-none");
  // $(".main-container-1").addClass("display-none");

  document.getElementById("main_s1").classList.add("hid");
  document.getElementById("main_s2").classList.remove("hid");
  document.getElementById("main_s3").classList.add("hid");
  document.getElementById("main_s4").classList.add("hid");
  document.getElementById("main_s5").classList.add("hid");
  document.getElementById("main_s6").classList.add("hid");
  document.getElementById("main_s7").classList.add("hid");
}

function display_s3() {
  tl.from(".s3", {
    y: 100,
    stagger: 0.2,
    opacity: 0,
  });
  tl.from(".description-3", {
    y: 100,
    stagger: 0.2,
    opacity: 0,
  });
  gsap.from(".page-3-img-1", {
    opacity: 0,
    duration: 1,
    y: 100,
  });
  gsap.from(".page-3-img-2", {
    opacity: 0,
    duration: 1,
    y: -100,
  });

  // $(".main-container-2").removeClass("display-none");
  // $(".main-container-1").addClass("display-none");

  document.getElementById("main_s1").classList.add("hid");
  document.getElementById("main_s2").classList.add("hid");
  document.getElementById("main_s3").classList.remove("hid");
  document.getElementById("main_s4").classList.add("hid");
  document.getElementById("main_s5").classList.add("hid");
  document.getElementById("main_s6").classList.add("hid");
  document.getElementById("main_s7").classList.add("hid");
}

function display_s4() {
  tl.from(".s4", {
    y: 100,
    stagger: 0.2,
    opacity: 0,
  });
  tl.from(".description-4", {
    y: 100,
    stagger: 0.2,
    opacity: 0,
  });
  gsap.from(".page-4-img-2", {
    opacity: 0,
    duration: 1,
    y: 100,
  });
  gsap.from(".page-4-img-3", {
    opacity: 0,
    duration: 1,
    y: -100,
  });
  gsap.from(".page-4-img-4", {
    opacity: 0,
    duration: 1,
    y: -100,
  });
  gsap.from(".page-4-img-5", {
    opacity: 0,
    duration: 1,
    y: -100,
  });

  // $(".main-container-2").removeClass("display-none");
  // $(".main-container-1").addClass("display-none");

  document.getElementById("main_s1").classList.add("hid");
  document.getElementById("main_s2").classList.add("hid");
  document.getElementById("main_s3").classList.add("hid");
  document.getElementById("main_s4").classList.remove("hid");
  document.getElementById("main_s5").classList.add("hid");
  document.getElementById("main_s6").classList.add("hid");
  document.getElementById("main_s7").classList.add("hid");
}

function display_s5() {
  tl.from(".s5", {
    y: 100,
    stagger: 0.2,
    opacity: 0,
  });
  tl.from(".description-5", {
    y: 100,
    stagger: 0.2,
    opacity: 0,
  });
  gsap.from(".page-5-img-1", {
    opacity: 0,
    duration: 1,
    y: 100,
  });
  gsap.from(".page-5-img-2", {
    opacity: 0,
    duration: 1,
    y: -100,
  });
  gsap.from(".page-5-img-3", {
    opacity: 0,
    duration: 1,
    y: -100,
  });
  gsap.from(".page-5-img-4", {
    opacity: 0,
    duration: 1,
    y: -100,
  });
  gsap.from(".page-5-img-5", {
    opacity: 0,
    duration: 1,
    y: -100,
  });

  document.getElementById("main_s1").classList.add("hid");
  document.getElementById("main_s2").classList.add("hid");
  document.getElementById("main_s3").classList.add("hid");
  document.getElementById("main_s4").classList.add("hid");
  document.getElementById("main_s5").classList.remove("hid");
  document.getElementById("main_s6").classList.add("hid");
  document.getElementById("main_s7").classList.add("hid");
}

function display_s6() {
  tl.from(".s6", {
    y: 100,
    stagger: 0.2,
    opacity: 0,
  });
  tl.from(".description-6", {
    y: 100,
    stagger: 0.2,
    opacity: 0,
  });
  gsap.from(".page-6-img-1", {
    opacity: 0,
    duration: 1,
    y: 100,
  });

  document.getElementById("main_s1").classList.add("hid");
  document.getElementById("main_s2").classList.add("hid");
  document.getElementById("main_s3").classList.add("hid");
  document.getElementById("main_s4").classList.add("hid");
  document.getElementById("main_s5").classList.add("hid");
  document.getElementById("main_s6").classList.remove("hid");
  document.getElementById("main_s7").classList.add("hid");
}

function display_s7() {
  tl.from(".s7", {
    y: 100,
    stagger: 0.2,
    opacity: 0,
  });
  tl.from(".description-7", {
    y: 100,
    stagger: 0.2,
    opacity: 0,
  });
  gsap.from(".page-7-img-1", {
    opacity: 0,
    duration: 1,
    y: 100,
  });
  gsap.from(".page-7-img-2", {
    opacity: 0,
    duration: 1,
    y: 100,
  });

  document.getElementById("main_s1").classList.add("hid");
  document.getElementById("main_s2").classList.add("hid");
  document.getElementById("main_s3").classList.add("hid");
  document.getElementById("main_s4").classList.add("hid");
  document.getElementById("main_s5").classList.add("hid");
  document.getElementById("main_s6").classList.add("hid");
  document.getElementById("main_s7").classList.remove("hid");
}

//scroll trigger

var t1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".largest-div",
    start: "center 115%",
    end: "center 100%",
    onLeave: () => display_s2(),
    onEnterBack: () => display_s1(),
  },
});

var t2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".largest-div",
    start: "center 95%",
    end: "center 85%",
    onLeave: () => display_s3(),
    onEnterBack: () => display_s2(),
  },
});
var t3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".largest-div",
    start: "center 62%",
    end: "center 65%",
    onLeave: () => display_s4(),
    onEnterBack: () => display_s3(),
  },
});
var t4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".largest-div",
    start: "center 55%",
    end: "center 45%",
    onLeave: () => display_s5(),
    onEnterBack: () => display_s4(),
  },
});
var t5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".largest-div",
    start: "center 45%",
    end: "center 30%",
    onLeave: () => display_s6(),
    onEnterBack: () => display_s5(),
  },
});

var t6 = gsap.timeline({
  scrollTrigger: {
    trigger: ".largest-div",
    start: "center 30%",
    end: "center 15%",
    onLeave: () => display_s7(),
    onEnterBack: () => display_s6(),
  },
});

var t7 = gsap.timeline({
  scrollTrigger: {
    trigger: ".largest-div",
    start: "center 15%",
    end: "center 5%",
    onEnterBack: () => display_s7(),
  },
});

