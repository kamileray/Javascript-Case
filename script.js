function oddishOrEvenish(num) {
    var sayi = num.toString();                   // "num" değeri number veri türünden string veri türüne çevrilir.
    var ayir = sayi.split('');                   // String veri türüne dönüştürdüğümüz değerdeki sayıları işlemde kullanmak için bölümledik.

    var deger = 0;                               // for döngüsü içerisinde kullanmak için değeri 0 olan "deger" isminde bir değişken oluşturduk.                 
    for (var i = 0; i < ayir.length; i++) {      // Değeri 0'a eşit olan bir "i" değişkeni oluşturduk, eğer "i" bölümlediğimiz sayının(ayir) uzunluğundan küçük ise "i" değerini arttırmasını istediğimiz döngümüzü oluşturduk.
        deger += +ayir[i];                       // Döngü her döndüğünde "deger" değişkenimize "deger"in bir önceki hali ile verilen sayının o basamaktaki değerini toplayıp her seferinde "deger" değişkenimize eşitlemiş olduk.
    }                                            // Sayımız örnek olarak 432 ise deger = 0 + 4; ("deger" 4 oldu) ardından tekrardan döndüğünde deger = 4 + 3; ("deger" 7 oldu) ardından son kez döndüğünde deger = 7 + 2; ("deger" 9 oldu).
                                                 // Son olarak deger = 9; olmuş oldu

    if (deger % 2 != 0) {                        // Bu kod bloğunda ise değerimizin 2'ye tam bölünüp bölünemediğini kontrol ettik("%" ifadesi bize verilen sayının kalanını döndürür). Çift sayıların 0'a tam bölündüğünü unutmadık.
        console.log("Odd");                      // Bu kısımda deger = 9; olan değişkenimize 9 % 2 işlemini uyguladıktan sonra kalanımızın 0'dan farklı bir sayı olduğunu gördük(yani sayımız tek sayı) ve konsolumuza "Odd" değerini döndürdük.
    } else {                                            
        console.log("Even");                     // Bu kısımda da eğer kalanımız 0'a eşit ise sayımızın kalansız bölündüğünü sonuç olarak da bir çift sayı olduğunu anlayıp konsolumuza "Even" değerini döndürüyoruz.
    }
}

oddishOrEvenish(432);                           // Bu kısımda num(sayımızı) belirttik. 
oddishOrEvenish(373);                           // - Kamil Eray Özaydın
oddishOrEvenish(4433);