

$(function() {
//constructor function for what I want to build
  function Item(itemType, power) {
    this.itemType = itemType;
    this.power = power;
  }
  
  Item.prototype.powerLevel = function () {
    return this.power;
  };

  Item.prototype.tohtml = function () {
    return '<li class="items" data-power="' + this.power + '">'
     + this.itemType + "-" + "Power: " + this.power +
    "<img src= pics/"+ this.itemType+ ".png />" + '</li>';
  };

  var thisItemItems = this;
  var Items = [
      new Item ("Banana",               1),
      new Item ("BananaGroup",          3),
      new Item ("Mushroom",             4),
      new Item ("GoldenMushroom",       7),
      new Item ("GreenShell",         4.5),
      new Item ("TripleGreenShell",     6),
      new Item ("Star",                 8),
      new Item ("RedShell",           6.5),
      new Item ("TripleRedShell",     8.5),
      new Item ("Lightning",           10),
      new Item ("TripleMushroom",      5),
      new Item ("BlueShell",           9),
  ];
 
  $.each(Items, function() {
    $('#items').append(this.tohtml());
  });


//use a while loop and insert before while number is smaller 

   $('#sort').on('click', function() {
      var  position;
      var $items = $('.items');
      for (position = 0; position < $items.length; position++) {
        var $current = $items.eq(position);
        setTimeout( function ($item) {
          while ($item.data('power') < $item.prev().data('power')) {
            $item.addClass('flipInX').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
              function() {
               $(this).removeClass('flipInX');
             });
            $item.insertBefore($item.prev());
          }
        }, position * 800, $current);
     }
   });

 

  var shuffle = function(m) {
    var $temp, rand;
    rand = Math.floor(Math.random() * m--);
    $temp = $('.items:eq(' + m + ')');
    $rand = $('.items:eq(' + rand + ')');

    $temp.before($rand);
    $('.items:eq(' + rand + ')').before($temp);

    if(m) {
      setTimeout(shuffle, 500, m);
    }
   };

   item = new Item ();

   $('#shuffle').on('click', function() {
      shuffle($('#item .items').length);
    });


});







