# Rogers_FullStack_Interview
--------------------------------------------------------------------------------

Test1_Java (Updated):

How to Run it:
1. Build the code : javac triangleFormation.java
2. Run the code : java triangleFormation.java

Sample Output:
Rishikas-MacBook-Air:Test1_Java rishika$ java triangleFormation.java 
Enter the height of the triangle you want to make
5
    * 
   * * 
  * * * 
 * * * * 
* * * * * 
Rishikas-MacBook-Air:Test1_Java rishika$ java triangleFormation.java 
Enter the height of the triangle you want to make
8
       * 
      * * 
     * * * 
    * * * * 
   * * * * * 
  * * * * * * 
 * * * * * * * 
* * * * * * * * 


/* ----------------UPDATED ------------------------- */

Used 2 more approaches to print the rectangle:
1. Recursion 
2. Using 2 For loops

Also, the complexity can be further resuced by using org.apache.common.lang library. It uses only One For Loop which reduces time and space complexity. 

Sample Code for org.apache.common:

public static String printTriangle(int height) {
    StringBuilder result = new StringBuilder();
    String helperString = StringUtils.repeat(' ', height - 1) + StringUtils.repeat('*', height * 2 - 1);

    for (int r = 0; r < height; r++) {
        result.append(helperString.substring(r, height + 2 * r));
        result.append(System.lineSeparator());
    }
    return result.toString();
}

Test2_Angular:

How to Run it:
1. Build the code : ng build
2. Run the code : ng serve

The desired output runs on 
http://localhost:4200


Test2_Graphql:




