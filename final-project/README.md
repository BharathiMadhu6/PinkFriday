**Title : PINK FRIDAY**

**Welcome to PINK FRIDAY**

What are DEALS ? They are products / items at a slashed-down / discounted price.

The application presents to you many deals that are curated from various shopping websites all under one place.
This application is inspired by websites like blackfriday and several others.

**Functionalities of PINK FRIDAY :**

    1. If a user is not logged in :
        a. Clicking on a product :
            - Click on any deal / product, to view the complete information about the product and click on 'click here' to purchase the product from the website the product is sold at. 

        b. LOGIN : 
            Allows you to login to the application.
    
    2. If a user is logged in :
        a. Clicking on a product
            - Click on any deal / product, to view the complete information about the product and click on 'click here' to purchase the product from the website the product is sold at. 

        b. ADD PRODUCT : 
            - You can add products to PINK FRIDAY that you think are a good deal. 
            - To add a product, you must enter the Product name, a link of where the product can be purchased, expiration date of the ongoing offer on the product (If known to you), description, pick a category from the dropdown list, and the price.

        c. My ACCOUNT : 
            - You can view and delete the deals that you have added.

            - DELETE PRODUCT :
                The delete option can be used under MY ACCOUNT. A user can delete the products added by he / she at any time.
        
        e. LOGOUT :
            - A user can logout and login back again to add more deals or delete their deals.


**Validations**

    1. Server side :
        a. During Login :
            - A username cannot contain any special characters.
            - A username cannot be a white space.
        
        b. ADD PRODUCT
            - All the fields must contain values before attempting to add a product.
            - None of the fields can contain white space as value.
    
    2. Client side :
        a. URL
            - When a user is not logged in and attempts to go to the following links :
                http://localhost:3000/addItem, http://localhost:3000/myAccount, http://localhost:3000/logout 
                They do not display any valuable information unless logged in.

        b. ADD PRODUCT :
            - In Price field, you can only enter numbers and no other characters are allowed.
            - In Date field, any past date or dates beyond 2021 are not valid. (The max date is set to 12-24-2021 only for validation purposes)
            - WebsiteLink field can only have values pasted into it an not typed in.
            - Any violation of the above cases will display an appropriate message.
    
    - A default image is added for any new product that is added.

**Source & Licensing :**

All the images used in the application are taken from the following sites :
    1. Macy's
    2. Samsung
    3. Target
    4. Google
