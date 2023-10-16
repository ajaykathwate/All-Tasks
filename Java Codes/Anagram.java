import java.util.Scanner;

public class Anagram {

    public static boolean isAnagram(String str)
    {
        str = str.toLowerCase();
 
        boolean flag = true;
 
        for (char ch = 'a'; ch <= 'z'; ch++) {
 
            if (!str.contains(String.valueOf(ch))) {
                flag = false;
                break;
            }
        }
        
        return flag?true:false;
    }


    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine();
        boolean ans = isAnagram(s);
        if(ans){
            System.out.println("Yes, input is Anagram.");
        }else{
            System.out.println("No, input is not Anagram.");
        }
        sc.close();
    }
    
}
