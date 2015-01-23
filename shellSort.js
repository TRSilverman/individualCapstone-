

$(function() {
//constructor function for what I want to build
  function Item(itemType, power) {
    this.itemType = itemType;
    this.power = power;
  }

  Item.prototype.tohtml = function () {
    return '<li class="items">' + this.itemType + "-" + "Power: " + this.power + '</li>';
  };

  var thisItemList = this;
  var Items = [
      new Item ("Banana",               1),
      new Item ("Banana Group",         3),
      new Item ("Question Mark",        2),
      new Item ("Mushroom",             3),
      new Item ("Golden Mushroom",      7),
      new Item ("Green Shell",          4),
      new Item ("Triple Green Shell",   6),
      new Item ("Star",                 8),
      new Item ("Red Shell",            6),
      new Item ("Triple Red Shell",     8),
      new Item ("Lightning",           10),
      new Item ("Triple Mushroom",      5),
      new Item ("Blue Shell",           9),
      new Item ("Ghost",                4)
    ];
  $.each(Items, function() {
    var item = this;
    $('#items').append(item.tohtml());
  });

  var shuffle = function(m) {
    var $temp, rand;
    rand = Math.floor(Math.random() * m--);
    $temp = $('.items:eq(' + m + ')');
    $rand = $('.items:eq(' + rand + ')');

    $temp.before($rand);
    $('.items:eq(' + rand + ')').before($temp);

    if(m) {
      setTimeout(shuffle, 100, m);
    }
   };

   item = new Item ();

   $('button').on('click', function() {
      shuffle($('#item .items').length);
     });
});

      




//put them into a list in the dom 