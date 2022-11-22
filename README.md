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

![Screenshot 2022-11-21 at 5 55 06 PM](https://user-images.githubusercontent.com/37467301/203189453-e64156c2-871f-4264-8499-3d826efee600.png)

2. Using 2 For loops


![Screenshot 2022-11-21 at 5 55 22 PM](https://user-images.githubusercontent.com/37467301/203189467-f5555bbb-7123-417f-a2e8-75c6330b8c98.png)


3. Also, the complexity can be further reduced by using org.apache.common.lang library. It uses only One For Loop which reduces time and space complexity. 

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


Test2_Graphql:

How to Run it:
1. Build the code : ng build
2. Run the code : ng serve

2. Construct an equivalent GraphQL API call that returns the equivalent entry and fields

![Screenshot 2022-11-21 at 9 18 50 PM](https://user-images.githubusercontent.com/37467301/203201226-0ab0dcf3-d5f2-4a71-93b3-9abfd00fb44e.png)

3. Modify the query to bring back the full collection of pageTemplate entries rather than the one entry only.

![Screenshot 2022-11-21 at 10 45 35 AM](https://user-images.githubusercontent.com/37467301/203201335-7ca60efc-a110-4b59-9ee1-54a491039448.png)

4. Transform the content into a line delimited JSON file where each line is a record of entry in this format:


![Screenshot 2022-11-21 at 9 35 24 PM](https://user-images.githubusercontent.com/37467301/203207229-49df12ca-842a-4ee5-94e2-2c9f0420b8c8.png)


![Screenshot 2022-11-21 at 9 36 20 PM](https://user-images.githubusercontent.com/37467301/203207244-1aefc0a4-c079-410b-a702-6d25d80b9f05.png)

5. Using the HTML template we have on https://www.rogers.com/search?q=support&language=en&psize=10, generate a list view that uses the data extracted in 3 and transformed in 4 with the following bindings. 


