# Rogers_FullStack_Interview
--------------------------------------------------------------------------------

Test1_Java (Updated):

How to Run it:
1. Build the code : javac triangleFormation.java
2. Run the code : java triangleFormation.java

Sample Output:

![Screenshot 2022-11-08 at 11 29 04 PM](https://user-images.githubusercontent.com/37467301/200739963-f79985f1-44db-42d4-a4f7-20d29f74337c.png)

* ----------------UPDATED ------------------------- */

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

![Screenshot 2022-11-08 at 11 41 44 PM](https://user-images.githubusercontent.com/37467301/200740409-4d20bb0c-647a-43b2-b8b1-cbad00285747.png)



![Screenshot 2022-11-08 at 11 42 03 PM](https://user-images.githubusercontent.com/37467301/200740385-09e52442-6a44-4757-975e-242db0e3a06a.png)
Test2_Angular:

How to Run it:
1. Build the code : ng build
2. Run the code : ng serve

The desired output runs on 
http://localhost:4200


Test2_Graphql:




