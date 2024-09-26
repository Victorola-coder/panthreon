### How does the function move_array_d_places work?

- The function moveArrayDplaces() accepts two parmaeters an ```arr```, that would be rotated and a ```number```, that indicates the position the array will be rotated by.
- The array is rotated from left to right, starting from the ```number``` passed as the second parameter.
- We use a modulo operator to ensure that the passed number falls within the index of the array to be rotated.
- The array is returned after it is rotated.