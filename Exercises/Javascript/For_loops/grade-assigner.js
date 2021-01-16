

function assignGrade(score) {
    if (score > 90) {
        return 'A';
    } else if (score > 80) {
        return 'B';
    } else if (score > 70) {
        return 'C';
    } else if (score > 65) {
        return 'D';
    } else {
        return 'F';
    }

} 

for (g = 60; g >= 60 && g <= 100; g++) 
console.log ("Voor " + g + " krijg je een " + assignGrade(g));
















  
