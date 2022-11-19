package Test1_Java;

import java.util.Scanner;

public class recursionTriangleFormation {
    // function to print spaces
    public static void printSpace(int space)
    {
        // base case
        if (space == 0)
        {
            return;
        }
        System.out.print(" ");
 
        // recursively calling print_space()
        printSpace(space - 1);
    }
 
    // function to print asterisks
    public static void printAsterisk(int asterisk)
    {
        // base case
        if (asterisk == 0)
        {
            return;
        }
        System.out.print("* ");
 
        // recursively calling print_asterisk()
        printAsterisk(asterisk - 1);
    }
 
    // function to print the pattern
    public static void pattern(int n, int num)
    {
        // base case
        if (n == 0)
        {
            return;
        }
        printSpace(n - 1);
        printAsterisk(num - n + 1);
        System.out.println();
 
        // recursively calling pattern()
        pattern(n - 1, num);
    }
 
    // Driver code
    public static void main(String[] args)
    {
        System.out.println("Enter the height of the triangle you want to make");
        Scanner myObj = new Scanner(System.in);
        int height = myObj.nextInt();
        pattern(height,height);
        myObj.close();
    }
}
