
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'))
var currenthour = moment().hours()
console.log(currenthour)

$(".saveBtn").on("click", function(){
    var userEntry = $(this).siblings("textarea").val()
    var id = $(this).siblings("textarea").attr("id")
    console.log(userEntry,id)
    localStorage.setItem(id,userEntry)
})

for (let i=8; i<19; i++) {
    var readData = localStorage.getItem(i)
    $("#"+i).val(readData)
    if (currenthour < i) {
        $("#"+i).addClass("bg-primary")
    }else if(currenthour == i) {
        $("#"+i).addClass("bg-danger")
    }else {
        $("#"+i).addClass("bg-secondary")
    }
}

