package Test1_Java;

import java.util.Scanner;
 
// Java code to demonstrate triangle formation with given height
public class triangleFormation
{
    // Function to demonstrate printing triangle pattern
    public static void printTriangle(int height)
    {
        for (int i=0; i<height; i++)
        {
            for (int j=height-i; j>1; j--)
            {
                // printing spaces
                System.out.print(" ");
            }
            for (int j=0; j<=i; j++)
            {
                // printing stars
                System.out.print("* ");
            }
            // ending line after each row
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