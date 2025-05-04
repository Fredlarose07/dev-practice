function bubbleSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {

        // Derniers éléments déjà triés, pas besoin de les comparer
      for (let j = 0; j < n - i - 1; j++) {

        // Si l'élément actuel est plus grand que le suivant, échange les positions
        if (arr[j] > arr[j + 1]) {

            // Échange des éléments
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
  
  // Exemple d'utilisation
  let tableau = [5, 2, 8, 1, 3];
  console.log(bubbleSort(tableau));  // [1, 2, 3, 5, 8]