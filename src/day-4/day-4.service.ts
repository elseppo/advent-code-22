import { Injectable } from '@nestjs/common';

@Injectable()
export class Day4Service {

    findPairs(pairs: string[], overlapComplete: boolean){
        let numberOfPairs = 0;

        pairs.forEach(pair => {

            const elves = pair.split(',');
            const elf1 = elves[0];
            const elf2 = elves[1];

            const elfOneAssignments = elf1.split('-');
            const elfTwoAssignments = elf2.split('-');

            const isComplete = this.isAssignmentOneCompleteInAssignmentTwo(elfOneAssignments, elfTwoAssignments, overlapComplete);

            if (isComplete) {
                numberOfPairs = numberOfPairs + 1;
            }
        });
        return numberOfPairs;
    }

    isAssignmentOneCompleteInAssignmentTwo(elfOneAssignments: string[], elfTwoAssignments: string[], overlapComplete: boolean) {
        const lowerBoundOne = +elfOneAssignments[0];
        const upperBoundOne = +elfOneAssignments[elfOneAssignments.length-1];

        const lowerBoundTwo = +elfTwoAssignments[0];
        const upperBoundTwo = +elfTwoAssignments[elfTwoAssignments.length-1];

        const segmentsElfOne = [];
        const segmentsElfTwo = [];

        for (let i = lowerBoundOne; i <= upperBoundOne; i++) {
            segmentsElfOne.push(i);
        }

        for (let i = lowerBoundTwo; i <= upperBoundTwo; i++) {
            segmentsElfTwo.push(i);
        }

        let oneInTwo = true;
        let twoInOne = true;

        segmentsElfOne.forEach(segment => {
            if(overlapComplete) {
                oneInTwo = oneInTwo && !!segmentsElfTwo.find(s => s === segment); // if it turns false let it be false
            } else {
                oneInTwo = !!segmentsElfTwo.find(s => s === segment);
            }
        });

        segmentsElfTwo.forEach(segment => {
            if(overlapComplete) {
                twoInOne = twoInOne && !!segmentsElfOne.find(s => s === segment);
            } else {
                twoInOne = !!segmentsElfOne.find(s => s === segment);
            }
        });

        return oneInTwo || twoInOne;
    }
}
