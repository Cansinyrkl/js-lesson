"use strict";

class person {
  //clasların içerindeki metodlara ulaşmak istiyorsak static olarak tanımlayarak ulaşabiliriz
  static Message() {
    return "ecmascript 6 ile nesne yönelimli programlama";
  }
}

$("#result").innerHTML = person.Message();
