



function randomr(){
    for(i=0; i<100; i++){
    const array1 = ['N', 'D', 'K', 'B', 'Q'];
    const array2 = ['T', 'G', 'O', 'I', 'J'];
    const array3 = ['C', 'L', 'M', 'A', 'H'];
    const array4 = ['P', 'E', 'R', 'S', 'F'];
    const array5 = ['U', 'V', 'X', 'W', 'Y', 'Z'];

    const random1 = Math.floor(Math.random() * array1.length);
    const random2 = Math.floor(Math.random() * array2.length);
    const random3 = Math.floor(Math.random() * array3.length);
    const random4 = Math.floor(Math.random() * array4.length);
    const random5 = Math.floor(Math.random() * array5.length);

    console.log( (random2, array2[random2]) + (random1, array1[random1]) + (random3, array3[random3]) + (random4, array4[random4]) + (random5, array5[random5]))
    }
}


randomr()


