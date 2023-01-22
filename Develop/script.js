// Current Day formated "Day, Month #"
var todayDay = dayjs().format('dddd, MMMM D')

// Apply style to rows based on time of day
$('.time-block').each(function() {
    let hourString = $(this).attr('id').match(/[\d]+$/)[0]
    let hourCount = Number(hourString)
    if (dayjs().hour() > hourCount) {
      $(this).addClass('past')
    } else if (dayjs().hour() == hourCount) {
      $(this).addClass('present')
    } else {
      $(this).addClass('future')
    }
})

// Save new notes
$('.saveBtn').on('click', function() {
  rowID = $(this).parent().attr('id')
  notesText = $(this).prev().val()
  console.log(rowID, typeof(rowID), notesText)
  localStorage.setItem(rowID, notesText)
})

// Display notes on page load
$('.description').each(function() {
  rowID = $(this).parent().attr('id')
  savedNotes = localStorage.getItem(rowID)
  console.log(savedNotes)
  if (savedNotes !== null) {
    $(this).val(savedNotes)
  }})

// Render current date in header
  $('#currentDay').text(todayDay)
