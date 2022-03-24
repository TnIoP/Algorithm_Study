from sys import stdin

n = int(stdin.readline())

def hanoi(n, t1, t2, t3):
    if n == 1:
        print(t1, t3)
    else:
        hanoi(n - 1, t1, t3, t2)
        print(t1, t3)
        hanoi(n - 1, t2, t1, t3)

print(2**n - 1)
hanoi(n, 1, 2, 3)
