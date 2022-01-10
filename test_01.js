function solution(m, musicinfos) {
    var answer = '';
    let musicInfo = [];
    let startTime = 0;
    let endTime = 0;
    let playTime = [];
    let answerList = [];
    let tempLylics = [];
    let index = 0;
    let max = 0;

    for(let i=0; i<musicinfos.length; i++) {
        musicInfo = musicinfos[i].split(",");
        startTime = Number(musicInfo[0].split(":")[0]) * 60 + Number(musicInfo[0].split(":")[1]);
        endTime = Number(musicInfo[1].split(":")[0]) * 60 + Number(musicInfo[1].split(":")[1]);
        playTime.push(endTime - startTime);
        musicInfo[3] = musicInfo[3]
        .replace(/(C#)/g, 'c')
        .replace(/(D#)/g, 'd')
        .replace(/(F#)/g, 'f')
        .replace(/(G#)/g, 'g')
        .replace(/(A#)/g, 'a');
        m = m
        .replace(/(C#)/g, 'c')
        .replace(/(D#)/g, 'd')
        .replace(/(F#)/g, 'f')
        .replace(/(G#)/g, 'g')
        .replace(/(A#)/g, 'a');
            
        tempLylics.push(musicInfo[3]);
        if(playTime[i] <= musicInfo[3].length) {
            musicInfo[3] = musicInfo[3].substr(0, playTime[i]);
        } else {
            for(let j=0; j<parseInt(playTime[i]/tempLylics[i].length)-1; j++) {
                musicInfo[3] += tempLylics[i];
            }
            if(playTime[i]%tempLylics[i].length !== 0) {
                musicInfo[3] += tempLylics[i].substr(0, playTime[i]%tempLylics[i].length);
            }
        }

        if(musicInfo[3].includes(m)) {
            answerList.push(i);
        }
    }

    if(answerList.length > 0) {
        for(let i=0; i<answerList.length; i++) {
            if(max < playTime[answerList[i]]) {
                max = playTime[answerList[i]];
                index = answerList[i];
            }
        }
        
    answer = musicinfos[index].split(",")[2];
    return answer;
    } 
    return '(None)'; 
}

console.log(solution("ABC", ["13:00,13:05,WORLD,ABCDEF", "12:00,12:14,HELLO,C#DEFGAB"]));