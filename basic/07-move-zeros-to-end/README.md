## How does the move_zeros_to_end function work? 
### Steps:

- We look for the first zero(0) digit and save the index in a variable, say k,  which we are going to use later. We initialize the variable to -1(reason for this will be mentioned in the below steps);

- we check the rest of the dataset, in this case an array, we start the search at an index one greater (k + 1)  than the index we found the first zero(0) digit, since we already know that index has a zero digit.

- Before we start  searching the rest of the dataset we check if our variable k is equal to -1. If yes, then it means the dataset does not contain a zero digit in the dataset. We therefore return from the function.

- We search the rest of the dataset and perform a swap anytime we ecounter a non-zero digit and increment the variable k to hold the current index of the recently swapped zero digit.

- After the search operation is done the dataset will have all the zero digit(s) moved to the end.
