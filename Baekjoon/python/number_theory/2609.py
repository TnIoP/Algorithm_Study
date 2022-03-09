from sys import stdin

def get_gcd(n, m):  # 유클리드 호제법
    return m if n % m == 0 else get_gcd(m, n % m)

info = stdin.readline().split()
n = int(info[0])
m = int(info[1])
gcd = get_gcd(n, m)
print(gcd)  # gcd
print(n*m//gcd)  # lcm
