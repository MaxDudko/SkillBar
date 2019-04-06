let createSkills = (skillType, skillTypeId) => {
    let skillName;
    let value;
    for(skill in skillType) {
        skillName = skill;
        value = skillType[skill];
        addSkills(skillName, skillTypeId);
        loadSkills(skillName, value);
    }
}

let addSkills = (skillName, skillTypeId) => {
    let newSkill = document.createElement('div');
    newSkill.className = "barDiv";
    newSkill.innerHTML = `<canvas id= ${skillName} width="150" height="120" className="skillName "></canvas>`;
    document.getElementById(skillTypeId).appendChild(newSkill);
}

let loadSkills = (skillName, value) => {
    let ctx = document.getElementById(skillName).getContext('2d');
    let al = 0;
    let start = 4.72;
    let cw = ctx.canvas.width;
    let ch = ctx.canvas.height;
    let diff;
    let name = skillName.replace('-', ' / ');

    let progressSim = () => {
        diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2);
        ctx.clearRect(0, 0, cw, ch);
        ctx.lineWidth = 4;
        ctx.fillStyle = "rgb(192, 192, 192)";
        ctx.strokeStyle = "rgba(25,25,112,1)";
        ctx.textAlign = 'center';
        ctx.font = "20px Merienda";
        ctx.shadowColor = "rgba(25,25,112,1)";
        ctx.shadowOffsetX = 1;
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 1;
        ctx.fillText(name, cw * .5 + 2, ch * .5 + 35, cw);
        ctx.font = "15px Merienda";
        ctx.fillText(al + '%', cw * .5 + 2, ch * .5 - 14, cw);

        ctx.beginPath();
        ctx.lineWidth = 4;
        ctx.strokeStyle = "rgba(192, 192, 192, 0.1)";
        ctx.shadowColor = "rgba(192, 192, 192, 0.1)";
        ctx.arc(75, 40, 30, start, Math.PI * 2 * 10, false);
        ctx.stroke();

        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.strokeStyle = "rgba(25, 25, 112, 1)";
        ctx.shadowColor = "rgba(75, 0, 130, 0.7)";
        ctx.shadowOffsetX = 1;
        ctx.shadowOffsetY = 1;
        ctx.shadowBlur = 5;
        ctx.arc(75, 40, 30, start, diff / 10 + start, false);
        ctx.stroke();

        if (al >= value) {
            clearTimeout(sim);
        }

        al++;
    }

    let sim = setInterval(progressSim, 20);
}

window.onload = () => {
    createSkills(Main_Technologies, 'Main_Technologies');
    createSkills(Libraries_and_Frameworks, 'Libraries_and_Frameworks');
    createSkills(Other_Technologies, 'Other_Technologies');
}
