
currentDay.textContent = moment().format('dddd MMMM Do YYYY');

$(".saveBtn").on("click", function(){
    var userEntry = $(this).siblings("textarea").val()
    var id = $(this).siblings("textarea").attr("id")
    console.log(userEntry,id)
})
