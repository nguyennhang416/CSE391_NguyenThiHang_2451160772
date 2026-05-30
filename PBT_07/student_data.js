// student_data.js — Bài B2
const students = [
    { name: "An", math: 8, physics: 7, cs: 9, gender: "M" },
    { name: "Bình", math: 6, physics: 9, cs: 7, gender: "F" },
    { name: "Chi", math: 9, physics: 6, cs: 8, gender: "F" },
    { name: "Dũng", math: 5, physics: 5, cs: 6, gender: "M" },
    { name: "Em", math: 10, physics: 8, cs: 9, gender: "F" },
    { name: "Phong", math: 3, physics: 4, cs: 5, gender: "M" },
    { name: "Giang", math: 7, physics: 7, cs: 7, gender: "F" },
    { name: "Huy", math: 4, physics: 6, cs: 3, gender: "M" },
];

function avg(student) {
    return +(student.math * 0.4 + student.physics * 0.3 + student.cs * 0.3).toFixed(1);
}

function classify(score) {
    if (score >= 8.0) return 'Giỏi';
    if (score >= 6.5) return 'Khá';
    if (score >= 5.0) return 'Trung bình';
    return 'Yếu';
}

const results = students.map((s, i) => ({
    stt: i + 1,
    name: s.name,
    avg: avg(s),
    rank: classify(avg(s)),
    gender: s.gender
}));

// Print table
console.log('| STT | Tên    | TB   | Xếp loại    |');
console.log('|-----|--------|------|-------------|');
results.forEach(r => {
    console.log(`| ${r.stt}   | ${r.name.padEnd(6)} | ${r.avg.toFixed(1)} | ${r.rank.padEnd(11)} |`);
});

// Count per rank
const counts = results.reduce((acc, cur) => { acc[cur.rank] = (acc[cur.rank] || 0) + 1; return acc; }, {});
console.log('\nSố SV mỗi xếp loại:', counts);

// Highest and lowest
const sorted = [...results].sort((a,b)=> b.avg - a.avg);
console.log('SV cao nhất:', sorted[0]);
console.log('SV thấp nhất:', sorted[sorted.length-1]);

// Class averages per subject
const subjectTotals = students.reduce((acc,s)=>{
    acc.math += s.math; acc.physics += s.physics; acc.cs += s.cs; return acc;
},{math:0,physics:0,cs:0});
const n = students.length;
console.log('\nĐiểm TB lớp (môn):', { math: +(subjectTotals.math/n).toFixed(2), physics: +(subjectTotals.physics/n).toFixed(2), cs: +(subjectTotals.cs/n).toFixed(2) });

// Bonus: averages by gender
const genderGroups = students.reduce((acc,s)=>{
    if(!acc[s.gender]) acc[s.gender]={math:0,physics:0,cs:0,count:0};
    acc[s.gender].math += s.math; acc[s.gender].physics += s.physics; acc[s.gender].cs += s.cs; acc[s.gender].count++;
    return acc;
},{ });

Object.keys(genderGroups).forEach(g=>{
    const gdata = genderGroups[g];
    console.log(`\nGiới tính ${g}:`, { math: +(gdata.math/gdata.count).toFixed(2), physics: +(gdata.physics/gdata.count).toFixed(2), cs: +(gdata.cs/gdata.count).toFixed(2) });
});

module.exports = { students };
