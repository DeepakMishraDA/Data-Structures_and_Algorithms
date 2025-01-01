def binary_search(arr, number):
    for i in enumerate(arr):
        print(i)
        if arr[i] == number:

            return i
        else:
            return "not in the list"


binary_search([1,2,34,45,67],67)




