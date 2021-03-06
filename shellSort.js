

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
    return '<li class="items">' + this.itemType + "-" + "Power: " + this.power + '</li>';
  };

  var thisItemItems = this;
  var Items = [
      new Item ("Banana",               1),
      new Item ("Banana Group",         3),
      new Item ("Question Mark",        2),
      new Item ("Mushroom",             4),
      new Item ("Golden Mushroom",      7),
      new Item ("Green Shell",        4.5),
      new Item ("Triple Green Shell",   6),
      new Item ("Star",                 8),
      new Item ("Red Shell",          6.5),
      new Item ("Triple Red Shell",   8.5),
      new Item ("Lightning",           10),
      new Item ("Triple Mushroom",      5),
      new Item ("Blue Shell",           9),
      new Item ("Ghost",              5.5)
  ];
 
  $.each(Items, function() {
    $('#items').append(this.tohtml());
  });




    $('#sort').on('click', function() {
     var  position = 0;

     function insertionSort() {
      if (position < Items.length) {
        if (position === 0 || $(Items[position- 1].attr("power")) <= $(Items[position]).attr('power')) {
          position++;
        } else {
          $(Items[position].append(this.tohtml()));
            position--;
        }
      }

     }
     insertionSort();
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







