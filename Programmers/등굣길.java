class Solution {
    public int solution(int m, int n, int[][] puddles) {
        int[][] map = new int[n + 1][m + 1]; // 배열을 좌표에 맞춰야 하므로 x,y +1씩
        for(int i = 0; i < puddles.length; i++) // 물웅덩이 개수만큼 map에 표시
            map[puddles[i][1]][puddles[i][0]] = -1; 
        
        map[1][1] = 1; // 집 좌표
        for(int i = 1; i < n + 1; i++) {
            for(int j = 1; j < m + 1; j++) {
                if(map[i][j] != -1) { // 물웅덩이가 아닐경우 최단경로 공식
                    if(map[i - 1][j] > 0) 
                        map[i][j] += map[i - 1][j] % 1000000007;
                    if(map[i][j - 1] > 0) 
                        map[i][j] += map[i][j - 1] % 1000000007;
                }
            }
        }
        return map[n][m] % 1000000007; // 학교까지 최단경로 개수
    }
}
