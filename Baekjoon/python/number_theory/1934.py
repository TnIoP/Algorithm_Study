from sys import stdin

def get_gcd(n, m):
    return m if n % m == 0 else get_gcd(m, n % m)

testcase = int(stdin.readline())

for i in range(testcase):
    info = stdin.readline().split()
    n = int(info[0])
    m = int(info[1])
    print(n*m//get_gcd(n, m))
