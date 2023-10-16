import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Random;


public class ShuffleArray{

    public static void shuffleArr(int[] arr){
		
        // by using Random class - pick any random class and swap it with ith index
		Random rand = new Random();
         
        for (int i = n-1; i > 0; i--) {             
            int j = rand.nextInt(i+1);
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }


        // by converting it to list and applying Collections.shuffle() method

        // List<Integer> l = Arrays.asList(arr);
        // Collections.shuffle(l);
        // l.toArray(arr);

    }

    public static void main(String[] args){
        int[] arr =  { 1, 2, 3, 4, 5, 6, 7 };

        shuffleArr(arr);

        for(int i: arr){
            System.out.print(i + " ");
        }

    }
}