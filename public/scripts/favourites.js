$(() => {

  console.log("favourites.js is ready")


  const $favouriteIcon = document.getElementById("favStarIcon");
  const car_id = $favouriteIcon.getAttribute("name");
  const user_id = document.cookie.substring(8);

  $( $favouriteIcon ).click(function() {
    console.log('star clicked')
    const currentColor = $($favouriteIcon).css('color');

    if (currentColor === 'rgb(255, 215, 0)') {

      // star was gold, and user clicked
      //  now we change color to black and remove all favourites where
      //  user_id and car_id match the request.
      $.ajax({
        type: "POST",
        url: '/favourites/d/api',
        data: {car_id, user_id},
        success: (body) => {
          console.log('ajax result for delete:', body);
        }
      });

      return $($favouriteIcon).css("color","black");
    }
    // star was black, and user clicked.
    // Now we change to gold and add favourite to database.
    $($favouriteIcon).css("color","gold");
    $.ajax({
      type: "POST",
      url: '/favourites/api',
      data: {car_id, user_id},
      success: (body) => {
        console.log('ajax result for add:', body);
      }
    });
    //add to fav list
  })


  // const $divWithEdits = document.getElementById("card-with-edits");

  // const $btnOpenEdit = document.getElementById("edit-car-toggle");
  // const $btnCloseEdit = document.getElementById("edit-car-toggle-cancel");

  // $(function () {
  //   $( $divWithEdits ).hide();
  // });

  // $( $btnOpenEdit ).click(function() {
  //   $( $btnOpenEdit ).hide();
  //   $( $btnCloseEdit ).show();
  //   $( $divWithDetails ).hide();
  //   $( $divWithEdits ).show( "slow" );
  // });
});


///