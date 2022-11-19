package Test1_Java;

import java.util.Scanner;
 
// Java code to demonstrate triangle formation with given height
public class newTriangleFormation
{
    // Function to demonstrate printing triangle pattern
    public static void printTriangle(int height){
        System.out.println("The Pattern is");
        for (int i = 1; i <= height; i=i+1) {
        int printSpaces = (height - i);
        for(int j = 0; j< height; j++) {
            if(j < printSpaces) {
                System.out.print(" ");
            } else {
                //print star
                System.out.print("* ");
            }
        }
        System.out.println();
    }
}

    // Main Function
    public static void main(String args[])
    {
        System.out.println("Enter the height of the triangle you want to make");
        Scanner myObj = new Scanner(System.in);
        int height = myObj.nextInt();
        printTriangle(height);
        myObj.close();
    }
}

