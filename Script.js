const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation");

hamburger.addEventlistener("click", () => {
    hamburger.classlist.toggle("active");
    navigation.classlist.toggle("active");
})
document.querySelectorAll(".nav-item").forEach(
    n => n.addEventListener("click", () => {
        hamburger.classlist.remove("active");
        navigation.classlist.remove("active");

    })
)