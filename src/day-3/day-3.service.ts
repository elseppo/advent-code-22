import { Injectable } from '@nestjs/common';

@Injectable()
export class Day3Service {

    findItemsThatAppearInBothCompartmentsAndCalculatePriority(rucksackPackaging: string[]){
        let sumOfPriorities = 0;

        rucksackPackaging.forEach(rucksack => {
            this.checkForOddNumber(rucksack);
            const itemsCompartmentOne = this.getItemsInCompartmentOne(rucksack);
            const itemsCompartmentTwo = this.getItemsInCompartmentTwo(rucksack);

            const matching = [];

            itemsCompartmentOne.forEach(item1 => {
                const found = itemsCompartmentTwo.find(item2 => item1 === item2);
                found ? matching.push(found) : null;
            });

            let currenMatch = '';

            matching.forEach(match => {
                currenMatch = match;
                if (currenMatch != match) {
                    throw new Error('Rucksack has multiple prio item matches')
                }
            });

            if (matching.length > 0) {
                sumOfPriorities = sumOfPriorities + this.transformCharToNumber(matching[0]);
            }
        });

        return sumOfPriorities;
    }

    findBatchesAndCalculatePriority(rucksacks: string[]) {
        let sumOfPriorities = 0;

        let numberOfGroups = rucksacks.length / 3;

        for (let currentGroup = 1; currentGroup <= numberOfGroups; currentGroup++) {
            const itemCount = new Map<string, number>()
            const groupRucksacks = rucksacks.slice((currentGroup * 3) - 3, currentGroup * 3);
            this.lookInGroupRucksacksAndCountUniqueItems(groupRucksacks, itemCount);
            sumOfPriorities = sumOfPriorities + this.pickBatchPriority(itemCount);
        }

        return sumOfPriorities;
    }

    private pickBatchPriority(itemCount: Map<string, number>) {
        for (let entry of itemCount.entries()) {
            const item = entry[0];
            const count = entry[1];
            if (count === 3) {
                return this.transformCharToNumber(item);
            }
        }
    }

    private lookInGroupRucksacksAndCountUniqueItems(groupRucksacks: string[], itemCount: Map<string, number>) {
        groupRucksacks.forEach(rucksack => {
            this.checkForOddNumber(rucksack);
            const itemsWithoutDupes = [... new Set(rucksack.split(''))];
            
            itemsWithoutDupes.forEach(item => {
                if (itemCount.has(item)) {
                    itemCount.set(item, itemCount.get(item) + 1)
                } else {
                    itemCount.set(item, 1)
                }
            });
        });
    }

    checkForOddNumber(rucksack: string) {
            const totalItems = rucksack.length;
            if ((totalItems % 2) == 1) {
            throw new Error('Odd number');
        }
    }

    getItemsInCompartmentOne(rucksack: string){
        const totalItems = rucksack.length;
        const compartment = rucksack.slice(0, totalItems / 2);
        return compartment.split('');
    }

    getItemsInCompartmentTwo(rucksack: string){
        const totalItems = rucksack.length;
        const compartment = rucksack.slice(totalItems / 2, totalItems);
        return compartment.split('');
    }

    transformCharToNumber(char: string) {
        if (char == char.toLowerCase()){
            return (char.charCodeAt(0) - 97) + 1;
        }
        if (char == char.toUpperCase()) {
            return (char.charCodeAt(0) - 65) + 27;
        }
    }
}
