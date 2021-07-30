let obj = [{
    category: "חכמה וידע",
    values: ["סקרנות", "אהבת הלמידה", "ביקורתיות", "כושר המצאה", "הבנה חברתית", "פרספקטיבה כוללת"]
}];
let questions = ["שחר יפה", "שחר מושלמת", "השתחוו לשחר"];
// let categories = ["אהבת הלמידה", "ביקורתיות"];
let sums = [];
let currentRadio, isNext = false, sum = 0, level = 1, isOn = false;
const LEVELS = 4;

$(() => {
    screen3();
    $(".radio").on("click", onClickRadio);
});

let onClickRadio = (event) => {
    currentRadio = event.currentTarget;
    if (!isOn) {
        $("#next").on("click", onClickNext);
        isOn = true;
    }
}

let onClickNext = (event) => {
    $("#next").off("click");
    if (level === LEVELS) {
        screen3();
    }
    sum += Number(currentRadio.value);
    if (isNext) {
        sums.push(sum);
        console.log(sums);
        sum = 0;
    }
    isNext = !isNext;
    isOn = false;
    currentRadio.checked = false;
    $("#question").html(questions[level - 1]);
    level++;
    $("#current-level").html(level);
    if (level === LEVELS) {
        $("#next").html("<- סיום");
    } 
}

let screen3 = () => {
    $("#screen-2, #screen-3").toggle();
}
