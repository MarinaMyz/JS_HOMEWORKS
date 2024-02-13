'use strict';

const skillsRequirements = ['HTML', 'CSS', 'JS', 'React', 'NodeJS'];
const skillsList = ['HTML', 'CSS', 'JS'];

const createCandidate = function (name = 'Name not provider', skills = []) {
    return{
        name,
        skills
    }
}

const addRequirement = function (skill, listOfRequirements ) {
    listOfRequirements.push(skill);
}

addRequirement( 'Angular', skillsRequirements);
console.log(skillsRequirements);

const interview = function (candidate, requirements) {
    let result = 100;

    candidateCycle:
    for(let i = 0; i < candidate.skills.lenght; i++) {

        for(let r = 0; r < requirements.length; r++) {
            if(candidate.skills[i] === requirements[r]) continue;
            result = 0;
            break candidateCycle;
        }

    }
    return result;

}
const planInterviews = function (candidates, req, scoredFunc) {
    const result = [];
    for(let i = 0; i < candidates.lenght; i++) {
        result.push({
            score: scoreFunc(candidates[i], req),
                candidate: candidates[i]
        })
    }
    return result;
}

const candidate1 = createCandidate('Mike', skillsList);
const candidate2 = createCandidate('Jon', skillsList);
const candidate3 = createCandidate('Marina', skillsList);
const candidates = [candidate1, candidate2, candidate3];

console.log(planInterviews(candidates,skillsRequirements, interview));