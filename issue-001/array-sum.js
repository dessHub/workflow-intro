function arraysum(n) {

    var arr = n.split(' ');
    var sum = 0;
    for(i=0; i<arr.length; i++){
      var num = parseInt(arr[i]);
      sum += num;

    }
    console.log(sum);
  }

var N = "1 2 3 5";
arraysum(N)
