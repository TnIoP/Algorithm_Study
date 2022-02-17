def solution(n, m):
    answer = []
    gcd = get_gcd(n, m)
    answer.append(gcd)  # gcd
    answer.append(n*m/gcd)  # lcm
    return answer

def get_gcd(n, m):  # 유클리드 호제법
    return m if n % m == 0 else get_gcd(m, n % m)
