print("hello world")
num = [3, 4, 6, 6, 2, 1, 4, 6, 4, 3]
even = []
odd = []
for i in range(len(num)):
    if num[i] % 2 == 0:
        even.append(num[i])
    else:
        odd.append(num[i])

print(even)
print(odd)
person = {
    "name": "ebuka",
    "age": 23,
    "height": 153,
    "address": {
        "street": "ebutemeta",
        "house": "23 owerri"
    }
}
print(person.name)