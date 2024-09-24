Feature: Add product

Scenario: add product the shopping cart  successfully
Given Mafe visits teststore.automationtesting.co.uk
When Mafe adds a product
Then Mafe should see the message 'Product successfully added to your shopping cart'

