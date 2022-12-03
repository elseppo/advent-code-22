import { Injectable } from '@nestjs/common';

@Injectable()
export class Day2Service {
    
    // Key = ME Value = Opponent
    rockPaperScissorsMap = new Map<string, string>([
        ['X', 'A'], // Rock
        ['Y', 'B'], // Paper
        ['Z', 'C'], // Scissors
    ]);

    // Key = Opponent Value = Me
    rockPaperScissorsMap2 = new Map<string, string>([
        ['A', 'X'], // Rock
        ['B', 'Y'], // Paper
        ['C', 'Z'], // Scissors
    ]);

    shapePointsMap = new Map<string, number>([
        ['X', 1], // Rock
        ['Y', 2], // Paper
        ['Z', 3], // Scissors
    ]);

    outcomePointsMap = new Map<string, number>([
        ['X', 0], // Win
        ['Y', 3], // Draw
        ['Z', 6], // Loose
    ]);

    playRockPaperScissorsV1(puzzleInput: string[]) : number {
        let pointsTotal = 0;
        for (let entry of puzzleInput) {
            const split = entry.split(' ');
            const opponentsGuess = split[0];
            const myGuess = split[1];

            const pointsForSelection = this.shapePointsMap.get(myGuess);
            const pointsForGuess = this.pointsForGuess(myGuess, opponentsGuess);
            const pointsForRound = pointsForGuess + pointsForSelection;

            pointsTotal = pointsTotal + pointsForRound;
        }
        return pointsTotal;
    }

    playRockPaperScissorsV2(puzzleInput: string[]) : number {
        let pointsTotal = 0;

        for (let entry of puzzleInput) {
            const split = entry.split(' ');
            const opponentsGuess = split[0];
            const expectedOutcome = split[1];

            const shapePoints = this.calculateShapePoints(opponentsGuess, expectedOutcome);
            const pointsForGuess = this.outcomePointsMap.get(expectedOutcome);
            const pointsForRound = pointsForGuess + shapePoints;

            pointsTotal = pointsTotal + pointsForRound;
        }
        return pointsTotal;
    }

    calculateShapePoints(opponentsGuess: string, expectedOutcome: string) {
        // Draw
        if (expectedOutcome == 'Y') {
            return this.shapePointsMap.get(this.rockPaperScissorsMap2.get(opponentsGuess));
        }

        // Win
        if (expectedOutcome == 'Z') {
            if (opponentsGuess == 'A') {
                return this.shapePointsMap.get('Y');
            }
            if (opponentsGuess == 'B') {
                return this.shapePointsMap.get('Z');
            }
            if (opponentsGuess == 'C') {
                return this.shapePointsMap.get('X');
            }
        }

        // Loose
        if (expectedOutcome == 'X') {
            if (opponentsGuess == 'A') {
                return this.shapePointsMap.get('Z');
            }
            if (opponentsGuess == 'B') {
                return this.shapePointsMap.get('X');
            }
            if (opponentsGuess == 'C') {
                return this.shapePointsMap.get('Y');
            }
        }
    }

    pointsForGuess(myGuess: string, opponentsGuess: string) : number {
        // Even
        if (opponentsGuess === this.rockPaperScissorsMap.get(myGuess)) {
            return 3;
        }

        // Win Match
        if (myGuess === 'X' && opponentsGuess === 'C' || myGuess === 'Y' && opponentsGuess === 'A' || myGuess === 'Z' && opponentsGuess === 'B') {
            return 6;
        }

        // Lost Match
        if (myGuess === 'X' && opponentsGuess === 'B' || myGuess === 'Y' && opponentsGuess === 'C' || myGuess === 'Z' && opponentsGuess === 'A') {
            return 0;
        }

        else throw new Error('Damn....');
    }

}
